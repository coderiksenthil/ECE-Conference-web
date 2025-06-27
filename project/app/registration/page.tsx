import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiCreditCard, FiAlertCircle, FiCheckCircle, FiHelpCircle } from "react-icons/fi";

export const metadata = {
  title: "Registration | ICNVCT 2025",
  description: "Registration information and fees for ICNVCT 2025 conference",
};

export default function RegistrationPage() {
  return (
    <div className="page-container">
      <h1 className="section-title">Registration Information</h1>
      <Separator className="w-24 h-1 mx-auto my-4 bg-conference-primary" />

      <div className="max-w-4xl mx-auto">
        {/* Registration Message */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-conference-primary/10 rounded-full mb-4">
            <FiAlertCircle className="h-6 w-6 text-conference-primary" />
          </div>
          <p className="text-lg text-gray-700">
            Registration will open on <span className="font-semibold">July 10, 2025</span>.
            Early bird registration ends on <span className="font-semibold">November 12, 2025</span>.
          </p>
        </div>

        {/* Registration Fees */}
        <section className="mb-12">
          <h2 className="section-subtitle mb-6 text-center">Registration Fees</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Early Bird */}
            <Card className="border-t-4 border-t-conference-secondary">
              <CardHeader className="pb-2 text-center">
                <CardTitle className="text-xl text-conference-secondary">
                  Early Bird Registration
                </CardTitle>
                <p className="text-sm text-gray-500">Until November 12, 2025</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between py-2 border-b">
                    <span>Authors (Indian)</span>
                    <span className="font-semibold">₹ 8,000</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span>Authors (Foreign)</span>
                    <span className="font-semibold">$ 300</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span>Students (Indian)</span>
                    <span className="font-semibold">₹ 5,000</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span>Students (Foreign)</span>
                    <span className="font-semibold">$ 200</span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span>Attendees (without paper)</span>
                    <span className="font-semibold">₹ 3,000</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Regular Registration */}
            <Card className="border-t-4 border-t-conference-primary">
              <CardHeader className="pb-2 text-center">
                <CardTitle className="text-xl text-conference-primary">
                  Regular Registration
                </CardTitle>
                <p className="text-sm text-gray-500">After November 12, 2025</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between py-2 border-b">
                    <span>Authors (Indian)</span>
                    <span className="font-semibold">₹ 10,000</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span>Authors (Foreign)</span>
                    <span className="font-semibold">$ 350</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span>Students (Indian)</span>
                    <span className="font-semibold">₹ 6,000</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span>Students (Foreign)</span>
                    <span className="font-semibold">$ 250</span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span>Attendees (without paper)</span>
                    <span className="font-semibold">₹ 4,000</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-600">
            <p>* All fees are inclusive of taxes</p>
            <p>* Student registrations require valid student ID proof</p>
            <p>* At least one author per accepted paper must register</p>
          </div>
        </section>

        {/* Registration Includes */}
        <section className="mb-12">
          <h2 className="section-subtitle mb-6">Registration Includes</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="text-conference-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Access to all technical sessions and keynote talks</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-conference-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Conference kit including program schedule and proceedings</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-conference-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Lunch and refreshments during the conference days</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-conference-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Certificate of participation</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-conference-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Publication of accepted paper in conference proceedings</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-conference-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Conference dinner (for full registration only)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Payment Methods */}
        <section className="mb-12">
          <h2 className="section-subtitle mb-6">Payment Methods</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start mb-6">
                <FiCreditCard className="text-conference-primary mt-1 mr-3 flex-shrink-0 h-5 w-5" />
                <div>
                  <h3 className="font-medium text-lg mb-2">Online Payment</h3>
                  <p className="text-gray-700 mb-2">
                    Secure online payment options will be available through the registration portal.
                    We accept all major credit/debit cards and net banking.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FiCreditCard className="text-conference-primary mt-1 mr-3 flex-shrink-0 h-5 w-5" />
                <div>
                  <h3 className="font-medium text-lg mb-2">Bank Transfer</h3>
                  <p className="text-gray-700 mb-2">
                    Payment can also be made via direct bank transfer. Bank details will be provided
                    upon request and in the registration portal.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Registration Button (Disabled) */}
        <div className="text-center mb-12">
          <Button
            disabled
            className="bg-conference-primary hover:bg-conference-primary/90 text-white py-6 px-8 text-lg"
          >
            Registration Opens on July 10, 2025
          </Button>
          <p className="text-sm text-gray-500 mt-2">
            Registration link will be activated on the opening date
          </p>
        </div>

        {/* FAQ */}
        <section>
          <h2 className="section-subtitle mb-6">Frequently Asked Questions</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg flex items-center text-conference-primary">
                    <FiHelpCircle className="mr-2" />
                    Can I register for specific days only?
                  </h3>
                  <p className="mt-2 text-gray-700 ml-7">
                    No, the registration is for the entire conference duration. We do not offer single-day registrations.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg flex items-center text-conference-primary">
                    <FiHelpCircle className="mr-2" />
                    What is the cancellation policy?
                  </h3>
                  <p className="mt-2 text-gray-700 ml-7">
                    Cancellations made before September 30, 2025 will receive a 50% refund. No refunds will be provided after this date.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg flex items-center text-conference-primary">
                    <FiHelpCircle className="mr-2" />
                    Can I transfer my registration to someone else?
                  </h3>
                  <p className="mt-2 text-gray-700 ml-7">
                    Yes, registration can be transferred to another person by sending a formal request to the conference email.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-lg flex items-center text-conference-primary">
                    <FiHelpCircle className="mr-2" />
                    Will I receive an invoice for my registration?
                  </h3>
                  <p className="mt-2 text-gray-700 ml-7">
                    Yes, an invoice/receipt will be sent to your registered email address after successful payment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
