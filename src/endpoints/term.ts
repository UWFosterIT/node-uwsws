import Endpoint from '../core/endpoint.js';
import { ITerm } from '../entities/ITerm';

export interface ITermGetOptions {
  year: number | string,
  quarter: string,
}

export default class Term extends Endpoint {
  async next() {
    const result = await this.service.get<ITerm>('term/next.json');

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }

  async previous() {
    const result = await this.service.get<ITerm>('term/previous.json');

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }

  async current() {
    const result = await this.service.get<ITerm>('term/current.json');

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }

  async get(options: ITermGetOptions) {
    const result = await this.service.get<ITerm>(`term/${options.year},${options.quarter}.json`);

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }

  async currentAndNext(numberOfAdditionalTerms?: number) {
    let numberOfTerms = numberOfAdditionalTerms;
    if (numberOfTerms) {
      numberOfTerms += 1;
    } else {
      numberOfTerms = 2;
    }
    const termNames = ['winter', 'spring', 'summer', 'autumn'];
    const qty = numberOfTerms - 1;
    const terms = [];
    const firstTerm = await this.current().then((term) => term);
    if ('Year' in firstTerm) {
      terms.push(firstTerm as ITerm);
    }
    let year = terms[0].Year;
    const start = termNames.indexOf(terms[0].Quarter) + 1;
    const nextTermData = [];
    for (let z = 0; z < qty; z += 1) {
      const i = (z + start) % termNames.length;
      if (i % 4 === 0) {
        year += 1;
      }
      nextTermData.push(this.get({
        quarter: termNames[i],
        year,
      }).then((results) => <ITerm>results).catch((error) => {
        throw error;
      }));
    }
    const nextTerms = await Promise.all(nextTermData);
    return terms.concat(nextTerms);
  }
}
