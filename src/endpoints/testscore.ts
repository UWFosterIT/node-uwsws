import Endpoint from '../core/endpoint.js';
import { ITestScoreResponse } from '../entities/ITestScoreResponse.js';

export interface ITestScoreGetOptions {
  regId: string,
  testType?: string,
}

class TestScore extends Endpoint {
  async get(opt: ITestScoreGetOptions) {
    let query = `testscore/${opt.regId}.json`;
    if (opt.testType) {
      query = `testscore/${opt.testType},${opt.regId}.json`;
    }
    const result = await this.service.get<ITestScoreResponse>(query);

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }
}

export default TestScore;
