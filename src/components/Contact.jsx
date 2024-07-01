import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_eclnwwi", // Replace with your EmailJS service ID
        "template_qqza3bf", // Replace with your EmailJS template ID
        {
          from_name: name, // This should match the placeholder in your template
          user_email: email, // Ensure the placeholder in your template is set for this
          message: message, // This should match the placeholder in your template
          phone: phone,
        },
        "t2-In1T3TwR3ippCd"
      );
      // alert("Email sent successfully!");
      toast.success(`Email has sent successfuly...`);
      setEmail("");
      setMessage("");
      setName("");
      setPhone("");
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.success("Failed to send email. Please try again later.");
    }
  };
  return (
    <div id="contact" data-aos="fade-up">
      <h2 className="text-center text-4xl p-20">Contact Me</h2>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8 ">
                <label
                  htmlFor="email1"
                  className="text-red-500 text-xl font-semibold"
                >
                  Email:{" "}
                </label>
                <p>{"   "}pxdevelopers208@gmail.com</p>
              </div>
            </div>

            <div className="rounded-lg bg-gray-900 p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg bg-gray-800 border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    value={name}
                    required
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg bg-gray-800 border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      value={email}
                      id="email"
                      required
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg bg-gray-800 border-gray-200 p-3 text-sm"
                      placeholder="Contact Number"
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg bg-gray-800 border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    value={message}
                    required
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
