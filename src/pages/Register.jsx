import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    // ✅ Demo register → auto login
    login({ email });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="bg-white rounded-2xl shadow-xl w-[380px] p-8">

        <h2 className="text-2xl font-extrabold text-center mb-2">
          Create Account 🚀
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Join us and start shopping smarter
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-3">
            {error}
          </p>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border rounded-lg p-3 focus:outline-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Create password"
            className="w-full border rounded-lg p-3 focus:outline-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 py-3 rounded-lg
                       font-semibold hover:bg-yellow-500 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
