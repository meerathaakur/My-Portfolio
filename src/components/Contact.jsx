import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, Linkedin, Github, Twitter, LinkedinIcon } from 'lucide-react';
import PropTypes from 'prop-types';

import toast from 'react-hot-toast';

const socialLinks = {
  github: 'https://github.com/meerathaakur',
  linkedin: 'https://www.linkedin.com/in/meera-sharma-226b2725a/',
  twitter: 'https://x.com/meerasrmaa'
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Thanks for your message!");
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mr-4">
                    <Mail size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">Email</h4>
                    <a href="mailto:meerasrmaa@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      meerasrmaa@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                {/* <div className="flex items-start">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mr-4">
                    <Phone size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">Phone</h4>
                    <a href="tel:+917033642156" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      +91 7033642156
                    </a>
                  </div>
                </div> */}

                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mr-4">
                    <LinkedinIcon size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/meera-sharma-226b2725a/" target='_blank' className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Meera Sharma
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mr-4">
                    <MapPin size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-1">Location</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Faridabad, Sector-31, Haryana, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-medium text-slate-900 dark:text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a aria-label="LinkedIn" href={socialLinks.linkedin} target="_blank" className="p-3 rounded-full bg-slate-200 dark:bg-slate-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">

                    <Linkedin />
                  </a>
                  <a aria-label="GitHub" href={socialLinks.github} target="_blank" className="p-3 rounded-full bg-slate-200 dark:bg-slate-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    <Github />
                  </a>
                  <a aria-label="Twitter" href={socialLinks.twitter} target="_blank" className="p-3 rounded-full bg-slate-200 dark:bg-slate-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    <Twitter />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send Message</h3>

              {submitted ? (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-700 dark:text-green-400 mb-6">
                  <p>Thank you for your message! I'll get back to you as soon as possible.</p>

                </div>
              ) : error ? (
                <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-700 dark:text-red-400 mb-6">
                  <p>{error}</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      placeholder="Enter Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      placeholder="yourmail@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Enter Subject"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;