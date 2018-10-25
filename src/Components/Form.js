import React from "react";

class Form extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <form>
          <div>
            <select
              name="select"
              className="select mb-2"
              value={this.props.metalChoice}
              onChange={this.props.handleMetalChange}
            >
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Platinum">Platinum</option>
              <option value="Palladium">Palladium</option>
            </select>
            <select
              name="select"
              className="select mb-2"
              value={this.props.currency}
              onChange={this.props.handleCurrencyChange}
            >
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
            <button
              type="button"
              className=" btn-lg btn-danger mb-2"
              onClick={this.props.getAPI}
            >
              Calculate
            </button>
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Enter the amount"
              id="ozInput"
              className="form-control form-control-lg"
              value={this.props.amount.toString()}
              onChange={this.props.handleAmountChange}
              min="1"
            />
            <input
              type="number"
              placeholder="Enter your weight in pounds"
              id="userWeight"
              className="form-control form-control-lg"
              value={this.props.userWeight}
              onChange={this.props.handleUserWeightChange}
            />
          </div>
          <div />
        </form>
        <br />
      </React.Fragment>
    );
  }
}

export default Form;
