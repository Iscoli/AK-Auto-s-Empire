import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../assets/AK2.jpeg";
// Import FontAwesome icons - make sure you have @fortawesome/react-fontawesome installed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-primary p-4 md:p-6 fixed w-full top-0 z-90 shadow-lg transition-all duration-300 ${
        isScrolled ? "py-3" : "py-4"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center space-x-4">
            <img
              src={LogoImage}
              alt="AKAUtos Logo"
              className="w-10 h-10 rounded-full hover:scale-105 transition-transform"
            />
            <h1 className="text-xl md:text-2xl font-bold text-background tracking-wide">
              AK Auto&apos;s Empire
            </h1>
          </div>
        </Link>
        <ul className="hidden md:flex space-x-8">
          {list.map((item) => (
            <Link to={item.link} key={item.name}>
              <li className="py-2">
                <a
                  href={`#${item.name.toLowerCase()}`}
                  className="text-background hover:text-accent transition-colors duration-300 text-lg font-medium px-4 py-2"
                >
                  {item.name}
                </a>
              </li>
            </Link>
          ))}
        </ul>
        <button
          id="mobile-menu-toggle"
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faTimes : faBars}
            className={`w-6 h-6 transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-black"
            }`}
            style={{ fontSize: "24px" }}
          />
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-primary pt-4 pb-6 space-y-4">
          {list.map((item) => (
            <Link to={item.link} key={item.name}>
              <div
                className="block text-center text-background hover:text-accent text-lg font-medium transition-colors py-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
