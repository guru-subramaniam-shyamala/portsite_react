import { ImageResponse } from "next/og";

import { getProjectBySlug } from "@/content/projects";

export const runtime = "edge";
export const alt = "Case study preview";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

type ProjectOgImageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectOgImage({ params }: ProjectOgImageProps) {
  const project = getProjectBySlug(params.slug);

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
            "linear-gradient(135deg, rgba(247,244,238,1) 0%, rgba(235,228,216,1) 100%)",
          color: "#172033"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8c4d1f"
          }}
        >
          <span>Case Study</span>
          <span>{project?.category ?? "Portfolio"}</span>
        </div>
        <div style={{ display: "grid", gap: "18px" }}>
          <div
            style={{
              fontSize: 78,
              lineHeight: 0.95,
              letterSpacing: "-0.06em",
              maxWidth: "900px"
            }}
          >
            {project?.title ?? "Project"}
          </div>
          <div
            style={{
              maxWidth: "900px",
              fontSize: 28,
              lineHeight: 1.45,
              color: "#576173"
            }}
          >
            {project?.summary ?? "Cloud platform and modernization case study."}
          </div>
        </div>
        <div style={{ fontSize: 30, color: "#172033" }}>Guru Subramaniam Shyamala</div>
      </div>
    ),
    size
  );
}
