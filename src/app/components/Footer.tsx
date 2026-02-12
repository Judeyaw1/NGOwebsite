import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../../assets/c98273e8235816fbf095c3442badfd44f858eb30.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="OELOFSA Logo" className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="font-bold text-white">OELOFSA</h3>
                <p className="text-xs text-gray-400">Empowering Communities</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              National Ladies of Enugu State Association - A women-owned NGO empowering Nigerian communities through education,
              scholarships, and humanitarian aid.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-yellow-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:text-yellow-400 transition-colors">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="/impact" className="hover:text-yellow-400 transition-colors">
                  Our Impact
                </a>
              </li>
              <li>
                <a href="/stories" className="hover:text-yellow-400 transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/programs" className="hover:text-yellow-400 transition-colors">
                  Scholarship Program
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:text-yellow-400 transition-colors">
                  Educational Resources
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:text-yellow-400 transition-colors">
                  Humanitarian Aid
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:text-yellow-400 transition-colors">
                  Mentorship Network
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:text-yellow-400 transition-colors">
                  Vocational Training
                </a>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <a href="/donate" className="hover:text-yellow-400 transition-colors">
                  Donate Now
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Become a Volunteer
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-400 transition-colors">
                  Partner with Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Apply for Scholarship
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              © {currentYear} OELOFSA. All rights reserved | JoseSolution.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Transparency Report
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
