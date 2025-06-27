import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import DateTimeline from "@/components/date-timeline";
import SpeakerCard from "@/components/speaker-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CONFERENCE_SHORT_NAME,
  IMPORTANT_DATES,
  KEYNOTE_SPEAKERS,
  CONFERENCE_INFO,
} from "@/lib/constants";
import { FiCalendar, FiMapPin, FiMail, FiFileText, FiUsers, FiClock } from "react-icons/fi";

export default function Home() {
  // Showcase a subset of speakers on the homepage
  const featuredSpeakers = KEYNOTE_SPEAKERS.slice(0, 4);

  return (
    <div>
      <Hero />

      {/* Brief Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Welcome to {CONFERENCE_SHORT_NAME}</h2>
            <Separator className="w-24 h-1 mx-auto my-4 bg-conference-primary" />
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              {CONFERENCE_INFO.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-conference-primary/10">
                    <FiCalendar className="h-6 w-6 text-conference-primary" />
                  </div>
                  <CardTitle>Conference Dates</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  December 19-21, 2025
                </p>
                <Link href="/important-dates" className="text-conference-primary hover:underline mt-4 inline-block">
                  View Important Dates
                </Link>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-conference-primary/10">
                    <FiMapPin className="h-6 w-6 text-conference-primary" />
                  </div>
                  <CardTitle>Venue</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  KL Deemed to be University, Bachupally Campus, Hyderabad
                </p>
                <Link href="/venue" className="text-conference-primary hover:underline mt-4 inline-block">
                  Venue Details
                </Link>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-conference-primary/10">
                    <FiFileText className="h-6 w-6 text-conference-primary" />
                  </div>
                  <CardTitle>Submissions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Submit your papers on latest research in VLSI & Communication Technologies
                </p>
                <Link href="/call-for-papers" className="text-conference-primary hover:underline mt-4 inline-block">
                  View Call for Papers
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/registration">
              <Button variant="primary" size="lg" className="mt-4">
                Register for the Conference
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Important Dates</h2>
            <Separator className="w-24 h-1 mx-auto my-4 bg-conference-primary" />
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Mark your calendars for these key dates related to the conference.
            </p>
          </div>

          <DateTimeline events={IMPORTANT_DATES} />

          <div className="text-center mt-12">
            <Link href="/important-dates">
              <Button variant="outline" className="border-conference-primary text-conference-primary hover:bg-conference-primary hover:text-white">
                View All Dates <FiClock className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Keynote Speakers</h2>
            <Separator className="w-24 h-1 mx-auto my-4 bg-conference-primary" />
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Distinguished experts from academia and industry will share their insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {featuredSpeakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                name={speaker.name}
                affiliation={speaker.affiliation}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/speakers">
              <Button variant="outline" className="border-conference-primary text-conference-primary hover:bg-conference-primary hover:text-white">
                View All Speakers <FiUsers className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Contact Us</h2>
            <Separator className="w-24 h-1 mx-auto my-4 bg-conference-primary" />
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              For any queries related to the conference, please feel free to contact us.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <Card className="w-full md:w-auto">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 rounded-full bg-conference-primary text-white">
                    <FiMail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">icnvct2025@klh.edu.in</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full md:w-auto">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 rounded-full bg-conference-primary text-white">
                    <FiMapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">
                      Department of ECE,
                      <br />
                      KL University, Bachupally Campus,
                      <br />
                      Hyderabad
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
