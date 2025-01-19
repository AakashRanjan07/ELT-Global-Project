"use client";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About ELT Global</h2>
          <p className="text-gray-400">
            ELT Global is a secure and efficient exam platform designed to make
            online examinations seamless and reliable for students and
            educators.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-blue-400">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-blue-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-400">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>support@eltglobal.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-400" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-400" />
              <span>1234 Exam Lane, EdTech City, USA</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom Section */}
      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          &copy; {new Date().getFullYear()} ELT Global. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-white"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-white"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-white"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
