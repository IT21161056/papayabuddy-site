import React, { useState, useRef } from 'react';
import { Mail, Send, MessageSquare, ExternalLink } from 'lucide-react';
import SectionTitle from './common/SectionTitle';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const toastId = toast.loading('Sending your message...', {
      style: {
        background: '#059669',
        color: '#fff',
        padding: '16px',
        borderRadius: '8px',
      },
    });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        'service_apthgpf',
        'template_ccnzylz',
        templateParams,
        '5XyyFydxVQmPQC57Y'
      );

      toast.success('Message sent successfully! We will get back to you soon.', {
        id: toastId,
        duration: 5000,
        style: {
          background: '#059669',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
        icon: '🎉',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again later.', {
        id: toastId,
        duration: 5000,
        style: {
          background: '#DC2626',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-800 to-green-700 text-white">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle 
          title="Contact Us" 
          subtitle="Get in Touch with the Research Team"
          lightMode={true}
        />
        
        <div className="mt-8 sm:mt-12 md:mt-16 grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 text-gray-800">
            <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-4 sm:mb-6 flex items-center">
              <MessageSquare className="mr-2 text-yellow-500 h-5 w-5 sm:h-6 sm:w-6" />
              Send a Message
            </h3>
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                >
                  <option value="">Select a subject</option>
                  <option value="Research Inquiry">Research Inquiry</option>
                  <option value="Collaboration Opportunity">Collaboration Opportunity</option>
                  <option value="Application Access">Application Access</option>
                  <option value="Dataset Request">Dataset Request</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white text-sm sm:text-base font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="bg-green-600/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
                <Mail className="mr-2 text-yellow-300 h-5 w-5 sm:h-6 sm:w-6" />
                Contact Information
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="font-medium text-sm sm:text-base">Email</p>
                  <a href="mailto:seprojectgroup123@gmail.com" className="text-yellow-200 hover:text-white text-sm sm:text-base">
                    seprojectgroup123@gmail.com
                  </a>
                </div>
                
                <div>
                  <p className="font-medium text-sm sm:text-base">Software Engineering Department</p>
                  <p className="text-sm sm:text-base">Faculty of Computing</p>
                  <p className="text-sm sm:text-base">Sri Lanka Institute of Information Technology</p>
                  <p className="text-sm sm:text-base">Malabe, Sri Lanka</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-600/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Connect With Us</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="#"
                  className="flex items-center text-yellow-200 hover:text-white transition-colors text-sm sm:text-base"
                >
                  <span className="mr-2">GitHub Repository</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                
                <a
                  href="#"
                  className="flex items-center text-yellow-200 hover:text-white transition-colors text-sm sm:text-base"
                >
                  <span className="mr-2">ResearchGate Project</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                
                <a
                  href="#"
                  className="flex items-center text-yellow-200 hover:text-white transition-colors text-sm sm:text-base"
                >
                  <span className="mr-2">LinkedIn</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              
              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-green-700/50 rounded-lg">
                <p className="text-xs sm:text-sm">
                  For application access requests or dataset inquiries, please include your institutional 
                  affiliation and intended use case in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;