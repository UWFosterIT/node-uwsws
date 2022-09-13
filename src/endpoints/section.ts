import Endpoint from '../core/endpoint.js';
import { ISectionResponse } from '../entities/ISectionResponse.js';
import { ISectionSearchResponse } from '../entities/ISectionSearchResponse.js';

export interface ISectionGetOptions {
  courseNumber: string,
  curriculumAbbreviation: string,
  sectionId: string,
  quarter: string,
  year: number | string,
}

export interface ISectionSearchOptions {
  changedSinceDate?: string,
  courseNumber?: string,
  curriculumAbbreviation?: string,
  deleteFlag?: string,
  facilityCode?: string,
  futureTerms?: number | string,
  includeSecondaries?: string,
  pageSize?: number | string,
  pageStart?: number | string,
  quarter?: string,
  regId?: string,
  roomNumber?: string,
  searchBy?: string,
  sln?: number | string,
  transcriptableCourse?: boolean,
  year?: number | string,
}

class Section extends Endpoint {
  async get(opt: ISectionGetOptions) {
    const course = `${opt.courseNumber}/${opt.sectionId}`;
    const query = `${opt.year},${opt.quarter},${opt.curriculumAbbreviation},${course}`;

    const result = await this.service.get<ISectionResponse>(`course/${query}.json`);

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }

  async search(opt: ISectionSearchOptions) {
    const params = Endpoint.makeQueryStringObject({
      changed_since_date: opt.changedSinceDate || '',
      course_number: opt.courseNumber || '',
      curriculum_abbreviation: opt.curriculumAbbreviation || '',
      delete_flag: opt.deleteFlag || '',
      facility_code: opt.facilityCode || '',
      future_terms: opt.futureTerms || 0,
      include_secondaries: opt.includeSecondaries || '',
      page_size: opt.pageSize || '',
      page_start: opt.pageStart || '',
      quarter: opt.quarter || '',
      reg_id: opt.regId || '',
      room_number: opt.roomNumber || '',
      search_by: opt.searchBy || '',
      sln: opt.sln || '',
      transcriptable_course: opt.transcriptableCourse || '',
      year: opt.year || '',
    });

    const query = new URLSearchParams(params);

    const result = await this.service.get<ISectionSearchResponse>(`section.json?${query}`);

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }
}

export default Section;
