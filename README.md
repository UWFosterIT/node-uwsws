# UW Student Web Service

This implements most of the [v5 UW Student Webservice endpoints](https://wiki.cac.washington.edu/display/SWS/Student+Web+Service).  Each endpoint is queried using convenient options to build the final ``request``.

This module assumes you have gone through all the required steps to get access and verified that access as [documented in the SWS wiki](https://wiki.cac.washington.edu/display/SWS/Student+Web+Service).

Note: Version 7.0.0 and later require Node 8

## USE

### Installation

    npm install uwsws

### Examples

Import the module and set it's configuration.  You must set a ``cacheMode`` to tell the module to handle http request responses. Responses can be cached to the filesystem (useful for development). In development, set ``cacheMode`` to ``record``.  In production, set ``cacheMode`` to ``wild`` to force all requests to go over the internet.

```JavaScript
let uwsws = require('uwsws');

// With x509 cert
let config = {
  baseUrl:   'https://ws.admin.washington.edu/student/v5/',
  cacheExt:  '.json',
  cacheMode: 'wild',
  cachePath: '/path/to/a/cache/directory/',
  certInfo:  {
    file: {
      cert: 'PATH TO LOCAL CERT',
      key:  'PATH TO LOCAL KEY'
    },
    // s3: {
    //   certBucket: 'CERT AWS BUCKET',
    //   certKey:    'CERT AWS KEY',
    //   keyBucket:  'KEY AWS BUCKET',
    //   keyKey:     'KEY AWS KEY'
    // }
  },
  logLevel: process.env.LOG_LEVEL || 'info',
};

// or....with Authentication Token
let config = {
  baseUrl:   'https://ws.admin.washington.edu/student/v5/',
  cacheMode: 'wild',
  cachePath: '/path/to/a/cache/directory/',
  logLevel:  process.env.LOG_LEVEL || 'info',
  token:     'Your Auth Token'
};

await uwsws.initialize(config);

uwsws.term.current()
  .then((result) => {
    console.log(result.term)
  });
```

Using the same config, get the intro to programming course for winter 2015.

```JavaScript
let options = {
  year: 2015,
  quarter: 'winter',
  curriculum: 'cse',
  course: '142'
};

uwsws.course.get(options)
  .then((result) => {
    expect(result.course.CourseNumber).to.equal('142');
  });
```

For more examples see ``test/unit/*``.  For a full list of all the options see ``src/modules/*``.  Right now there isn't 100% coverage of all the options, but, in theory, they should work in the context of the query string parameters described in the SWS documentation.  If you find one that doesn't work please create an issue.

### Using a local cache

The ``cacheMode`` can be set to any one of the following modes.  This uses the ``micro-cache`` node module as a local file system cache.

- wild: all requests go out to the internet, don't load anything from cache, doesn't save anything.
- dryrun: Loads files from cache if exists, does http calls when cache doesn't exist, doesn't save to the cache.
- record: Loads files from the cache and saves new ones to the cache.

### Logging

This module uses ``winston`` for all logging.  Set an environment variable to a valid log level such as ``LOG_LEVEL=debug node yourscript.js``.

## Endpoint Implementation

All links below go to the official service documentation.  The code block refers to it's implementation in this module.

### Fully Supported

All of the ``uwsws`` methods return a promise for a result object that contains the following elements:

Object Element | Meaning
---------- | ---------------
``statusCode`` | This element represents the HTTP statusCode of the API response.
``data`` | This element represents the data returned by the SWS API. This element is empty if the request HTTP response code was not 200.
``message`` | This element represents the message returned in the body of non-200 HTTP response codes. A message is not returned if the status code is 200.

In most methods, the response body is returned in data element. However, where it makes sense, some of the original body is removed to provide cleaner access to only the data you need.

All of the ``option`` parameters are outlined in ``sr/modules/[endpoint]``

Endpoint  | Implementation
------------- | -------------
[Campus](https://wiki.cac.washington.edu/display/SWS/Campus+Search+Resource+V5)  | ``uwsws.campus.all()``
[College Search](https://wiki.cac.washington.edu/display/SWS/College+Search+Resource+V5)  | ``uwsws.college.search(campusName)``
[Course](https://wiki.cac.washington.edu/display/SWS/Course+Resource+v5) | ``uwsws.course.get(options)``
[Course Search](https://wiki.cac.washington.edu/display/SWS/Course+Search+Resource+V5) | ``uwsws.course.search(options)``
[Curriculum Search](https://wiki.cac.washington.edu/display/SWS/Curriculum+Search+Resource+V5) | ``uwsws.curriculum.search(options)``
[Department Search](https://wiki.cac.washington.edu/display/SWS/Department+Search+Resource+V5) | ``uwsws.department.search(options)``
[Enrollment](https://wiki.cac.washington.edu/display/SWS/Enrollment+Resource+V5) | ``uwsws.enrollment.get(options)``
[Enrollment Search](https://wiki.cac.washington.edu/display/SWS/Enrollment+Search+Resource+V5) | ``uwsws.enrollment.search(options)``
[Person](https://wiki.cac.washington.edu/display/SWS/Person+Resource+V5) | ``uwsws.person.get(regid)``
[Person Search](https://wiki.cac.washington.edu/display/SWS/Person+Search+Resource+V5) | ``uwsws.person.search(options)``
[Registration Search](https://wiki.cac.washington.edu/display/SWS/Registration+Search+Resource+v5) | ``uwsws.registration.search(options)``
[Section](https://wiki.cac.washington.edu/display/SWS/Section+Resource+V5) | ``uwsws.section.get(options)``
[Section Search](https://wiki.cac.washington.edu/display/SWS/Section+Search+Resource+v5) | ``uwsws.section.search(options)``
[Term](https://wiki.cac.washington.edu/display/SWS/Term+Resource+V5) |  ``uwsws.term.next()`` or ``.previous()``, or ``.current()`` as well as ``uwsws.term.search(options)``
[Test Score](https://wiki.cac.washington.edu/display/SWS/Test+Score+Resource+V5) | ``uwsws.testScore(options)``

#### Not Implemented

Most of these are not implemented due to additional security requirements beyond a simple 509 cert.  Requirements such as permissions in ASTRA or x-uw-act-as permissions passed in the header.  Feel free fork and make a pull request with working tests if you have those permissions.  Others are simply planned for a future release.

##### extra security needed

- [Degree (all endpoints)](https://wiki.cac.washington.edu/display/SWS/Degree+Audit+Search+V5)
- [Change of Major](https://wiki.cac.washington.edu/display/SWS/Change+of+Major+Resource)
- [Enrollment Majors](https://wiki.cac.washington.edu/display/SWS/Enrollment+Majors)
- [Section Status](https://wiki.cac.washington.edu/display/SWS/Section+Status+Resource+V5)
- Grade Roster

##### not needed

- [Resource List](https://wiki.cac.washington.edu/display/SWS/Resource+List+V5)
- [Version List](https://wiki.cac.washington.edu/display/SWS/Version+List+Resource+v5)

## Development

Copy ``test/setup/config-sample.js`` to ``test/setup/config.js`` and edit values as needed. Use the ``npm`` commands indicated in ``package.json``.

    npm test

## To Do

- [ ] Implement Test Score endpoint
- [ ] Implement the endpoints that require more security
- [ ] Permit the use of a token instead of a x509 cert where applicable
