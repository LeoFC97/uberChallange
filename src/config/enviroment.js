module.exports = {
  service: {
    port: process.env.PORT || 3000,
    name: process.env.SERVICE_NAME || 'uberChallange',
  },
  external: {
    sparkPost: {
      apiKey: process.env.SPARK_POST_API_KEY || 'mocked',
    },
  },
};
