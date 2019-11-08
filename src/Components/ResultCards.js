import React from "react";

import MetricCard from "./MetricCard.js";
import OtherCard from "./OtherCard.js";
import UKCard from "./UKCard.js";
import USCard from "./USCard.js";

class ResultCards extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div id="output">
          <USCard
            price={this.props.price}
            metalChoice={this.props.metalChoice}
            amount={this.props.amount}
            userWeight={this.props.userWeight}
            currency={this.props.currency}
            currencySign={this.props.currencySign}
            currencySignIsBefore={this.props.currencySignIsBefore}
          />
          <UKCard
            price={this.props.price}
            metalChoice={this.props.metalChoice}
            amount={this.props.amount}
            userWeight={this.props.userWeight}
            currency={this.props.currency}
            currencySign={this.props.currencySign}
            currencySignIsBefore={this.props.currencySignIsBefore}
          />
          <MetricCard
            price={this.props.price}
            metalChoice={this.props.metalChoice}
            amount={this.props.amount}
            userWeight={this.props.userWeight}
            currency={this.props.currency}
            currencySign={this.props.currencySign}
            currencySignIsBefore={this.props.currencySignIsBefore}
          />
          <OtherCard
            price={this.props.price}
            metalChoice={this.props.metalChoice}
            amount={this.props.amount}
            userWeight={this.props.userWeight}
            currency={this.props.currency}
            currencySign={this.props.currencySign}
            currencySignIsBefore={this.props.currencySignIsBefore}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ResultCards;
