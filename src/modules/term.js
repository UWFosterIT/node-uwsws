import Service from './service';

export default class Term extends Service {
  constructor(config) {
    super(config);
  }

  next() {
    return this._get('term/next.json');
  }

  previous() {
    return this._get('term/previous.json');
  }

  current() {
    return this._get('term/current.json');
  }

  search(options) {
    return this._get(`term/${options.year},${options.quarter}.json`);
  }

  async currentAndNext(options) {
    let numberOfTerms = options.numberOfTerms;
    if (numberOfTerms) {
      numberOfTerms ++;
    } else {
      numberOfTerms = 2;
    }
    const termNames = ['winter', 'spring', 'summer', 'autumn'];
    const qty = numberOfTerms - 1;
    let terms = [];
    terms[0] = await this.current().then((term) => {
      return term.data;
    });
    let year = terms[0].Year;
    let start = termNames.indexOf(terms[0].Quarter) + 1;
    for (let z = 0; z < qty; ++z) {
      let i = (z + start) % termNames.length;
      if (i % 4 === 0) {
        year++;
      }
      let nextTerm = await this.search({year: year, quarter: termNames[i]}).catch((error) => {
        throw error;
      });
      terms.push(nextTerm.data);
    }
    return {data: terms};
  }
}
