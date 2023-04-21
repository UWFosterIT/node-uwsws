export interface IUwSwsOptions {
  organizationName: string,
  baseUrl: string,
  certData: {
    cert: string | Buffer,
    key: string | Buffer,
  },
  uwSwsLogLevel?: string,
}
