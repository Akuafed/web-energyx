import Logo_EnergyX from "../assets/Logo_EnergyX.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex items-start">
            <img
              src={Logo_EnergyX}
              alt="EnergyX Logo"
              className="w-32 md:w-62"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">About Us</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              PT. EnergyX 369 Indonesia, established in 2018, delivers IT
              Services, Training, and HR Outsourcing with a focus on innovation
              and client satisfaction. Our logo reflects Technology (Blue),
              Process (Red), and People (Orange).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">
              Location & Social Media
            </h3>
            <div className="mb-4 rounded overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.682335899899!2d106.77923671051745!3d-6.30540166168179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee28ada39a79%3A0xd94e200402d90835!2sJl.%20Karang%20Tengah%20Raya%20No.37%2C%20RT.6%2FRW.4%2C%20Lb.%20Bulus%2C%20Kec.%20Cilandak%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012440!5e0!3m2!1sen!2sid!4v1752550710785!5m2!1sen!2sid"
                width="100%"
                height="150"
                allowFullScreen
                loading="lazy"
                className="rounded-md border-0"
              ></iframe>
            </div>

            <div className="flex gap-4 text-gray-300">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} EnergyX 369 Indonesia. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
