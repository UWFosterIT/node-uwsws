import Endpoint from '../core/endpoint.js';
import { ICampusResponse } from '../entities/ICampusResponse.js';

class Campus extends Endpoint {
  async all() {
    const result = await this.service.get<ICampusResponse>('campus.json');
    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }
    const { Campuses: data } = result.data;
    return data;
  }
}

export default Campus;
