import React, {Component}  from 'react'
import './Tokenomics.css'
import PieChart from "./PieChart";
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init( {
    duration:2000, }
);

class Tokenomics extends Component {


    render () {
        return (
        <section className="tokenomics_section" id="tokenomics">
         <body>
            <div id="TokenomicsHeader" className="TokenomicsHeader">
            <h1 className="gradient-text">Tokenomics</h1>
            </div>
         <div id="TokenomicsContainer" className="TokenomicsContainer">
        <div className="TokenomicsItem">
        <div  id="TokenInfo" className="TokenInfo">

            <h1>Why Dynamic Network Token?</h1>
            <br/>
            <h2>Burning & Minting</h2>
            <p>
                In accordance with the quantitative theory of money, we have implemented
                burning and minting for each transaction. This makes it possible to control
                the volatility in a better way, thus making the Dynamic Network Token less volatile. The ratio
                implemented for the burning and minting is close to 2:1 in favor for the burning, which creates
                a more deflationary token.
            </p>
            <a href ="https://docs.google.com/document/d/e/2PACX-1vQzA6xMEXmCYq4tD0ME-t24BBj4bDVx14lvL1oj3MHpDKb41DIdfwvhR79NxmrKXtpKzVVME1VxGjrj/pub">Read More</a>
            <h2>Network Based Burning</h2>
            <p>
                We believe that a good token is backed by a strong network. Therefore, we have implemented Network Based
                Burning. This means as the Dynamic Network grows, burns will occur based on the amount of users in the network.
                This functionality also adds another deflationary property built in to the Dynamic Network Token.
            </p>
            <a href ="https://docs.google.com/document/d/e/2PACX-1vQzA6xMEXmCYq4tD0ME-t24BBj4bDVx14lvL1oj3MHpDKb41DIdfwvhR79NxmrKXtpKzVVME1VxGjrj/pub">Read More</a>
            <h2>Less Volatility</h2>
            <p>
                Before launching the Dynamic Network Token, we have conducted research that indicates that the token with
                its burning and minting implemented, is less volatile than a token that does not have this functionality
                implemented. This will in theory lead to a more stable growth, making the Dynamic Network Token a safer
                investment.
            </p>
            <a href ="https://docs.google.com/document/d/e/2PACX-1vQzA6xMEXmCYq4tD0ME-t24BBj4bDVx14lvL1oj3MHpDKb41DIdfwvhR79NxmrKXtpKzVVME1VxGjrj/pub">Read More</a>
        </div>
        </div>
        <div className="TokenomicsItem">
            <div className="PieChart" id="PieChart">
            <PieChart/>
            </div>
            </div>
         </div>

         </body>
        </section>
        )
    }
} export default  Tokenomics ;