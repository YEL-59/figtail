// Additional utility and interactive components
export const utilityComponents = {
  tooltips: {
    category: "Tooltips",
    description: "Tooltip components for helpful information on hover",
    icon: "💬",
    components: [
      {
        id: "tooltip-001",
        name: "Basic Tooltip",
        description: "Simple tooltip that appears on hover",
        tags: ["tooltip", "hover", "info"],
        preview: {
          component: `<div className="relative inline-block">
  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors group">
    Hover me
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
      This is a tooltip!
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
    </div>
  </button>
</div>`,
        },
        code: {
          jsx: `<div className="relative inline-block">
  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors group">
    Hover me
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
      This is a tooltip!
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
    </div>
  </button>
</div>`,
          html: `<div class="relative inline-block">
  <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors group">
    Hover me
    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
      This is a tooltip!
      <div class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
    </div>
  </button>
</div>`
        }
      }
    ]
  },
  modals: {
    category: "Modals",
    description: "Modal and dialog components for overlays",
    icon: "🪟",
    components: [
      {
        id: "modal-001",
        name: "Simple Modal",
        description: "Basic modal dialog with backdrop",
        tags: ["modal", "dialog", "overlay"],
        preview: {
          component: `<div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
  <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
    <div className="mt-3 text-center">
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">Successful!</h3>
      <div className="mt-2 px-7 py-3">
        <p className="text-sm text-gray-500">Account has been successfully registered!</p>
      </div>
      <div className="items-center px-4 py-3">
        <button className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700">
          OK
        </button>
      </div>
    </div>
  </div>
</div>`,
        },
        code: {
          jsx: `<div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
  <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
    <div className="mt-3 text-center">
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">Successful!</h3>
      <div className="mt-2 px-7 py-3">
        <p className="text-sm text-gray-500">Account has been successfully registered!</p>
      </div>
      <div className="items-center px-4 py-3">
        <button className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700">
          OK
        </button>
      </div>
    </div>
  </div>
</div>`,
          html: `<div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
  <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
    <div class="mt-3 text-center">
      <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
        <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h3 class="text-lg leading-6 font-medium text-gray-900 mt-4">Successful!</h3>
      <div class="mt-2 px-7 py-3">
        <p class="text-sm text-gray-500">Account has been successfully registered!</p>
      </div>
      <div class="items-center px-4 py-3">
        <button class="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700">
          OK
        </button>
      </div>
    </div>
  </div>
</div>`
        }
      }
    ]
  },
  spinners: {
    category: "Spinners",
    description: "Loading spinner and progress indicator components",
    icon: "⏳",
    components: [
      {
        id: "spinner-001",
        name: "Circle Spinner",
        description: "Animated circular loading spinner",
        tags: ["spinner", "loading", "animation"],
        preview: {
          component: `<div className="flex space-x-4">
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  <svg className="animate-spin h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  <svg className="animate-spin h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
</div>`,
        },
        code: {
          jsx: `<div className="flex space-x-4">
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  <svg className="animate-spin h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  <svg className="animate-spin h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
</div>`,
          html: `<div class="flex space-x-4">
  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  <svg class="animate-spin h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  <svg class="animate-spin h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
</div>`
        }
      },
      {
        id: "spinner-002",
        name: "Pulse Spinner",
        description: "Pulsing dot loading animation",
        tags: ["spinner", "pulse", "dots"],
        preview: {
          component: `<div className="flex space-x-2">
  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-75"></div>
  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-150"></div>
</div>`,
        },
        code: {
          jsx: `<div className="flex space-x-2">
  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-75"></div>
  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-150"></div>
</div>`,
          html: `<div class="flex space-x-2">
  <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
  <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-75"></div>
  <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-150"></div>
</div>`
        }
      }
    ]
  },
  dropdowns: {
    category: "Dropdowns",
    description: "Dropdown menu and select components",
    icon: "📋",
    components: [
      {
        id: "dropdown-001",
        name: "Basic Dropdown",
        description: "Simple dropdown menu with options",
        tags: ["dropdown", "menu", "options"],
        preview: {
          component: `<div className="relative inline-block text-left">
  <div>
    <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
      Options
      <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div className="py-1">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account settings</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">License</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
    </div>
  </div>
</div>`,
        },
        code: {
          jsx: `<div className="relative inline-block text-left">
  <div>
    <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
      Options
      <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div className="py-1">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account settings</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">License</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
    </div>
  </div>
</div>`,
          html: `<div class="relative inline-block text-left">
  <div>
    <button class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
      Options
      <svg class="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div class="py-1">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account settings</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">License</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
    </div>
  </div>
</div>`
        }
      }
    ]
  }
};
