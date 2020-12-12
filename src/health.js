module.exports={
  checkHealth (req,res){
    console.log(`'`)
    const response = {
      date_time: new Date().toISOString(),
    };
    return res.status(200).send(response)
  }
}