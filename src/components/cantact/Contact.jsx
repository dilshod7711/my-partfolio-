import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await fetch("https://api.telegram.org/bot6325597060:AAH8LV1hq8KTDpHiHXvPCK1su7imkHmntPA/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: 5709738143,
          text: `📩 Yangi xabar:\n👤 Ismi: ${formData.name}\n📧 Email: ${formData.email}\n💬 Xabar: ${formData.message}`
        }),
      });

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('Telegram error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <div
      ref={contactRef}
      className={`container mx-auto text-center  px-4 sm:px-6 lg:px-8 py-6 mt-[80px] bg-gray-950 border-2 border-[#cd5ff8] w-full max-w-[900px] rounded-lg h-auto shadow-lg shadow-[#cd5ff8]/20 transition-all duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <p className="text-base sm:text-lg text-white">How can you communicate?</p>
      <h6 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#cd5ff8]">Contact Me</h6>

      {status === 'sending' && (
        <div className="mb-6 p-4 bg-blue-100 border border-blue-300 text-blue-700 rounded-md text-sm sm:text-base">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-700 mr-2"></div>
            Sending message...
          </div>
        </div>
      )}

      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-md text-sm sm:text-base">
          ✅ Message sent successfully! I'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-md text-sm sm:text-base">
          ❌ Failed to send message. Please try again.
        </div>
      )}

      <div className="contact-form mx-auto w-full max-w-2xl mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-600 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cd5ff8] placeholder-gray-400"
              placeholder="Your Name"
              required
              disabled={status === 'sending'}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-600 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cd5ff8] placeholder-gray-400"
              placeholder="Enter Email"
              required
              disabled={status === 'sending'}
            />
          </div>
        </div>
        <div className="form-group mt-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className="w-full bg-gray-800 border border-gray-600 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cd5ff8] placeholder-gray-400 resize-none"
            placeholder="Write Something"
            required
            disabled={status === 'sending'}
          ></textarea>
        </div>
        <div className="form-group mt-6">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={status === 'sending'}
            className={`w-full bg-[#cd5ff8] text-white p-3 rounded-md font-semibold transition-all duration-300 ${
              status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#b84fe6] hover:shadow-lg hover:shadow-[#cd5ff8]/30'
            }`}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-[#cd5ff8] rounded-full flex items-center justify-center mb-2 text-xl">📧</div>
          <p className="text-sm text-gray-400">Email</p>
          <a href="mailto:dilshodumbarov707@gmail.com" className="text-[#cd5ff8] break-all">dilshodumbarov707@gmail.com</a>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-[#cd5ff8] rounded-full flex items-center justify-center mb-2 text-xl">📱</div>
          <p className="text-sm text-gray-400">Phone</p>
          <a href="tel:+998904471907" className="text-[#cd5ff8]">+998 90 447 19 07</a>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-[#cd5ff8] rounded-full flex items-center justify-center mb-2 text-xl">📍</div>
          <p className="text-sm text-gray-400">Location</p>
          <p className="text-[#cd5ff8]">Tashkent, Uzbekistan</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
