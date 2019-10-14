module.exports = function(req, res, next) {
  console.log('Hello middleware in environment: ' + process.env.NODE_ENV)
  next();
};
  