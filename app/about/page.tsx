import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  UNIVERSITY_INFO,
  DEPARTMENT_INFO,
  CONFERENCE_INFO,
} from "@/lib/constants";
import { FiMap, FiUsers, FiCalendar } from "react-icons/fi";

export const metadata = {
  title: "About | ICNVCT 2025",
  description: "About the University, ECE Department and ICNVCT 2025 Conference",
};

export default function AboutPage() {
  return (
    <div className="page-container">
      <h1 className="section-title">About</h1>
      <Separator className="w-24 h-1 mx-auto my-4 bg-conference-primary" />

      {/* University Section */}
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <div className="p-2 mr-3 rounded-full bg-conference-primary/10">
            <FiMap className="h-6 w-6 text-conference-primary" />
          </div>
          <h2 className="section-subtitle">About University</h2>
        </div>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-conference-secondary">
              {UNIVERSITY_INFO.name}
            </h3>
            <p className="text-gray-700 mb-4">
              {UNIVERSITY_INFO.shortDesc}
            </p>
            <p className="text-gray-700">
              {UNIVERSITY_INFO.longDesc}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Department Section */}
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <div className="p-2 mr-3 rounded-full bg-conference-primary/10">
            <FiUsers className="h-6 w-6 text-conference-primary" />
          </div>
          <h2 className="section-subtitle">About ECE Department</h2>
        </div>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-conference-secondary">
              {DEPARTMENT_INFO.name}
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>Established:</strong> {DEPARTMENT_INFO.established}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Programs Offered:</strong> {DEPARTMENT_INFO.programs}
            </p>
            <p className="text-gray-700">
              {DEPARTMENT_INFO.desc}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Conference Section */}
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <div className="p-2 mr-3 rounded-full bg-conference-primary/10">
            <FiCalendar className="h-6 w-6 text-conference-primary" />
          </div>
          <h2 className="section-subtitle">About ICNVCT 2025</h2>
        </div>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-conference-secondary">
              {CONFERENCE_INFO.name}
            </h3>
            <p className="text-gray-700 mb-4">
              {CONFERENCE_INFO.desc}
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Organized by:</strong> {CONFERENCE_INFO.organizer}
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
