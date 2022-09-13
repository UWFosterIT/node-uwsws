import Endpoint from '../core/endpoint.js';
import { ICollegeResponse } from '../entities/ICollegeResponse.js';

export interface ICollegeSearchOptions {
  campusShortName: string,
  futureTerms?: number,
  quarter?: string,
  year?: number,
}

class College extends Endpoint {
  async search(opt: ICollegeSearchOptions) {
    const params = Endpoint.makeQueryStringObject({
      campus_short_name: opt.campusShortName || '',
      future_terms: opt.futureTerms || 0,
      quarter: opt.quarter || '',
      year: opt.year || '',
    });

    const query = new URLSearchParams(params);

    return this.service.get<ICollegeResponse>(`college.json?${query}`)
      .then((result) => {
        if (Endpoint.isApiError(result.data)) {
          throw new Error(result.data.description);
        }
        const { Colleges: data } = result.data;
        return data;
      });
  }
}

export default College;
