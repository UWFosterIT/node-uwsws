# UW Student Web Service
This implements most of the [v5 UW Student Webservice endpoints](https://wiki.cac.washington.edu/display/SWS/Student+Web+Service).  Each endpoint is queried using convienent options to build the final ``request``. This module was written with es6 in mind and builds a compatable distribution for es5 and es6.

This module assumes you have gone through all the required steps to get access and verified that access as [documented in the SWS wiki](https://wiki.cac.washington.edu/display/SWS/Student+Web+Service).

## USE

### Installation

    npm install uwsws

### Examples

Import the module, set it's configuration and make requests.

```JavaScript
const uwsws = import('uwsws');

let config = {
  baseUrl: 'https://ws.admin.washington.edu/student/v5/',
  cert: '/path/to/your/x509.pem',
  key: '/path/to/your/x509.key'
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

Using the same config,  get Comp Sci course from 2015 winter.

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
For a more examples see ``test/unit/*``.  For a full list of all the options see ``src/modules/*``.  Right now there isn't a 100% coverage of all the options but in theory they should work in the context of how they are supposed to work as described in the SWS documentation.  If you find one that doesn't work please create an issue.

## Endpoint Implementation
All links below go to the official service documentation.  The code block refers to it's implementation in this module.

#### Fully Supported
All of the ``callback`` methods are in the same format as those provided by the ``request`` module. In most methods the body is returned as the 3rd param in the callback, however, where it makes sense some of the original body is removed to provide cleaner access to only the data you need.

All of the ``option`` parameters are outlined in ``sr/modules/[endpoint]``

* [Campus](https://wiki.cac.washington.edu/display/SWS/Campus+Search+Resource+V5)  ``uwsws.campus.all(callback)``
* [College Search](https://wiki.cac.washington.edu/display/SWS/College+Search+Resource+V5)  ``uwsws.college.search(campusName, callback)``
* [Course](https://wiki.cac.washington.edu/display/SWS/Course+Resource+v5) ``uwsws.course.get(options, callback)``
* [Course Search](https://wiki.cac.washington.edu/display/SWS/Course+Search+Resource+V5) ``uwsws.course.search(options, callback)``
* [Curriculumn Search](https://wiki.cac.washington.edu/display/SWS/Curriculum+Search+Resource+V5) ``uwsws.curriculum.search(options, callback)``
* [Department Search](https://wiki.cac.washington.edu/display/SWS/Department+Search+Resource+V5) ``uwsws.department.search(options, callback)``
* [Enrollment](https://wiki.cac.washington.edu/display/SWS/Enrollment+Resource+V5) ``uwsws.enrollment.get(options, callback)``
* [Enrollment Search](https://wiki.cac.washington.edu/display/SWS/Enrollment+Search+Resource+V5) ``uwsws.entrollment.search(options, callback)``
* [Person](https://wiki.cac.washington.edu/display/SWS/Person+Resource+V5) ``uwsws.person.get(regid, callback)``
* [Person Search](https://wiki.cac.washington.edu/display/SWS/Person+Search+Resource+V5) ``uwsws.person.search(options, callback)``
* [Registration Search](https://wiki.cac.washington.edu/display/SWS/Registration+Search+Resource+v5) ``uwsws.registration.search(options, callback)``
* [Section](https://wiki.cac.washington.edu/display/SWS/Section+Resource+V5) ``uwsws.section.get(options, callback)``
* [Section Search](https://wiki.cac.washington.edu/display/SWS/Section+Search+Resource+v5) ``uwsws.section.search(options, callback)``
* [Term](https://wiki.cac.washington.edu/display/SWS/Term+Resource+V5) ``uwsws.term.next(callback)`` or ``.previous(callback)``, or ``.current(callback)`` as well as ``uwsws.term.search(options, callback)``

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

    gulp

The default task will run all the tests using a cache if it exists and create one when it doesn't.

    gulp clean

This allows the developer to clear the existing cache so that subsequent ``gulp`` will use freshly cached files.  This is good to do when UW Student Web Services does an update to their servers/codebase to test them for errors and also of course during development as needed.

    gulp build

And finally, the build will make this es6 module es5 friendly with source maps.

    gulp coverage

Runs generates code coverage report to ``coverage`` that can be sent to Code Climate etc.

## To Do

- [ ] Finish implementing the remaining endpoints
- [ ] Get ``gulp ci`` fully working with scrubbed data to enable CI
