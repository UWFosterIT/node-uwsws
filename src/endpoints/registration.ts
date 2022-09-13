import Endpoint from '../core/endpoint.js';
import { IRegistrationSearchResponse } from '../entities/IRegistrationSearchResponse.js';

export interface IRegistrationSearchOptions {
  changedSinceDate?: string,
  course?: string,
  curriculumAbbreviation?: string,
  instructorRegId?: string,
  isActive?: boolean,
  pageSize?: number | string,
  pageStart?: number | string,
  quarter?: string,
  regId?: string,
  sectionId?: string,
  transcriptableCourse?: boolean,
  verbose?: boolean,
  year?: string,
}

class Registration extends Endpoint {
  // forcing verbose and just the one endpoint per their notes at the wiki
  // https://wiki.cac.washington.edu/display/SWS/Registration+Search+Resource+v5
  async search(opt: IRegistrationSearchOptions) {
    const params = Endpoint.makeQueryStringObject({
      changed_since_date: opt.changedSinceDate || '',
      course_number: opt.course || '',
      curriculum_abbreviation: opt.curriculumAbbreviation || '',
      instructor_reg_id: opt.instructorRegId || '',
      is_active: opt.isActive || '',
      page_size: opt.pageSize || '',
      page_start: opt.pageStart || '',
      quarter: opt.quarter || '',
      reg_id: opt.regId || '',
      section_id: opt.sectionId || '',
      transcriptable_course: opt.transcriptableCourse || '',
      verbose: 'true',
      year: opt.year || '',
    });

    const query = new URLSearchParams(params);

    const result = await this.service.get<IRegistrationSearchResponse>(`registration.json?${query}`);

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }
}

export default Registration;
