import './App.css';

import React, {Component, useEffect, useRef} from 'react';
import { BrowserRouter, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import {BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect";

// Browser Components
import NavigationBar from "./components/Navbar/NavigationBar";
import Cards from './components/Team/Cards';
import Tokenomics from "./components/Tokenomics/Tokenomics";
import About from "./components/About/About";
import RoadMap from "./components/RoadMap/RoadMap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/login";
import Statistics from "./components/Statistics/Statistics";
import Community from "./components/Community/Community";


import Blog from "./components/Community/Blog";

// Mobile Components
import NavBarMobile from "./components/Navbar/NavBarMobile";
import HeaderMobile from "./components/Header/HeaderMobile";
import TokenomicsMobile from "./components/Tokenomics/TokenomicsMobile";
import LoginMobile from "./components/Login/LoginMobile";
import AboutMobile from "./components/About/AboutMobile";
import CardsMobile from './components/Team/CardsMobile';
import RoadMapMobile from "./components/RoadMap/RoadMapMobile";
import FooterMobile from "./components/Footer/FooterMobile";







    class App extends React.Component {

        renderContent = () => {
            if (isMobile) {
                return <div> <MobileView>
                    <section className="DNT" id="DNT">
                    <div className="dynamic-network-site">
                        <NavBarMobile/>
                    </div>
                    <div data-aos="fade">
                        <HeaderMobile />
                    </div>
                    <div data-aos="fade-up"
                         data-aos-duration="4000">
                        <TokenomicsMobile/>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-duration="4000">
                        <AboutMobile/>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-duration="4000">
                        <CardsMobile/>
                    </div>
                    <div data-aos="fade-up"
                         data-aos-duration="4000">
                        <RoadMapMobile/>
                    </div>

                    <div data-aos="fade-up"
                         data-aos-duration="4000">
                        <FooterMobile/>
                    </div>
                    </section>
                </MobileView>


                </div>
            }
            if(isBrowser){}
            return <div>
                <section className="DNT" id="DNT">
                    <div className="App" >
                        <div className="dynamic-network-site">
                            <NavigationBar/>
                        </div>
                        <body>

                        <div id="Header" className="HeaderSection" data-aos="fade" data-aos-duration="2000">
                            <Header/>
                        </div>
                        <div id="HeroSection" className="HeroSection" data-aos="fade-up"
                             data-aos-duration="4000">
                            <Login/>
                        </div>
                        <div id="Tokenomics-info" className="Tokenomics-info" data-aos="fade-up"
                             data-aos-duration="4000">
                            <Tokenomics/>
                        </div>
                        <div className="AboutSection" data-aos="fade-up"
                             data-aos-duration="4000">
                            <About/>
                        </div>
                        <div className="team-cards" data-aos="fade-up"
                             data-aos-duration="4000">
                            <Cards/>
                        </div>

                        <div className="RoadMap" data-aos="fade-up"
                             data-aos-duration="4000">
                            <RoadMap/>
                        </div>

                        <div className="Satistics" data-aos="fade-up"
                             data-aos-duration="4000">
                            <Statistics/>
                        </div>

                        <div className="Community" data-aos="fade-up"
                             data-aos-duration="4000">
                            <Community/>

                        </div>

                        <div className="Footer">
                            <Footer/>
                        </div>
                        </body>
                    </div>
                </section>
            </div>
        }


        render() {
            return this.renderContent();
        }
    }


export default App;
