import useDarkMode from "../hooks/useDarkMode";

export default function DarkModeToggle() {
  const [dark, setDark] = useDarkMode();

  return (
    <button
      onClick={() => setDark(!dark)}
      style={{
        background: dark ? "#38bdf8" : "#0f172a",
        color: dark ? "#020617" : "white",
        borderRadius: "999px",
        padding: "8px 14px",
        fontSize: "0.85rem",
        cursor: "pointer",
        border: "none",
        marginLeft: "10px",
      }}
    >
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}
