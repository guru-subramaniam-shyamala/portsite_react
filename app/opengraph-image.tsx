import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/site";

export const runtime = "edge";
export const alt = "Portfolio preview";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "60px",
          background:
            "linear-gradient(135deg, rgba(247,244,238,1) 0%, rgba(230,236,231,1) 100%)",
          color: "#172033"
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8c4d1f"
          }}
        >
          {siteConfig.role}
        </div>
        <div style={{ display: "grid", gap: "18px" }}>
          <div
            style={{
              maxWidth: "940px",
              fontSize: 80,
              lineHeight: 0.94,
              letterSpacing: "-0.06em"
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              maxWidth: "880px",
              fontSize: 30,
              lineHeight: 1.45,
              color: "#576173"
            }}
          >
            Terraform-driven platforms, AI-backed internal systems, and cloud modernization across
            AWS, GCP, and Azure.
          </div>
        </div>
        <div style={{ fontSize: 28, color: "#172033" }}>Portfolio and case studies</div>
      </div>
    ),
    size
  );
}
