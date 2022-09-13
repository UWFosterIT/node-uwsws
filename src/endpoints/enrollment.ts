import Endpoint from '../core/endpoint.js';
import { IEnrollmentResponse } from '../entities/IEnrollmentResponse.js';
import { IRegistrationResponse } from '../entities/IRegistrationResponse.js';

export interface IGetRegistrationsOptions {
  quarter: string,
  regId: string,
  verbose?: boolean,
  year: number | string,
}

export interface IGetEnrolledTermsOptions {
  changedSinceDate?: string,
  regId: string,
  transcriptableCourse?: boolean,
  verbose?: boolean,
}

class Enrollment extends Endpoint {
  async getRegistrations(opt: IGetRegistrationsOptions) {
    const verbose = opt.verbose || '';
    const query = `${opt.year},${opt.quarter},${opt.regId}`;

    const result = await this.service.get<IRegistrationResponse>(`enrollment/${query}.json?verbose=${verbose}`);

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }

  async getEnrolledTerms(opt: IGetEnrolledTermsOptions) {
    const params = Endpoint.makeQueryStringObject({
      changed_since_date: opt.changedSinceDate || '',
      reg_id: opt.regId || '',
      transcriptable_course: opt.transcriptableCourse || '',
      verbose: opt.verbose || '',
    });

    const query = new URLSearchParams(params);

    const result = await this.service.get<IEnrollmentResponse>(`enrollment.json?${query}`);

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }
}

export default Enrollment;
