import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { Readable } from 'stream';
import getRawBody from 'raw-body';
import { ICertFetcher } from './ICertFetcher.js';

interface IS3CertFetcher {
  region: string
  certBucket: string,
  certKey: string,
  keyBucket: string,
  keyKey: string,
}

export default class S3CertFetcher implements ICertFetcher {
  // eslint-disable-next-line class-methods-use-this
  async readCertificate(opts: IS3CertFetcher) {
    const s3Client = new S3Client({ region: opts.region });

    const getCertInput = new GetObjectCommand({
      Bucket: opts.certBucket,
      Key: opts.certKey,
    });

    const getKeyInput = new GetObjectCommand({
      Bucket: opts.keyBucket,
      Key: opts.keyKey,
    });

    const { Body: certStream } = await s3Client.send(getCertInput).catch(() => {
      throw Error(`Cert file '${opts.certKey}' in bucket '${opts.certBucket}' does not exist or is not accessible`);
    });

    const cert = await getRawBody(<Readable>certStream);

    const { Body: keyStream } = await s3Client.send(getKeyInput).catch(() => {
      throw Error(`Key file '${opts.keyKey}' in bucket '${opts.keyBucket}' does not exist or is not accessible`);
    });

    const key = await getRawBody(<Readable>keyStream);

    return {
      cert: <Buffer>cert,
      key: <Buffer>key,
    };
  }
}
