import React from "react";
import "./Coin.css";

const Coin = ({ coins }) => {
  return (
    <div>
      <center>
        <h1>boots and cats</h1>
      </center>
      {coins.map((coin) => (
        <div className="coin">
          <div className="coin__row">
            <div className="coin__image">
              <img src={coin.image} alt="crypto"></img>
              <h1>{coin.name}</h1>
              <p className="coin__symbol">{coin.symbol.toUpperCase()}</p>
            </div>
            <div className="coin__data">
              <p className="coin__price">
                <span style={{ color: "white", fontWeight: "500" }}>
                  Price:{" "}
                </span>
                ${coin.current_price.toLocaleString()}
                {coin.vs_currency}
              </p>
              <p className="coin__volume">
                <span style={{ color: "white", fontWeight: "500" }}>
                  Total Volume:{" "}
                </span>
                ${coin.total_volume.toLocaleString()} CAD
              </p>
              <p className="coin__marketCap">
                <span style={{ color: "white", fontWeight: "500" }}>
                  Market Cap:{" "}
                </span>
                ${coin.market_cap.toLocaleString()} CAD
              </p>
              <p className="coin__circulatingSupply">
                <span style={{ color: "white", fontWeight: "500" }}>
                  Circulating Supply:{" "}
                </span>
                {coin.circulating_supply.toLocaleString()}
              </p>
              <p className="coin__lastUpdated">
                <span style={{ color: "white", fontWeight: "500" }}>
                  Last Updated:{" "}
                </span>
                {coin.last_updated}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Coin;
