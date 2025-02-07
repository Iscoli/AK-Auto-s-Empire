import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import LogoImage from "../assets/Ak2.jpeg";
import { Link } from "react-router-dom";

const Footer = () => {
  const list = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Inventory",
      link: "/inventory",
    },
    {
      name: "About Us",
      link: "/about",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          {/* Column 1: Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <img
                  src={LogoImage}
                  alt="AKAUtos Logo"
                  className="w-10 h-10 rounded-full hover:scale-110 transition-transform"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">AK Auto&apos;s Empire</h3>
              </div>
            </div>
            <p className="text-blue-200">
              Your premier destination for luxury and quality vehicles in Abuja.
              Experience excellence in automotive retail.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {list.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="text-blue-200 hover:text-yellow-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                "New Vehicle Sales",
                "Used Vehicle Sales",
                "Vehicle Financing",
                "Trade-In Services",
                "Vehicle Maintenance",
                "Custom Orders",
              ].map((service) => (
                <li key={service} className="text-blue-200">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-blue-200">
                  20 Clinton Avenue, Kado Estate, Abuja
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-blue-200">070 3249 5753</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-blue-200">090 3348 7805</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-blue-200">info@akautosempire.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-blue-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-center md:text-left">
              &copy; {currentYear} AK Auto&apos;s Empires. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-blue-200 hover:text-yellow-400 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-yellow-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-yellow-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-yellow-400 transition-colors"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
