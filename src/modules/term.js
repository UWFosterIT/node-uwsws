class Term {
  constructor(config) {
    this.config = config;
  }

  next () {
    // get the next UW Term from the web service using the 'request' module
    return false;
  }

  previous () {
    return false;
  }

  current () {
    return false;
  }

  search (year, term) {
    return {year: year, quarter: term};
  }
}

export default Term;
