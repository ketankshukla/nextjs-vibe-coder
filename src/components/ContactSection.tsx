import React from 'react';
import { FC } from 'react';

const ContactSection: FC = () => {
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
                <svg className="w-6 h-6 text-[#FFD43B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:resume@ketankshukla.com" className="text-[#FFD43B] hover:underline">
                  resume@ketankshukla.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-[#FFD43B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+16196698545" className="text-[#FFD43B] hover:underline">
                  +1 (619) 669-8545
                </a>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-[#FFD43B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-[#FFD43B]">San Diego, CA</span>
              </div>
            </div>
          </div>
          <div className="contact-form flex-1">
            <h3 className="text-[1.8rem] font-semibold mb-6 text-white">Send Me a Message</h3>
            <form 
              className="space-y-6"
              suppressHydrationWarning={true}
            >
              <div>
                <label htmlFor="name" className="block text-[#FFD43B] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-[#FFD43B]/20 bg-[#3C7A3E]/5 text-white placeholder-[#FFD43B]/50 focus:outline-none focus:ring-2 focus:ring-[#FFD43B]"
                  placeholder="Your Name"
                  required
                  suppressHydrationWarning={true}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#FFD43B] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-[#FFD43B]/20 bg-[#3C7A3E]/5 text-white placeholder-[#FFD43B]/50 focus:outline-none focus:ring-2 focus:ring-[#FFD43B]"
                  placeholder="Your Email"
                  required
                  suppressHydrationWarning={true}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-[#FFD43B] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-[#FFD43B]/20 bg-[#3C7A3E]/5 text-white placeholder-[#FFD43B]/50 focus:outline-none focus:ring-2 focus:ring-[#FFD43B]"
                  placeholder="Subject"
                  suppressHydrationWarning={true}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#FFD43B] mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#FFD43B]/20 bg-[#3C7A3E]/5 text-white placeholder-[#FFD43B]/50 focus:outline-none focus:ring-2 focus:ring-[#FFD43B]"
                  placeholder="Your Message"
                  required
                  suppressHydrationWarning={true}
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#FFD43B] text-[#3C7A3E] rounded-lg hover:bg-[#FFE873] transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
