import React from "react";
import './CommunityMobile.css';
import Twitter from "./Twitter";
import MediumMobile from "./MediumMobile";

const CommunityMobile = () =>  {


    return (
        <section className="community_section" id="communitymobile">

            <div className="CommunityHeaderM">
                <h1 className="gradient-text">Dynamic Network Community</h1>
            </div>
            <div className="CommunityContainerM">

                <div className="CommunityItemM">
                    <h2>Dynamic Network on Twitter</h2>
                    <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"/>

                    <p>Follow us on Twitter to stay updated on whats happening in the network!<br/>
                        Twitter is the best way to get news and updates about the Dynamic Network.<br/>
                    </p>
                </div>
                <div className="CommunityItemM">
                    <Twitter/>
                </div>

            </div>

            <div className="CommunityContainerM">

                <div className="CommunityItemM">
                    <h2>Dynamic Network on Medium</h2>
                    <img src="https://img.icons8.com/color/48/000000/medium-monogram.png"/>
                    <p>Follow us on Medium to stay updated on whats happening in the network!<br/>
                        We frequently update our Medium with new blog posts about the development<br/>
                        for the Dynamic Network.
                    </p>

                </div>

                <div className="CommunityItemM">
                    <MediumMobile/>
                </div>

            </div>
        </section>

    )



}; export default CommunityMobile;