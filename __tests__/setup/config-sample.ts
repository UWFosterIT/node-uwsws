// If you want to enable logging, uncomment the following code.
// log4js is installed as a dev dependency.

// import log4js from 'log4js';

// log4js.configure({
//   appenders: {
//     out: {
//       type: 'stdout',
//       layout: {
//         type: 'pattern',
//         pattern: '%d - %p: [%c] %m%n',
//       },
//     },
//   },
//   categories: { default: { appenders: ['out'], level: 'error' } },
// });

export default {
  organizationName: 'YOUR ORGANIZATION NAME',
  baseUrl: 'https://ws.admin.washington.edu/student/v5/',
  uwSwsLogLevel: 'error',
  // Change certInfo property if using one of the built-in certFetcher helpers.
  certData: {
    cert: 'PASS CERT STRING OR BUFFER HERE',
    key: 'PASS CERT STRING OR BUFFER HERE',
  },
};
