"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaGoogle, FaDatabase, FaLinkedin, FaKey } from "react-icons/fa";
import { SiNextdotjs, SiNestjs, SiMysql, SiPostgresql, SiMongodb, SiFramer, SiKubernetes, SiNginx, SiRailway, SiGraphql } from "react-icons/si";

const tools = [
  { name: "React", icon: FaReact, color: "#61DBFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "MySQL", icon: SiMysql, color: "#00758F" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Docker", icon: FaDocker, color: "#0db7ed" },
  { name: "Git", icon: FaGitAlt, color: "#F1502F" },
  { name: "GitHub", icon: FaGithub, color: "#fff" },
  { name: "Google Cloud", icon: FaGoogle, color: "#4285F4" },
  { name: "JWT", icon: FaKey, color: "#FF9900" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "Nginx", icon: SiNginx, color: "#009639" },
  { name: "Railway", icon: SiRailway, color: "#ffffff" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "LinkedIn", icon: FaLinkedin, color: "#0077B5" },
];

const ToolsSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start bg-transparent px-6 py-20 relative">
      {/* Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-white mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 70 }}
      >
        Tools
      </motion.h1>

      {/* Tools Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full max-w-7xl">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <motion.div
              key={index}
              className="rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer shadow-lg bg-white/5 backdrop-blur-sm"
              whileHover={{
                scale: 1.2,
                rotate: [0, 10, -10, 0],
                boxShadow: "0px 10px 30px rgba(255,255,255,0.3)",
                transition: { type: "tween", duration: 0.6 },
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 80, delay: index * 0.05 }}
            >
              <Icon size={40} color={tool.color} />
              <span className="text-white mt-2 font-semibold text-sm text-center">
                {tool.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ToolsSection;
