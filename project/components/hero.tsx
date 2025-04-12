"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiCalendar, FiMapPin, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-conference-primary to-conference-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold leading-tight mb-4"
          >
            1<sup>st</sup> International Conference on
            <br />
            NextGen VLSI & Communication Technologies
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold mb-6 text-conference-accent"
          >
            ICNVCT 2025
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 text-lg"
          >
            <div className="flex items-center">
              <FiCalendar className="mr-2" />
              <span>October 23-25, 2025</span>
            </div>
            <div className="md:w-px md:h-6 md:bg-white/30 hidden md:block"></div>
            <div className="flex items-center">
              <FiMapPin className="mr-2" />
              <span>KLH University, Hyderabad</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
            <Link href="/call-for-papers">
              <Button variant="secondary" size="lg" className="text-conference-primary font-semibold">
                Call for Papers <FiArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/registration">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Register Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Abstract decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 border-2 border-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;
