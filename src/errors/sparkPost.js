module.exports = {
  missingApiKey() {
    const errorToReturn = {
      code: 403,
      msg: 'SparkPost api key missing',
    };
    return errorToReturn;
  },
  missingSendingDomainSpecified() {
    const erroToReturn = {
      code: 400,
      msg: 'No sending domain specified',
    };
    return erroToReturn;
  },
  wrongSendingDomainSpecified() {
    const erroToReturn = {
      code: 400,
      msg: 'invalid domain, use @sparkpostbox.com',
    };
    return erroToReturn;
  },
};
