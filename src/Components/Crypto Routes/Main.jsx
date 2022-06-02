import React, { useEffect, useState } from "react";
import Axios from "axios";
import { GlobalStyle } from "../../GlobalStyles.style";
import { CryptoContainer, CryptoList } from "../CryptoCurrency.style";
import "../CryptoCurrency.style.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [cryptoList, setcryptoList] = useState([]);

  useEffect(() => {
    Axios.get("https://api.coinlore.net/api/tickers/?start=0&limit=200").then(
      (response) => {
        setcryptoList(response.data["data"]);
        console.log(response.data["data"]);
      }
    );
  }, []);
  const navigate = useNavigate();
  const [search, setsearch] = useState("");
  return (
    <body>
      <div className="body">
        <GlobalStyle />
        <center>
          <input
            type="search"
            placeholder="Search..."
            className="coinSearch"
            onChange={(event) => {
              setsearch(event.target.value);
            }}
          />
        </center>
        <CryptoContainer>
          <>
            <div className="labels">
              <div className="label-rank">Rank</div>
              <div className="label-name">Name</div>
              <div className="label-price-usd">Price in $</div>
              <div className="label-percent-7d">% Change in 7d</div>
              <div className="label-percent-24h">% Change in 24h</div>
              <div className="label-total-supply">Total Supply</div>
            </div>{" "}
            {cryptoList
              .filter((coin) => {
                if (search == "") {
                  return coin;
                } else if (
                  coin.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return coin;
                }
              })
              .map((coin) => {
                return (
                  // <CryptoList
                  //   onClick={() => {
                  //     navigate(`/currency/${coin.id}`);
                  //   }}
                  // >
                  //   <h3>{coin.name}</h3>
                  //   <hr />
                  //   <h2>$ {coin.price_usd}</h2>
                  //   <br />
                  // </CryptoList>
                  <>
                    <div
                      className="crypto-container"
                      onClick={() => {
                        navigate(`/currency/${coin.id}`);
                      }}
                    >
                      <div className="rank">{coin.rank}</div>
                      <div className="name">{coin.name}</div>
                      <div className="price-usd">{coin.price_usd}</div>
                      <div className="percent-7d">{coin.percent_change_7d}</div>
                      <div className="percent-24h">
                        {coin.percent_change_24h}
                      </div>
                      <div className="total-supply">{coin.tsupply}</div>
                    </div>
                    <hr />
                  </>
                );
              })}
          </>
        </CryptoContainer>
      </div>
    </body>
  );
};

export default Main;
