import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(
    localStorage.getItem("dark") === "true"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("dark", dark);
  }, [dark]);

  return (
    <nav className="sticky top-0 z-50 bg-black dark:bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl flex items-center justify-between p-4">
        <h1 className="text-xl font-extrabold text-yellow-400">
          ShopNow AI
        </h1>

        <div className="flex items-center gap-5">
          <button onClick={() => setDark(!dark)}>
            {dark ? "☀️" : "🌙"}
          </button>

          <button className="rounded-full bg-yellow-400 px-4 py-1 font-bold text-black">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
