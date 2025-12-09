import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function WelcomePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isVisited = localStorage.getItem("visited");
    if (!isVisited) {
      setShow(true);
      localStorage.setItem("visited", "true");
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-80 text-center shadow-xl">

        <h2 className="text-xl font-bold mb-2">Welcome to ShopNow 👋</h2>
        <p className="text-gray-600 text-sm mb-4">
          Login or Sign Up for the best experience!
        </p>

        <Link
          to="/login"
          className="block bg-yellow-500 py-2 rounded font-semibold text-black mb-2 hover:bg-yellow-600"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="block bg-black text-white py-2 rounded font-semibold hover:bg-gray-900 mb-3"
        >
          Create Account
        </Link>

        <button
          onClick={() => setShow(false)}
          className="text-sm text-gray-500 underline"
        >
          Skip for now
        </button>

      </div>
    </div>
  );
}
