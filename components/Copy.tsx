"use client";
import React from "react";
import { AiOutlineShareAlt } from "react-icons/ai";

function CopyToClipboard({ textToCopy }: { textToCopy: string }) {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied to clipboard:", textToCopy);
    } catch (error) {
      console.error("Error copying text:", error);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2.5 bg-gradient-to-r from-indigo-300  to-purple-500 rounded-md inline-flex items-center justify-center  gap-2 outline-none font-semibold font-krona "
        onClick={copyToClipboard}
      >
        <AiOutlineShareAlt className="text-2xl" /> Share Ticket
      </button>
    </div>
  );
}

export default CopyToClipboard;
