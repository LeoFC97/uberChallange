const SparkPost = require('sparkpost');
const { external } = require('../config/enviroment');
const sparkPostHelper = require('../helpers/sparkPost');
const { validSparkPostEmail } = require('../utils/stringValidator');

const sparky = new SparkPost(external.sparkPost.apiKey);

module.exports = {
  async sendMailToSparkApi(from, subject, emailBody, recipients) {
    if (!validSparkPostEmail(from)) {
      const wrongSparkPostMail = {
        code: 400,
        msg: 'invalid domain, use @sparkpostbox.com',
      };
      return wrongSparkPostMail;
    }
    return sparky.transmissions.send({
      options: { sandbox: true },
      content: sparkPostHelper.mountcontent(from, subject, emailBody),
      recipients: sparkPostHelper.mountRecipients(recipients),
    })
      .then((data) => {
        const sucessOBject = {
          code: 200,
          msg: data,
        };
        return sucessOBject;
      })
      .catch((err) => {
        console.log(err);
        const failRequest = {
          code: 400,
          msg: err,
        };
        return failRequest;
      });
  },
};
