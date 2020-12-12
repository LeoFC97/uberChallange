const sparkPost = require('../services/sparkPost');
const errorHandler = require('./errorHandler');

module.exports = {
  async sendMail(req, res) {
    const {
      from, subject, emailBody, recipients,
    } = req.body;
    if (!from || !subject || !emailBody || !recipients) { // valid better
      const { code, msg } = errorHandler.missingParamsError();
      return res.status(code).send({ error: msg });
    }
    const emailSended = await sparkPost.sendMailToSparkApi(from, subject, emailBody, recipients);
    if (emailSended.errors[0]) {
      return res.status(emailSended.statusCode).send(emailSended.errors[0]);
    }
    return res.status(200).send({ emailSended });
  },
};
