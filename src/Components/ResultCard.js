import React from "react";

class ResultCards extends React.PureComponent {
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
          </div>
          <div className="card bg-success mb-2">
            <div className="card-block">
              <div id="impOzOutput">
                <h4>
                  {this.props.metalChoice} Price per{" "}
                  {this.props.amount !== 1 ? this.props.amount : ""} Imperial
                  Ounce
                  {this.props.amount > 1 ? "s" : ""} in {this.props.currency}:{" "}
                  <span className="number">
                    {this.props.currencySignIsBefore === true
                      ? this.props.currencySign
                      : ""}
                    {this.props.price[this.props.metalChoice]
                      ? (
                          this.props.price[this.props.metalChoice] *
                          this.props.amount *
                          0.911
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
          </div>
          <div className="card bg-info mb-2">
            <div className="card-block">
              <div id="troyOzOutput">
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
          </div>
          <div className="card bg-success mb-2">
            <div className="card-block">
              <div id="poundsOutput">
                <h4>
                  {this.props.metalChoice} Price per{" "}
                  {this.props.amount !== 1 ? this.props.amount : ""} Pound
                  {this.props.amount > 1 ? "s" : ""} in {this.props.currency}:{" "}
                  <span className="number">
                    {this.props.currencySignIsBefore === true
                      ? this.props.currencySign
                      : ""}
                    {this.props.price[this.props.metalChoice]
                      ? (
                          this.props.price[this.props.metalChoice] *
                          this.props.amount *
                          14.583
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
          </div>
          <div className="card bg-primary mb-2">
            <div className="card-block">
              <div id="kgOutput">
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
          </div>
          <div className="card bg-secondary mb-2">
            <div className="card-block">
              <div id="stoneOutput">
                <h4>
                  {this.props.metalChoice} Price per{" "}
                  {this.props.amount !== 1 ? this.props.amount : ""} UK Stone
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
          </div>
          <div className="card bg-warning mb-2">
            <div className="card-block">
              <div id="barOutput">
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
          </div>
          <div className="card bg-success mb-2">
            <div className="card-block">
              <div id="userWeightOutput">
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
          </div>
          <div className="card bg-success mb-2">
            <div className="card-block">
              <div id="usTonOutput">
                <span>
                  <h4>
                    {this.props.metalChoice} Price per{" "}
                    {this.props.amount !== 1 ? this.props.amount : ""} U.S. Ton
                    {this.props.amount > 1 ? "s" : ""} in {this.props.currency}:{" "}
                    <span className="number">
                      {this.props.currencySignIsBefore === true
                        ? this.props.currencySign
                        : ""}
                      {this.props.price[this.props.metalChoice]
                        ? (
                            this.props.price[this.props.metalChoice] *
                            this.props.amount *
                            29166.667
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
          </div>
          <div className="card bg-primary mb-2">
            <div className="card-block">
              <div id="metricTonOutput">
                <span>
                  <h4>
                    {this.props.metalChoice} Price per{" "}
                    {this.props.amount !== 1 ? this.props.amount : ""} Metric
                    Ton
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
          </div>
          <div className="card bg-secondary mb-2">
            <div className="card-block">
              <div id="imperialTonOutput">
                <h4>
                  {this.props.metalChoice} Price per{" "}
                  {this.props.amount !== 1 ? this.props.amount : ""} Imperial
                  Ton
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
          </div>
          <div className="card bg-info mb-2">
            <div className="card-block">
              <div id="ratio">
                <span>
                  <h4>
                    Ratio of Gold to Silver:{" "}
                    {this.props.price.Gold
                      ? `${(
                          this.props.price.Gold / this.props.price.Silver
                        ).toFixed(2)} to 1`
                      : ""}{" "}
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
