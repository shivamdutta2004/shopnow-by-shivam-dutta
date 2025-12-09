import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Run once when app loads
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setUser(null);
      return;
    }

    try {
      // ✅ Decode JWT payload (no backend call needed)
      const payload = JSON.parse(atob(token.split(".")[1]));

      // ✅ Check expiry
      if (payload.exp * 1000 < Date.now()) {
        logout();
      } else {
        setUser(payload); // store minimal user info
      }
    } catch (error) {
      logout();
    }
  }, []);

  // ✅ Login
  const login = (token) => {
    localStorage.setItem("token", token);

    const payload = JSON.parse(atob(token.split(".")[1]));
    setUser(payload);
  };

  // ✅ Logout (DESTROYS SESSION)
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook
export const useAuth = () => useContext(AuthContext);
