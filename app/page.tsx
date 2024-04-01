import {
  HomepageAuthButton,
  HomepageAuthButtonSuspenseFallBack,
} from "@/components/HomepageAuthButton";
import HoverCard from "@/components/HoverCard";
import { Suspense } from "react";

//servr component
export default async function Home() {
  return (
    <main className="  sm:mx-auto max-w-6xl px-4  mx-0 pt-10 pb-20 container min-h-[90%]  ">
      <div className="flex flex-col items-center sm:flex-row ">
        <section className="w-full py-4">
          <h1 className="font-krona bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-3xl  text-transparent bg-clip-text ">
            Generate your
            <br />
            Custom
            <br />
            {/*  bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent text-shadow-lg shadow-purple-800  */}
            <span className="text-3xl sm:text-5xl bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent text-shadow-lg shadow-purple-800  font-bold leading-[60px] ">
              RenderCon
            </span>
            <br />
            Social Card
          </h1>
          <Suspense fallback={<HomepageAuthButtonSuspenseFallBack />}>
            <HomepageAuthButton />
          </Suspense>

        </section>

        <section className="w-full">
          <HoverCard email="" imageurl="" name="yourname" username="yourusername" number={123} />
        </section>
      </div>
    </main>
  );
}
