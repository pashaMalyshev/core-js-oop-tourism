class Tourist {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.tours = []
  }

  buy(countryName, agency) {
    let status = false
    agency.tours.forEach((el, i) => {
      if (el.country === countryName){
        status = true
        this.tours = agency.tours.splice(i, 1)
      }
    });
    return status
  }
}

module.exports = Tourist;
