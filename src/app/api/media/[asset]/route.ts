import { createReadStream, statSync } from "node:fs";
import { join } from "node:path";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type MediaAsset = {
  contentType: string;
  path: string[];
};

const mediaAssets: Record<string, MediaAsset> = {
  "certified-vets-video": {
    contentType: "video/mp4",
    path: ["media", "videos", "certified_vets.mp4"],
  },
  "hero-video": {
    contentType: "video/mp4",
    path: ["media", "videos", "hero_banner_video.mp4"],
  },
  "team-jo": {
    contentType: "image/jpeg",
    path: ["media", "images", "team", "JO.jpg"],
  },
  "team-mc": {
    contentType: "image/jpeg",
    path: ["media", "images", "team", "MC.jpg"],
  },
  "team-pn": {
    contentType: "image/jpeg",
    path: ["media", "images", "team", "PN.jpg"],
  },
  "team-sm": {
    contentType: "image/jpeg",
    path: ["media", "images", "team", "SM.jpg"],
  },
};

export async function GET(
  request: NextRequest,
  { params }: { params: { asset: string } },
) {
  const asset = mediaAssets[params.asset];

  if (!asset) {
    return new NextResponse(null, { status: 404 });
  }

  const filePath = join(process.cwd(), ...asset.path);
  const { size: fileSize } = statSync(filePath);
  const range = request.headers.get("range");

  if (asset.contentType === "video/mp4" && range) {
    const [rangeStart, rangeEnd] = range.replace("bytes=", "").split("-");
    const start = Number.parseInt(rangeStart, 10);
    const end = rangeEnd ? Number.parseInt(rangeEnd, 10) : fileSize - 1;

    if (
      Number.isNaN(start) ||
      Number.isNaN(end) ||
      start < 0 ||
      end >= fileSize ||
      start > end
    ) {
      return new NextResponse(null, {
        status: 416,
        headers: {
          "Content-Range": `bytes */${fileSize}`,
        },
      });
    }

    const chunkSize = end - start + 1;
    const stream = createReadStream(filePath, { start, end });

    return new NextResponse(stream as unknown as BodyInit, {
      status: 206,
      headers: {
        "Accept-Ranges": "bytes",
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Length": chunkSize.toString(),
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Content-Type": asset.contentType,
      },
    });
  }

  const stream = createReadStream(filePath);

  return new NextResponse(stream as unknown as BodyInit, {
    headers: {
      "Accept-Ranges": asset.contentType === "video/mp4" ? "bytes" : "none",
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Length": fileSize.toString(),
      "Content-Type": asset.contentType,
    },
  });
}
