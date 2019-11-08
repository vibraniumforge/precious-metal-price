import React from "react";

class USCard extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div id="output">
          <div className="card bg-success mb-2">
            <div className="card-block">
              <div id="impOzOutput">
                <h4>
                  {this.props.metalChoice} Price per{" "}
                  {this.props.amount !== 1 ? this.props.amount : ""} U.S. Ounce
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
        </div>
      </React.Fragment>
    );
  }
}

export default USCard;
