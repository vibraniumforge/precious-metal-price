import React from "react";

class MetricCard extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="card bg-primary mb-2">
          <div className="card-block" id="gramsOutput">
            <h4>
              {this.props.metalChoice} Price per{" "}
              {this.props.amount !== 1 ? this.props.amount : ""} Gram
              {this.props.amount > 1 ? "s" : ""} in {this.props.currency}:{" "}
              <span className="number">
                {this.props.currencySignIsBefore === true
                  ? this.props.currencySign
                  : ""}
                {this.props.price[this.props.metalChoice]
                  ? (
                      this.props.price[this.props.metalChoice] *
                      this.props.amount *
                      0.032
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

        <div className="card bg-primary mb-2">
          <div className="card-block" id="kgOutput">
            <h4>
              {this.props.metalChoice} Price per{" "}
              {this.props.amount !== 1 ? this.props.amount : ""} Kilogram
              {this.props.amount > 1 ? "s" : ""} in {this.props.currency}:{" "}
              <span className="number">
                {this.props.currencySignIsBefore === true
                  ? this.props.currencySign
                  : ""}
                {this.props.price[this.props.metalChoice]
                  ? (
                      this.props.price[this.props.metalChoice] *
                      this.props.amount *
                      32.151
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

        <div className="card bg-primary mb-2">
          <div className="card-block" id="metricTonOutput">
            <span>
              <h4>
                {this.props.metalChoice} Price per{" "}
                {this.props.amount !== 1 ? this.props.amount : ""} Metric Ton
                {this.props.amount > 1 ? "s" : ""} in {this.props.currency}:{" "}
                <span className="number">
                  {this.props.currencySignIsBefore === true
                    ? this.props.currencySign
                    : ""}
                  {this.props.price[this.props.metalChoice]
                    ? (
                        this.props.price[this.props.metalChoice] *
                        this.props.amount *
                        32150.747
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
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MetricCard;
