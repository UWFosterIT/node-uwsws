export enum ApiResult {
  'success' = 'success',
  'failure' = 'failure',
}

export interface IApiResponse<T> {
  result: ApiResult,
  data: T,
}

export interface IApiError {
  errorCode: number,
  description: string,
}
