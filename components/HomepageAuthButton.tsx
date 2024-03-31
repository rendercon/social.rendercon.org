import { SignInButton, currentUser } from "@clerk/nextjs";
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

interface HomepageAuthButtonProps {}

export async function HomepageAuthButton({}: HomepageAuthButtonProps) {
  const user = await currentUser();
//   console.log(" ===  user  === ",user)
  return(
  <div className="py-4" suppressHydrationWarning>
    {!user && (
      <SignInButton afterSignInUrl={"/"} mode="redirect">
        <button className="px-3 py-2.5 bg-rendercon-buttons rounded-md inline-flex items-center justify-center sm:w-44 gap-2 outline-none font-semibold font-krona  w-44  ">
          get yours <SiGithub />
        </button>
      </SignInButton>
    )}

    {user && (
      <Link
        href={`/ticket/${user?.username}`}
        className="px-3 py-2.5 bg-rendercon-buttons rounded-md inline-flex items-center justify-center  gap-2 outline-none font-semibold font-krona  ">
        Customize your ticket <BsArrowRight />
      </Link>
    )}
  </div>
   )
}




export function HomepageAuthButtonSuspenseFallBack(){
return (
 <div className='h-10 animate-pulse'></div>
);
}
