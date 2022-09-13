import Endpoint from '../core/endpoint.js';
import { IProgramResponse } from '../entities/IProgramResponse.js';
import { IProgramSearchResponse } from '../entities/IProgramSearchResponse.js';

export interface IProgramGetOptions {
  majorAbbr: string,
  pathway?: number | string,
  firstEffectiveYear: number | string,
  firstEffectiveQuarter: string,
}

export interface IProgramSearchOptions {
  firstEffectiveQuarter?: string,
  firstEffectiveYear?: string,
  majorAbbr: string,
  pathway?: number | string,
  quarter: string,
  year: number | string,
}

class Program extends Endpoint {
  all(opt: IProgramSearchOptions) {
    const params = Endpoint.makeQueryStringObject({
      first_effective_quarter: opt.quarter || '',
      first_effective_year: opt.year || '',
      major_abbr: opt.majorAbbr || '',
      pathway: opt.pathway || '',
      quarter: opt.quarter || '',
      year: opt.year || '',
    });

    const query = new URLSearchParams(params);

    return this.service.get<IProgramSearchResponse>(`program.json?${query}`)
      .then((result) => {
        if (Endpoint.isApiError(result.data)) {
          throw new Error(result.data.description);
        }
        const { Programs: data } = result.data;
        return data;
      });
  }

  async get(options: IProgramGetOptions) {
    const opt = options;
    opt.pathway = opt.pathway || '00';
    const query = `${opt.majorAbbr},${opt.pathway},${opt.firstEffectiveYear},${opt.firstEffectiveQuarter}`;

    const result = await this.service.get<IProgramResponse>(`program/${query}.json`);

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }

  search(opt: IProgramSearchOptions) {
    const params = Endpoint.makeQueryStringObject({
      first_effective_quarter: opt.firstEffectiveQuarter || '',
      first_effective_year: opt.firstEffectiveYear || '',
      major_abbr: opt.majorAbbr || '',
      pathway: opt.pathway || '',
      quarter: opt.quarter || '',
      year: opt.year || '',
    });

    const query = new URLSearchParams(params);

    return this.service.get<IProgramSearchResponse>(`program.json?${query}`)
      .then((result) => {
        if (Endpoint.isApiError(result.data)) {
          throw new Error(result.data.description);
        }
        const { Programs: data } = result.data;
        return data;
      });
  }
}

export default Program;
