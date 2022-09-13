import Endpoint from '../core/endpoint.js';
import { ICourseResponse } from '../entities/ICourseResponse.js';
import { IFullCourseResponse } from '../entities/IFullCouseResponse.js';

export interface ICourseGetOptions {
  year: number | string,
  quarter: string,
  curriculumAbbreviation: string,
  courseNumber: number | string
}

export interface ICourseSearchOptions {
  year?: number | string,
  quarter?: string,
  curriculumAbbreviation?: string,
  courseNumber?: number | string,
  startsWith?: string,
  contains?: string,
  excludeCoursesWithoutSections?: boolean,
  futureTerms?: number | string,
  pageSize?: number | string,
  pageStart?: number | string,
  changedSinceDate?: string,
  transcriptableCourse?: 'yes' | 'no' | 'all'
}

class Course extends Endpoint {
  async get(opt: ICourseGetOptions) {
    const query = `${opt.year},${opt.quarter},${opt.curriculumAbbreviation},${opt.courseNumber}`;

    const result = await this.service.get<IFullCourseResponse>(`course/${query}.json`);

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data as unknown as IFullCourseResponse;
  }

  async search(opt: ICourseSearchOptions) {
    const params = Endpoint.makeQueryStringObject({
      changed_since_date: opt.changedSinceDate || '',
      course_number: opt.courseNumber || '',
      course_title_contains: opt.contains || '',
      course_title_starts: opt.startsWith || '',
      curriculum_abbreviation: opt.curriculumAbbreviation || '',
      exclude_courses_without_sections: opt.excludeCoursesWithoutSections || '',
      future_terms: opt.futureTerms || 0,
      page_size: opt.pageSize || '',
      page_start: opt.pageStart || '',
      quarter: opt.quarter || '',
      transcriptable_course: opt.transcriptableCourse || '',
      year: opt.year || '',
    });

    const query = new URLSearchParams(params);

    const result = await this.service.get<ICourseResponse>(`course.json?${query}`);

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }
}

export default Course;
