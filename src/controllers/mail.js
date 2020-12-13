const sparkPost = require('../services/sparkPost');
const { missingParamsError } = require('../errors/http');
const { missingApiKey, missingSendingDomainSpecified } = require('../errors/sparkPost');

module.exports = {
  async sendMail(req, res) {
    const {
      from, subject, emailBody, recipients,
    } = req.body;
    if (!from || !subject || !emailBody || !recipients) { // valid better
      const { code, msg } = missingParamsError();
      return res.status(code).send({ error: msg });
    }
    const responseOfSparkPostService = await sparkPost
      .sendMailToSparkApi(from, subject, emailBody, recipients);
    if (responseOfSparkPostService.code !== 200) {
      if (responseOfSparkPostService.statusCode === 403) {
        const { code, msg } = missingApiKey();
        return res.status(code).send({ error: msg });
      }
      if (responseOfSparkPostService.statusCode === 400) {
        const { code, msg } = missingSendingDomainSpecified();
        return res.status(code).send({ error: msg });
      }
    }
    return res.status(responseOfSparkPostService.code)
      .send({ msg: responseOfSparkPostService.msg });
  },
};
