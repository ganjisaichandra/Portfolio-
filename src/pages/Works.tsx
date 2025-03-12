import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const works = [
  {
    title: "Techkriya College fest",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    deployment: "https://techkriya.vercel.app/",
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    deployment: "https://example.com/portfolio",
  },
  {
    title: "CommunionHUB",
    category: "Frontend Development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    deployment: "https://commuion-hub.vercel.app/",
  },
  {
    title: "Brand Identity",
    category: "Graphic Design",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    deployment: "https://www.behance.net/saichandraganji1",
  },
];

const Works = () => {
  return (
    <div className="font-Futura-Bold pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-Futura-Medium text-4xl font-bold text-center mb-12 text-white"
        >
          My Works
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold">{work.title}</h3>
                  <p className="text-gray-300 mt-2 flex items-center">
                    {work.category}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </p>
                  <a
                    href={work.deployment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
