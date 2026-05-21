import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-6">
        {/* left side container*/}
        <div className="text-left">
          <h2 className="text-white text-xl font-bold mb-2">E-kart</h2>
          <p className="text-sm text-slate-500 mb-3">Your premium shopping destination.</p>
          {/* socials container */}
          <div className="flex justify-start gap-4">
            <a href="#" className="hover:text-white ">
              <FiFacebook size={18} />
            </a>
            <a href="#" className="hover:text-white ">
              <FiTwitter size={18} />
            </a>
            <a href="#" className="hover:text-white ">
              <FiInstagram size={18} />
            </a>
          </div>
        </div>

        {/* right side container*/}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a href="#" className="hover:text-white ">
            Shop
          </a>
          <a href="#" className="hover:text-white ">
            Contact
          </a>
          <a href="#" className="hover:text-white ">
            Track Order
          </a>
          <a href="#" className="hover:text-white ">
            FAQ
          </a>
        </div>
      </div>

      <hr className="border-slate-800 max-w-7xl mx-auto my-6" />

      {/* bottom container */}
      <div className="max-w-7xl mx-auto px-6 text-center text-xs text-slate-600">
        <p>&copy; E-kart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
