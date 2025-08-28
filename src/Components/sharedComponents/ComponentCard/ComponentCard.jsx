import { useState } from "react";

const ComponentCard = ({ component }) => {
  const [viewMode, setViewMode] = useState("preview"); // "preview" or "code"
  const [codeType, setCodeType] = useState("jsx"); // "jsx" or "html"
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const codeToCopy = component.code[codeType];
    navigator.clipboard
      .writeText(codeToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{component.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{component.description}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {component.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setViewMode("preview")}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${viewMode === "preview"
                  ? "bg-white text-gray-900 shadow-sm border border-gray-200"
                  : "text-gray-600 hover:text-gray-900"
                }`}
            >
              Preview
            </button>
            <button
              onClick={() => setViewMode("code")}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${viewMode === "code"
                  ? "bg-white text-gray-900 shadow-sm border border-gray-200"
                  : "text-gray-600 hover:text-gray-900"
                }`}
            >
              Code
            </button>
          </div>

          {viewMode === "code" && (
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setCodeType("jsx")}
                  className={`px-2 py-1 text-xs font-medium rounded transition-colors ${codeType === "jsx"
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                  JSX
                </button>
                <button
                  onClick={() => setCodeType("html")}
                  className={`px-2 py-1 text-xs font-medium rounded transition-colors ${codeType === "html"
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                  HTML
                </button>
              </div>
              <button
                onClick={handleCopy}
                className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
              >
                <svg
                  className="w-3 h-3 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {viewMode === "preview" ? (
          <div className="flex items-center justify-center min-h-[200px] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-lg border border-slate-200/50 shadow-inner">
            <div dangerouslySetInnerHTML={{ __html: component.preview.component }} />
          </div>
        ) : (
          <div className="relative">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{component.code[codeType]}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentCard;
