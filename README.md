# Serverless Express Example

I'm just trying to figure out how to deploy Express apps to lambda

## Current State
Just deploys a "hello world" function to lambda

## Setup
If you're interested in building off this example, just do the following
1. Install dev dependencies `yarn` and `yarn global add claudia`
2. Set up IAM account, following [this page](https://claudiajs.com/tutorials/installing.html#detailed-info-about-credentials)
3. Update the depoly script in `package.json` (region, handler, role)
4. Change the name in `package.json` if you want

## Running the example
The minimum to get a working example!
1. Run `yarn deploy`
2. Test in terminal with `yarn test`
3. Check your lambdas on AWS, it should be there
