var _ = require('lodash');

var localEnvVars = {
  TITLE:      'WDINSTAGRAM',
  SAFE_TITLE: 'wdinstagram'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
