import React from "react";
import { Separator } from "@/components/ui/separator";
import CommitteeSection from "@/components/committee-section";
import { COMMITTEES } from "@/lib/constants";

export const metadata = {
  title: "Committee | ICNVCT 2025",
  description: "Organizing committee and advisory board of ICNVCT 2025",
};

export default function CommitteePage() {
  return (
    <div className="page-container">
      <h1 className="section-title">Conference Committee</h1>
      <Separator className="w-24 h-1 mx-auto my-4 bg-conference-primary" />

      <div className="max-w-4xl mx-auto">
        <CommitteeSection
          title="Chief Patrons"
          members={COMMITTEES.chiefPatrons}
          delay={0.1}
        />

        <CommitteeSection
          title="Co-Patrons"
          members={COMMITTEES.coPatrons}
          delay={0.2}
        />

        <CommitteeSection
          title="General Chairs"
          members={COMMITTEES.generalChairs}
          delay={0.3}
        />

        <CommitteeSection
          title="Technical Program Committee"
          members={COMMITTEES.technicalCommittee}
          delay={0.4}
        />

        <CommitteeSection
          title="International Advisory Committee"
          members={COMMITTEES.internationalAdvisory}
          delay={0.5}
        />

        <CommitteeSection
          title="Organizing Committee"
          members={COMMITTEES.organizing}
          delay={0.6}
        />

        <CommitteeSection
          title="Hospitality Committee"
          members={COMMITTEES.hospitality}
          delay={0.7}
        />

        <CommitteeSection
          title="Website & Conference Portal"
          members={COMMITTEES.website}
          delay={0.8}
        />

        <CommitteeSection
          title="Digital Media, Publicity & Marketing Committee"
          members={COMMITTEES.publicity}
          delay={0.9}
        />

        <CommitteeSection
          title="Registration Committee"
          members={COMMITTEES.registration}
          delay={1.0}
        />
      </div>
    </div>
  );
}
