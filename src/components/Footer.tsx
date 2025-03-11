import React from "react";
import { Github, Behance, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Let's create something amazing together
            </h3>
            <p className="mt-2 text-gray-400">
              Get in touch for collaborations and opportunities
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/ganjisaichandra"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Behance className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/g-s-v-sai-chandra-494aa0227/"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
