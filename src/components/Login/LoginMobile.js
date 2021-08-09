import React from 'react';
import { useMoralis } from "react-moralis";
import './LoginMobile.css'
import {HeroBg, HeroContainer, VideoBg} from "../HeroSection/HeroElements";
import video3 from "../../videos/video3.mp4";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init( {duration:3000,
    delay:50});


function LoginMobile ()  {

    const { authenticate, isAuthenticated, user } = useMoralis();
    const { logout, isAuthenticating } = useMoralis();


    if (!isAuthenticated) {
        return (
            <div className="LoginContainerM" >
                <div className="LoginItemM">
                    <div id="LoginTextM">
                        <h1>DNT AirDrop</h1>
                        <p>
                            We believe that the best communities are built by its users.
                            Therefore we want to reward our users for helping us grow the community.
                            To be eligible for the air drop, you have to complete the following steps:<br/><br/>
                            1. Follow us on <u>Facebook</u> and <u>Twitter.</u><br/><br/>
                            2. Re-tweet the pinned post on our Twitter page.<br/><br/>
                            3. Send us an email at: Support@DynamicNetwork.com with your address and twitter user and then authenticate with Web3 below.<br/><br/>
                            4. If you have followed all the steps above, you are done!
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

export default LoginMobile;