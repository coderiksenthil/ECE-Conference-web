"use client";

import { motion } from "framer-motion";
import { Timeline, TimelineItem, TimelineDate, TimelineContent } from "@/components/ui/timeline";

interface TimelineEvent {
  date: string;
  description: string;
  isActive?: boolean;
}

interface DateTimelineProps {
  events: TimelineEvent[];
}

const DateTimeline = ({ events }: DateTimelineProps) => {
  // Determine which event is active based on date
  const today = new Date();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <Timeline>
        {events.map((event, index) => {
          const eventDate = new Date(event.date);
          const isActive = event.isActive !== undefined 
            ? event.isActive 
            : (eventDate > today && index > 0 && new Date(events[index - 1].date) < today);
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <TimelineItem active={isActive}>
                <TimelineDate>{event.date}</TimelineDate>
                <TimelineContent>{event.description}</TimelineContent>
              </TimelineItem>
            </motion.div>
          );
        })}
      </Timeline>
    </motion.div>
  );
};

export default DateTimeline;
