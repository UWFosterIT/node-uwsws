import Endpoint from '../core/endpoint.js';
import { IDepartmentResponse } from '../entities/IDepartmentResponse.js';

export interface IDepartmentSearchOptions {
  collegeAbbreviation: string,
  futureTerms?: number | string,
  quarter?: string,
  sortBy?: string,
  year?: number | string,
}

class Department extends Endpoint {
  search(opt: IDepartmentSearchOptions) {
    const params = Endpoint.makeQueryStringObject({
      college_abbreviation: opt.collegeAbbreviation || '',
      future_terms: opt.futureTerms || 0,
      quarter: opt.quarter || '',
      sort_by: opt.sortBy || '',
      year: opt.year || '',
    });

    const query = new URLSearchParams(params);

    return this.service.get<IDepartmentResponse>(`department.json?${query}`)
      .then((result) => {
        if (Endpoint.isApiError(result.data)) {
          throw new Error(result.data.description);
        }
        const { Departments: data } = result.data;
        return data;
      });
  }
}

export default Department;
