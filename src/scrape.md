request("https://goldprice.com/", (error, response, html) => {
if (!error && response.statusCode === 200) {
const $ = cheerio.load(html);
// let allPrice = $(".nfprice").text();
let goldPrice = $(".nfprice")
.eq(0)
.text()
.replace(/\$/g, "");
let silverPrice = $(".nfprice")
.eq(1)
.text()
.replace(/\$/g, "");
let platinumPrice = $(".nfprice")
.eq(2)
.text()
.replace(/\$/g, "");
let palladiumPrice = $(".nfprice")
.eq(3)
.text()
.replace(/\$/g, "");
}
console.log(`Gold Price: $${goldPrice}/oz`);
console.log(`Silver Price: $${silverPrice}/oz`);
console.log(`Platinum Price: $${platinumPrice}/oz`);
console.log(`Palladium Price: $${palladiumPrice}/oz`);
}

React version

    componentDidMount() {
    $.getJSON(
      "https://goldprice.com/",
      function(data) {
        let goldPrice = $(".nfprice")
          .eq(0)
          .text()
          .replace(/\$/g, "");
        let silverPrice = $(".nfprice")
          .eq(1)
          .text()
          .replace(/\$/g, "");
        let platinumPrice = $(".nfprice")
          .eq(2)
          .text()
          .replace(/\$/g, "");
        let palladiumPrice = $(".nfprice")
          .eq(3)
          .text()
          .replace(/\$/g, "");
      }
    console.log(`Gold Price: $${goldPrice}/oz`);
    console.log(`Silver Price: $${silverPrice}/oz`);
    console.log(`Platinum Price: $${platinumPrice}/oz`);
    console.log(`Palladium Price: $${palladiumPrice}/oz`);

        this.setState({price: Gold:goldPrice, Silver:silverPrice, Platinum:platinumPrice, Palladium:palladiumPrice})

      }
