import React, { useState, useEffect } from "react";

import './MediumMobile.css'

import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Row,
    Col
} from "reactstrap";
var moment = require("moment");

const MediumMobile = () => {
    const [mediumData, setMediumData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(
            `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dynamic-network`
        )
            .then(res => res.json())
            .then(response => {
                setMediumData(response.items);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    const newArray = mediumData.slice(0, 3);

    return (
        <div id="blog" className="blogContainerM">
            <h3 className="blogHeaderM">
                <p>Latest Posts</p>
            </h3>
            {isLoading && <p>Fetching data from Medium!</p>}
            <Row>
                {newArray.map(article => (
                    <Col md="4" className="mb-3" key={article.guid}>
                        <div>
                            <div className="CardM">
                                <img  src={article.thumbnail} alt="img" />
                                <CardBody>
                                    <CardTitle>
                                        <a href={article.link}>{article.title}</a>
                                    </CardTitle>
                                    <div className="date" id="dateM">
                                        Published:{" "}
                                        {moment(article.pubDate).format("dddd, MMMM Do YYYY")}
                                    </div>
                                </CardBody>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MediumMobile;