import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Activity, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Zap className="h-8 w-8 text-green-400 group-hover:text-green-300 transition-colors" />
                <Activity className="h-4 w-4 text-blue-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Zetta GPU
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Revolutionary GPU sharing platform connecting providers with AI/ML researchers for scalable, cost-effective computing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/providers" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">GPU Providers</Link></li>
              <li><Link to="/users" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">LLM Users</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">About Us</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Blog</a></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Support Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Status Page</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2025 Zetta GPU. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2 md:mt-0">
            Powered by advanced GPU allocation algorithms
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
