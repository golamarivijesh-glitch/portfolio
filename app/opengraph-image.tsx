// Social share card. Generated at build time so the page has a real og:image
// without shipping a binary asset — LinkedIn/X/Slack previews were blank before.
// Next serves this as /opengraph-image and wires the meta tags automatically.

import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0a0a0f 0%, #12121a 55%, #0d1a18 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#34d399",
            }}
          />
          <div style={{ fontSize: 26, color: "#9ca3af", letterSpacing: 2 }}>
            {profile.availability.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 82, fontWeight: 700, color: "#f5f5f7", lineHeight: 1.05 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 40, color: "#34d399", marginTop: 18 }}>{profile.title}</div>
          <div
            style={{
              fontSize: 27,
              color: "#9ca3af",
              marginTop: 26,
              maxWidth: 940,
              lineHeight: 1.4,
            }}
          >
            LLM systems, agentic AI and RAG platforms — built for production.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 24, color: "#6b7280" }}>
          <div>{profile.siteUrl.replace("https://", "")}</div>
          <div>·</div>
          <div>{profile.location}</div>
        </div>
      </div>
    ),
    size
  );
}
