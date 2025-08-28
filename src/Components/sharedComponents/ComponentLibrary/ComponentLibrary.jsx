import { useState, useMemo } from "react";
import ComponentCard from "../ComponentCard/ComponentCard";
import { componentsData, getAllComponents, searchComponents } from "../../../data/componentsData";

const ComponentLibrary = ({ categoryFilter = null }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter || "all");

  // Get filtered components based on search and category
  const filteredComponents = useMemo(() => {
    let components = [];

    if (searchQuery.trim()) {
      // If there's a search query, search across all components
      components = searchComponents(searchQuery);
    } else if (selectedCategory === "all") {
      // If no search and "all" selected, get all components
      components = getAllComponents();
    } else {
      // If specific category selected, get components from that category
      components = getAllComponents().filter(comp => comp.categoryKey === selectedCategory);
    }

    return components;
  }, [searchQuery, selectedCategory]);

  // Get category statistics
  const categoryStats = useMemo(() => {
    const stats = {};
    Object.entries(componentsData).forEach(([key, category]) => {
      stats[key] = category.components.length;
    });
    return stats;
  }, []);

  const totalComponents = getAllComponents().length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Tailwind CSS Components
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Beautiful, responsive components built with Tailwind CSS. Copy and paste into your projects.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Category Filter */}
      {!categoryFilter && (
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                selectedCategory === "all"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              All ({totalComponents})
            </button>
            {Object.entries(componentsData).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  selectedCategory === key
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <span className="mr-1">{category.icon}</span>
                {category.category} ({categoryStats[key]})
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results Info */}
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          {searchQuery ? (
            <>Showing {filteredComponents.length} results for "{searchQuery}"</>
          ) : (
            <>
              {selectedCategory === "all" 
                ? `Showing all ${filteredComponents.length} components`
                : `Showing ${filteredComponents.length} ${componentsData[selectedCategory]?.category.toLowerCase()} components`
              }
            </>
          )}
        </p>
      </div>

      {/* Components Grid */}
      {filteredComponents.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {filteredComponents.map((component) => (
            <ComponentCard key={component.id} component={component} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20.4a7.962 7.962 0 01-5-1.109M15 3.512A8.038 8.038 0 0112 3C7 3 3 7 3 12s4 9 9 9c4.97 0 9-4.03 9-9 0-1.706-.463-3.306-1.27-4.712z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No components found</h3>
          <p className="mt-1 text-sm text-gray-500">
            {searchQuery ? "Try adjusting your search terms." : "No components available in this category."}
          </p>
        </div>
      )}
    </div>
  );
};

export default ComponentLibrary;
