import React from 'react';
import { Route, Routes, NavLink, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import Burger from './components/Burger/Burger.jsx';
import Menu from './components/Menu/Menu';
import Backdrop from './components/Backdrop/Backdrop'

import MobileNavLogo from './img/Brand/StainedGlassCW.jpg'
import NavLogo from './img/Brand/StainedGlassCWIcon.jpg';
import NavLogoText from './img/Brand/StainedGlassCWText.jpg';
class App extends React.Component {
  state = {
    menuActive: false,
    burgerActive: false,
    backdropActive: false,
    serviceRequest: 'Glass'
  };

  menuClickHandler = () => {
    this.setState(prevState => {
      return { menuActive: !prevState.menuActive,
                burgerActive: !prevState.burgerActive,
                backdropActive: !prevState.backdropActive }
    });
  }

  serviceRequestHandler = service => {
    this.setState({serviceRequest: service});
  };

  render() {
    return (
      <div className="App">
        <div className='nav-wrapper'>
          <nav>
            <a href='/stained-glass-cw/'>
              <img src={MobileNavLogo} className="nav-logo-mobile" alt="nav-logo-mobile"/>
            </a>

            <ul id="navigation" className="navbar unselectable">
              <Burger click={this.menuClickHandler} active={this.state.burgerActive}/>

              <a href='/stained-glass-cw/' className="nav-logo">
                <img src={NavLogo} className="nav-logo-icon-scale" alt="nav-logo-icon"/>
                <img src={NavLogoText} className="nav-logo-text-scale" alt="nav-logo-text"/>
              </a>
              <li>
                <NavLink to="/stained-glass-cw/" activeclassname="nav-link active" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/stained-glass-cw/gallery" activeclassname="nav-link active" className="nav-link">
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/stained-glass-cw/about" activeclassname="nav-link active" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/stained-glass-cw/services" activeclassname="nav-link active" className="nav-link">
                  Services
                </NavLink>
              </li>
              <li>
                <Link to="/stained-glass-cw/contact" className="cta">
                  Get A Quote
                </Link>
              </li>
            </ul>
          </nav>
          <Menu click={this.menuClickHandler} show={this.state.menuActive}/>
          <Backdrop click={this.menuClickHandler} show={this.state.backdropActive}/>
        </div>
        <div className='app-container'>
          <Routes>
            <Route path="stained-glass-cw/" element={<Home />} />
            <Route path="stained-glass-cw/services/*" element={<Services request={this.serviceRequestHandler}/>} />
            <Route path="stained-glass-cw/about/*" element={<About />} />
            <Route path="stained-glass-cw/gallery/*" element={<Gallery />} />
            <Route path="stained-glass-cw/contact/*" element={<Contact service={this.state.serviceRequest}/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
