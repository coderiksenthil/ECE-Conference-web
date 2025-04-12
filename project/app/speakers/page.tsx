"use client";

import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import SpeakerCard from "@/components/speaker-card";
import { KEYNOTE_SPEAKERS } from "@/lib/constants";

export default function SpeakersPage() {
  return (
    <div className="page-container">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Keynote Speakers
      </motion.h1>
      <Separator className="w-24 h-1 mx-auto my-4 bg-conference-primary" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-lg text-gray-700 max-w-4xl mx-auto mb-12"
      >
        Distinguished experts from academia and industry who will be sharing their
        insights and latest research findings at ICNVCT 2025.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {KEYNOTE_SPEAKERS.map((speaker, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <SpeakerCard
              name={speaker.name}
              affiliation={speaker.affiliation}
              badgeText="Keynote"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 p-6 bg-conference-primary/5 rounded-lg max-w-3xl mx-auto"
      >
        <h3 className="text-xl font-semibold text-center text-conference-primary mb-4">
          More Distinguished Speakers
        </h3>
        <p className="text-center text-gray-700">
          Additional speakers will be announced soon. Check back regularly for updates.
        </p>
      </motion.div>
    </div>
  );
}
