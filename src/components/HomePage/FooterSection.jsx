import { Instagram, Facebook, Twitter } from "lucide-react";
import ScrollIcon from "../Universal/ScrollIcon";

export default function FooterSection() {
  return (
    <footer className="border-t border-gray-200 py-6">
      <div className=" mx-auto ss:px-12 px-6">
        <div className="flex justify-between gap-4 items-center">
          {/* Social Media Links */}
          <div className="flex ss:gap-6 xx:gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="xs:w-5 xs:h-5 w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="xs:w-5 xs:h-5 w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="xs:w-5 xs:h-5 w-4 h-4" />
            </a>
          </div>

          {/* Copyright Text */}
          <p className="xs:text-sm text-xs text-gray-600">
            © 2021 CodeSquid. All Rights Reserved
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollIcon />
    </footer>
  );
}
