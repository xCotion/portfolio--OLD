"use client";
import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory management",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/path-to-image.jpg", // Add your image path
    },
    {
      title: "AI Content Generator",
      description: "AI-powered platform for generating marketing content",
      tech: ["Python", "TensorFlow", "Next.js"],
      image: "/path-to-image.jpg",
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking application",
      tech: ["React Native", "Firebase", "Redux"],
      image: "/path-to-image.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Featured Projects
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Showcasing our best work and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg-secondary rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-48 bg-gray-700">
                {/* Add your image here */}
                <div className="w-full h-full bg-gradient-to-br from-accent-light/20 to-accent-dark/20" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-bg-primary rounded-full text-sm text-accent-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
