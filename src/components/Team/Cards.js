import React, {Component, useEffect,useRef} from 'react';
import VanillaTilt from 'vanilla-tilt';
import './Card.css'
import graph from "../../pictures/IMG_3699.PNG";

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

class Cards extends React.Component {

    render () {
        return (
            <section className="team_section" id="team">
                <body>
                <div id="teamHeader" className="teamHeader">
                    <h1 className="gradient-text">Dynamic Network Team</h1>
                </div>
                <div id="cardContainer" className="cardContainer" data-aos="fade-right">

                    <div id="TeamInfo" className="TeamInfo" data-aos="fade-right">
                        <h1>The Dynamic Team</h1>
                        <p>
                            The Dynamic Network Team is a small team with a large vision.
                            Consisting of three computer engineers from the Royal Institute of Technology in Sweden,
                            we have decided to take on the task of reducing volatility and provide a safer store of value
                            for the crypto community.
                        </p>

                    </div>

                    <Tilt div id="card" className="card">
                        <h2>Project Lead & Developer</h2>
                        <img src={graph} alt="loading..." />

                        <h3>Gustaf Sjölinder</h3>
                        <a href="https://www.linkedin.com/in/gustaf-sj%C3%B6linder-64084714a/">
                            <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png" alt="Twitter"/>
                        </a>
                        <a href="https://www.linkedin.com/in/gustaf-sj%C3%B6linder-64084714a/">
                            <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="Github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/gustaf-sj%C3%B6linder-64084714a/">
                            <img src="https://img.icons8.com/color/48/000000/linkedin-circled--v3.png" alt="Linkedin"/>
                        </a>

                        <p>Gustaf is a computer engineer who has been in crypto since 2013. With a passion for coding and economics, crypto became his greatest interest early on.<br/><br/>
                            What started as a thesis project for a degree in computer engineering he later evolved into the Dynamic Network, with the vision of a more
                            secure way for people to invest in the crypto space. With the other members of the team, he will now do everything to pursuit this vision.</p>


                    </Tilt>
                    <Tilt div id="card" className="card">
                        <h2>Marketing & Human Relations</h2>
                        <img src={graph} alt="loading..." />
                        <h3>Kajsa Gyllhamn</h3>
                        <a href="https://www.linkedin.com/in/gustaf-sj%C3%B6linder-64084714a/">
                            <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"/>
                        </a>
                        <a href="https://www.linkedin.com/in/gustaf-sj%C3%B6linder-64084714a/">
                            <img src="https://img.icons8.com/fluent/48/000000/github.png"/>
                        </a>
                        <a href="https://www.linkedin.com/in/gustaf-sj%C3%B6linder-64084714a/">
                            <img src="https://img.icons8.com/color/48/000000/linkedin-circled--v3.png"/>
                        </a>
                        <p> Kajsa is an open hearted person who has an interest and a degree in human relations & behaviour.<br/><br/>
                            She thinks that crypto gives people freedom and the opportunity to invest in themselves while building relationships and securing their financial future.
                            Kajsas role in this project is helping the team with the administrative work while also building and managing relations for the project.</p>

                    </Tilt>
                    <Tilt div id="card" className="card">
                        <h2>Developer & Advisor</h2>
                        <img src={graph} alt="loading..." />
                        <h3>Carl-Bernhard Hallberg</h3>
                        <a href="https://www.linkedin.com/in/gustaf-sj%C3%B6linder-64084714a/">
                            <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"/>
                        </a>
                        <a href="https://www.linkedin.com/in/gustaf-sj%C3%B6linder-64084714a/">
                            <img src="https://img.icons8.com/fluent/48/000000/github.png"/>
                        </a>
                        <a href="https://www.linkedin.com/in/gustaf-sj%C3%B6linder-64084714a/">
                            <img src="https://img.icons8.com/color/48/000000/linkedin-circled--v3.png"/>
                        </a>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br/>
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                            making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>

                    </Tilt>

                    <Tilt div id="card" className="card">
                        <h2>Marketing & Adivsor</h2>
                        <img src={graph} alt="loading..." />
                        <h3>Philip Retelius</h3>
                        <a href="https://www.linkedin.com/in/gustaf-sj%C3%B6linder-64084714a/">
                            <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"/>
                        </a>
                        <a href="https://www.linkedin.com/in/gustaf-sj%C3%B6linder-64084714a/">
                            <img src="https://img.icons8.com/fluent/48/000000/github.png"/>
                        </a>
                        <a href="https://www.linkedin.com/in/gustaf-sj%C3%B6linder-64084714a/">
                            <img src="https://img.icons8.com/color/48/000000/linkedin-circled--v3.png"/>
                        </a>
                        <p>Philip is an computer engineer with work experience in development and management of embedded technologies, as well as software technologies.
                            With a deep interest for new technical concepts and the strategic development that comes with it, Philip will serve in an advisory role.<br/><br/>
                            Philip joined the project with the interest of seeing and creating a product that could shape the future of crypto and society as a whole.</p>

                    </Tilt>

                </div>

                </body>

            </section>
        )
    }
} export default Cards;