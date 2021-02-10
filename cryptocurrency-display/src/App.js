import React, { Component } from "react";
import axios from "axios";
import Coin from "./Coin";

class App extends Component {
  state = {
    coins: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=250&page=1&sparkline=false`
      )
      .then((res) => {
        const coins = res.data;
        this.setState({ coins });
      });
  }

  render() {
    return <Coin coins={this.state.coins} />;
  }
}

export default App;
