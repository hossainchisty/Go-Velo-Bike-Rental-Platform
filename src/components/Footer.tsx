import { Link } from "react-router-dom";
import { Bike, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <Bike className="h-6 w-6" />
              Go-Velo
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Sustainable bike rental and sharing platform connecting riders across Germany.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/explore" className="hover:text-primary-foreground transition-colors">
                  Explore Bikes
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-primary-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* For Owners */}
          <div className="space-y-4">
            <h3 className="font-semibold">For Bike Owners</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/list-bike" className="hover:text-primary-foreground transition-colors">
                  List Your Bike
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-primary-foreground transition-colors">
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <Link to="/contact" className="text-sm hover:text-primary-foreground transition-colors inline-block">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-sm text-center text-primary-foreground/80">
          <p>&copy; 2025 Go-Velo. All rights reserved. Sustainable mobility for everyone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
