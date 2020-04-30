const Service = require('./service');

module.exports = class Term extends Service {
  next() {
    return super.get('term/next.json');
  }

  previous() {
    return super.get('term/previous.json');
  }

  current() {
    return super.get('term/current.json');
  }

  search(options) {
    return super.get(`term/${options.year},${options.quarter}.json`);
  }

  async currentAndNext(options) {
    let { numberOfTerms } = options;
    if (numberOfTerms) {
      numberOfTerms += 1;
    } else {
      numberOfTerms = 2;
    }
    const termNames = ['winter', 'spring', 'summer', 'autumn'];
    const qty = numberOfTerms - 1;
    const terms = [];
    terms[0] = await this.current().then((term) => term.data);
    let year = terms[0].Year;
    const start = termNames.indexOf(terms[0].Quarter) + 1;
    const nextTermData = [];
    for (let z = 0; z < qty; z += 1) {
      const i = (z + start) % termNames.length;
      if (i % 4 === 0) {
        year += 1;
      }
      nextTermData.push(this.search({
        // eslint-disable-next-line security/detect-object-injection
        quarter: termNames[i],
        year,
      }).then((results) => results.data).catch((error) => {
        throw error;
      }));
    }
    const nextTerms = await Promise.all(nextTermData);
    return { data: terms.concat(nextTerms) };
  }
};
