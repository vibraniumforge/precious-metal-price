  calculate = () => {
    let { metalChoice } = this.state;
    this.setState({
      priceInGrams: (this.state.price[metalChoice] * 0.032).toFixed(2),
      priceInImperialOz: (this.state.price[metalChoice] * 0.911).toFixed(2),
      priceInTroyOz: (this.state.price[metalChoice] * 1).toFixed(2),
      priceInPounds: (this.state.price[metalChoice] * 14.583).toFixed(2),
      priceInKilograms: (this.state.price[metalChoice] * 32.151).toFixed(2),
      priceInUKStones: (this.state.price[metalChoice] * 204.167).toFixed(2),
      priceInBars: (this.state.price[metalChoice] * 400).toFixed(2),
      priceInUserWeight: (
        this.state.price[metalChoice] *
        this.state.userWeight *
        14.583
      ).toFixed(2),
      priceInUSTons: (this.state.price[metalChoice] * 29166.667).toFixed(2),
      priceInMetricTons: (this.state.price[metalChoice] * 32150.747).toFixed(2),
      priceInImperialTons: (this.state.price[metalChoice] * 32666.667).toFixed(
        2
      )
    });
  };


      priceInGrams: 0,
      priceInImperialOz: 0,
      priceInTroyOz: 0,
      priceInPounds: 0,
      priceInKilograms: 0,
      priceInUKStones: 0,
      priceInBars: 0,
      priceInUserWeight: 0,
      priceInUSTons: 0,
      priceInMetricTons: 0,
      priceInImperialTons: 0


                      priceInGrams={this.state.priceInGrams}
                priceInImperialOz={this.state.priceInImperialOz}
                priceInTroyOz={this.state.priceInTroyOz}
                priceInPounds={this.state.priceInPounds}
                priceInKilograms={this.state.priceInKilograms}
                priceInUKStones={this.state.priceInUKStones}
                priceInBars={this.state.priceInBars}
                priceInUserWeight={this.state.priceInUserWeight}
                priceInUSTons={this.state.priceInUSTons}
                priceInMetricTons={this.state.priceInMetricTons}
                priceInImperialTons={this.state.priceInImperialTons}