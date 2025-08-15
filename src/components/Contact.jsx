import React,{useState} from "react";
import { Linkedin, Mail, MapPin, Phone, Send,Github } from "lucide-react";

function Contact() {
  const [result, setResult] =useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Email sent sucessfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert("failed to send email")
      setResult(data.message);
    }
  };
  return (
    <section id="Contact" className="min-h-screen py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text">Get In</span>
          <span className="blue-text"> Touch</span>
        </h2>
        <p className="text-center text-[15px] text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-center dark:text-white">Contact Information</h3>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <Mail className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">Email</h4>
                <a
                  href="mailto:khanirfanmehmood098@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                >
                  khanirfanmehmood098@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <Phone className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">Phone</h4>
                <a
                  href="tel:+918957651639"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                >
                  +91 8957651639
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <MapPin className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">Mumbai, India</p>
              </div>
            </div>

            {/* Social Links */}
            {/* Social Links */}
            <div className="pt-4">
              <h4 className="font-medium text-gray-800 dark:text-white mb-4 text-center">
                Connect With Me
              </h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/khan-irfan-0b43742a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/khan1104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

          </div>

          {/* Right - Contact Form */}
          <div className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/30 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Send a Message</h3>
            <form className="space-y-6" onSubmit={onSubmit}>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-500/90 hover:bg-blue-600 text-white px-4 py-3 rounded-full font-medium transition"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
