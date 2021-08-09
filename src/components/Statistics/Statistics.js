import React, {Component, useEffect, useState} from "react";
import axios from 'axios';
import './Statistics.css'

function Statistics() {

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
                <div id="StatisticsHeader" className="StatisticsHeader">
                    <h1 className="gradient-text">DNT Statistics</h1>
                </div>
                <div id="StatisticsContainer" className="StatisticsContainer">

                    <div id="StatisticsItem" className="StatisticsItem">
                        <h2>DNT Market Cap (BTC API ATM)</h2>
                        <ul>
                            {
                                JSON.stringify(holders)
                            }  $USD
                        </ul>

                    </div>
                    <div id="StatisticsItem" className="StatisticsItem">
                        <h2>DNT Price (BTC API ATM)</h2>

                        <ul>
                            {
                                JSON.stringify(price)
                            } $USD

                        </ul>
                    </div>
                    <div id="StatisticsItem" className="StatisticsItem">
                        <h2>DNT 24h Volume (BTC API ATM)</h2>
                        <ul>
                            {
                                JSON.stringify(transactions)
                            } $USD

                        </ul>

                    </div>

                </div>

                </body>
            );

} export default Statistics;