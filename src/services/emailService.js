const emailjs = require("emailjs-com");

const sendEmail = async (req, res) => {
  const { name, email, message, phone } = req.body;

  console.log("Details", name, email, message, phone);

  try {
    const response = await emailjs.send(
      process.env.SERVICE_ID, // Your EmailJS service ID
      process.env.TEMPLATE_ID, // Your EmailJS template ID
      {
        from_name: name, // This should match the placeholder in your template
        user_email: email, // Ensure the placeholder in your template is set for this
        message: message, // This should match the placeholder in your template
        phone: phone, // This should match the placeholder in your template
      },
      process.env.USER_ID // Your EmailJS user ID (Public Key)
    );

    res.status(200).json({ message: "Email sent successfully", response });
  } catch (error) {
    console.error("Failed to send email:", error);
    res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
};

module.exports = {
  sendEmail,
};
