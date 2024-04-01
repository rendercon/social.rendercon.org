import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const username = url?.pathname?.split("/")?.[2];
  const avatar_url = `https://avatars0.githubusercontent.com/${username}?v=3&s=10}`;

  try {
    // return NextResponse.json(user)
    return new ImageResponse(
      (
        // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            fontSize: 32,
            fontWeight: 600,
          }}>
          <div
            tw="bg-purple-50 flex"
            style={{
              backgroundImage: "radial-gradient(#042f2e,#3b0764)",
            }}>
            <div tw="flex   w-full flex-col py-12 px-4 md:items-center justify-between p-8">
              <img width="200" height="200" tw="rounded-full" src={avatar_url} />
              <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold text-purple-50 text-left">
                <span tw="text-6xl"> {username}</span>
                <span tw=" text-3xl text-yellow-300">Rendercon 2024 </span>
                <span tw=" text-3xl ">Nairobi ,Kenya</span>
              </h2>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error: any) {
    return new ImageResponse(
      (
        // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            fontSize: 32,
            fontWeight: 600,
          }}>
          <div
            tw="bg-purple-50 flex"
            style={{
              backgroundImage: "radial-gradient(#042f2e,#3b0764)",
            }}>
            <div tw="flex   w-full flex-col py-12 px-4 md:items-center justify-between p-8">
              <img width="200" height="200" tw="rounded-full" src={avatar_url} />
              <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold text-purple-50 text-left">
                <span tw="text-6xl"> {username}</span>
                <span tw=" text-3xl text-yellow-300">Rendercon 2024 </span>
                <span tw=" text-3xl ">Nairobi ,Kenya</span>
              </h2>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }
}
