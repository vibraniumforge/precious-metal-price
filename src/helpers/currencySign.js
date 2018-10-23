const currencySignChooser = e => {
  let currencySign = "";
  const currencyList = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    AUD: "AU$",
    CAD: "C$",
    JPY: "¥",
    CNY: "CN¥",
    KRW: "₩",
    BRL: "R$",
    CHF: "Fr.",
    SEK: "kr",
    HUF: "Ft"
  };

  currencySign = Object.values(currencyList[e.target.value]);
  return currencySign;
};

const signLocator = e => {
  let signIsBefore = true;
  const beforeCurrencies = ["CHF", "SEK", "HUF"];
  beforeCurrencies.includes(e.target.value)
    ? (signIsBefore = false)
    : (signIsBefore = true);
  return signIsBefore;
};

export { currencySignChooser, signLocator };
