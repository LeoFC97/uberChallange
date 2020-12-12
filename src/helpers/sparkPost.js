module.exports = {
  mountcontent(params) {
    return {
      from: params.from,
      subject: 'Oh hey',
      html: '<html><body><p>Testing SparkPost - the most awesomest email service!</p></body></html>',
    };
  },
};
