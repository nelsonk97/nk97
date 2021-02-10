import React from "react";
import "./Coin.css";
import Moment from "react-moment";
import "moment-timezone";

const dateToFormat = new Date();

const Coin = ({ coins }) => {
  return (
    <div>
      <center>
        <h1>boots and cats</h1>
        <p>data accurate as of </p>
        <Moment>{dateToFormat}</Moment>
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
                Price: ${coin.current_price.toLocaleString()}
              </p>
              <p className="coin__volume">
                Volume: ${coin.total_volume.toLocaleString()}
              </p>
              <p className="coin__marketCap">
                Market Cap: ${coin.market_cap.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Coin;
