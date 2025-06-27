import React from "react";
import { Separator } from "@/components/ui/separator";
import TrackAccordion from "@/components/track-accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TRACKS } from "@/lib/constants";
import { FiFileText, FiCheck } from "react-icons/fi";

export const metadata = {
  title: "Call for Papers | ICNVCT 2025",
  description: "Submit your research papers for ICNVCT 2025 - Topics and submission guidelines",
};

export default function CallForPapersPage() {
  return (
    <div className="page-container">
      <h1 className="section-title">Call for Papers</h1>
      <Separator className="w-24 h-1 mx-auto my-4 bg-conference-primary" />

      {/* Introduction */}
      <section className="mb-12">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 mr-3 rounded-full bg-conference-primary/10">
                <FiFileText className="h-6 w-6 text-conference-primary" />
              </div>
              <h2 className="text-xl font-semibold text-conference-primary">Introduction</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Authors are invited to submit original and unpublished research papers with an innovative idea on
              topics within the broad areas (but not limited to): Electronics, Signal Processing, Communication,
              Embedded Systems.
            </p>
            <p className="text-gray-700">
              The conference seeks to foster collaboration and knowledge sharing among participants,
              playing a pivotal role in shaping the future of these rapidly evolving fields.
              ICNVCT 2025 will feature keynote talks by distinguished speakers from renowned
              institutions, alongside technical sessions for paper presentations.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Research Tracks */}
      <section className="mb-12">
        <h2 className="section-subtitle mb-6">Research Tracks</h2>
        <div className="mb-6 flex flex-wrap gap-2">
          {TRACKS.map((track, index) => (
            <Badge key={index} variant="secondary2" className="text-sm py-1 px-3">
              {track.name.split(":")[0]}
            </Badge>
          ))}
        </div>
        <TrackAccordion tracks={TRACKS} />
      </section>

      {/* Submission Guidelines */}
      <section className="mb-12">
        <h2 className="section-subtitle mb-6">Submission Guidelines</h2>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiCheck className="mt-1 mr-2 text-conference-primary" />
                <span>All papers must be original and not simultaneously submitted to another journal or conference.</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="mt-1 mr-2 text-conference-primary" />
                <span>Papers should be submitted in IEEE format and should not exceed 6 pages.</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="mt-1 mr-2 text-conference-primary" />
                <span>All papers will be peer-reviewed by at least two independent reviewers.</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="mt-1 mr-2 text-conference-primary" />
                <span>At least one author of each accepted paper must register for the conference.</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="mt-1 mr-2 text-conference-primary" />
                <span>Selected papers will be recommended for publication in reputed journals.</span>
              </li>
              <li className="flex items-start">
                <FiCheck className="mt-1 mr-2 text-conference-primary" />
                <span>Plagiarism in any form will lead to rejection of the paper.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Submission Process */}
      <section className="mb-12">
        <h2 className="section-subtitle mb-6">Submission Process</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-700 mb-4">
              All papers must be submitted electronically through the conference submission system.
              Authors are requested to follow these steps:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>Prepare your paper according to the conference template.</li>
              <li>Convert your paper to PDF format.</li>
              <li>Submit your paper through the conference submission system.</li>
              <li>You will receive an acknowledgment email after successful submission.</li>
              <li>Track the status of your submission through the conference system.</li>
            </ol>
            <div className="mt-6 p-4 bg-conference-primary/5 rounded-md">
              <p className="font-medium text-conference-primary">Submission Portal</p>
              <p className="text-gray-700">
                The submission portal will be open from July 07, 2025.
                Please check back for the submission link.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Important Dates (Summary) */}
      <section>
        <h2 className="section-subtitle mb-6">Important Dates (Summary)</h2>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-2">
              <li className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Commencement of Submission</span>
                <span className="text-conference-primary">10-07-2025</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2 pt-2">
                <span className="font-medium">Deadline of Submission</span>
                <span className="text-conference-primary">20-08-2025</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2 pt-2">
                <span className="font-medium">Paper Acceptance Notification</span>
                <span className="text-conference-primary">10-10-2025</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2 pt-2">
                <span className="font-medium">Camera Ready Copy</span>
                <span className="text-conference-primary">24-10-2025</span>
              </li>
              <li className="flex justify-between items-center pb-2 pt-2">
                <span className="font-medium">Conference Dates</span>
                <span className="text-conference-primary">19-21 December 2025</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
