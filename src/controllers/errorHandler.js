module.exports ={
  missingParamsError(){
    const errorToReturn = {
      code:402,
      msg:"Missing Params, check the api manual for more info"
    }
    return errorToReturn;
  }
}