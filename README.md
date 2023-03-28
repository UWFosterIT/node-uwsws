# UW Student Web Service

This implements most of the [v5 UW Student Webservice endpoints](https://wiki.cac.washington.edu/display/SWS/Student+Web+Service).  Each endpoint is queried using convenient options to build the final `request`.

This module assumes you have gone through all the required steps to get access and verified that access as [documented in the SWS wiki](https://wiki.cac.washington.edu/display/SWS/Student+Web+Service).

Note: Version 9.0.0 and later require Node 16 and only support ES6 modules at this time. CommonJS may be supported in the future.

## USE

### Installation

```bash
npm i uwsws
```

### Configuration

Configuration options are passed as an object to the constructor.

#### `organizationName`

The organization name is a string that identifies your organization and will appear in the headers of requests to the UW SWS API. This helps when working with UW IT to debug your application.

#### `baseUrl`

The URL of the SWS server. You can use the test or production server.

#### `auth: { cert: 'cert data', key: 'key data' }`

The Graduate Applicant Web Service requires that you pass a valid UW x509 client certificate with all requests. The data returned from the request is restricted to what is authorized for your cert.

You can use the included certificate fetcher helpers to get cert and key data from local files, from an AWS S3 bucket, or you can create a custom fetcher.

#### `uwSwsLogLevel`

To enable logging, you must install the `log4js-node` package. You don't need to import or configure log4js for it to work unless you want to handle log messages in some other way than sending them to stdout.

You can set the log level to `trace`, `debug`, `info`, `warn`, `error`, `fatal`, or `off`. If nothing is specified, the default level is `off`. When set to `off` log messages (even errors) will not display.

```JavaScript
import UwSws from 'uwsws';

const config = {
  organizationName: 'YOUR ORGANIZATION NAME',

  baseUrl: 'https://ws.admin.washington.edu/student/v5/',

  //uwSwsLogLevel: 'debug',

  // Change 'certData' property to the return value of the
  // 'readCertificate()' method if using a certFetcher helper.
  certData: {
    cert: 'PASS CERT STRING OR BUFFER HERE',
    key: 'PASS CERT STRING OR BUFFER HERE',
  },
};


const uwSws = new UwSws(config);

const termData = await uwSws.term.current();

console.log(termData);
```

Using the same config, get the intro to programming course for winter 2015.

```JavaScript
let options = {
  year: 2015,
  quarter: 'winter',
  curriculum: 'cse',
  course: '142'
};

const courseData = await uwSws.course.get(options);

console.log(courseData);
```

For more use examples see the unit tests in `__tests__/*`.

For a full list of all the supported endpoints and options see `src/endpoints/*`.

If you find one that doesn't work or if an endpoint or option isn't supported, please create an issue.

## Certificate Fetchers

This package includes a helper module to fetch client certificates using different methods. The built-in fetchers includes support for AWS S3 and the local file system. You can also create custom certificate fetchers. See the `./__tests__/certFetcher-test.ts` file for a custom certFetcher example.

```JavaScript
import { CertFetcherManager } from '../src/index';

// AWS S3 fetcher configuration options
const s3Config = {
  region: 'YOUR S3 REGION',
  certBucket: 'CERTIFICATE BUCKET NAME',
  certKey: 'CERTIFICATE KEY',
  keyBucket: 'KEY BUCKET NAME',
  keyKey: 'KEY KEY',
}

// Local file fetcher configuration options
const localConfig = {
      cert: 'PATH TO CERTIFICATE FILE',
      key: 'PATH TO KEY FILE',
    }

const certFetcherManager = new CertFetcherManager();

const s3Fetcher = certFetcherManager.getFetcher('s3');
const s3CertData = await s3Fetcher.readCertificate(s3Config);

const fileFetcher = certFetcherManager.getFetcher('file');
const fileCertData = await fileFetcher.readCertificate(localConfig);

// ... pass s3CertData or fileCertData to UwSws configuration object.

```

## Endpoint Implementation

All of the `UwSws` methods return a promise for a result.

All links below go to the official service documentation. The code block refers to it's implementation in this module.

All of the `option` parameters are outlined in `src/endpoint/*` modules.

Endpoint | Implementation
------------- | -------------
[Campus](https://wiki.cac.washington.edu/display/SWS/Campus+Search+Resource+V5)  | `UwSws.campus.all()`
[College Search](https://wiki.cac.washington.edu/display/SWS/College+Search+Resource+V5)  | `UwSws.college.search(options)`
[Course](https://wiki.cac.washington.edu/display/SWS/Course+Resource+v5) | `UwSws.course.get(options)`
[Course Search](https://wiki.cac.washington.edu/display/SWS/Course+Search+Resource+V5) | `UwSws.course.search(options)`
[Curriculum Search](https://wiki.cac.washington.edu/display/SWS/Curriculum+Search+Resource+V5) | `UwSws.curriculum.search(options)`
[Department Search](https://wiki.cac.washington.edu/display/SWS/Department+Search+Resource+V5) | `UwSws.department.search(options)`
[Enrollment](https://wiki.cac.washington.edu/display/SWS/Enrollment+Resource+V5) | `UwSws.enrollment.getRegistrations(options)`
[Enrollment Search](https://wiki.cac.washington.edu/display/SWS/Enrollment+Search+Resource+V5) | `UwSws.enrollment.getEnrolledTerms(options)`
[Major](https://wiki.cac.washington.edu/display/SWS/Major+Students+Resource+v5) | `UwSws.major.search(options)`
[Person](https://wiki.cac.washington.edu/display/SWS/Person+Resource+V5) | `UwSws.person.get(regId)`
[Person Search](https://wiki.cac.washington.edu/display/SWS/Person+Search+Resource+V5) | `UwSws.person.search(options)`
[Program](https://wiki.cac.washington.edu/display/SWS/Program+Resource+V5) | `UwSws.program.get(options)`
[Program Search](https://wiki.cac.washington.edu/display/SWS/Program+Search+Resource+V5) | `UwSws.program.search(options)`
[Registration Search](https://wiki.cac.washington.edu/display/SWS/Registration+Search+Resource+v5) | `UwSws.registration.search(options)`
[Section](https://wiki.cac.washington.edu/display/SWS/Section+Resource+V5) | `UwSws.section.get(options)`
[Section Search](https://wiki.cac.washington.edu/display/SWS/Section+Search+Resource+v5) | `UwSws.section.search(options)`
[Term](https://wiki.cac.washington.edu/display/SWS/Term+Resource+V5) |  `UwSws.term.next()`, `.previous()`, `.current()`, `currentAndNext(number?)`, and `get(options)`
[Test Score](https://wiki.cac.washington.edu/display/SWS/Test+Score+Resource+V5) | `UwSws.testScore.get(options)`

### Not Implemented

Most of these are not implemented due to additional security requirements beyond a simple 509 cert.  Requirements such as permissions in ASTRA or x-uw-act-as permissions passed in the header.  Feel free fork and make a pull request with working tests if you have those permissions.  Others are simply planned for a future release.

#### extra security needed

- [Degree (all endpoints)](https://wiki.cac.washington.edu/display/SWS/Degree+Audit+Search+V5)
- [Change of Major](https://wiki.cac.washington.edu/display/SWS/Change+of+Major+Resource)
- [Enrollment Majors](https://wiki.cac.washington.edu/display/SWS/Enrollment+Majors)
- [Section Status](https://wiki.cac.washington.edu/display/SWS/Section+Status+Resource+V5)
- Grade Roster

#### not needed

- [Resource List](https://wiki.cac.washington.edu/display/SWS/Resource+List+V5)
- [Version List](https://wiki.cac.washington.edu/display/SWS/Version+List+Resource+v5)

## Development

Copy `__tests__/setup/config-sample.ts` to `__tests__/setup/config.ts` and edit values as needed. Use the `npm` commands indicated in `package.json`.

```bash
npm test
```
