const stringValidator = require('../../utils/stringValidator');

describe('stringValidator Util', () => {
  test('Send wrong email, should return false', () => {
    const returnOfFunction = stringValidator.validSparkPostEmail('test@wrongString.com');
    expect(returnOfFunction).toBe(false);
  });
  test('Send correct email, should return false', () => {
    const returnOfFunction = stringValidator.validSparkPostEmail('test@sparkpostbox.com');
    expect(returnOfFunction).toBe(true);
  });
  test('Send numbers, should return false', () => {
    const returnOfFunction = stringValidator.validSparkPostEmail(123);
    expect(returnOfFunction).toBe(false);
  });
});
