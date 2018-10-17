const currencySignChooser = e => {
  let sign = "";
  switch (e.target.value) {
    case "USD":
      sign = "$";
      break;
    case "EUR":
      sign = "€";
      break;
    case "GBP":
      sign = "£";
      break;
    case "AUD":
      sign = "AU$";
      break;
    case "CAD":
      sign = "C$";
      break;
    case "JPY":
      sign = "¥";
      break;
    case "CNY":
      sign = "CN¥";
      break;
    case "KRW":
      sign = "₩";
      break;
    case "BRL":
      sign = "R$";
      break;
    case "CHF":
      sign = "Fr.";
      break;
    case "SEK":
      sign = "kr";
      break;
    case "HUF":
      sign = "Ft";
      break;
    default:
      sign = "$";
      break;
  }
  return sign;
};

export { currencySignChooser };
