import React from "react";
import { Separator } from "@/components/ui/separator";
import DateTimeline from "@/components/date-timeline";
import { Card, CardContent } from "@/components/ui/card";
import { IMPORTANT_DATES } from "@/lib/constants";
import { FiCalendar, FiAlertCircle } from "react-icons/fi";

export const metadata = {
  title: "Important Dates | ICNVCT 2025",
  description: "Important dates and deadlines for ICNVCT 2025 conference",
};

export default function ImportantDatesPage() {
  return (
    <div className="page-container">
      <h1 className="section-title">Important Dates</h1>
      <Separator className="w-24 h-1 mx-auto my-4 bg-conference-primary" />

      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 mr-3 rounded-full bg-conference-primary/10">
                  <FiCalendar className="h-6 w-6 text-conference-primary" />
                </div>
                <h2 className="text-xl font-semibold text-conference-primary">Key Dates</h2>
              </div>
              <p className="text-gray-700">
                Please make note of the following important dates related to the conference.
                Missing these deadlines may result in your paper not being considered for the conference.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <DateTimeline events={IMPORTANT_DATES} />
        </section>

        {/* Additional Information */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <div className="p-2 mr-3 rounded-full bg-conference-primary/10 mt-1">
                  <FiAlertCircle className="h-5 w-5 text-conference-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-conference-secondary">Important Notes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>All deadlines are at 23:59 hrs (Indian Standard Time, GMT +5:30).</li>
                    <li>Authors are strongly encouraged to submit their papers well before the deadline to avoid any last-minute technical issues.</li>
                    <li>Early bird registration offers discounted rates and will close on September 20, 2025.</li>
                    <li>At least one author of each accepted paper must register for the conference by the early registration deadline.</li>
                    <li>The conference schedule and program details will be announced after the camera-ready submission deadline.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Registration Deadlines */}
        <section>
          <h2 className="section-subtitle mb-6">Registration Deadlines</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b pb-3">
                  <div>
                    <span className="font-medium text-conference-primary">Early Bird Registration</span>
                    <p className="text-sm text-gray-600">Discounted rates for early registrants</p>
                  </div>
                  <span className="font-semibold">November 11, 2025</span>
                </li>
                <li className="flex justify-between items-center border-b pb-3 pt-2">
                  <div>
                    <span className="font-medium text-conference-primary">Regular Registration</span>
                    <p className="text-sm text-gray-600">Standard registration rates apply</p>
                  </div>
                  <span className="font-semibold">December 06, 2025</span>
                </li>
                <li className="flex justify-between items-center pt-2">
                  <div>
                    <span className="font-medium text-conference-primary">On-site Registration</span>
                    <p className="text-sm text-gray-600">Higher rates for on-site registration</p>
                  </div>
                  <span className="font-semibold">December 19-21, 2025</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
