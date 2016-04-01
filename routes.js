/**
 * Main application routes
 */

'use strict';

module.exports = function(app) {

  // Insert routes below
  app.use('/api/v1/account', require('./components/accounts/api/v1'));

  app.use('/auth', require('./auth'));
};
