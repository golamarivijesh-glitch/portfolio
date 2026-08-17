// Site-wide ambient animated background: slowly drifting neon blobs + a panning
// grid. Fixed behind all content. CSS-only, so it stays cheap.

export function BackgroundFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid" />
      <div
        className="bg-blob"
        style={{
          top: "-10%",
          left: "-5%",
          height: "42vmax",
          width: "42vmax",
          background: "radial-gradient(circle, var(--accent), transparent 65%)",
          opacity: 0.7,
          animation: "blob-drift-1 16s ease-in-out infinite",
        }}
      />
      <div
        className="bg-blob"
        style={{
          top: "18%",
          right: "-10%",
          height: "48vmax",
          width: "48vmax",
          background: "radial-gradient(circle, var(--accent-2), transparent 65%)",
          opacity: 0.55,
          animation: "blob-drift-2 20s ease-in-out infinite",
        }}
      />
      <div
        className="bg-blob"
        style={{
          bottom: "-15%",
          left: "28%",
          height: "40vmax",
          width: "40vmax",
          background: "radial-gradient(circle, var(--accent), transparent 65%)",
          opacity: 0.4,
          animation: "blob-drift-3 24s ease-in-out infinite",
        }}
      />
    </div>
  );
}
