import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';

const ContactForm = ({ type = 'sales', title, subtitle, description, email }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize EmailJS with your User ID
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');
    
    try {
      // Check if EmailJS is properly configured
      if (EMAILJS_CONFIG.PUBLIC_KEY === "YOUR_EMAILJS_PUBLIC_KEY" || 
          EMAILJS_CONFIG.SERVICE_ID === "YOUR_EMAILJS_SERVICE_ID" || 
          (type === 'sales' && EMAILJS_CONFIG.SALES_TEMPLATE_ID === "YOUR_EMAILJS_SALES_TEMPLATE_ID") ||
          (type === 'support' && EMAILJS_CONFIG.SUPPORT_TEMPLATE_ID === "YOUR_EMAILJS_SUPPORT_TEMPLATE_ID")) {
        throw new Error("The EmailJS configuration is not set up. Please update the credentials in src/config/emailjs.js");
      }

      // Get current date and time for the submission
      const submissionDate = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'long'
      });

      // Format message with additional details
      const formattedMessage = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}
Form Type: ${type === 'sales' ? 'Sales Enquiry' : 'Support Request'}
Submission Date: ${submissionDate}

Message:
${formData.message}
      `.trim();

      // Prepare template parameters
      const templateParams = {
        to_email: type === 'support' ? 'support@bhatiyaniai.com' : 'support@bhatiyaniai.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: `${type.toUpperCase()} Enquiry: ${formData.subject}`,
        message: formData.message,
        formatted_message: formattedMessage,
        reply_to: formData.email,
        form_type: type === 'sales' ? 'Sales Enquiry' : 'Support Request',
        submission_date: submissionDate
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        type === 'sales' ? EMAILJS_CONFIG.SALES_TEMPLATE_ID : EMAILJS_CONFIG.SUPPORT_TEMPLATE_ID,
        templateParams
      );

      if (response.status !== 200) {
        throw new Error(`EmailJS returned status code ${response.status}`);
      }

      // Show success message
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      
      let errorMsg = 'There was an error sending your message. ';
      
      // More specific error messages based on the error
      if (error.message.includes("configuration is not set up")) {
        errorMsg = `Configuration error: ${error.message}. Please contact the website administrator.`;
      } else if (error.status === 400) {
        errorMsg = `Configuration error: The EmailJS service is not properly configured. (Status: ${error.status}, Details: ${error.text}) Please try again later or contact us directly via email at ${email}.`;
      } else if (error.status === 429) {
        errorMsg = 'Too many requests. Please try again later.';
      } else {
        errorMsg += 'Please try again later or contact us directly via email.';
      }
      
      setSubmitStatus('error');
      setErrorMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="max-w-2xl mx-auto"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-10">
        {subtitle && <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{subtitle}</p>}
        <h2 className="text-3xl font-bold mb-4 dark:text-white">{title}</h2>
        <p className="text-secondary-600 dark:text-secondary-300 mb-6">{description}</p>
        {email && (
          <a href={`mailto:${email}`} className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
            {email}
          </a>
        )}
      </div>

      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-800 dark:text-white"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-800 dark:text-white"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-800 dark:text-white"
            placeholder="+91 9480603623"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-800 dark:text-white"
            placeholder={`${type === 'sales' ? 'Product Inquiry' : 'Support Request'}`}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-800 dark:text-white resize-none"
            placeholder="Please describe how we can help you..."
          ></textarea>
        </div>

        <div className="flex items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300 text-center">
            Thank you for your message! We'll get back to you as soon as possible.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300 text-center">
            {errorMessage}
          </div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm; 