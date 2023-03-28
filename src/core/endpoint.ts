import { ILogObj, Logger } from 'tslog';
import Service from '../modules/apiService';
import { IApiError } from '../modules/IService';

export default class Endpoint {
  protected service: Service;

  protected log: Logger<ILogObj>;

  constructor(serviceApi: Service, logger: Logger<ILogObj>) {
    this.service = serviceApi;
    this.log = logger;
  }

  static isApiError(response: IApiError | any): response is IApiError {
    return response.errorCode !== undefined;
  }

  static makeQueryStringObject = (obj: any) => {
    const newObjArray: string[][] = [];

    Object.entries(obj).forEach(([key, value]: [string, any]) => {
      if (['string', 'number', 'boolean'].includes(typeof value)) {
        newObjArray.push([key, value.toString()]);
      } else {
        throw Error('Object contains invalid types. Object types must be string, number, or boolean');
      }
    });

    return Object.fromEntries(newObjArray);
  };
}
