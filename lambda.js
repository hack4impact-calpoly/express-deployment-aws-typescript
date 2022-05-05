require('source-map-support/register');
const serverlessExpress = require('@vendia/serverless-express');
const app = require('./backend/server.ts').default;
exports.handler = serverlessExpress({ app });
