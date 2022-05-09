import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

import "./CurrenciesStyles.style.css";

const Currencies = () => {
  let { id } = useParams();

  const [coin, setCoin] = useState({
    name: "",
    symbol: "",
    price_btc: "",
    price_usd: "",
    volume24: 0,
    market_cap_usd: 0,
    percent_change_7d: 0,
    percent_change_1h: 0,
    rank: 0,
  });

  useEffect(() => {
    Axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`).then(
      (response) => {
        console.log(response.data[0]);
        setCoin({
          name: response.data[0].name,
          symbol: response.data[0].symbol,
          price_btc: response.data[0].price_btc,
          price_usd: response.data[0].price_usd,
          volume24: response.data[0].volume24,
          market_cap_usd: response.data[0].market_cap_usd,
          percent_change_7d: response.data[0].percent_change_7d,
          percent_change_1h: response.data[0].percent_change_1h,
          rank: response.data[0].rank,
        });
      }
    );
  }, []);
  return (
    <div className="mainContainer">
      <div className="aboutContainer">
        Rank: <span>{coin.rank}</span>
      </div>
      <div className="aboutContainer">
        Name: <span>{coin.name}</span>
      </div>
      <div className="aboutContainer">
        Symbol: <span>{coin.symbol}</span>
      </div>
      <div className="aboutContainer">
        Price In Bitcoin: <span>{coin.price_btc}</span>
      </div>
      <div className="aboutContainer">
        Price In Dollars: <span>${coin.price_usd}</span>
      </div>
      <div className="aboutContainer">
        Traded In 24Hrs: <span>{coin.volume24}</span>
      </div>
      <div className="aboutContainer">
        Mined: <span>{coin.market_cap_usd}</span>
      </div>
      <div className="aboutContainer">
        % Change In 1hr: <span>{coin.percent_change_1h}</span>
      </div>
      <div className="aboutContainer">
        % Change In 7 Days: <span>{coin.percent_change_7d}</span>
      </div>
    </div>
  );
};

export default Currencies;
