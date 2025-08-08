import { ImageResponse } from "next/server";
import { siteConfig } from "@/site.config";

export const runtime = "edge";

const size = { width: 1200, height: 630 };

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title =
    searchParams.get("title") ||
    `${siteConfig.name} — ${siteConfig.role}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FF80BF, #8EC5FC)",
          fontSize: 64,
          color: "white",
          fontWeight: 800,
          padding: "40px",
          textAlign: "center",
        }}
      >
        {title}
      </div>
    ),
    {
      ...size,
      contentType: "image/png",
    }
  );
}
