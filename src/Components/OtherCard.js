import React from "react";

class OtherCard extends React.PureComponent {
  cardColor = () => {
    if (this.props.metalChoice === "Gold") {
      return "card bg-warning mb-2";
    } else {
      return "card bg-secondary mb-2";
    }
  };

  quantity = () => {
    return this.props.amount !== 1 ? this.props.amount : null;
  };

  pluralize = () => {
    return this.props.amount > 1 ? "s" : null;
  };

  currencySignIsBefore = () => {
    if (this.props.price[this.props.metalChoice]) {
      return this.props.currencySignIsBefore ? this.props.currencySign : null;
    }
  };

  currencySignIsAfter = () => {
    if (this.props.price[this.props.metalChoice]) {
      return this.props.currencySignIsBefore ? null : this.props.currencySign;
    }
  };

  isGoldOrSilver = () => {
    return ["Gold", "Silver"].includes(this.props.metalChoice);
  };

  render() {
    return (
      <React.Fragment>
        <div className={this.cardColor()}>
          <div className="card-block" id="quarterTroyOzOutput">
            <h4>
              {this.props.metalChoice} Price per {this.quantity()} 1/4 Troy
              Ounce
              {this.pluralize()} in {this.props.currency}:{" "}
              <span className="number">
                {this.currencySignIsBefore()}
                {this.props.price[this.props.metalChoice]
                  ? (
                      this.props.price[this.props.metalChoice] *
                      0.25 *
                      this.props.amount *
                      1
                    )
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : ""}{" "}
                {this.currencySignIsAfter()}
              </span>
            </h4>
          </div>
        </div>
        <div className={this.cardColor()}>
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

        <div className={this.cardColor()}>
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
        <div className={this.cardColor()}>
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
                {this.isGoldOrSilver()}
                Ratio of Silver to Gold:
                {this.props.price.Gold
                  ? `${(
                      this.props.price.Gold / this.props.price.Silver
                    ).toFixed(2)} to 1`
                  : ""}{" "}
                {this.props.metalChoice !== "Gold" ||
                  this.props.metalChoice !== "Silver"}{" "}
                Ratio of {this.props.metalChoice} to Gold:
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
