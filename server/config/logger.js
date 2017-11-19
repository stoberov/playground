const morgan = require('morgan');

// Custom token with params and body of the request
morgan.token('details', req => {
  const params = JSON.stringify(req.params);
  const body = JSON.stringify(req.body);

  return `${params} - ${body}`;
});

// Export morgan with custom message format
module.exports = () =>
  morgan(':method :url :status - :response-time ms - :details');
