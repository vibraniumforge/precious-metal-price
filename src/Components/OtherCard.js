import React from "react";

class OtherCard extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="card bg-warning mb-2">
          <div className="card-block" id="troyOzOutput">
            <h4>
              {this.props.metalChoice} Price per{" "}
              {this.props.amount !== 1 ? this.props.amount : ""} Troy Ounce
              {this.props.amount > 1 ? "s" : ""} in {this.props.currency}:{" "}
              <span className="number">
                {this.props.currencySignIsBefore === true
                  ? this.props.currencySign
                  : ""}
                {this.props.price[this.props.metalChoice]
                  ? (
                      this.props.price[this.props.metalChoice] *
                      this.props.amount *
                      1
                    )
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : ""}{" "}
                {this.props.currencySignIsBefore === false
                  ? this.props.currencySign
                  : ""}
              </span>
            </h4>
          </div>
        </div>

        <div className="card bg-warning mb-2">
          <div className="card-block" id="barOutput">
            <h4>
              {this.props.metalChoice} Price per 400 troy oz. bar
              {this.props.amount > 1 ? "s" : ""} in {this.props.currency}:{" "}
              <span className="number">
                {this.props.currencySignIsBefore === true
                  ? this.props.currencySign
                  : ""}
                {this.props.price[this.props.metalChoice]
                  ? (
                      this.props.price[this.props.metalChoice] *
                      this.props.amount *
                      400
                    )
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : ""}{" "}
                {this.props.currencySignIsBefore === false
                  ? this.props.currencySign
                  : ""}
              </span>
            </h4>
          </div>
        </div>
        <div className="card bg-warning mb-2">
          <div className="card-block" id="userWeightOutput">
            <span>
              <h4>
                Your weight{" "}
                {(this.props.userWeight
                  ? `(${this.props.userWeight} pounds) `
                  : ""
                ).toString()}{" "}
                in {this.props.metalChoice} :{" "}
                {this.props.currency ? this.props.currency : ""}{" "}
                <span className="number">
                  {this.props.currencySignIsBefore
                    ? this.props.currencySign
                    : ""}
                  {this.props.userWeight &&
                  this.props.metalChoice &&
                  this.props.price
                    ? (
                        this.props.price[this.props.metalChoice] *
                        this.props.userWeight *
                        14.583
                      )
                        .toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : ""}{" "}
                  {this.props.currencySignIsBefore
                    ? ""
                    : this.props.currencySign}
                </span>
              </h4>
            </span>
          </div>
        </div>
        <div className="card bg-warning mb-2">
          <div className="card-block" id="ratio">
            <span>
              <h4>
                Ratio of Silver to Gold:{" "}
                {this.props.price.Gold
                  ? `${(
                      this.props.price.Gold / this.props.price.Silver
                    ).toFixed(2)} to 1`
                  : ""}{" "}
              </h4>
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OtherCard;
