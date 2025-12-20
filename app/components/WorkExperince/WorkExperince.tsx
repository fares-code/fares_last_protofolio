"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

// نوع البيانات للخبرة العملية
interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  logo?: string; // اختياري: لو عايز تضيف لوجو الشركة
  companyUrl?: string; // اختياري: لينك الشركة
}

// البيانات - سهل جداً تضيف أو تعدل
const experiences: Experience[] = [
  {
    id: 1,
    company: "Amami Business Services | AMAMI",
    position: "Middle/Senior Full Stack Developer",
    duration: "1-11-2025 - Present",
    location: "Hyberd",
    description: [
      "Built and maintained multiple SaaS products serving 10,000+ users",
      "Improved application performance by 40% through optimization techniques",
      "Led a team of 3 junior developers and mentored them on best practices",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
    technologies: ["React", "Next.js", "NestJS", "PostgreSQL", "Docker", "Kubernetes"],
    companyUrl: "https://www.linkedin.com/company/amami-business-services"
  },
  {
    id: 2,
    company: "Rockai Dev",
    position: "Full Stack Engineer",
    duration: "12-3-2025 - 1-11-2025",
    location: "Alexandira, Egypt",
    description: [
      "Developed responsive web applications using React and Node.js",
      "Collaborated with design team to implement pixel-perfect UIs",
      "Integrated third-party APIs and payment gateways",
      "Wrote comprehensive unit and integration tests",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "AWS"],
    companyUrl: "https://www.linkedin.com/company/rockai-dev/posts/?feedView=all"
  },
  {
    id: 3,
    company: "Legand For Digital Solution",
    position: "Junior Developer",
    duration: "12-6-2024 - 10-3-2025",
    location: "Remote",
    description: [
      "Assisted in building MVP for a fintech startup",
      "Fixed bugs and improved code quality",
      "Participated in agile development process",
    ],
    technologies: ["JavaScript", "React", "Experss","MongoDb"],
  },
  
  {
    id: 1,
    company: "HackerRank",
    position: "Full Stack Instructor",
    duration: "Jan 2024 - Jun 2025",
    location: "Remote",
    description: [
      "Designed and delivered comprehensive full-stack curriculum covering JavaScript, React, Express.js, and MongoDB to 500+ students",
      "Created 50+ hands-on coding challenges and real-world projects to enhance problem-solving skills and prepare students for technical interviews",
      "Mentored aspiring developers through personalized code reviews and one-on-one sessions, improving student success rate by 85%",
      "Developed interactive learning materials and video tutorials that simplified complex concepts like RESTful APIs, authentication, and database design",
      "Collaborated with curriculum development team to integrate industry best practices and modern development workflows into course content",
    ],
    technologies: ["JavaScript", "React", "Express.js", "MongoDB", "Node.js", "Git"],
    companyUrl: "https://www.hackerrank.com"
  },
];

const WorkExperience = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start bg-transparent px-6 py-20 relative">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-900/20 rounded-full blur-[150px] -z-10" />

      {/* Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Work Experience
        </h1>
        <p className="text-gray-400 text-lg">
          My professional journey and achievements
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-5xl">
        {/* Vertical Line */}
        <motion.div
          className="absolute right-1/2 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Experience Cards */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 50,
                delay: index * 0.2,
              }}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute right-1/2 md:left-1/2 top-8 w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full -translate-x-1/2 z-10 shadow-lg shadow-purple-500/50"
                whileHover={{ scale: 1.5, rotate: 180 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Card Content */}
              <motion.div
                className={`w-full md:w-[calc(50%-3rem)] bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10 cursor-pointer ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 60px rgba(139, 92, 246, 0.3)",
                }}
                onClick={() =>
                  setSelectedId(selectedId === exp.id ? null : exp.id)
                }
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold text-white mb-2"
                      whileHover={{ x: 5 }}
                    >
                      {exp.company}
                    </motion.h3>
                    <p className="text-purple-400 text-lg font-semibold mb-3">
                      {exp.position}
                    </p>
                  </div>
                  <FaBriefcase className="text-purple-500 text-3xl" />
                </div>

                {/* Info */}
                <div className="flex flex-wrap gap-4 mb-4 text-gray-300 text-sm">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-400" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-green-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <motion.div
                  initial={false}
                  animate={{ height: selectedId === exp.id ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 mb-4 text-gray-300">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="text-purple-400 mt-1.5">▸</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(168, 85, 247, 0.3)",
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Expand Button */}
                <motion.button
                  className="mt-4 text-sm text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  {selectedId === exp.id ? "Show Less" : "Show More"}
                  <motion.span
                    animate={{ rotate: selectedId === exp.id ? 180 : 0 }}
                  >
                    ▼
                  </motion.span>
                </motion.button>
              </motion.div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-[calc(50%-3rem)]" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Decoration */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
      
      </motion.div>
    </section>
  );
};

export default WorkExperience;