module.exports = {
  validSparkPostEmail(emailToBeValid) {
    if (typeof (emailToBeValid) !== 'string') {
      return false;
    }
    const emailProvider = emailToBeValid.split('@')[1];
    if (emailProvider === 'sparkpostbox.com') {
      return true;
    }
    return false;
  },
};
