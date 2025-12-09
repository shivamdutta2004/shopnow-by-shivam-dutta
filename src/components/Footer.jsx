import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">

        <div>
          <h2 className="text-xl font-bold text-white">ShopNow</h2>
          <p className="text-sm mt-2">
            Your trusted online shopping platform.
          </p>
          <p className="mt-2 text-sm">
            📧 shopnow.webcare@gmail.com
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/shipping-policy" className="hover:underline">Shipping Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:underline">Refund Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 pb-4">
        © {new Date().getFullYear()} ShopNow. All rights reserved.
      </div>
    </footer>
  );
}
