import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { FiMapPin, FiInfo, FiNavigation2 } from "react-icons/fi";
import { CONFERENCE_VENUE } from "@/lib/constants";

export const metadata = {
  title: "Venue | ICNVCT 2025",
  description: "Venue information for ICNVCT 2025 at KL University, Hyderabad",
};

export default function VenuePage() {
  return (
    <div className="page-container">
      <h1 className="section-title">Conference Venue</h1>
      <Separator className="w-24 h-1 mx-auto my-4 bg-conference-primary" />

      <div className="max-w-4xl mx-auto">
        {/* Main Venue */}
        <section className="mb-12">
          <Card className="overflow-hidden">
            <div className="bg-conference-primary text-white p-6">
              <div className="flex items-center">
                <FiMapPin className="h-6 w-6 mr-3" />
                <h2 className="text-2xl font-semibold">Main Conference Venue</h2>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-conference-secondary">
                {CONFERENCE_VENUE}
              </h3>
              <p className="text-gray-700 mb-6">                The conference will be held at the state-of-the-art facilities of KL University,
                Bowrampet, Hyderabad. The venue is equipped with modern amenities and offers an
                ideal environment for academic discussions and networking.
              </p>

              <div className="bg-gray-100 p-4 rounded-md mb-6">
                <h4 className="font-medium mb-2 flex items-center">
                  <FiInfo className="mr-2 text-conference-primary" />
                  Address
                </h4>
                <p className="text-gray-700">                  KL University<br />
                  Bowrampet, Hyderabad<br />
                  Greater Hyderabad, Telangana<br />
                  India
                </p>
              </div>

              {/* Placeholder for map - in a real implementation this would be replaced with an actual iframe or map component */}
              <div className="relative w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                <div className="text-gray-500 flex flex-col items-center">
                  <FiMapPin className="h-10 w-10 mb-2" />
                  <p>Interactive map would be displayed here</p>
                  <p className="text-sm">(Google Maps integration)</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-medium mb-2 flex items-center">
                    <FiNavigation2 className="mr-2 text-conference-primary" />
                    How to Reach
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>From Airport:</strong> Approximately 30 km (45-60 minutes drive)</li>
                    <li><strong>From Railway Station:</strong> Approximately 20 km (30-45 minutes drive)</li>
                    <li><strong>Local Transport:</strong> Cabs, auto-rickshaws and bus services are available</li>
                  </ul>
                </div>

                <div className="flex-1 mt-4 sm:mt-0">
                  <h4 className="font-medium mb-2">Nearby Accommodations</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Hotel Royal Park (3 km)</li>
                    <li>Grand Hyderabad Hotel (5 km)</li>
                    <li>The Platinum Inn (4 km)</li>
                    <li>Green Valley Resorts (2 km)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* About the Area */}
        <section className="mb-12">
          <h2 className="section-subtitle mb-6">About Hyderabad</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                Hyderabad, the capital of Telangana, is a major center for the technology industry in India.
                The city is known for its rich history, delicious cuisine, and warm hospitality.
              </p>
              <p className="text-gray-700 mb-4">
                The city is famous for its monuments like Charminar, Golconda Fort, and the Qutb Shahi Tombs.
                It is also known as the "City of Pearls" due to its historical association with the pearl trade.
              </p>
              <p className="text-gray-700">
                Hyderabad has a pleasant climate in October, with average temperatures ranging from 20°C to 30°C,
                making it an ideal time to visit the city and attend the conference.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Facilities */}
        <section>
          <h2 className="section-subtitle mb-6">Venue Facilities</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-conference-primary mr-2">•</span>
                  <span><strong>State-of-the-art Auditorium:</strong> With seating capacity for 300+ attendees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-conference-primary mr-2">•</span>
                  <span><strong>Seminar Halls:</strong> Multiple fully-equipped seminar halls for parallel sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-conference-primary mr-2">•</span>
                  <span><strong>High-speed Wi-Fi:</strong> Throughout the venue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-conference-primary mr-2">•</span>
                  <span><strong>Exhibition Area:</strong> For sponsors and industry partners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-conference-primary mr-2">•</span>
                  <span><strong>Dining Facilities:</strong> For breakfast, lunch, and refreshments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-conference-primary mr-2">•</span>
                  <span><strong>Accessibility:</strong> The venue is fully accessible for persons with disabilities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
