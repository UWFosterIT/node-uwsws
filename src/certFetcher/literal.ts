import { ICertFetcher } from './ICertFetcher.js';

export default class LiteralCertFetcher implements ICertFetcher {
  // eslint-disable-next-line class-methods-use-this
  async readCertificate() {
    return {
      cert: 'some hard coded cert file',
      key: 'some hard coded key file',
    };
  }
}
