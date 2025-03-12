import React from "react";
import { motion } from "framer-motion";
import { Award, Code, Layout, Star } from "lucide-react";
import { NavLink } from "react-router-dom";

const skills = [
  "UI/UX Design",
  "React",
  "TypeScript",
  "Figma",
  "Adobe XD",
  "Canva",
  "Tailwind CSS",
  "Next.js",
  "Node.js",
  "Machine Learning",
];

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-Futura-Bold Stext-8xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-indigo-400 bg-clip-text text-transparent p-3">
              Ganji Sai chandra
            </h1>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Graphic Designer & Frontend Developer
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Crafting beautiful digital experiences through design and code.
              Bringing ideas to life with creativity and precision.
            </p>
            <NavLink to="/works">
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                View My Work
              </button>
            </NavLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQFpBEaO5pMRxg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730019602519?e=1747267200&v=beta&t=5_Rhzmr1JAX8g9mQkhWUDr425Byngt4LDuGMJAgyIm4"
              alt="Designer at work"
              className="rounded-2xl shadow-xl w-full max-w-[900px] h-auto sm:max-w-[400px] md:max-w 900px justify-end]"
            />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-Futura-Bold text-3xl font-bold text-center mb-12 text-white">
            Skills & Expertise
          </h2>
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex space-x-8 whitespace-nowrap"
            >
              {[...skills, ...skills].map((skill, index) => (
                <span
                  key={index}
                  className=" p-6 border-2 border-blue-500 rounded-lg shadow-lg transition duration-300 hover:shadow-purple-500/90 hover:shadow-xl px-6 py-3 bg-gray-900 rounded-full shadow-md text-purple-400 border border-gray-800"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Layout className="w-8 h-8 mx-auto text-purple-400" />
              <h3 className="mt-4 text-3xl font-bold text-white">150+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 mx-auto text-purple-400" />
              <h3 className="mt-4 text-3xl font-bold text-white">50+</h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div className="text-center">
              <Code className="w-8 h-8 mx-auto text-purple-400" />
              <h3 className="mt-4 text-3xl font-bold text-white">100K+</h3>
              <p className="text-gray-400">Lines of Code</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 mx-auto text-purple-400" />
              <h3 className="mt-4 text-3xl font-bold text-white">15+</h3>
              <p className="text-gray-400">Awards Won</p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="mt-10 text-center text-wrap md:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent py-6 animate-gradient">
        <p>
          Designing Your Vision, Developing Your Success
          <br />
          Let’s Build Something Extraordinary!
        </p>
      </section>

      {/* Add padding to the next element */}
      <div className="mt-12">{/* Next element content here */}</div>
    </div>
  );
};

export default Home;
