import { ImageResponse } from "next/og";
import { NextResponse } from "next/server";
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export async function GET() {
// return NextResponse.json({ogga:"booga"});
  try {
    return new ImageResponse(
      (
        // ImageResponse JSX element
        <div
          style={{
            fontSize: 40,
            fontWeight:"bolder",
            backgroundImage: "radial-gradient(#a21caf,#3b0764)",
            color: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <h1>Tigawanna &rsquo;s</h1> <h2> RenderCon KE</h2> <h2>Social Card</h2>
        </div>
      ),
      // ImageResponse options
      {
        // For convenience, we can re-use the exported opengraph-image
        // size config to also set the ImageResponse's width and height.
        ...size,
        //   fonts: [
        //     {
        //       name: "Inter",
        //       data: await interSemiBold,
        //       style: "normal",
        //       weight: 400,
        //     },
        //   ],
      }
    );
    
  } catch (error) {
    console.log("error")
  }
}
