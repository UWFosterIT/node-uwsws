import { Logger } from '@log4js-node/log4js-api';
import got, {
  Got, isResponseOk, Options, PlainResponse,
} from 'got';
import { IApiError, IApiResponse, ApiResult } from './IService.js';

import version from '../version.js';

export default class Service {
  private got: Got;

  private log: Logger;

  constructor(config: any, log: Logger) {
    this.log = log;
    const options = new Options({
      https: {
        certificate: config.auth.cert,
        key: config.auth.key,
      },
      prefixUrl: config.baseUrl,
      headers: {
        'User-Agent': `${config.organizationName}/${version.LIB_VERSION}`,
        Accept: 'application/json',
      },
    });
    this.got = got.extend(options);
  }

  async get<T>(endpoint: string, params?: any): Promise<IApiResponse<T | IApiError>> {
    const response: PlainResponse = await this.got.get(
      endpoint,
      { searchParams: params },
    ) as PlainResponse;

    this.log.info(`GET -- ${response.url}`);

    this.log.debug(`body: ${response.body}`);

    if (!isResponseOk(response)) {
      this.log.error(response.body);

      return {
        result: ApiResult.failure,
        data: <IApiError>{
          errorCode: response.statusCode,
          description: response.body,
        },
      };
    }

    return {
      result: ApiResult.success,
      data: <T>JSON.parse(response.body as string),
    };
  }
}
