import { FiCopy } from "react-icons/fi";
import { useState } from "react";

const GridCard = ({ title, buttonHTML }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(buttonHTML)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset 'copied to copy' state after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="relative flex flex-col col-span-4 sm:col-span-2 lg:col-span-1 items-center justify-center bg-white w-full pt-16 pb-24 border border-gray-200 rounded-lg overflow-hidden">
      <span className="absolute top-0 left-0 px-2 py-1 text-xs font-medium text-gray-600 lowercase border-gray-200 border-b border-r rounded-br-lg cursor-default">
        ✨ {title}
      </span>
      <div className="flex items-center justify-center w-full h-full button">
        {/* Render buttonHTML using dangerouslySetInnerHTML */}
        <div dangerouslySetInnerHTML={{ __html: buttonHTML }} />
      </div>
      <div
        onClick={handleCopy}
        className="absolute bottom-0 flex items-center justify-center w-full py-2 font-medium text-center border-t cursor-pointer bg-gray-50 hover:bg-gray-100 text-gray-500"
      >
        <FiCopy className="w-5 h-5 mr-1" />
        <span>{copied ? "Copied!" : "Copy"}</span>
      </div>
    </div>
  );
};

export default GridCard;
