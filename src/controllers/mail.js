const sparkPost = require('../services/sparkPost');

module.exports = {
  async sendMail(req, res) {
    const emailSended = await sparkPost.sendMailToSparkApi(req.body);
    console.log(emailSended.errors[0]);
    if (emailSended.errors[0]) {
      console.log(emailSended.errors[0]);
      return res.status(emailSended.statusCode).send(emailSended.errors[0]);
    }
    return res.status(200).send({ emailSended });
  },
};
