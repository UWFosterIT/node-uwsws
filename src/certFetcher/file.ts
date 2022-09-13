import fs from 'fs/promises';
import { ICertFetcher } from './ICertFetcher.js';

interface IFileCertFetcher {
  certPath: string,
  keyPath: string
}

export default class FileCertFetcher implements ICertFetcher {
  // eslint-disable-next-line class-methods-use-this
  async readCertificate(opts: IFileCertFetcher) {
    const cert = await fs.readFile(opts.certPath)
      .catch(() => {
        throw Error(`Cert file '${opts.certPath}' does not exist or is not accessible`);
      });

    const key = await fs.readFile(opts.keyPath)
      .catch(() => {
        throw Error(`Key file '${opts.keyPath}' does not exist or is not accessible`);
      });
    return {
      cert,
      key,
    };
  }
}
