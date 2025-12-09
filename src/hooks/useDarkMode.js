import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [dark, setDark] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  return [dark, setDark];
}
