import React, { Component } from "react";

import ResultCards from "./Components/ResultCards";
import Form from "./Components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // price: {
      //   Gold: 1224.67,
      //   Silver: 14.6,
      //   Platinum: 846.75,
      //   Palladium: 1086.45
      // },
      price: {
        Gold: 0,
        Silver: 0,
        Platinum: 0,
        Palladium: 0
      },
      metalChoice: "Gold",
      amount: "",
      userWeight: "",
      currency: "USD",
      currencySign: "$",
      priceInGrams: 0,
      priceInImperialOz: 0,
      priceInTroyOz: 0,
      priceInPounds: 0,
      priceInKilograms: 0,
      priceInUKStones: 0,
      priceInBars: 0,
      priceInUserWeight: 0,
      priceInUSTons: 0,
      priceInMetricTons: 0,
      priceInImperialTons: 0
    };
  }

  // componentDidMount() {
  //   document.body.classList.add("gold");
  //   document.body.classList.remove("silver", "platinum", "palladium");
  //   fetch(
  //     "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&" +
  //       "from_currency=XAU&to_currency=USD&apikey=9ISBCG500FVCKBG6"
  //   )
  //     // .then(res => console.log(res))

  //     .then(res => res.json())

  //     // .then(res => console.log(Object.values(res)))

  //     // .then(data => console.log(Object.values(data)))

  //     .then(res => {
  //       let values = Object.values(res);
  //       console.log("values=", values);
  //       console.log("values=array", Array.isArray(values));
  //       console.log("type of values=", typeof values[0]);
  //       console.log("Object.values(values[0])=", Object.values(values[0]));
  //       let myVal = Object.values(values[0]);
  //       console.log("myVal[4]=", parseFloat(myVal[4]));
  //       let x = Object.keys(values);
  //       console.log(x);
  //       this.setState(
  //         {
  //           price: {
  //             ...this.state.price,
  //             Gold: parseFloat(myVal[4])
  //           }
  //         },
  //         console.log(this.state.price)
  //       );
  //     })
  //     .catch(err => console.log(err));
  // }

  componentDidMount() {
    document.body.classList.add("gold");
    document.body.classList.remove("silver", "platinum", "palladium");
    this.getAPI();
  }

  getAPI() {
    Promise.all([
      fetch(
        "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&" +
          "from_currency=XAU&to_currency=" +
          this.state.currency +
          "&apikey=9ISBCG500FVCKBG6"
      ),
      fetch(
        "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&" +
          "from_currency=XAG&to_currency=" +
          this.state.currency +
          "&apikey=9ISBCG500FVCKBG6"
      ),
      fetch(
        "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&" +
          "from_currency=XPT&to_currency=" +
          this.state.currency +
          "&apikey=9ISBCG500FVCKBG6"
      ),
      fetch(
        "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&" +
          "from_currency=XPD&to_currency=" +
          this.state.currency +
          "&apikey=9ISBCG500FVCKBG6"
      )
    ])
      .then(([res1, res2, res3, res4]) =>
        Promise.all([res1.json(), res2.json(), res3.json(), res4.json()])
      )
      // .then(([res1, res2, res3, res4]) =>
      //   Promise.all([
      //     console.log(res1),
      //     console.log(res2),
      //     console.log(res3),
      //     console.log(res4)
      //   ])
      // )
      .then(([res1, res2, res3, res4]) => {
        let values1 = Object.values(res1);
        let values12 = Object.values(values1[0]);
        let gold = parseFloat(values12[4]);
        let values2 = Object.values(res2);
        let values22 = Object.values(values2[0]);
        let silver = parseFloat(values22[4]);
        let values3 = Object.values(res3);
        let values32 = Object.values(values3[0]);
        let platinum = parseFloat(values32[4]);
        let values4 = Object.values(res4);
        let values42 = Object.values(values4[0]);
        let palladium = parseFloat(values42[4]);
        this.setState({
          price: {
            ...this.state.price,
            Gold: parseFloat(gold),
            Silver: parseFloat(silver),
            Platinum: parseFloat(platinum),
            Palladium: parseFloat(palladium)
          }
        });
      })
      .catch(err => console.log(err));
    this.calculate();
  }

  // .then(res1 => console.log(res1))
  // .then(res2 => console.log(res2))
  // .then(res3 => console.log(res3))
  // .then(res4 => console.log(res4));
  // .then(res => {

  // })
  // .then(([data1, data2, data3, data4]) =>
  //   this.setState({
  //     price: {
  //       ...this.state.price,
  //       Gold: parseFloat(myVal[4]),
  //       Silver: myVal[4],
  //       Platinum: myVal[4],
  //       Palladium: myVal[4]
  //     }
  //   }).catch(err => console.log(err))
  // );

  handleAmountChange = e => {
    this.setState({ amount: parseInt(e.target.value, 10) });
    // this.setState({ amount: parseInt(e.target.value, 10) }, this.calculate);
  };

  handleUserWeightChange = e => {
    this.setState({ userWeight: parseInt(e.target.value, 10) });
    // this.setState({ userWeight: parseInt(e.target.value, 10) }, this.calculate);
  };

  handleMetalChange = e => {
    this.setState({ metalChoice: e.target.value }, this.changeBackground);
  };

  handleCurrencyChange = e => {
    let sign = "";
    switch (e.target.value) {
      case "USD":
        sign = "$";
        break;
      case "EUR":
        sign = "€";
        break;
      case "GBP":
        sign = "£";
        break;
      case "AUD":
        sign = "AU$";
        break;
      case "CAD":
        sign = "C$";
        break;
      case "JPY":
        sign = "¥";
        break;
      case "CNY":
        sign = "¥";
        break;
      case "KRW":
        sign = "₩";
        break;
      case "BRL":
        sign = "R$";
        break;
      case "CHF":
        sign = "CHF";
        break;
      case "SEK":
        sign = "kr";
        break;
      case "HUF":
        sign = "Ft";
        break;
      default:
        sign = "$";
        break;
    }
    this.setState(
      { currency: e.target.value, currencySign: sign },
      this.getAPI
    );
  };

  // handlePriceChange = e => {
  //   this.setState({ price: parseFloat(e.target.value) });
  // };

  changeBackground = () => {
    if (this.state.metalChoice === "Gold") {
      document.body.classList.add("gold");
      document.body.classList.remove("silver", "platinum", "palladium");
    } else if (this.state.metalChoice === "Silver") {
      // document.body.style.backgroundImage = 'url("./Media/silver.jpg")';
      document.body.classList.add("silver");
      document.body.classList.remove("gold", "platinum", "palladium");
    } else if (this.state.metalChoice === "Platinum") {
      document.body.classList.add("platinum");
      document.body.classList.remove("gold", "silver", "palladium");
    } else if (this.state.metalChoice === "Palladium") {
      document.body.classList.add("palladium");
      document.body.classList.remove("gold", "silver", "platinum");
    }
  };

  calculate = () => {
    let { metalChoice } = this.state;
    this.setState({
      priceInGrams: (this.state.price[metalChoice] * 0.032).toFixed(2),
      priceInImperialOz: (this.state.price[metalChoice] * 0.911).toFixed(2),
      priceInTroyOz: (this.state.price[metalChoice] * 1).toFixed(2),
      priceInPounds: (this.state.price[metalChoice] * 14.583).toFixed(2),
      priceInKilograms: (this.state.price[metalChoice] * 32.151).toFixed(2),
      priceInUKStones: (this.state.price[metalChoice] * 204.167).toFixed(2),
      priceInBars: (this.state.price[metalChoice] * 400).toFixed(2),
      priceInUserWeight: (
        this.state.price[metalChoice] *
        this.state.userWeight *
        14.583
      ).toFixed(2),
      priceInUSTons: (this.state.price[metalChoice] * 29166.667).toFixed(2),
      priceInMetricTons: (this.state.price[metalChoice] * 32150.747).toFixed(2),
      priceInImperialTons: (this.state.price[metalChoice] * 32666.667).toFixed(
        2
      )
    });
  };

  render() {
    console.log("this.state.price=", this.state.price);
    return (
      <React.Fragment>
        <div id="main" className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h2 className="display-6 text-center mb-3">
                Precious Metal Price Converter
              </h2>
              <span role="img" aria-label="sheep" />
              <Form
                metalChoice={this.state.metalChoice}
                amount={this.state.amount}
                price={this.state.price}
                userWeight={this.state.userWeight}
                calculate={this.calculate}
                handleAmountChange={this.handleAmountChange}
                handleMetalChange={this.handleMetalChange}
                currency={this.state.currency}
                // handlePriceChange={this.handlePriceChange}
                handleUserWeightChange={this.handleUserWeightChange}
                handleCurrencyChange={this.handleCurrencyChange}
                getAPI={this.getAPI}
              />
              <ResultCards
                priceInGrams={this.state.priceInGrams}
                priceInImperialOz={this.state.priceInImperialOz}
                priceInTroyOz={this.state.priceInTroyOz}
                priceInPounds={this.state.priceInPounds}
                priceInKilograms={this.state.priceInKilograms}
                priceInUKStones={this.state.priceInUKStones}
                priceInBars={this.state.priceInBars}
                priceInUserWeight={this.state.priceInUserWeight}
                priceInUSTons={this.state.priceInUSTons}
                priceInMetricTons={this.state.priceInMetricTons}
                priceInImperialTons={this.state.priceInImperialTons}
                metalChoice={this.state.metalChoice}
                amount={this.state.amount}
                userWeight={this.state.userWeight}
                price={this.state.price}
                currencySign={this.state.currencySign}
                currency={this.state.currency}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
