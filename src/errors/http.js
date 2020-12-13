module.exports = {
  missingParamsError() {
    const errorToReturn = {
      code: 400,
      msg: 'Missing Params, check the api manual for more info',
    };
    return errorToReturn;
  },
};
