import Endpoint from '../core/endpoint.js';
import { IMajorResponse } from '../entities/IMajorResponse.js';

export interface IMajorSearchOptions {
  campus: string,
  degreeLevel: number | string,
  degreeType: number | string,
  majorAbbreviation: string,
  pageSize?: number | string,
  pageStart?: number | string,
  pathway: string,
  quarter: string,
  year: number | string,
}

class Major extends Endpoint {
  async search(opt: IMajorSearchOptions) {
    const params = Endpoint.makeQueryStringObject({
      campus: opt.campus || '',
      degree_level: opt.degreeLevel || '',
      degree_type: opt.degreeType || '',
      major_abbreviation: opt.majorAbbreviation || '',
      page_size: opt.pageSize || '',
      page_start: opt.pageStart || '',
      pathway: opt.pathway || '',
      quarter: opt.quarter || '',
      year: opt.year || '',
    });

    const query = new URLSearchParams(params);

    const result = await this.service.get<IMajorResponse>(`majorstudents.json?${query}`);

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }
}

export default Major;
