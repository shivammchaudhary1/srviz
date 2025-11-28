import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/story" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ],
    services: [
      { name: "F1 Packages", href: "/f1" },
      { name: "Sports Travel", href: "/sports" },
      { name: "VIP Experiences", href: "/vip" },
      { name: "Custom Tours", href: "/custom" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Contact Us", href: "/contact" },
      { name: "FAQs", href: "/faq" },
      { name: "Live Chat", href: "/chat" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Refund Policy", href: "/refund" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "Instagram", icon: "📸", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "YouTube", icon: "📺", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-3 sm:mb-4">
              SPORTS
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 sm:mb-6">
              Your ultimate destination for premium sports travel experiences.
              We create unforgettable memories through world-class events and
              VIP access.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm break-words">
                📧 shivamchaudhary75@gmail.com
              </p>
              <p className="text-gray-300 text-sm">📞 +91 9169235786</p>
              <p className="text-gray-300 text-sm">
                📍 Lucknow, Uttar Pradesh India
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Stay Updated
            </h4>
            <p className="text-gray-300 text-sm mb-3 sm:mb-4">
              Subscribe to our newsletter for the latest sports travel deals.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              />
              <button className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Legal Links */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 gap-4">
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-xl sm:text-2xl hover:text-orange-500 transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 text-xs hover:text-orange-500 transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {currentYear} SPORTS. All rights reserved. | Designed with ❤️
              for sports enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
