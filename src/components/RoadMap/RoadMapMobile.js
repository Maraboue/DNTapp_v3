import React, { Component } from 'react'
import './RoadMapMobile.css'


const RoadMapMobile = ()=>  {

        return (
            <section className="roadmap_section" id="roadmapmobile">
                <body>
                <div id="roadmapHeaderM" className="roadmapHeaderM">
                    <h1 className="gradient-text">Road Map</h1>
                </div>
                <div id="roadStopContainerM" className="roadStopContainerM">


                    <div id="roadStopM" className="roadStopM">

                        <div id="contentM" className="contentM">
                            <h1>Q3 2021</h1>
                            <h2>Launch of DNT</h2>
                            <p>
                                Launch of the Dynamic Network Token.<br/><br/>
                                <strong>Including:</strong> IDO, AirDrop and Marketing.
                            </p>
                        </div>
                    </div>
                    <div id="roadStopM" className="roadStopM">

                        <div id="contentM" className="contentM">
                            <h1>Q4 2021</h1>
                            <h2>Community Network</h2>
                            <p>
                                Building the Networks Community.<br/><br/>
                                <strong>Including:</strong> User Growth, Whitepaper and Patching.
                            </p>
                        </div>
                    </div>
                    <div id="roadStopM" className="roadStopM">

                        <div id="contentM" className="contentM">
                            <h1>Q1 2022</h1>
                            <h2>Partnerships</h2>
                            <p>
                                Establish New <br/> Partnerships & Collaborations.<br/><br/>
                                <strong>Including:</strong> Listings, Integration and Marketing.
                            </p>
                        </div>
                    </div>

                    <div id="roadStopM" className="roadStopM">

                        <div id="contentM" className="contentM">
                            <h1>Q2 2022</h1>
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

}; export default RoadMapMobile;