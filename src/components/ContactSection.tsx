"use client";
import React, { FC, useState } from 'react';

const ContactSection: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      setSuccess('Message sent successfully!');
    } catch (err: unknown) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : 'Failed to send message. Please try again.';
      console.error('Form submission error:', err);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-[#3C7A3E]">
      <div className="w-[90%] max-w-[1200px] mx-auto px-4">
        <h2 className="text-[2.5rem] font-bold mb-12 text-center relative text-white">
          Get In Touch
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[70px] h-[4px] bg-[#FFD43B] rounded"></span>
        </h2>
        <div className="contact-container flex flex-col lg:flex-row gap-16">
          <div className="contact-info flex-1">
            <h3 className="text-[1.8rem] font-semibold mb-6 text-white">Let&apos;s Connect</h3>
            <p className="text-[1.1rem] text-gray-200 mb-8 leading-relaxed">
              I&apos;m currently looking for new opportunities in data engineering and ETL development. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <div className="contact-details space-y-4">
              <div className="flex items-center gap-4">
                <a href="mailto:resume@ketankshukla.com" className="text-[#FFD43B] hover:underline">
                  resume@ketankshukla.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a href="tel:+16196698545" className="text-[#FFD43B] hover:underline">
                  +1 (619) 669-8545
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#FFD43B]">San Diego, CA</span>
              </div>
            </div>
          </div>
          <div className="contact-form flex-1">
            <h3 className="text-[1.8rem] font-semibold mb-6 text-white">Send Me a Message</h3>
            <form 
              className="space-y-6"
              onSubmit={handleSubmit}
              suppressHydrationWarning={true}
            >
              {error && (
                <div className="text-red-400 text-sm mb-4">
                  {error}
                </div>
              )}
              {success && (
                <div className="text-green-400 text-sm mb-4">
                  {success}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-300/20 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD43B]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-300/20 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD43B]"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-300/20 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD43B]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-300/20 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD43B]"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 bg-[#FFD43B] text-[#3C7A3E] rounded-lg hover:bg-[#FFE873] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;