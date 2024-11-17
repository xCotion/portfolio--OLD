import { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import './Skills.css';

interface Skill {
  title: string;
  description: string;
  details: string[];
  icon: string;
}

const skillsData: Skill[][] = [
  // Page 1
  [
    {
      title: 'iOS Development',
      description: 'Native Apps & Custom Frameworks',
      details: ['Swift', 'SwiftUI', 'UIKit', 'Core Data'],
      icon: '📱'
    },
    {
      title: 'AI & ML',
      description: 'Machine Learning & AI Solutions',
      details: ['TensorFlow', 'PyTorch', 'Core ML'],
      icon: '🤖'
    },
    {
      title: 'System Architecture',
      description: 'Scalable System Design',
      details: ['Cloud Architecture', 'Microservices'],
      icon: '🏗️'
    }
  ],
  // Page 2
  [
    {
      title: 'Web Development',
      description: 'Modern Web Applications',
      details: ['React', 'Next.js', 'TypeScript'],
      icon: '💻'
    },
    {
      title: 'Backend Development',
      description: 'Robust Server Solutions',
      details: ['Node.js', 'Python', 'Go'],
      icon: '⚙️'
    },
    {
      title: 'DevOps',
      description: 'CI/CD & Infrastructure',
      details: ['Docker', 'Kubernetes', 'AWS'],
      icon: '🚀'
    }
  ]
];

const Skills = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % skillsData.length);
  }, []);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + skillsData.length) % skillsData.length);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: nextPage,
    onSwipedRight: prevPage,
    trackMouse: true,
    preventScrollOnSwipe: true
  });

  const toggleCard = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="min-h-screen bg-bg-primary py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Specialized in creating innovative solutions across multiple domains
          </p>
        </motion.div>

        <div className="relative" {...handlers}>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-bg-secondary/50 hover:bg-bg-secondary/70 text-text-primary w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
            onClick={prevPage}
            aria-label="Previous page"
          >
            ←
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12"
            >
              {skillsData[currentPage].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  className="relative h-[300px] cursor-pointer perspective-1000"
                  onClick={() => toggleCard(index)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`absolute w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                      flippedCards[index] ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* Front of card */}
                    <div className="absolute w-full h-full bg-bg-secondary/30 backdrop-blur-md rounded-xl border border-white/10 p-6 flex flex-col items-center justify-center backface-hidden">
                      <span className="text-4xl mb-4">{skill.icon}</span>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        {skill.title}
                      </h3>
                      <p className="text-text-secondary mb-4">{skill.description}</p>
                    </div>

                    {/* Back of card */}
                    <div className="absolute w-full h-full bg-bg-secondary/40 backdrop-blur-md rounded-xl border border-white/10 p-6 flex flex-col items-center justify-center backface-hidden rotate-y-180">
                      <h3 className="text-xl font-semibold text-text-primary mb-4">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {skill.details.map((detail, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-bg-primary/50 rounded-full text-sm text-accent-light"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-bg-secondary/50 hover:bg-bg-secondary/70 text-text-primary w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
            onClick={nextPage}
            aria-label="Next page"
          >
            →
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {skillsData.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentPage === index
                  ? 'bg-accent-light scale-125'
                  : 'bg-text-secondary/20'
              }`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;