"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface CommitteeMember {
  name: string;
  affiliation: string;
}

interface CommitteeSectionProps {
  title: string;
  members: CommitteeMember[];
  delay?: number;
}

const CommitteeSection = ({
  title,
  members,
  delay = 0,
}: CommitteeSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mb-8"
    >
      <h3 className="text-xl font-semibold mb-4 text-conference-primary">
        {title}
      </h3>
      <Card>
        <CardContent className="p-6">
          <ul className="space-y-3">
            {members.map((member, idx) => (
              <React.Fragment key={idx}>
                <li className="flex flex-col md:flex-row md:justify-between">
                  <span className="font-medium">{member.name}</span>
                  <span className="text-gray-600 text-sm md:text-base">
                    {member.affiliation}
                  </span>
                </li>
                {idx < members.length - 1 && (
                  <Separator className="my-2 bg-gray-200" />
                )}
              </React.Fragment>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CommitteeSection;
