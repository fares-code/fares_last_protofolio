"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* الصورة */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative flex flex-col items-center md:items-end justify-center"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[28rem] md:h-[28rem] bg-purple-900/30 rounded-full blur-[140px] -z-10" />
          <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full overflow-hidden drop-shadow-2xl">
            <Image
              src="/Me.png"
              alt="Fares"
              fill
              className="object-contain z-10"
              priority
            />
          </div>
        </motion.div>

        {/* النصوص */}
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0.95 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="text-center md:text-left z-10"
        >
          <motion.p className="text-gray-400 text-sm md:text-base mb-2 tracking-wide font-medium">
            Full Stack Engineer & SaaS Specialist
          </motion.p>

          <motion.h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Building Robust <br className="hidden md:block" />
            & Scalable
            <span className="relative inline-block px-2 ml-2">
              Web Apps
              <svg
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[140%] text-purple-600 -z-10"
                viewBox="0 0 100 60"
                fill="none"
              >
                <path d="M5,30 Q20,5 50,5 T95,30 T50,55 T5,30" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
          </motion.h1>

          <motion.p className="text-xs md:text-sm text-gray-500 mb-8 max-w-lg mx-auto md:mx-0">
            Because if the code does not perform, what else can?
          </motion.p>

          <motion.h2 className="text-2xl md:text-4xl font-medium text-white mb-6">
            Middle/Senior Level Developer<span className="animate-pulse text-blue-500 font-bold">.|</span>
          </motion.h2>

          <motion.div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-gray-300 text-md mb-8">
            <span>Currently at</span>
            <Link href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A103564081&keywords=%D8%A3%D9%85%D8%A7%D9%85%D9%8A%20%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%20%7C%20AMAMI&origin=ENTITY_SEARCH_HOME_HISTORY&sid=EHu" className="flex items-center gap-1 text-white hover:text-blue-300 transition-colors  decoration-blue-500/30">
              <FaLinkedin /> Amami
            </Link>
            <span>, previously at Tech Co.</span>
          </motion.div>

          <motion.p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
            With over 2 years of professional experience, I have built multiple SaaS products and web applications,
            balancing business goals with user needs, ensuring performance, scalability, and maintainability.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
