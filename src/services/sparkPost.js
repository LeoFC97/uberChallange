const SparkPost = require('sparkpost');
const { external } = require('../config/enviroment');
const sparkPostHelper = require('../helpers/sparkPost');

const sparky = new SparkPost(external.sparkPost.apiKey);

module.exports = {
  async sendMailToSparkApi(params) {
    return sparky.transmissions.send({
      options: { sandbox: true },
      content: sparkPostHelper.mountcontent(params),
      recipients: [{ address: 'developers+nodejs@sparkpost.com' }],
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
