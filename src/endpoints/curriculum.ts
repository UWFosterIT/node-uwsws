import Endpoint from '../core/endpoint.js';
import { ICurriculumResponse } from '../entities/ICurriculumResponse.js';

export interface ICurriculumSearchOptions {
  collegeAbbreviation?: string,
  departmentAbbreviation?: string,
  futureTerms?: number | string,
  quarter?: string,
  year?: number | string,
}

class Curriculum extends Endpoint {
  async search(opt: ICurriculumSearchOptions) {
    const params = Endpoint.makeQueryStringObject({
      college_abbreviation: opt.collegeAbbreviation || '',
      department_abbreviation: opt.departmentAbbreviation || '',
      future_terms: opt.futureTerms || 0,
      quarter: opt.quarter || '',
      year: opt.year || '',
    });

    const query = new URLSearchParams(params);

    const result = await this.service.get<ICurriculumResponse>(`curriculum.json?${query}`);

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }
}

export default Curriculum;
