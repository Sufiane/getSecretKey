'use strict';

const data = require('./data.js');
const args = process.argv;

const getSecretKey = function(givenEndpoint){
    const endpointIndex = data.endpoints.indexOf(givenEndpoint)

    if (endpointIndex > -1) {
        // Since all the keys are string it's safe to use keys
        const secretKeys = Object.keys(data.keys)

        return secretKeys[endpointIndex]
    }

    return 'Error'
};

if(args.length > 2){
  let endpoints = args.slice(2, args.length);
  for(let i in endpoints){
    console.log(getSecretKey(endpoints[i]));
  };
}
else{
  console.log('you must specify an endpoint');
  process.exit(0);
}






