"use client";
import {
  SiNextdotjs,
  SiGatsby,
  SiVite,
  SiRemix,
  SiAstro,
  SiReact,
} from "react-icons/si";

export default function GradientButtons({
  changeGradient,
}: {
  changeGradient: (backgroundGradient: string, icon: string) => void;
}) {
  return (
    <div className=" mt-4 py-4 w-full">
      <h1 className="font-krona flex items-center justify-center font-bold pb-4  bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-transparent bg-clip-text ">
        select framework theme
      </h1>
      <div className="flex gap-2 bg-opacity-30 items-center justify-center text-sm text-gray-400 sm:flex-col">
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
                "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900 via-slate-900 to-black",
                "gatsby"
              )
            }
            className="px-3 py-2.5 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900 via-slate-900 to-black rounded-md inline-flex items-center justify-center flex-col sm:w-24 gap-2 outline-none font-semibold font-krona"
          >
            <SiGatsby className="text-2xl" />
          </button>
          Gatsby
        </div>
        <div className="flex flex-col items-center justify-center font-krona text-sm gap-3">
          <button
            onClick={() =>
              changeGradient(
                "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-teal-800 via-slate-900 to-black",
                "vite"
              )
            }
            className="px-3 py-2.5 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-teal-800 via-slate-900 to-black rounded-md inline-flex items-center justify-center sm:w-24 gap-2 outline-none font-semibold font-krona"
          >
            <SiVite className="text-2xl" />
          </button>
          Vite
        </div>
        <div className="flex flex-col items-center justify-center font-krona text-sm gap-3">
          <button
            onClick={() =>
              changeGradient(
                "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]  from-indigo-900 via-slate-900 to-black",
                "remix"
              )
            }
            className="px-3 py-2.5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black rounded-md inline-flex items-center justify-center sm:w-24 gap-2 outline-none font-semibold font-krona"
          >
            <SiRemix className="text-2xl" />
          </button>
          Remix
        </div>
        <div className="flex flex-col items-center justify-center font-krona text-sm gap-3">
          <button
            onClick={() =>
              changeGradient(
                "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-800 via-slate-900 to-black",
                "astro"
              )
            }
            className="px-3 py-2.5 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-black rounded-md inline-flex items-center justify-center sm:w-24 gap-2 outline-none font-semibold font-krona"
          >
            <SiAstro className="text-2xl" />
          </button>
          Astro
        </div>
        <div className="flex flex-col items-center justify-center font-krona text-sm gap-3">
          <button
            onClick={() =>
              changeGradient(
                "bg-[radial-gradient(at_bottom,_var(--tw-gradient-stops))] from-pleb-500  to-pleb-600",
                "react"
              )
            }
            className="px-4 py-2.5 bg-[radial-gradient(at_bottom,_var(--tw-gradient-stops))] from-pleb-500  to-pleb-600 rounded-md inline-flex items-center justify-center sm:w-24 gap-2 outline-none font-semibold font-krona"
          >
            <SiReact className="text-2xl" />
          </button>
          RenderCon
        </div>
      </div>
    </div>
  );
}
