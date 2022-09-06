declare var require: any;

export const environment = {
  production: true,
  identitiesAddress: 'http://localhost:4000',
  mockAddress: 'https://jsonplaceholder.typicode.com',
  version: require('../../package.json').version,
  name: 'Iron',
  auth: {
    useBasic: true,
    useOpenId: true
  }
};
