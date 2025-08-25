import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Globe, Shield, Award, Star, Send, CheckCircle, AlertCircle } from 'lucide-react';

// Type definitions for EmailJS
declare global {
  interface Window {
    emailjs: {
      init: (key: string) => void;
      sendForm: (serviceId: string, templateId: string, form: HTMLFormElement, publicKey: string) => Promise<{ text: string }>;
    };
  }
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  submit?: string;
}

interface FormState {
  name: string;
  email: string;
  message: string;
  submitting: boolean;
  submitted: boolean;
  errors: FormErrors | null;
}

const Footer = () => {
  const form = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
    submitting: false,
    submitted: false,
    errors: null
  });

  // EmailJS configuration - Replace with your actual values
  const EMAIL_SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
  const EMAIL_TEMPLATE_ID = ''; // Replace with your EmailJS template ID
  const EMAIL_PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key

  // EmailJS is initialized in index.html

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Reset errors
    setState(prev => ({ ...prev, errors: null }));

    // Validation
    const errors: FormErrors = {};
    if (!state.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!state.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(state.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!state.message.trim()) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length > 0) {
      setState(prev => ({ ...prev, errors }));
      return;
    }

    setState(prev => ({ ...prev, submitting: true }));

    try {
      // Check if EmailJS is loaded
      if (typeof window === 'undefined' || !window.emailjs) {
        throw new Error('EmailJS is not loaded. Please add the EmailJS script to your HTML.');
      }

      // Send email using EmailJS
      if (form.current) {
        const result = await window.emailjs.sendForm(
          EMAIL_SERVICE_ID,
          EMAIL_TEMPLATE_ID,
          form.current,
          EMAIL_PUBLIC_KEY
        );

        console.log('Email sent successfully:', result.text);
        
        setState({
          name: '',
          email: '',
          message: '',
          submitting: false,
          submitted: true,
          errors: null
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setState(prev => ({ ...prev, submitted: false }));
        }, 5000);
      }

    } catch (error) {
      console.error('EmailJS error:', error);
      setState(prev => ({
        ...prev,
        submitting: false,
        errors: { submit: 'Failed to send message. Please try again or contact us directly.' }
      }));
    }
  };

  return (
    <footer id="contact" className="bg-white text-gray-800 border-t border-gray-200">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6">
            Let's Get in Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 px-8 py-10 shadow-lg">
            {state.submitted ? (
              // Success Message
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for your message. We'll get back to you soon!</p>
              </div>
            ) : (
              <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-lg font-semibold text-gray-800">Name</label>
                                  <input
                    id="name"
                    name="user_name" // EmailJS template variable
                    type="text"
                    required
                    className={`bg-white flex h-12 w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-300 ${
                      state.errors?.name 
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                        : 'border-gray-300 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                    }`}
                    placeholder="Enter your name"
                    value={state.name}
                    onChange={(e) => setState({ ...state, name: e.target.value })}
                  />
                  {state.errors?.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {state.errors.name}
                    </p>
                  )}
              </div>

                              <div className="space-y-2">
                  <label htmlFor="email" className="text-lg font-semibold text-gray-800">Email</label>
                  <input
                    id="email"
                    name="user_email" // EmailJS template variable
                    placeholder="Enter your email"
                    type="email"
                    className={`bg-white flex h-12 w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-300 ${
                      state.errors?.email 
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                        : 'border-gray-300 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                    }`}
                    required
                    value={state.email}
                    onChange={(e) => setState({ ...state, email: e.target.value })}
                  />
                  {state.errors?.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {state.errors.email}
                    </p>
                  )}
                </div>

                              <div className="space-y-2">
                  <label htmlFor="message" className="text-lg font-semibold text-gray-800">Message</label>
                  <textarea
                    className={`bg-white flex min-h-[120px] w-full rounded-xl border px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-300 resize-none ${
                      state.errors?.message 
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                        : 'border-gray-300 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                    }`}
                    id="message"
                    name="message" // EmailJS template variable
                    placeholder="Enter your message"
                    value={state.message}
                    onChange={(e) => setState({ ...state, message: e.target.value })}
                  />
                  {state.errors?.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {state.errors.message}
                    </p>
                  )}
                                </div>

                {state.errors?.submit && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      {state.errors.submit}
                    </p>
                  </div>
                )}

                <button
                  className="group/btn relative block h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 py-3 text-center font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:from-blue-700 hover:via-sky-600 hover:to-cyan-600 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  type="submit"
                  disabled={state.submitting}
                >
                  <span className="flex items-center justify-center">
                    {state.submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </>
                    )}
                  </span>
                </button>
            </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Connect with Us
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 bg-white shadow-sm">
                  <Mail className="h-6 w-6 text-gray-700" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 font-medium">Email us at</p>
                  <p className="text-gray-900 text-lg font-semibold">venienter@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 bg-white shadow-sm">
                  <Phone className="h-6 w-6 text-gray-700" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 font-medium">Call us at</p>
                  <p className="text-gray-900 text-lg font-semibold">+91 91762 03070</p>
                  <p className="text-gray-500 text-sm">24/7 Emergency Support</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 bg-white shadow-sm">
                  <MapPin className="h-6 w-6 text-gray-700" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 font-medium">Visit us at</p>
                  <p className="text-gray-900 text-lg font-semibold">3564,Rajammal Nagar,TNHB,Ayappakam,Chennai-600077</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 bg-white shadow-sm">
                  <Globe className="h-6 w-6 text-gray-700" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 font-medium">Visit our website</p>
                  <p className="text-gray-900 text-lg font-semibold">www.swimdesigners.com</p>
                  <p className="text-gray-500 text-sm">Explore our portfolio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      {/* Bottom Section */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © 2025 Swim Designers. All rights reserved.
            </div>
            
            <div className="text-gray-500 text-sm">
              Designed by <span className="text-red-600 font-semibold">Ravvyn</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;