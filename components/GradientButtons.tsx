"use client";
import {
  SiNextdotjs,
  SiGatsby,
  SiVite,
  SiRemix,
  SiAstro,
} from "react-icons/si";

export default function GradientButtons({
  changeGradient,
}: {
  changeGradient: (backgroundGradient: string, icon: string) => void;
}) {
  return (
    <div className="flex gap-2 mt-4 py-4 bg-opacity-30 items-center justify-center text-sm text-gray-400 sm:flex-col">
      <div className="flex flex-col items-center justify-center font-krona gap-3">
        <button
          onClick={() =>
            changeGradient(
              "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black",
              "nextjs"
            )
          }
          className="px-3 py-2.5 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black rounded-md inline-flex items-center justify-center sm:w-24 gap-2 outline-none font-semibold font-krona"
        >
          <SiNextdotjs className="text-2xl" />
        </button>
        Next.js
      </div>
      <div className="flex flex-col items-center justify-center font-krona gap-3">
        <button
          onClick={() =>
            changeGradient(
              "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900",
              "gatsby"
            )
          }
          className="px-3 py-2.5 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-md inline-flex items-center justify-center flex-col sm:w-24 gap-2 outline-none font-semibold font-krona"
        >
          <SiGatsby className="text-2xl" />
        </button>
        Gatsby
      </div>
      <div className="flex flex-col items-center justify-center font-krona text-sm gap-3">
        <button
          onClick={() =>
            changeGradient(
              "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-purple-800 to-black",
              "vite"
            )
          }
          className="px-3 py-2.5 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-purple-800 to-black rounded-md inline-flex items-center justify-center sm:w-24 gap-2 outline-none font-semibold font-krona"
        >
          <SiVite className="text-2xl" />
        </button>
        Vite
      </div>
      <div className="flex flex-col items-center justify-center font-krona text-sm gap-3">
        <button
          onClick={() =>
            changeGradient(
              "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-indigo-900 to-black",
              "remix"
            )
          }
          className="px-3 py-2.5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-indigo-900 to-black rounded-md inline-flex items-center justify-center sm:w-24 gap-2 outline-none font-semibold font-krona"
        >
          <SiRemix className="text-2xl" />
        </button>
        Remix
      </div>
      <div className="flex flex-col items-center justify-center font-krona text-sm gap-3">
        <button
          onClick={() =>
            changeGradient(
              "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-red-900 to-black",
              "astro"
            )
          }
          className="px-3 py-2.5 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-red-900 to-black rounded-md inline-flex items-center justify-center sm:w-24 gap-2 outline-none font-semibold font-krona"
        >
          <SiAstro className="text-2xl" />
        </button>
        Astro
      </div>
    </div>
  );
}
