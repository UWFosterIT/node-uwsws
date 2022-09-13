import Endpoint from '../core/endpoint.js';
import { IPersonResponse } from '../entities/IPersonResponse.js';
import { IPersonSearchResponse } from '../entities/IPersonSearchResponse.js';

export interface IPersonSearchOptions {
  employeeId?: number | string,
  netId?: string,
  regId?: string,
  studentNumber?: number | string,
  studentSystemKey?: number | string,
}

class Person extends Endpoint {
  async get(regId: string) {
    const result = await this.service.get<IPersonResponse>(`person/${regId}.json`);

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }

  async search(opt: IPersonSearchOptions) {
    const params = Endpoint.makeQueryStringObject({
      employee_id: opt.employeeId || '',
      net_id: opt.netId || '',
      reg_id: opt.regId || '',
      student_number: opt.studentNumber || '',
      student_system_key: opt.studentSystemKey || '',
    });

    const query = new URLSearchParams(params);

    const result = await this.service.get<IPersonSearchResponse>(`person.json?${query}`);

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }
}

export default Person;
