import { GoDownload } from "react-icons/go";

type Props = {
  htmlToImageConvert: () => void;
};

export default function DownloadImage({ htmlToImageConvert }: Props) {
  return (
    <button
      onClick={htmlToImageConvert}
      className="px-3 py-2.5 bg-gradient-to-r from-indigo-300  to-purple-500 rounded-md inline-flex items-center justify-center  gap-2 outline-none font-semibold font-krona"
    >
      Download Image <GoDownload className="text-xl" />
    </button>
  );
}
