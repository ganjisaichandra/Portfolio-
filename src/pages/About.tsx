import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <img
              src="https://avatars.githubusercontent.com/u/110524572?v=4"
              alt="Profile"
              className="rounded-2xl shadow-xl w-full max-w-[900px] h-auto sm:max-w-[400px] md:max-w 900px justify-evenly]"
            />
            //{" "}
            <div className="absolute -bottom-6 -right-6 w-50 h-48 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl -z-10 opacity-50"></div>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-6 text-white">About Me</h1>
            <p className="text-gray-300 mb-6">
              Hi! I'm G.S.V. Sai Chandra, a passionate Mechanical Engineering
              student at NIT Andhra Pradesh, with a deep enthusiasm for web
              development, Python programming, AI, and cloud computing. My
              journey blends engineering problem-solving with technology-driven
              innovation, allowing me to create solutions that are both
              functional and efficient.
            </p>
            <p className="text-gray-300 mb-6">
              I’m a full-stack developer with expertise in Next.js, React,
              Python, Flask, and cloud technologies, applying my skills through
              freelance projects and internships. Beyond coding, I’m also a
              graphic designer, proficient in Figma and Photoshop crafting
              engaging UI/UX designs, branding, and digital medi . My
              contributions to college tech fests and association websites have
              enhanced user experiences. Currently, I’m seeking opportunities to
              collaborate with startups and industry professionals, expanding my
              knowledge in full-stack development and AI-driven solutions. Let’s
              connect and innovate together! 🚀
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
                <h3 className="font-bold text-purple-400">Design Tools</h3>
                <p className="text-gray-300">
                  Figma, Adobe XD, Illustrator, Photoshop,
                </p>
              </div>
              <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
                <h3 className="font-bold text-purple-400">Development</h3>
                <p className="text-gray-300">
                  MERN Stack, React, TypeScript, Tailwind CSS, Next.js, Python
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
