import { GoDownload } from "react-icons/go";

type Props = {
  htmlToImageConvert: () => void;
};

export default function DownloadImage({ htmlToImageConvert }: Props) {
  return (
    <button
      onClick={htmlToImageConvert}
      className="px-3 py-2.5 bg-rendercon-buttons rounded-md inline-flex items-center justify-center  gap-2 outline-none font-semibold font-krona text-sm"
    >
      Download as image <GoDownload className="text-xl" />
    </button>
  );
}
