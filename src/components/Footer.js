import React from 'react';
import { ArrowUp, MessageCircle, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-[#151a23] border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Karthik Wood Works
            </h3>
            <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
              Crafting beautiful, durable wooden furniture with traditional craftsmanship 
              and modern precision. Your trusted partner for quality woodworks.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <Heart className="h-4 w-4 mr-1 text-red-400" />
              <span>Made with passion in India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {[
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Return Policy', href: '/returns' },
                { name: 'Warranty', href: '/warranty' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="text-center md:text-left">
              <p className="text-gray-300">📞 Call us at</p>
              <a 
                href="tel:+917981511748" 
                className="text-amber-400 hover:text-amber-300 font-medium"
              >
                +91 79815 11748
              </a>
            </div>
            <div className="text-center">
              <p className="text-gray-300">📧 Email us at</p>
              <a 
                href="mailto:Karthikwoodworks47@gmail.com" 
                className="text-amber-400 hover:text-amber-300 font-medium"
              >
                Karthikwoodworks47@gmail.com
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300">📍 Visit our workshop</p>
              <p className="text-amber-400 font-medium">Kannapuram, Andhra Pradesh</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright and Developer Credit */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
              <span className="text-gray-400">
                © {currentYear} Karthik Wood Works. All rights reserved.
              </span>
              <div className="hidden sm:block text-gray-500">•</div>
              <span className="text-gray-400 text-center sm:text-left">
                Designed & Developed by{' '}
                <a 
                  href="https://www.linkedin.com/in/padalavamsi/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-green-400 hover:text-green-300 font-semibold transition-colors duration-200 hover:underline"
                >
                  Vamsi
                </a>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="group bg-gray-700 hover:bg-amber-600 text-white rounded-full p-3 flex items-center justify-center transition-all duration-200 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
              </button>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917981511748"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-500 hover:bg-green-600 text-white rounded-full p-3 flex items-center justify-center transition-all duration-200 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="h-5 w-5 group-hover:animate-pulse" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};