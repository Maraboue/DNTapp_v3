import 'aos/dist/aos.css';
import React, {Component, useEffect, useState} from "react";
import axios from 'axios';
import './Community.css'
import './Coin.css'
import {VideoBg} from "../HeroSection/HeroElements";
import video2 from "../../videos/video3.mp4";


function Community() {

    const PriceUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

    const HoldersUrl = "https://api.coingecko.com/api/v3/coins/bitcoin";

    const TransactionUrl = "https://api.coingecko.com/api/v3/coins/bitcoin";

    const [price, setPrice] = useState({});

    const [holders, setHolders] = useState({});

    const [transactions, setTransactions] = useState([]);

    useEffect(() =>
    {
        getTransactions();
    }, []);

    useEffect(() =>
    {
        getHolders();
    }, []);

    const getTransactions = async () =>{
        const response = await axios.get(TransactionUrl);
        setTransactions(response.data.market_data.total_volume.usd);
    }

    const getHolders = async () =>{
        const response = await axios.get(HoldersUrl);
        setHolders(response.data.market_data.market_cap.usd);
    }

    useEffect(() => {
        getPrice();
    }, []);


    const getPrice = async () => {

        const response = await axios.get(PriceUrl);
        setPrice(response.data.bitcoin.usd);

    };

            return (

                <body>
                <div id="CommunityHeader" className="CommunityHeader">
                    <h1 className="gradient-text">Dynamic Network Community</h1>
                </div>
                <div id="CommunityContainer" className="CommunityContainer">

                    <div id="CommunityItem" className="CommunityItem">
                        <h2>DNT Market Cap</h2>
                        <ul>
                            {
                                JSON.stringify(holders)
                            }  $USD
                        </ul>

                    </div>
                    <div id="CommunityItem" className="CommunityItem">
                        <h2>DNT Price</h2>

                        <ul>
                            {
                                JSON.stringify(price)
                            } $USD

                        </ul>
                    </div>
                    <div id="CommunityItem" className="CommunityItem">
                        <h2>DNT 24h Volume</h2>
                        <ul>
                            {
                                JSON.stringify(transactions)
                            } $USD

                        </ul>

                    </div>

                </div>

                </body>
            );

} export default Community;