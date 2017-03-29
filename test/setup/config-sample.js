let config = {
  baseUrl:   'https://ws.admin.washington.edu/student/v5/',
  cacheExt:  '.json',
  cacheMode: 'record',
  cachePath: '/FULL/PATH/TO/where you want to cache http requests/',
  cert:      '/FULL/PATH/TO/509Cert',
  key:       '/FULL/PATH/TO/509Key',
  logLevel:  process.env.LOG_LEVEL || 'info',
  // token:     'Your Access Token if not using x509'
};

export default config;
