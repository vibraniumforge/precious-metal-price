import React from "react";

class Form extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <div>
            <select
              name="select1"
              className=" mb-2"
              value={this.props.metalChoice}
              onChange={this.props.handleMetalChange}
            >
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Platinum">Platinum</option>
              <option value="Palladium">Palladium</option>
            </select>
            <button
              type="button"
              className="btn-danger mb-2"
              onClick={this.props.calculate}
            >
              <h4>Calculate</h4>
            </button>
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Enter # troy ounces"
              id="ozInput"
              className="form-control form-control-lg"
              value={this.props.amount}
              onChange={this.props.handleAmountChange}
              min="1"
            />
            <input
              type="number"
              placeholder="Enter today's price"
              id="priceInput"
              className="form-control form-control-lg"
              value={this.props.price}
              onChange={this.props.handlePriceChange}
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
