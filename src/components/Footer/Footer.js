import React from "react";
import './Footer.css'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <h1 style={{ color: "#008fb3",
                textAlign: "center",
                marginTop: "-50px"}}>
                Dynamic Network Token.
            </h1>
            <h2 style={{ color: "#008fb3",
                textAlign: "center",
                marginTop: "50px", marginBottom: "50px"}}>Copyright: The Dynamic Network Project. All Rights Reserved ©</h2>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">Aim</FooterLink>
                        <FooterLink href="#">Vision</FooterLink>
                        <FooterLink href="#">Testimonials</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">Writing</FooterLink>
                        <FooterLink href="#">Partner</FooterLink>
                        <FooterLink href="#">Coding</FooterLink>
                        <FooterLink href="#">Teaching</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="mailto: sjolind@kth.se">Gustaf</FooterLink>
                        <FooterLink href="mailto: kajsa.gyllhamn@hotmail.com">Kajsa</FooterLink>
                        <FooterLink href="mailto: kajsa.gyllhamn@hotmail.com">Carl-Bernhard</FooterLink>
                        <FooterLink href="mailto: retelius@gmail.com">Philip</FooterLink>
                    </Column>
                    <Column>
                        <div className="Footer-img">
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                    <img  src="https://img.icons8.com/color/48/000000/facebook-new.png"/>
                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://twitter.com/DynamicN3twork">
                            <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                    Twitter
                    <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"/>
                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://dynamic-network.medium.com/">
                            <i className="fab fa-medium">
                <span style={{ marginLeft: "10px" }}>
                    Medium
                    <img src="https://img.icons8.com/color/48/000000/medium-monogram.png"/>
                </span>
                            </i>
                        </FooterLink>
                        </div>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
