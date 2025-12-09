import { useState } from "react";
import FilterSidebar from "./FilterSidebar";

export default function FilterDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn-glow"
        style={{ marginBottom: "16px" }}
      >
        Filters
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            background: "var(--bg)",
            padding: "20px",
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
            height: "75vh",
            zIndex: 999,
            overflowY: "auto",
          }}
        >
          <button onClick={() => setOpen(false)}>Close</button>
          <FilterSidebar />
        </div>
      )}
    </>
  );
}
