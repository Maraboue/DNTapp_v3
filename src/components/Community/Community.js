import React from "react";
import './Community.css';
import {Route,HashRouter } from "react-router-dom";
import Twitter from "./Twitter";
import Blog from "./Blog";


const Community = () =>  {


    return (
        <section>

            <div className="CommunityHeader">
                <h1 className="gradient-text">Dynamic Network Community</h1>
            </div>
        <div className="CommunityContainer">

            <div className="CommunityItem">
                <h2>Dynamic Network on Twitter</h2>
                <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"/>

                <p>Follow us on Twitter to stay updated on whats happening in the network!<br/>
                    Twitter is the best way to interact fast with the Dynamic Network and to see

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
                    We frequently update our Medium with new blog posts about the development
                    for the Dynamic Network and other fun stuff.
                </p>

            </div>

            <div className="CommunityItem">
                <HashRouter>
                    <Route path="/" exact component={Blog}></Route>
                </HashRouter>
            </div>

        </div>
        </section>

    )



}; export default Community;