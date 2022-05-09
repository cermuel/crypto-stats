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
                <CryptoList
                  onClick={() => {
                    navigate(`/currency/${coin.id}`);
                  }}
                >
                  <h3>{coin.name}</h3>
                  <hr />
                  <h2>$ {coin.price_usd}</h2>
                  <br />
                </CryptoList>
              );
            })}
        </CryptoContainer>
      </div>
    </body>
  );
};

export default Main;
