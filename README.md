# UW Student Web Service
This implements most of the [v5 UW Student Webservice endpoints](https://wiki.cac.washington.edu/display/SWS/Student+Web+Service).  Each endpoint is queried using convienent options to build the final ``request``. This module was written with es6 in mind and builds a compatable distribution for es5 and es6.

This module assumes you have gone through all the required steps to get access and verified that access as [documented in the SWS wiki](https://wiki.cac.washington.edu/display/SWS/Student+Web+Service).

## USE

### Installation

    npm install uwsws

### Examples

Import the module, set it's configuration and make requests.  You can optionally enforce all http requests to use a local filesytem cache with ``useCache: true`` as shown below.  This can assist wtih speedy development when consuming this module.

```JavaScript
const uwsws = import('uwsws');

let config = {
  baseUrl: 'https://ws.admin.washington.edu/student/v5/',
  cert: '/path/to/your/x509.pem',
  key: '/path/to/your/x509.key',
  cacheMode: record,
  cachePath: '/path/to/a/cache/directory/'
};

uwsws.initialize(config);

uwsws.term.current((err, response, term) => {
  console.log(term);
});
```

or, es5 like...

```JavaScript
var uwsws = require('uwsws');

var config = {
  baseUrl: 'https://ws.admin.washington.edu/student/v5/',
  cert: '/path/to/your/x509.pem',
  key: '/path/to/your/x509.key'
};

uwsws.initialize(config);

uwsws.term.current(function(err, response, term) {
  console.log(term);
});
```

The ``cacheMode`` can be set to any one of the following modes.  Right now, these modes are from the ``nock`` module.

- wild: all requests go out to the internet, don't replay anything, doesn't record anything
- dryrun: The default, use recorded nocks, allow http calls, doesn't record anything, useful for writing new tests
- record: use recorded nocks, record new nocks
- lockdown: use recorded nocks, disables all http calls even when not nocked, doesn't record


Using the same config, get the intro to programming course for winter 2015.

```JavaScript
let options = {
  year: 2015,
  quarter: 'winter',
  curriculum: 'cse',
  course: '142'
};

uwsws.course.get(options, (err, response, body) => {
  console.log(body);
});
```
For more examples see ``test/unit/*``.  For a full list of all the options see ``src/modules/*``.  Right now there isn't 100% coverage of all the options but in theory they should work in the context of the query string parameters described in the SWS documentation.  If you find one that doesn't work please create an issue.

## Endpoint Implementation
All links below go to the official service documentation.  The code block refers to it's implementation in this module.

#### Fully Supported
All of the ``callback`` methods are in the same format as those provided by the ``request`` module. In most methods the body is returned as the 3rd param in the callback, however, where it makes sense some of the original body is removed to provide cleaner access to only the data you need.

All of the ``option`` parameters are outlined in ``sr/modules/[endpoint]``


Endpoint  | Implementation
------------- | -------------
[Campus](https://wiki.cac.washington.edu/display/SWS/Campus+Search+Resource+V5)  | ``uwsws.campus.all(callback)``
 [College Search](https://wiki.cac.washington.edu/display/SWS/College+Search+Resource+V5)  | ``uwsws.college.search(campusName, callback)``
[Course](https://wiki.cac.washington.edu/display/SWS/Course+Resource+v5) | ``uwsws.course.get(options, callback)``
[Course Search](https://wiki.cac.washington.edu/display/SWS/Course+Search+Resource+V5) | ``uwsws.course.search(options, callback)``
[Curriculumn Search](https://wiki.cac.washington.edu/display/SWS/Curriculum+Search+Resource+V5) | ``uwsws.curriculum.search(options, callback)``
[Department Search](https://wiki.cac.washington.edu/display/SWS/Department+Search+Resource+V5) | ``uwsws.department.search(options, callback)``
[Enrollment](https://wiki.cac.washington.edu/display/SWS/Enrollment+Resource+V5) | ``uwsws.enrollment.get(options, callback)``
[Enrollment Search](https://wiki.cac.washington.edu/display/SWS/Enrollment+Search+Resource+V5) | ``uwsws.entrollment.search(options, callback)``
[Person](https://wiki.cac.washington.edu/display/SWS/Person+Resource+V5) | ``uwsws.person.get(regid, callback)``
[Person Search](https://wiki.cac.washington.edu/display/SWS/Person+Search+Resource+V5) | ``uwsws.person.search(options, callback)``
[Registration Search](https://wiki.cac.washington.edu/display/SWS/Registration+Search+Resource+v5) | ``uwsws.registration.search(options, callback)``
[Section](https://wiki.cac.washington.edu/display/SWS/Section+Resource+V5) | ``uwsws.section.get(options, callback)``
[Section Search](https://wiki.cac.washington.edu/display/SWS/Section+Search+Resource+v5) | ``uwsws.section.search(options, callback)``
[Term](https://wiki.cac.washington.edu/display/SWS/Term+Resource+V5) |  ``uwsws.term.next(callback)`` or ``.previous(callback)``, or ``.current(callback)`` as well as ``uwsws.term.search(options, callback)``

#### Not Implemented
Most of these are not implemented due to additional security requirements beyond a simple 509 cert.  Requirements such as permissions in ASTRA or x-uw-act-as permissions passed in the header.  Feel free fork and make a pull request with working tests if you have those permissions.  Others are simply planned for a future release.

##### extra security needed
* [Change of Major](https://wiki.cac.washington.edu/display/SWS/Change+of+Major+Resource)
* [Enrollment Majors ](https://wiki.cac.washington.edu/display/SWS/Enrollment+Majors)
* [Section Status](https://wiki.cac.washington.edu/display/SWS/Section+Status+Resource+V5)

##### not needed
* [Resource List](https://wiki.cac.washington.edu/display/SWS/Resource+List+V5)!
* [Version List](https://wiki.cac.washington.edu/display/SWS/Version+List+Resource+v5)

##### planned for next minor release
* [Test Score](https://wiki.cac.washington.edu/display/SWS/Test+Score+Resource+V5)
* [Personal Financial](https://wiki.cac.washington.edu/display/SWS/Personal+Financial+Resource+V5)

##### under review
* [Degree Audit](https://wiki.cac.washington.edu/display/SWS/SWS+v5+API)
* [Notice](https://wiki.cac.washington.edu/display/SWS/Notice+Resource+V5)


## Development
Copy ``test/setup/config-sample.js`` to ``test/setup/config.js`` and edit values as needed. Use the ``npm`` commands indicated in ``package.json``.

    npm build
    npm test


## To Do

- [ ] Finish implementing the remaining endpoints
- [ ] Get ``gulp ci`` fully working with scrubbed data to enable CI
