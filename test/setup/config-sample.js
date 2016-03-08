let config = {
  baseUrl:   'https://ws.admin.washington.edu/student/v5/',
  cert:      '/FULL/PATH/TO/509Cert',
  key:       '/FULL/PATH/TO/509Key',
  cacheMode: 'record',
  cachePath: '/FULL/PATH/TO/where you want to cache http requests/',
  logLevel:  process.env.LOG_LEVEL || 'info'
};

export default config;
