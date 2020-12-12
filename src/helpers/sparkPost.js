module.exports = {
  mountcontent(from, subject, emailBody) {
    return {
      from,
      subject,
      html: emailBody,
    };
  },
  mountRecipients(recipients) {
    const arrayWithRecipients = recipients.map((recipient) => ({
      address: recipient,
    }));
    return arrayWithRecipients;
  },
};
