const currencySignChooser = e => {
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
  const currencySign = e.target.value;
  return currencyList.hasOwnProperty(currencySign)
    ? currencyList[currencySign]
    : "";
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
