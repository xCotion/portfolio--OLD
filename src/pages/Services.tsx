"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from '../components/Animation/AnimatedSection';

const Services: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      icon: "🌐",
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and beautiful user interfaces with seamless experiences",
      icon: "🎨",
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      icon: "📱",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment",
      icon: "☁️",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Our Services
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Delivering cutting-edge solutions tailored to your needs
            </p>
          </motion.div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={0.2 + index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-bg-secondary p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-text-secondary">{service.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
