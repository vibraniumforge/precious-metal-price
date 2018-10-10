import React from "react";

class ResultCards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="output">
          <div className="card bg-primary mb-2">
            <div className="card-block">
              <div id="gramsOutput">
                <h4>
                  {this.props.metalChoice} Price per{" "}
                  {this.props.amount !== 1 ? this.props.amount : ""} Gram
                  {this.props.amount !== 1 ? "s" : ""}: $
                  {(
                    this.props.priceInGrams * this.props.amount
                  ).toLocaleString()}
                </h4>
              </div>
            </div>
          </div>
          <div className="card bg-success mb-2">
            <div className="card-block">
              <div id="ozOutput">
                <h4>
                  {this.props.metalChoice} Price per{" "}
                  {this.props.amount !== 1 ? this.props.amount : ""} Imperial
                  Ounce
                  {this.props.amount !== 1 ? "s" : ""}: $
                  {(
                    this.props.priceInImperialOz * this.props.amount
                  ).toLocaleString()}
                </h4>
              </div>
            </div>
          </div>
          <div className="card bg-info mb-2">
            <div className="card-block">
              <div id="poundsOutput">
                <span>
                  <h4>
                    {this.props.metalChoice} Price per{" "}
                    {this.props.amount !== 1 ? this.props.amount : ""} Pound
                    {this.props.amount !== 1 ? "s" : ""}: $
                    {(
                      this.props.priceInPounds * this.props.amount
                    ).toLocaleString()}
                  </h4>
                </span>
              </div>
            </div>
          </div>
          <div className="card bg-primary mb-2">
            <div className="card-block">
              <div id="kgOutput">
                <h4>
                  {this.props.metalChoice} Price per{" "}
                  {this.props.amount !== 1 ? this.props.amount : ""} Kilogram
                  {this.props.amount !== 1 ? "s" : ""}: $
                  {(
                    this.props.priceInKilograms * this.props.amount
                  ).toLocaleString()}
                </h4>
              </div>
            </div>
          </div>
          <div className="card bg-secondary mb-2">
            <div className="card-block">
              <div id="stoneOutput">
                <h4>
                  {this.props.metalChoice} Price per{" "}
                  {this.props.amount !== 1 ? this.props.amount : ""} UK Stone
                  {this.props.amount !== 1 ? "s" : ""}: $
                  {(
                    this.props.priceInUKStones * this.props.amount
                  ).toLocaleString()}
                </h4>
              </div>
            </div>
          </div>
          <div className="card bg-warning mb-2">
            <div className="card-block">
              <div id="barOutput">
                <span>
                  <h4>
                    {this.props.metalChoice} Price per{" "}
                    {this.props.amount !== 1 ? this.props.amount : ""} 400 oz.
                    Bar
                    {this.props.amount !== 1 ? "s" : ""}: $
                    {(
                      this.props.priceInBars * this.props.amount
                    ).toLocaleString()}
                  </h4>
                </span>
              </div>
            </div>
          </div>
          <div className="card bg-danger mb-2">
            <div className="card-block">
              <div id="usTonOutput">
                <span>
                  <h4>
                    {this.props.metalChoice} Price per{" "}
                    {this.props.amount !== 1 ? this.props.amount : ""} U.S. Ton
                    {this.props.amount !== 1 ? "s" : ""}: $
                    {(
                      this.props.priceInUSTons * this.props.amount
                    ).toLocaleString()}
                  </h4>
                </span>
              </div>
            </div>
          </div>
          <div className="card bg-danger mb-2">
            <div className="card-block">
              <div id="metricTonOutput">
                <span>
                  <h4>
                    {this.props.metalChoice} Price per{" "}
                    {this.props.amount !== 1 ? this.props.amount : ""} Metric
                    Ton
                    {this.props.amount !== 1 ? "s" : ""}: $
                    {(
                      this.props.priceInMetricTons * this.props.amount
                    ).toLocaleString()}
                  </h4>
                </span>
              </div>
            </div>
          </div>
          <div className="card bg-danger mb-2">
            <div className="card-block">
              <div id="imperialTonOutput">
                <span>
                  <h4>
                    {this.props.metalChoice} Price per{" "}
                    {this.props.amount !== 1 ? this.props.amount : ""} Imperial
                    Ton
                    {this.props.amount !== 1 ? "s" : ""}: $
                    {(
                      this.props.priceInImperialTons * this.props.amount
                    ).toLocaleString()}
                  </h4>
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ResultCards;
