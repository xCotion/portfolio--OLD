"use client";
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const skills = [
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "Mobile Development",
    "Cloud Architecture",
    "DevOps",
  ];

  const experiences = [
    {
      year: "2023",
      title: "Senior Developer",
      company: "Tech Innovation Labs",
      description: "Leading development of enterprise-scale applications",
    },
    {
      year: "2021",
      title: "Full Stack Developer",
      company: "Digital Solutions Inc",
      description: "Building scalable web applications and APIs",
    },
    {
      year: "2019",
      title: "Frontend Developer",
      company: "Creative Agency",
      description: "Creating responsive and interactive user interfaces",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* About Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              About Me
            </h1>
            <p className="text-text-secondary text-lg">
              Passionate developer crafting digital experiences
            </p>
          </div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-bg-secondary p-8 rounded-lg mb-12"
          >
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Bio</h2>
            <p className="text-text-secondary leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating
              modern and efficient digital solutions. My passion lies in transforming complex
              problems into elegant, user-friendly applications.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-text-primary mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-bg-secondary rounded-full text-accent-light"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-text-primary mb-6">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.title}
                  className="bg-bg-secondary p-6 rounded-lg flex gap-6"
                >
                  <div className="text-accent-light font-mono">{exp.year}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-1">
                      {exp.title}
                    </h3>
                    <div className="text-accent-light mb-2">{exp.company}</div>
                    <p className="text-text-secondary">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
