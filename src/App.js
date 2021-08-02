import './App.css';

import React, {Component, useEffect, useRef} from 'react';
import NavigationBar from "./components/Navbar/NavigationBar";
import Cards from './components/Team/Cards';
import Tokenomics from "./components/Tokenomics/Tokenomics";
import About from "./components/About/About";
import RoadMap from "./components/RoadMap/RoadMap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/login";
import Community from "./components/Community/Community";



    class App extends React.Component {



        render() {
            return (

                <section className="DNT" id="DNT">
                    <div className="App">
                        <div className="dynamic-network-site">
                            <NavigationBar/>
                        </div>
                        <body>

                        <div id="Header" className="HeaderSection" data-aos="fade">
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
            );
        }
    }
export default App;
