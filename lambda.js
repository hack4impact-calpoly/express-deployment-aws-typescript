require('source-map-support/register');
const serverlessExpress = require('@vendia/serverless-express');
const app = require('./backend/server.ts');
console.log(app.handle);
console.log("**typeof app.handle:::"+typeof(app.handle));
exports.handler = serverlessExpress({ app });
