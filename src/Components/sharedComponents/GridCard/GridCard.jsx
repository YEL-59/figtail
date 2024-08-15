import React from 'react';
import { FiCopy } from 'react-icons/fi';

const GridCard = ({ title, imgSrc, imgAlt, buttonText, buttonStyles }) => {
  const buttonCode = `<button className="${buttonStyles}">${buttonText}</button>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(buttonCode);
    alert('Button code copied to clipboard!');
  };

  return (
    <div className="w-full">
      <div className="h-64 bg-white rounded-lg border border-gray-100 hover:border-white dark:border-gray-800 dark:hover:border-gray-700 hover:shadow-lg dark:hover:shadow-lg-light dark:bg-gray-900">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-t-md py-2.5 px-5 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <span className="text-base font-medium text-gray-900 dark:text-white">
            {title}
          </span>
          <button
            className="text-gray-500 dark:text-gray-400 hover:text-blue-500"
            onClick={handleCopy}
            title="Copy Button Code"
          >
            <FiCopy className="w-5 h-5" />
          </button>
        </div>
        <div className="flex justify-center items-center h-52">
          {/* <img
            alt={imgAlt}
            src={imgSrc}
            className="hidden relative h-4/6 dark:block w-56"
          /> */}
          <button className={buttonStyles}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
