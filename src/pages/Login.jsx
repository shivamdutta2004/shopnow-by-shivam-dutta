import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link, useLocation } from "react-router-dom";

export default function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const redirectPath = location.state?.from || "/";

  useEffect(() => {
    if (user) navigate(redirectPath);
  }, [user, navigate, redirectPath]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    login({ email });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="bg-white rounded-2xl shadow-xl w-[360px] p-8">

        <h2 className="text-2xl font-extrabold text-center mb-2">
          Welcome Back 👋
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Login to continue shopping
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-3">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border rounded-lg p-3 focus:outline-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3 focus:outline-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg
                       font-semibold hover:bg-gray-900 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-5">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 font-medium">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
