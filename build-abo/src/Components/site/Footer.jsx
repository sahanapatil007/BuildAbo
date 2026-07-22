import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo-dark.png";

export default function Footer() {
  return (
    <footer className="mt-32 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-18 md:grid-cols-4 lg:px-10">
        
        <div className="md:col-span-2">
          <img
            src={logo}
            alt="BuildAbo Construction and Interiors"
            className="h-14 w-14 rounded-sm bg-primary-foreground/5 object-cover p-1"
          />

          <p className="mt-6 max-w-md font-display text-2xl leading-snug">
            Crafting homes and spaces that stand the test of time.
          </p>

          <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
            BuildAbo Construction & Interiors — turnkey residential and
            commercial builds, from foundation to final finish.
          </p>
        </div>

        <div>
          <h3 className="eyebrow !text-primary-foreground/60">
            Explore
          </h3>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/services" className="hover:text-accent">
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-accent">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow !text-primary-foreground/60">
            Contact
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/85">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <span>+91 98765 43210</span>
            </li>

            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <span>hello@buildabo.com</span>
            </li>

            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>3rd Floor, 44  Main Rd,<br></br>  Kallumantapa, Horamavu,<br></br>  Bengaluru, Karnataka 560113</span>
            </li>
          </ul>

          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full border border-primary-foreground/20 p-2 hover:border-accent hover:text-accent"
            >
              <FaInstagram className="h-4 w-4" />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full border border-primary-foreground/20 p-2 hover:border-accent hover:text-accent"
            >
             <FaFacebook className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-primary-foreground/10 px-6 py-5 text-center text-xs text-primary-foreground/55 lg:px-10">
        © {new Date().getFullYear()} BuildAbo Construction & Interiors. All
        rights reserved.
      </div>
    </footer>
  );
}