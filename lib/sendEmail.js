const sendEmail = async (transporter, defaultMailOptions) => {
  try {
    await transporter.sendMail(defaultMailOptions);
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error };
  }
};

module.exports = { sendEmail };
