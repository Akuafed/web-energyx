import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo_EnergyX from "../assets/Logo_EnergyX.png";

const navLinks = [
  { label: "Home", href: "/web-energyx/" },
  { label: "About", href: "#about" },
  {
    label: "Products",
    href: "#products",
  },
  { label: "Services", href: "#service" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-6">
        <div className="w-32 md:w-40">
          <img src={Logo_EnergyX}  />
        </div>

        <ul className="hidden md:flex gap-6 items-center relative">
          {navLinks.map((link) => (
            <li key={link.label} className="group relative">
              <a
                href={link.href}
                className="text-md font-medium hover:text-blue-500 transition-colors flex items-center gap-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="relative w-8 h-4 flex flex-col justify-between items-center"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
              className="w-6 h-0.5 bg-black rounded origin-center"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="w-5 h-0.5 bg-black rounded"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
              className="w-6 h-0.5 bg-black rounded origin-center"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 md:hidden z-40 px-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xl font-semibold text-center"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
