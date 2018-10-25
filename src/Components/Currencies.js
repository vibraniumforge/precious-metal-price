import React from "react";
import ReactCountryFlag from "react-country-flag";

class Currencies extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div>
          <span>
            <ReactCountryFlag code="us" svg />
          </span>
          <span>
            <ReactCountryFlag code="🇪🇺" svg />
          </span>
          <span>
            <ReactCountryFlag code="🇬🇧" svg />
          </span>
          <span>
            <ReactCountryFlag code="🇦🇺" svg />
          </span>
          <span>
            <ReactCountryFlag code="🇨🇦" svg />
          </span>
          <span>
            <ReactCountryFlag code="🇯🇵" svg />
          </span>
          <span>
            <ReactCountryFlag code="🇨🇳" svg />
          </span>
          <span>
            <ReactCountryFlag code="🇰🇷" svg />
          </span>
          <span>
            <ReactCountryFlag code="🇧🇷" svg />
          </span>
          <span>
            <ReactCountryFlag code="🇨🇭" svg />
          </span>
          <span>
            <ReactCountryFlag code="🇸🇪" svg />
          </span>
          <span>
            <ReactCountryFlag code="🇭🇺" svg />
          </span>
        </div>
      </React.Fragment>
    );
  }
}
export default Currencies;
