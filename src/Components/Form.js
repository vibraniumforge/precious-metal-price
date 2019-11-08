import React from "react";

class Form extends React.PureComponent {
  state = {
    secondsRemaining: 10,
    buttonReady: true
  };

  componentDidUpdate() {
    if (this.state.secondsRemaining === 0) {
      this.setState({ buttonReady: true, secondsRemaining: 10 }, () =>
        console.log(this.state)
      );
      this.stopTimer();
    }
  }

  isButtonReady = () => {
    this.setState({ buttonReady: false }, () => console.log(this.state));
    this.timer = setInterval(
      () =>
        this.setState(prevState => ({
          secondsRemaining: prevState.secondsRemaining - 1
        })),
      1000
    );
  };

  stopTimer() {
    clearInterval(this.timer);
  }

  resetButtonTime = () => {
    this.setState({ buttonReady: true }, () => console.log(this.state));
  };

  render() {
    // console.log(this.state);
    // console.log(this.props);
    return (
      <React.Fragment>
        <form>
          <div className="form-group">
            <select
              name="select"
              className="form-control-lg select mb-3"
              value={this.props.currency}
              onChange={this.props.handleCurrencyChange}
            >
              {" "}
              <option value="">Choose currency</option>
              <option value="USD">U.S. Dollar</option>
              <option value="EUR">Euro</option>
              <option value="GBP">British Pound</option>
              <option value="AUD">Australian Dollar</option>
              <option value="CAD">Canadian Dollar</option>
              <option value="JPY">Japanese Yen</option>
              <option value="CNY">Chinese Yuan Renambi</option>
              <option value="KRW">Korean Won</option>
              <option value="BRL">Brazilian Real</option>
              <option value="CHF">Swiss Franc</option>
              <option value="SEK">Swedish Krona</option>
              <option value="HUF">Hungarian Forint</option>
            </select>
            <div>
              <button
                type="button"
                className={`btn-lg mb-2 ${
                  this.props.currency && this.state.buttonReady
                    ? "btn-success"
                    : "btn-danger disabled"
                }`}
                // onClick={(this.props.getAPI, () => this.isButtonReady())}
                onClick={() => this.isButtonReady()}
                disabled={!this.props.currency || !this.state.buttonReady}
              >
                {this.state.buttonReady
                  ? "Calculate"
                  : this.state.secondsRemaining}
              </button>
              <br></br>
              <p>Maximum of once per minute</p>
            </div>
            <div className="row">
              <div className="col md-4 mb-3">
                <select
                  name="select"
                  className="form-control"
                  value={this.props.metalChoice}
                  onChange={this.props.handleMetalChange}
                >
                  <option value="">Choose metal </option>
                  <option value="Gold">Gold</option>
                  <option value="Silver">Silver</option>
                  <option value="Platinum">Platinum</option>
                  <option value="Palladium">Palladium</option>
                </select>
              </div>
              <div className="col md-4 mb-3">
                <input
                  type="number"
                  placeholder="Enter the quantity:"
                  id="ozInput"
                  name="amount"
                  className="form-control"
                  value={this.props.amount.toString()}
                  onChange={this.props.handleChange}
                  min="1"
                />
              </div>
              <div className="col md-4 mb-3">
                <input
                  type="text"
                  placeholder="Your weight in pounds:"
                  id="userWeight"
                  name="userWeight"
                  className="form-control"
                  value={this.props.userWeight}
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
          </div>
        </form>
        <br />
      </React.Fragment>
    );
  }
}

export default Form;
