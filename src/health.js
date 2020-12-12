module.exports = {
  checkHealth(req, res) {
    const response = {
      date_time: new Date().toISOString(),
    };
    return res.status(200).send(response);
  },
};
