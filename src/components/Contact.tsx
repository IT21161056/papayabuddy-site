import React, { useState } from 'react';
import { Mail, Send, MessageSquare, ExternalLink } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const Contact: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-800 to-green-700 text-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Contact Us" 
          subtitle="Get in Touch with the Research Team"
          lightMode={true}
        />
        
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-lg shadow-xl p-8 text-gray-800">
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <MessageSquare className="mr-2 text-yellow-500" />
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-green-600/30 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Mail className="mr-2 text-yellow-300" />
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:papayabuddy@research.sliit.lk" className="text-yellow-200 hover:text-white">
                    papayabuddy@research.sliit.lk
                  </a>
                </div>
                
                <div>
                  <p className="font-medium">Research Department</p>
                  <p>Faculty of Computing</p>
                  <p>Sri Lanka Institute of Information Technology</p>
                  <p>Malabe, Sri Lanka</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-600/30 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center text-yellow-200 hover:text-white transition-colors"
                >
                  <span className="mr-2">GitHub Repository</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                
                <a
                  href="#"
                  className="flex items-center text-yellow-200 hover:text-white transition-colors"
                >
                  <span className="mr-2">ResearchGate Project</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                
                <a
                  href="#"
                  className="flex items-center text-yellow-200 hover:text-white transition-colors"
                >
                  <span className="mr-2">LinkedIn</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              
              <div className="mt-8 p-4 bg-green-700/50 rounded-lg">
                <p className="text-sm">
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