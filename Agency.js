class Agency {
  constructor(money, tours = []) {
    this.money = money
    this.tours = tours
  }

  availableToursCount() {
    return this.tours.length
  }

  findTour(countryName) {
    return this.tours.find((el) => el.country === countryName)
  }

  sell(countryName) {
  }
}

module.exports = Agency;
