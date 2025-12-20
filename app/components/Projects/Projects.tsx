"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

// نوع البيانات للمشروع
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  category: "SaaS" | "Web App" | "Mobile" | "Open Source" | "API" | "Other";
  githubUrl?: string;
  liveUrl?: string;
  stars?: number;
  featured?: boolean;
}

const projects: Project[] = [
    {
      id: 1,
      title: "Restaurant POS System",
      description: "Comprehensive Point of Sale system serving multiple restaurants with dedicated websites for each location",
      longDescription: "Enterprise-grade POS solution designed specifically for restaurants. Features include real-time order management, inventory tracking, table reservations, payment processing, staff management, and automated reporting. Each restaurant gets a custom-branded website with online ordering capabilities integrated directly into the POS system.",
      image: "/projects/pos.jpg",
      technologies: ["React", "Next.js", "NestJS", "PostgreSQL", "Redis", "Docker", "Stripe"],
      category: "SaaS",
      liveUrl: "https://yourpos.com",
      featured: true,
    },
    {
      id: 2,
      title: "PropAI CRM",
      description: "Full-featured CRM platform built from scratch for real estate companies, serving 25+ agencies",
      longDescription: "Complete real estate CRM solution built entirely from the ground up. Manages leads, properties, client relationships, sales pipeline, contracts, and analytics. Serves over 25 real estate companies with multi-tenancy architecture, custom workflows, automated follow-ups, and comprehensive reporting dashboards.",
      image: "/projects/propai.jpg",
      technologies: ["React", "NestJS", "PostgreSQL", "TypeScript", "AWS", "WebSockets"],
      category: "SaaS",
      githubUrl: "https://github.com/yourusername/propai-crm",
      liveUrl: "https://propaicrm.com",
      stars: 340,
      featured: true,
    },
    {
      id: 3,
      title: "Apex Real Estate Website",
      description: "High-end real estate portal for Apex Company with advanced property search and virtual tours",
      longDescription: "Premium real estate website featuring interactive property listings, advanced filtering, virtual 360° tours, mortgage calculator, agent profiles, and integrated CRM. Built with performance and SEO optimization in mind to drive maximum lead generation.",
      image: "/projects/apex.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Google Maps API"],
      category: "Web App",
      liveUrl: "https://apexrealestate.com",
      featured: true,
    },
    {
      id: 4,
      title: "Whitestone Real Estate Platform",
      description: "Modern real estate website for Whitestone Company with property management features",
      longDescription: "Full-featured real estate platform with property listings, search functionality, contact forms, agent management, and admin dashboard for content management. Optimized for speed and mobile responsiveness.",
      image: "/projects/whitestone.jpg",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Cloudinary"],
      category: "Web App",
      liveUrl: "https://whitestone.com",
      featured: false,
    },
    {
      id: 5,
      title: "Minin Market Backend",
      description: "Scalable backend system for marketplace platform serving markets and clients across Saudi Arabia",
      longDescription: "Robust backend infrastructure for a B2B marketplace connecting suppliers with retail stores in Saudi Arabia. Handles product catalog management, order processing, inventory synchronization, payment gateway integration, delivery tracking, and real-time notifications. Built to handle high traffic and thousands of concurrent users.",
      image: "/projects/minin.jpg",
      technologies: ["NestJS", "PostgreSQL", "Redis", "Microservices", "Docker", "Kubernetes", "RabbitMQ"],
      category: "API",
      githubUrl: "https://github.com/yourusername/minin-market",
      stars: 156,
      featured: true,
    },
    {
      id: 6,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and inventory management",
      image: "/projects/ecommerce.jpg",
      technologies: ["React", "Express.js", "MongoDB", "Stripe", "AWS S3"],
      category: "Web App",
      githubUrl: "https://github.com/yourusername/ecommerce",
      stars: 89,
      featured: false,
    },
    {
      id: 7,
      title: "SaaS Dashboard Template",
      description: "Reusable admin dashboard template for SaaS applications",
      image: "/projects/dashboard.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "Zustand"],
      category: "Open Source",
      githubUrl: "https://github.com/yourusername/saas-dashboard",
      stars: 234,
      featured: false,
    },
    {
      id: 8,
      title: "Real-Time Chat Application",
      description: "Scalable chat system with rooms, direct messaging, and file sharing",
      image: "/projects/chat.jpg",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
      category: "Web App",
      githubUrl: "https://github.com/yourusername/chat-app",
      featured: false,
    },
  ];

const categories = ["All", "SaaS", "Web App", "Mobile", "API", "Open Source", "Other"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Filter projects based on category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  // Separate featured projects
  const featuredProjects = filteredProjects.filter(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start bg-transparent px-6 py-20 relative">
      {/* Background Glow */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-900/20 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-900/20 rounded-full blur-[150px] -z-10" />

      {/* Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Featured Projects
        </h1>
        <p className="text-gray-400 text-lg">
          Building products that solve real problems
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
              selectedCategory === category
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/50"
                : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <div className="w-full max-w-7xl space-y-16">
        {/* Featured Projects - Large Cards */}
        {featuredProjects.length > 0 && (
          <div>
            <motion.h2
              className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <FaStar className="text-yellow-400" />
              Featured
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)" }}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-900/50 to-blue-900/50">
                    {/* Placeholder - استبدلها بصورة حقيقية */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaCode className="text-white/20 text-9xl" />
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredId === project.id ? 1 : 0.6 }}
                    />
                    
                    {/* Stars Badge */}
                    {project.stars && (
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                        <FaStar className="text-yellow-400 text-sm" />
                        <span className="text-white text-sm font-semibold">{project.stars}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-xs font-medium border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 text-gray-400 text-xs">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all border border-white/20"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub /> Code
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg transition-all shadow-lg shadow-purple-500/30"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects - Grid */}
        {regularProjects.length > 0 && (
          <div>
            <motion.h2
              className="text-3xl font-bold text-white mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              More Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 shadow-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)" }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-900/50 to-blue-900/50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaCode className="text-white/20 text-7xl" />
                    </div>
                    
                    {project.stars && (
                      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1.5">
                        <FaStar className="text-yellow-400 text-xs" />
                        <span className="text-white text-xs font-semibold">{project.stars}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded text-xs font-medium border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 text-gray-400 text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all text-sm border border-white/20"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg transition-all text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-gray-400 text-xl">No projects found in this category</p>
        </motion.div>
      )}

      {/* Bottom CTA */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400 text-lg mb-4">
          Want to see more? Check out my GitHub
        </p>
        <motion.a
          href="https://github.com/faresmohamedrockai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold shadow-lg shadow-purple-500/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub className="text-xl" />
          View All Projects
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Projects;