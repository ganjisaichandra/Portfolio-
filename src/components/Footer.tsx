import React from "react";
import { Github, Twitter, Linkedin, Instagram, Figma } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-crimson/50 backdrop-blur-sm border-t border-white-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="font-Futura-Medium text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
              Let's create something amazing together
            </h3>
            <p className="text-blue-600">
              Get in touch for collaborations and opportunities
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/ganjisaichandra"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/g-s-v-sai-chandra-494aa0227/"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.figma.com/@DesignHive"
              className="text-gray-400 hover:text-red-400 transistion-colors"
            >
              <Figma className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} G.S.V.SAI CHANDRA. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
