import React from 'react';
import { Package, Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Status', href: '#' },
      { name: 'Updates', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Email', icon: Mail, href: '#' }
  ];

  return (
    <footer className="relative mt-auto bg-gradient-to-br from-slate-900 via-purple-900/90 to-indigo-900/90 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company info */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">InventoryFlow</h3>
                  <p className="text-xs text-purple-300">Management System</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Streamline your inventory operations with intelligent insights and seamless management tools designed for modern businesses.
              </p>
              
              {/* Social links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group p-2.5 bg-white/5 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 rounded-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10 hover:border-purple-400/30"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 text-slate-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links sections */}
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                  Product
                </h4>
                <ul className="space-y-3">
                  {footerLinks.product.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-purple-300 text-sm transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                  Company
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-purple-300 text-sm transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                  Support
                </h4>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-purple-300 text-sm transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter signup */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="max-w-md mx-auto text-center">
              <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
              <p className="text-slate-300 text-sm mb-4">Get the latest updates and features delivered to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all duration-300"
                />
                <button className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-slate-300 text-sm">
              <span>&copy; 2025 InventoryFlow. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-1 text-slate-300 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
              <span>for better inventory management</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-slate-300 hover:text-purple-300 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-300 hover:text-purple-300 text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;