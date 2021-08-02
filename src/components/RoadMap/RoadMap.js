import React, { Component } from 'react'
import './RoadMap.css'


class RoadMap extends Component {

    render () {
        return (
            <section className="roadmap_section" id="roadmap">
                <body>
                <div id="roadmapHeader" className="roadmapHeader">
                    <h1 className="gradient-text">Road Map</h1>
                </div>
                <div id="roadStopContainer" className="roadStopContainer">


                <div id="roadStop" className="roadStop">

                    <div id="content" className="content">
                <h1>Q2 2021</h1>
                <h2>Launch of DNT</h2>
                <p>
                    Launch of the Dynamic Network Token.<br/><br/>
                    <strong>Including:</strong> IDO, AirDrop and Marketing.
                    </p>
                    </div>
                </div>
                    <div id="roadStop" className="roadStop">

                        <div id="content" className="content">
                            <h1>Q3 2021</h1>
                            <h2>Community Network</h2>
                            <p>
                                Building the Networks Community.<br/><br/>
                                <strong>Including:</strong> User Growth, Whitepaper and Patching.
                            </p>
                        </div>
                    </div>
                    <div id="roadStop" className="roadStop">

                        <div id="content" className="content">
                            <h1>Q4 2021</h1>
                            <h2>Partnerships</h2>
                            <p>
                                Establish New <br/> Partnerships & Collaborations.<br/><br/>
                                <strong>Including:</strong> Listings, Integration and Marketing.
                            </p>
                        </div>
                    </div>

                    <div id="roadStop" className="roadStop">

                        <div id="content" className="content">
                            <h1>Q1 2022</h1>
                            <h2>Response from community</h2>
                            <p>
                                Listen to Community <br/> for Requests for Improvements.<br/><br/>
                                <strong>Including:</strong> Q&A, Evaluate Response and Research.
                            </p>
                        </div>
                    </div>
                </div>


                </body>
            </section>
        )
    }
} export default RoadMap;