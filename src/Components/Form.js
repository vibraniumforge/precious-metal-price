import React from "react";

class Form extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <div>
            <select
              name="select"
              className=" mb-2"
              value={this.props.metalChoice}
              onChange={this.props.handleMetalChange}
            >
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Platinum">Platinum</option>
              <option value="Palladium">Palladium</option>
            </select>
            {/* <button
              type="button"
              className=" btn-lg btn-danger mb-2"
              onClick={this.props.calculate}
            >
              Calculate
            </button> */}
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Enter the amount"
              id="ozInput"
              className="form-control form-control-lg"
              value={this.props.amount}
              onChange={this.props.handleAmountChange}
              min="1"
            />
            {/* <input
              type="number"
              placeholder="Enter today's price in Troy Ounces"
              id="priceInput"
              className="form-control form-control-lg"
              value={this.props.price}
              onChange={this.props.handlePriceChange}
            /> */}
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
