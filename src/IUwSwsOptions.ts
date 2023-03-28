export type LogLevel = 'silly' | 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';

export interface IUwSwsOptions {
  organizationName: string,
  baseUrl: string,
  certData: {
    cert: string | Buffer,
    key: string | Buffer,
  },
  logLevel?: LogLevel,
}
