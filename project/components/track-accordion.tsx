"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface TrackTopic {
  name: string;
}

interface TrackProps {
  name: string;
  topics: TrackTopic[];
  defaultOpen?: boolean;
}

const TrackItem = ({ name, topics, defaultOpen = false }: TrackProps) => {
  return (
    <AccordionItem value={name.toLowerCase().replace(/\s+/g, "-")}>
      <AccordionTrigger className="text-lg font-medium text-conference-primary">
        {name}
        <Badge variant="secondary2" className="ml-2">
          {topics.length} topics
        </Badge>
      </AccordionTrigger>
      <AccordionContent>
        <ul className="space-y-2 pl-2">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-start">
              <span className="text-conference-primary mr-2">➢</span>
              <span>{topic.name}</span>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

interface TrackAccordionProps {
  tracks: TrackProps[];
}

const TrackAccordion = ({ tracks }: TrackAccordionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Accordion type="single" collapsible className="w-full">
        {tracks.map((track, index) => (
          <TrackItem
            key={index}
            name={track.name}
            topics={track.topics}
            defaultOpen={index === 0}
          />
        ))}
      </Accordion>
    </motion.div>
  );
};

export default TrackAccordion;
