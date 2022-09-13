import File from './file.js';
import S3 from './s3.js';
import { ICertFetcher } from './ICertFetcher.js';
import FetcherError from './error.js';

interface IFetcherStrategy {
  name: string,
  fetcher: ICertFetcher,
}

const file = new File();
const s3 = new S3();

const certFetchers = [
  { name: 'file', fetcher: file },
  { name: 's3', fetcher: s3 },
];

// eslint-disable-next-line import/prefer-default-export
export class CertFetcherManager {
  private fetchers: IFetcherStrategy[] = certFetchers;

  addFetcher(name: string, fetcher: ICertFetcher) {
    const newFetcher = {
      name,
      fetcher,
    };
    this.fetchers.push(newFetcher);
  }

  getFetcher(name: string): ICertFetcher {
    const fetcher = this.fetchers.find((item) => item.name === name);
    if (!fetcher) {
      throw new FetcherError(`A certificate fetcher with the name '${name}' is not found`, this.getFetcher);
    }
    return fetcher.fetcher;
  }
}
