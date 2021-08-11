import React from "react";
import './Community.css';
import Twitter from "./Twitter";
import Medium from "./Medium";

const Community = () =>  {


    return (
        <section className="community_section" id="community">

            <div className="CommunityHeader">
                <h1 className="gradient-text">Dynamic Network Community</h1>
            </div>
        <div className="CommunityContainer">

            <div className="CommunityItem">
                <h2>Dynamic Network on Twitter</h2>
                <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"/>

                <p>Follow us on Twitter to stay updated on whats happening in the network!
                   <br/><br/> Twitter is the best way to get news and updates about the Dynamic Network.
                </p>
            </div>
            <div className="CommunityItem">
                <Twitter/>
            </div>

        </div>

        <div className="CommunityContainer">

            <div className="CommunityItem">
                <h2>Dynamic Network on Medium</h2>
                <img src="https://img.icons8.com/color/48/000000/medium-monogram.png"/>
                <p>Follow us on Medium to stay updated on whats happening in the network!<br/>
                    <br/><br/>   We frequently update our Medium with new blog posts about the development
                    for the Dynamic Network.
                </p>

            </div>

            <div className="CommunityItem">
                <Medium/>
            </div>

        </div>
        </section>

    )



}; export default Community;