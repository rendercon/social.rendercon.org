"use client";
import { SignOutButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import React from "react";

export default function SignOutButtonClerk() {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return (
    <div>
      <SignOutButton>
        <button className="px-3 py-2.5 bg-gradient-to-r from-indigo-300  to-purple-500 rounded-md inline-flex items-center justify-center  gap-2 outline-none font-semibold font-krona   ">
          Sign Out
        </button>
      </SignOutButton>
    </div>
  );
}
