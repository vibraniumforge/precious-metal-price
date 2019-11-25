import React from "react";

class UKCard extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="card bg-danger mb-2">
          <div className="card-block" id="stoneOutput">
            <h4>
              {this.props.metalChoice} Price per{" "}
              {this.props.amount !== 1 ? this.props.amount : ""} U.K. Stone
              {this.props.amount > 1 ? "s" : ""} in {this.props.currency}:{" "}
              <span className="number">
                {this.props.currencySignIsBefore === true
                  ? this.props.currencySign
                  : ""}
                {this.props.price[this.props.metalChoice]
                  ? (
                      this.props.price[this.props.metalChoice] *
                      this.props.amount *
                      204.167
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

        <div className="card bg-danger mb-2">
          <div className="card-block" id="imperialTonOutput">
            <h4>
              {this.props.metalChoice} Price per{" "}
              {this.props.amount !== 1 ? this.props.amount : ""} Imperial Ton
              {this.props.amount > 1 ? "s" : ""} in {this.props.currency}:{" "}
              <span className="number">
                {this.props.currencySignIsBefore === true
                  ? this.props.currencySign
                  : ""}
                {this.props.price[this.props.metalChoice]
                  ? (
                      this.props.price[this.props.metalChoice] *
                      this.props.amount *
                      32666.667
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
      </React.Fragment>
    );
  }
}

export default UKCard;
