import Link from "next/link";
import { FiMail, FiMapPin, FiCalendar } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-conference-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ICNVCT 2025</h3>
            <p className="text-sm">
              International Conference on NextGen VLSI & Communication
              Technologies
            </p>
            <p className="mt-2 text-sm">
              October 23-25, 2025
            </p>
            <p className="mt-4 text-sm flex items-center">
              <FiMapPin className="mr-2" />
              KLH Deemed to be University,
              <br />
              Bowrampet Campus, Hyderabad
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/call-for-papers" className="hover:underline">
                  Call for Papers
                </Link>
              </li>
              <li>
                <Link href="/important-dates" className="hover:underline">
                  Important Dates
                </Link>
              </li>
              <li>
                <Link href="/registration" className="hover:underline">
                  Registration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-sm">
              Department of Electronics and Communication Engineering,
              <br />
              KLH University, Bachupally Campus,
              <br />
              Hyderabad
            </p>
            <p className="mt-4 text-sm flex items-center">
              <FiMail className="mr-2" />
              icnvct2025@klh.edu.in
            </p>
            <p className="mt-2 text-sm flex items-center">
              <FiCalendar className="mr-2" />
              October 23-25, 2025
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} ICNVCT 2025. All rights reserved.
            <br />
            Organized by Department of Electronics and Communication Engineering, KLH University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
