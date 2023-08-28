"use client";
import React from "react";
import { BiCopy } from "react-icons/bi";
import { Toaster, toast } from "sonner";

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
      <Toaster position="top-center" />
      <button
        className="px-3 py-2.5 bg-gradient-to-r from-indigo-300  to-purple-500 rounded-md inline-flex items-center justify-center  gap-2 outline-none font-semibold font-krona text-sm"
        onClick={() => {
          copyToClipboard();
          toast.success("Url Copied to the clipboard share it now! ");
        }}
      >
        copy sharable url <BiCopy />
      </button>
    </div>
  );
}

export default CopyToClipboard;
