import React, { Component } from "react";
import ResultCards from "./Components/ResultCards";
import Form from "./Components/Form";
import { currencySignChooser, signLocator } from "./helpers/currencySign.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      currencySignIsBefore: true
    };
  }

  componentDidMount() {
    document.body.classList.add("gold");
    document.body.classList.remove("silver", "platinum", "palladium");
    this.getAPI();
  }

  getAPI = () => {
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
            Gold: parseFloat(gold),
            Silver: parseFloat(silver),
            Platinum: parseFloat(platinum),
            Palladium: parseFloat(palladium)
          }
        });
      })
      .catch(err => console.log(err));
  };

  handleAmountChange = e => {
    if (e.target.value) {
      this.setState({ amount: parseInt(e.target.value, 10) });
    } else {
      this.setState({ amount: "" });
    }
  };

  handleUserWeightChange = e => {
    if (e.target.value) {
      this.setState({ userWeight: parseInt(e.target.value, 10) });
    } else {
      this.setState({ userWeight: "" });
    }
  };

  handleMetalChange = e => {
    this.setState({ metalChoice: e.target.value }, this.changeBackground);
  };

  handleCurrencyChange = e => {
    this.setState(
      {
        currency: e.target.value,
        currencySign: currencySignChooser(e),
        currencySignIsBefore: signLocator(e)
      },
      this.getAPI
    );
  };

  changeBackground = () => {
    if (this.state.metalChoice === "Gold") {
      document.body.classList.add("gold");
      document.body.classList.remove("silver", "platinum", "palladium");
    } else if (this.state.metalChoice === "Silver") {
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

  render() {
    return (
      <React.Fragment>
        <div id="main" className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h2 className="display-6 text-center mb-3">
                Precious Metal Price Converter
              </h2>
              {/* <Currencies /> */}
              <Form
                metalChoice={this.state.metalChoice}
                amount={this.state.amount}
                userWeight={this.state.userWeight}
                currency={this.state.currency}
                handleAmountChange={this.handleAmountChange}
                handleMetalChange={this.handleMetalChange}
                handleUserWeightChange={this.handleUserWeightChange}
                handleCurrencyChange={this.handleCurrencyChange}
                getAPI={this.getAPI}
              />
              <ResultCards
                price={this.state.price}
                metalChoice={this.state.metalChoice}
                amount={this.state.amount}
                userWeight={this.state.userWeight}
                currency={this.state.currency}
                currencySign={this.state.currencySign}
                currencySignIsBefore={this.state.currencySignIsBefore}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
