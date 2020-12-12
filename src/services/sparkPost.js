const SparkPost = require('sparkpost');
const { external } = require('../config/enviroment');
const sparkPostHelper = require('../helpers/sparkPost');

const sparky = new SparkPost(external.sparkPost.apiKey);

module.exports = {
  async sendMailToSparkApi(from, subject, emailBody, recipients) {
    return sparky.transmissions.send({
      options: { sandbox: true },
      content: sparkPostHelper.mountcontent(from, subject, emailBody),
      recipients: sparkPostHelper.mountRecipients(recipients),
    })
      .then((data) => {
        console.log(data);
        console.log('Woohoo! You just sent your first mailing!');
      })
      .catch((err) => {
        console.log('Whoops! Something went wrong');
        return err;
      });
  },
};
