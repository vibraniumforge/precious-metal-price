import React, { Component } from "react";
// import $ from "jquery";
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
      goldPrice: 0,
      metalChoice: "Gold",
      amount: "",
      userWeight: "",
      priceInGrams: 0,
      priceInImperialOz: 0,
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

  // handlePriceChange = e => {
  //   this.setState({ price: parseFloat(e.target.value) });
  // };

  componentDidMount() {
    document.body.classList.add("gold");
    document.body.classList.remove("silver", "platinum", "palladium");
    fetch(
      "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&" +
        "from_currency=XAU&to_currency=USD&apikey=9ISBCG500FVCKBG6"
    )
      // .then(res => console.log(res))
      .then(res => res.json())

      // .then(res => console.log(Object.values(res)))
      // .then(data => console.log(Object.values(data)))

      .then(res => {
        let values = Object.values(res);
        console.log("values=", values);
        console.log("values=array", Array.isArray(values));
        console.log("type of values=", typeof values[0]);
        console.log("Object.values(values[0])=", Object.values(values[0]));
        let myVal = Object.values(values[0]);
        console.log("myVal[4]=", parseFloat(myVal[4]));
        this.setState(
          {
            price: {
              ...this.state.price,
              Gold: myVal[4]
            }
          },
          console.log(this.state.price.Gold)
        );
        // this.setState({ goldPrice: myVal[4] }, this.calculate);
      })
      .catch(err => console.log(err));
  }

  handleAmountChange = e => {
    this.setState({ amount: parseInt(e.target.value, 10) }, this.calculate);
  };

  handleUserWeightChange = e => {
    this.setState({ userWeight: parseInt(e.target.value, 10) }, this.calculate);
  };

  handleMetalChange = e => {
    this.setState({ metalChoice: e.target.value }, this.changeBackground);
  };

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
    console.log(this.state.goldPrice);
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
                userWeight={this.state.userWeight}
                calculate={this.calculate}
                handleAmountChange={this.handleAmountChange}
                handleMetalChange={this.handleMetalChange}
                // handlePriceChange={this.handlePriceChange}
                handleUserWeightChange={this.handleUserWeightChange}
              />
              <ResultCards
                priceInGrams={this.state.priceInGrams}
                priceInImperialOz={this.state.priceInImperialOz}
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
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
