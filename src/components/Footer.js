import React from 'react';
import { Instagram, MessageCircle, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Business Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent">
                Karthik Wooden Works
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                High Quality Wooden Works at Low Prices
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-amber-700 transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-amber-700 transition-colors">About</a></li>
                <li><a href="/products" className="hover:text-amber-700 transition-colors">Products</a></li>
                <li><a href="/services" className="hover:text-amber-700 transition-colors">Services</a></li>
                <li><a href="/contact" className="hover:text-amber-700 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#instagram" 
                  className="p-2 rounded-full bg-muted hover:bg-amber-100 dark:hover:bg-amber-900 transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4 text-muted-foreground group-hover:text-amber-700 transition-colors" />
                </a>
                <a 
                  href="#whatsapp" 
                  className="p-2 rounded-full bg-muted hover:bg-green-100 dark:hover:bg-green-900 transition-colors group"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-4 w-4 text-muted-foreground group-hover:text-green-600 transition-colors" />
                </a>
                <a 
                  href="#facebook" 
                  className="p-2 rounded-full bg-muted hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Karthik Wooden Works. All rights reserved.
            </p>
            <div className="w-full relative flex flex-col items-center justify-center">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 mb-1 flex flex-col items-center group">
                <button
                  className="font-semibold text-amber-700 text-center focus:outline-none hover:underline"
                  tabIndex={0}
                >
                  Designed by Vamsi
                </button>
                <div className="hidden group-hover:flex group-focus-within:flex flex-col items-center mt-2 z-50 bg-white dark:bg-zinc-900 border rounded shadow-lg p-3 min-w-[180px]">
                  <a
                    href="https://instagram.com/vamsi_rockingstar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-amber-700 hover:underline mb-2"
                  >
                    Instagram: vamsi_rockingstar
                  </a>
                  <a
                    href="https://wa.me/916304497226"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-700 hover:underline mb-2"
                  >
                    WhatsApp: 6304497226
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vamsipadala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-700 hover:underline"
                  >
                    LinkedIn: VamsiPadala
                  </a>
                </div>
              </div>
              <span className="text-sm text-muted-foreground text-right w-full pt-6">Crafted with love and quality this</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};