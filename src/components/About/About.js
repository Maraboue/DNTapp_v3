import './About.css'
import React, {Component} from "react";

class About extends Component {

    render() {

        return (
            <section className="about_section" id="about">
                <body>
                <div id="AboutHeader" className="AboutHeader">
                    <h1 className="gradient-text">About DNT</h1>
                </div>


                <div id="AboutContainer1" className="AboutContainer1" >
                    <div id="AboutItem" className="AboutItem">
                        <div id="Background" className="Background">

                        <h1>Background</h1>
                        <p>

                            The Internet provided humans a new way to exchange information digitally and has changed how
                            we communicate.
                            Blockchain and cryptocurrencies have given humans a new way to exchange value over the
                            internet.
                            <br/><br/>
                            With new technology, new possibilities arise, but not always
                            without issues. One problem that has risen with cryptocurrencies is their high volatility,
                            meaning that the currency has big price swings.
                            It has made these currencies objects for speculation and investment almost exclusively, and
                            therefore they have lost their functionality as a currency.
                            <br/><br/>
                            For a currency to be viewed as a good means of payment, it cannot be associated with high
                            volatility. This is not only restricted to cryptocurrencies,
                            as for example the Venezuelan Bolivar is a fiat currency with historically high volatility
                            and has been losing its purchasing power due to
                            hyperinflation in the recent years.
                            <br/><br/>
                            In regard to this we propose a new cryptocurrency; the Dynamic Network Token, which aims to
                            reduce the volatility in a cryptocurrency
                            by regulating the supply dynamically with burning and minting. The implementation of this
                            functionality will strive to remove the high volatility in the
                            token for the benefits of a more stable and linear growth, and at the same time encourage
                            users to transact with the Dynamic Network Token between each other.
                        </p>
                        </div>
                        </div>
                    <div id="AboutItem" className="AboutItem">

                        <h1>Research</h1>
                        <p>
                            Behind the Dynamic Network Token lies a lot of research. We thought that by using machine
                            learning and linear regression, a fairly good prediction
                            of price behaviour could be obtained.<br/><br/>
                            Starting of with creating a price simulation program, using the simple parameters of price,
                            market cap and total supply, a study could be conducted which showed that our implementations
                            actually reduced the volatility in the Dynamic Network Token.
                           <br/><br/>
                            A simple monetary theory which has been around for several hundreds of years is the QTM or
                            Quantitative Theory of Money. This theory state that the supply is the governing factor driving the
                            price of any asset in a society. With this in mind, we decided to make use of the concepts of
                            burning and minting to govern the volatility in the Dynamic Network Token. By implementing this
                            functionality dynamically, i.e. when ever a buy or sell occurs, our belief is that we
                            can reduce the volatility and thus provide a more stable and safe investment.
                            <br/><br/>
                            We also believe in scarcity and that deflationary properties play a crucial roll in any sound
                            investment asset for the long term. Therefore, the implemented burning and minting should be
                            in favor for the burning and the reduction of the total supply of the token.
                        </p></div>

                </div>
                <div id="AboutContainer2" className="AboutContainer2">

                    <div id="AboutItem" className="AboutItem">

                        <h1>Results</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                            as opposed to using 'Content here, content here',
                            making it look like readable English. Many desktop publishing packages and web page editors
                            now use Lorem Ipsum as their default model text,
                            and a search for 'lorem ipsum' will uncover many web sites still in their
                            infancy. <br/><br/>
                            Various versions have evolved over the years, sometimes by accident,
                            sometimes on purpose (injected humour and the like).The point of using Lorem Ipsum is that
                            it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                            content here',
                            making it look like readable English.<br/><br/> Many desktop publishing packages and web
                            page editors now use Lorem Ipsum as their default model text,
                            and a search for 'lorem ipsum' will uncover many web sites still in their
                            infancy. <br/><br/>Various versions have evolved over the years, sometimes by accident,
                            sometimes on purpose (injected humour and the like). It is a long established fact that a
                            reader will be distracted by the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution Various
                            versions have evolved over the years, sometim
                            Various versions have evolved over the years, sometim Various versions

                            .</p></div>
                    <div id="AboutItem" className="AboutItem">

                        <h1>Vision</h1>
                        <p> Looking forward, we are excited to see how the community will grow and how we together can
                            build a future were a crypto can act as both a store of value while also providing a good
                            way of transacting.
                            <br/><br/>
                            Over time, our vision lies in the hands of the Dynamic Network community. We are eager to see
                            what kind of experiences the users in the network has to tell, and how we from these experiences can
                            continue to build the Dynamic Network to be even better.
                            <br/><br/>
                            Nothing in this world is completely perfect. Therefore we believe in a continuous journey for the Dynamic Network.
                            This journey we believe will be filled with new tasks and a never ending strive towards becoming better. This will,
                            as been stated, come from within the community itself.

                            <br/><br/>Various versions have evolved over the years, sometimes by accident,
                            sometimes on purpose (injected humour and the like). It is a long established fact that a
                            reader will be distracted by the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution Various
                            versions have evolved over the years, sometim
                            .</p></div>


                </div>

                </body>
            </section>
        )
    }
} export default About;