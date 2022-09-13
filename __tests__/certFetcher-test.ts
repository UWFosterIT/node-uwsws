import { CertFetcherManager } from '../src/index';
import LiteralCertFetcher from '../src/certFetcher/literal';
import config from './setup/config';

jest.setTimeout(20000);

describe('CertFetcher', () => {
  test('S3', async () => {
    const certFetcherManager = new CertFetcherManager();

    const fetcher = certFetcherManager.getFetcher('s3');
    const certInfo = await fetcher.readCertificate(config.certInfo);

    expect(certInfo).not.toBe(null);
  });

  test('S3 with bad config', async () => {
    const certFetcherManager = new CertFetcherManager();

    const fetcher = certFetcherManager.getFetcher('s3');

    const badAuth = {
      certBucket: 'uwfosterit.cert',
      certKey: 'laps_cert.cert',
      keyBucket: 'uwfosterit.cert',
      keyKey: 'laps_cert.keys',
    };

    await expect(() => fetcher.readCertificate(badAuth)).rejects.toThrow('Cert file \'laps_cert.cert\' in bucket \'uwfosterit.cert\' does not exist or is not accessible');
  });

  test('Local success', async () => {
    const certFetcherManager = new CertFetcherManager();

    const fetcher = certFetcherManager.getFetcher('file');
    await expect(fetcher.readCertificate({
      certPath: '__tests__/fakeCerts/testcert.file',
      keyPath: '__tests__/fakeCerts/testkey.file',
    })).resolves.toStrictEqual(expect.objectContaining({
      cert: expect.any(Buffer), key: expect.any(Buffer),
    }));
  });

  test('Local fail', async () => {
    const certFetcherManager = new CertFetcherManager();

    const fetcher = certFetcherManager.getFetcher('file');
    await expect(() => fetcher.readCertificate({
      certPath: 'src/__tests__/fakeCerts/testcert.txt',
      keyPath: 'src/__tests__/fakeCerts/testkey.txt',
    })).rejects.toThrow("Cert file 'src/__tests__/fakeCerts/testcert.txt' does not exist or is not accessible");
  });

  test('Add cert fetcher', () => {
    const certFetcherManager = new CertFetcherManager();
    const literalCertFetcher = new LiteralCertFetcher();

    certFetcherManager.addFetcher('literal', literalCertFetcher);

    const fetcher = certFetcherManager.getFetcher('literal');
    expect(fetcher).toHaveProperty('readCertificate');
  });
});
