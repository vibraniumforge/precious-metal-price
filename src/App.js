import React, { Component } from "react";
// import $ from "jquery";
import ResultCards from "./Components/ResultCards";
import Form from "./Components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
      price: 1189.12,
      metalChoice: "Gold",
      priceInGrams: 0,
      priceInImperialOz: 0,
      priceInPounds: 0,
      priceInKilograms: 0,
      priceInUKStones: 0,
      priceInBars: 0,
      priceInUSTons: 0,
      priceInMetricTons: 0,
      priceInImperialTons: 0,
      goldPrice: 1189.12,
      silverPrice: "",
      platinumPrice: "",
      palladiumPrice: "",
      totalPrice: ""
    };
  }

  // componentDidMount() {
  //   $.getJSON(
  //     "https://globalmetals.xignite.com/xGlobalMetals.json/ListMetals?",
  //     function(data) {
  //       let goldPrice = $(".nfprice")
  //         .eq(0)
  //         .text()
  //         .replace(/\$/g, "");
  //       let silverPrice = $(".nfprice")
  //         .eq(1)
  //         .text()
  //         .replace(/\$/g, "");
  //       let platinumPrice = $(".nfprice")
  //         .eq(2)
  //         .text()
  //         .replace(/\$/g, "");
  //       let palladiumPrice = $(".nfprice")
  //         .eq(3)
  //         .text()
  //         .replace(/\$/g, "");

  //       $("#result").append(
  //         goldPrice,
  //         silverPrice,
  //         platinumPrice,
  //         palladiumPrice
  //       );
  //       console.log(goldPrice, silverPrice, platinumPrice, palladiumPrice);
  //
  // this.setState({
  //   goldPrice: parseFloat(this.state.price * 0.911, 10).toFixed(2),
  //   silverPrice: parseFloat(this.state.price * 14.583, 10).toFixed(2),
  //   platinumPrice: parseFloat(this.state.price * 0.032, 10).toFixed(2),
  //   palladiumPrice: parseFloat(this.state.price * 32.15, 10).toFixed(2),
  // });

  //     }
  //   );
  // }

  handlePriceChange = e => {
    this.setState({ price: parseFloat(e.target.value) });
  };

  handleAmountChange = e => {
    this.setState({ amount: parseInt(e.target.value, 10) });
  };

  handleMetalChange = e => {
    this.setState({ metalChoice: e.target.value });
    // document.getElementById("main").classList.add("gold");
  };

  calculate = () => {
    this.setState({
      priceInGrams: (this.state.price * 0.032).toFixed(2),
      priceInImperialOz: (this.state.price * 0.911).toFixed(2),
      priceInPounds: (this.state.price * 14.583).toFixed(2),
      priceInKilograms: (this.state.price * 32.151).toFixed(2),
      priceInUKStones: (this.state.price * 204.167).toFixed(2),
      priceInBars: (this.state.price * 400).toFixed(2),
      priceInUSTons: (this.state.price * 29166.667).toFixed(2),
      priceInMetricTons: (this.state.price * 32150.747).toFixed(2),
      priceInImperialTons: (this.state.price * 32666.667).toFixed(2)

      // totalPrice: this.state.amount * this.state.price
    });
  };

  // request("https://goldprice.com/", (error, response, html) => {
  // if (!error && response.statusCode === 200) {
  //   const $ = cheerio.load(html);
  //   // let allPrice = $(".nfprice").text();
  //   let goldPrice = $(".nfprice")
  //     .eq(0)
  //     .text()
  //     .replace(/\$/g, "");
  //   let silverPrice = $(".nfprice")
  //     .eq(1)
  //     .text()
  //     .replace(/\$/g, "");
  //   let platinumPrice = $(".nfprice")
  //     .eq(2)
  //     .text()
  //     .replace(/\$/g, "");
  //   let palladiumPrice = $(".nfprice")
  //     .eq(3)
  //     .text()
  //     .replace(/\$/g, "");

  render() {
    return (
      <React.Fragment>
        <div id="main" className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h2 className="display-6 text-center mb-3">
                Precious Metal Price Converter
              </h2>
              <Form
                metalChoice={this.state.metalChoice}
                amount={this.state.amount}
                price={this.state.price}
                calculate={this.calculate}
                handleAmountChange={this.handleAmountChange}
                handleMetalChange={this.handleMetalChange}
                handlePriceChange={this.handlePriceChange}
              />
              <ResultCards
                priceInGrams={this.state.priceInGrams}
                priceInImperialOz={this.state.priceInImperialOz}
                priceInPounds={this.state.priceInPounds}
                priceInKilograms={this.state.priceInKilograms}
                priceInUKStones={this.state.priceInUKStones}
                priceInBars={this.state.priceInBars}
                priceInUSTons={this.state.priceInUSTons}
                priceInMetricTons={this.state.priceInMetricTons}
                priceInImperialTons={this.state.priceInImperialTons}
                metalChoice={this.state.metalChoice}
                amount={this.state.amount}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
