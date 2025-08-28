// Additional comprehensive component categories
export const moreComponentCategories = {
  alerts: {
    category: "Alerts",
    description: "Alert and notification components for user feedback",
    icon: "⚠️",
    components: [
      {
        id: "alert-001",
        name: "Success Alert",
        description: "Success notification with icon",
        tags: ["success", "notification", "icon"],
        preview: {
          component: `<div className="bg-green-50 border border-green-200 rounded-lg p-4">
  <div className="flex">
    <div className="flex-shrink-0">
      <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="ml-3">
      <h3 className="text-sm font-medium text-green-800">Successfully saved!</h3>
      <div className="mt-2 text-sm text-green-700">
        <p>Your changes have been saved successfully.</p>
      </div>
    </div>
  </div>
</div>`,
        },
        code: {
          jsx: `<div className="bg-green-50 border border-green-200 rounded-lg p-4">
  <div className="flex">
    <div className="flex-shrink-0">
      <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="ml-3">
      <h3 className="text-sm font-medium text-green-800">Successfully saved!</h3>
      <div className="mt-2 text-sm text-green-700">
        <p>Your changes have been saved successfully.</p>
      </div>
    </div>
  </div>
</div>`,
          html: `<div class="bg-green-50 border border-green-200 rounded-lg p-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <h3 class="text-sm font-medium text-green-800">Successfully saved!</h3>
      <div class="mt-2 text-sm text-green-700">
        <p>Your changes have been saved successfully.</p>
      </div>
    </div>
  </div>
</div>`
        }
      },
      {
        id: "alert-002",
        name: "Error Alert",
        description: "Error notification with icon and action",
        tags: ["error", "notification", "action"],
        preview: {
          component: `<div className="bg-red-50 border border-red-200 rounded-lg p-4">
  <div className="flex">
    <div className="flex-shrink-0">
      <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="ml-3">
      <h3 className="text-sm font-medium text-red-800">There was an error with your submission</h3>
      <div className="mt-2 text-sm text-red-700">
        <ul className="list-disc list-inside space-y-1">
          <li>Your password must be at least 8 characters</li>
          <li>Your password must include at least one pro number</li>
        </ul>
      </div>
      <div className="mt-4">
        <div className="-mx-2 -my-1.5 flex">
          <button className="bg-red-50 px-2 py-1.5 rounded-md text-sm font-medium text-red-800 hover:bg-red-100">
            View details
          </button>
          <button className="ml-3 bg-red-50 px-2 py-1.5 rounded-md text-sm font-medium text-red-800 hover:bg-red-100">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`,
        },
        code: {
          jsx: `<div className="bg-red-50 border border-red-200 rounded-lg p-4">
  <div className="flex">
    <div className="flex-shrink-0">
      <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="ml-3">
      <h3 className="text-sm font-medium text-red-800">There was an error with your submission</h3>
      <div className="mt-2 text-sm text-red-700">
        <ul className="list-disc list-inside space-y-1">
          <li>Your password must be at least 8 characters</li>
          <li>Your password must include at least one pro number</li>
        </ul>
      </div>
      <div className="mt-4">
        <div className="-mx-2 -my-1.5 flex">
          <button className="bg-red-50 px-2 py-1.5 rounded-md text-sm font-medium text-red-800 hover:bg-red-100">
            View details
          </button>
          <button className="ml-3 bg-red-50 px-2 py-1.5 rounded-md text-sm font-medium text-red-800 hover:bg-red-100">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`,
          html: `<div class="bg-red-50 border border-red-200 rounded-lg p-4">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <h3 class="text-sm font-medium text-red-800">There was an error with your submission</h3>
      <div class="mt-2 text-sm text-red-700">
        <ul class="list-disc list-inside space-y-1">
          <li>Your password must be at least 8 characters</li>
          <li>Your password must include at least one pro number</li>
        </ul>
      </div>
      <div class="mt-4">
        <div class="-mx-2 -my-1.5 flex">
          <button class="bg-red-50 px-2 py-1.5 rounded-md text-sm font-medium text-red-800 hover:bg-red-100">
            View details
          </button>
          <button class="ml-3 bg-red-50 px-2 py-1.5 rounded-md text-sm font-medium text-red-800 hover:bg-red-100">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`
        }
      }
    ]
  },
  badges: {
    category: "Badges",
    description: "Badge and tag components for labels and status indicators",
    icon: "🏷️",
    components: [
      {
        id: "badge-001",
        name: "Simple Badge",
        description: "Basic badge with different colors",
        tags: ["badge", "label", "status"],
        preview: {
          component: `<div className="flex space-x-2">
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
    Default
  </span>
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
    Primary
  </span>
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
    Success
  </span>
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
    Error
  </span>
</div>`,
        },
        code: {
          jsx: `<div className="flex space-x-2">
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
    Default
  </span>
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
    Primary
  </span>
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
    Success
  </span>
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
    Error
  </span>
</div>`,
          html: `<div class="flex space-x-2">
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
    Default
  </span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
    Primary
  </span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
    Success
  </span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
    Error
  </span>
</div>`
        }
      },
      {
        id: "badge-002",
        name: "Badge with Dot",
        description: "Badge with colored dot indicator",
        tags: ["badge", "dot", "indicator"],
        preview: {
          component: `<div className="flex space-x-2">
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
    <svg className="w-2 h-2 mr-1 fill-current text-gray-400" viewBox="0 0 8 8">
      <circle cx="4" cy="4" r="3" />
    </svg>
    Offline
  </span>
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
    <svg className="w-2 h-2 mr-1 fill-current text-green-400" viewBox="0 0 8 8">
      <circle cx="4" cy="4" r="3" />
    </svg>
    Online
  </span>
</div>`,
        },
        code: {
          jsx: `<div className="flex space-x-2">
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
    <svg className="w-2 h-2 mr-1 fill-current text-gray-400" viewBox="0 0 8 8">
      <circle cx="4" cy="4" r="3" />
    </svg>
    Offline
  </span>
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
    <svg className="w-2 h-2 mr-1 fill-current text-green-400" viewBox="0 0 8 8">
      <circle cx="4" cy="4" r="3" />
    </svg>
    Online
  </span>
</div>`,
          html: `<div class="flex space-x-2">
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
    <svg class="w-2 h-2 mr-1 fill-current text-gray-400" viewBox="0 0 8 8">
      <circle cx="4" cy="4" r="3" />
    </svg>
    Offline
  </span>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
    <svg class="w-2 h-2 mr-1 fill-current text-green-400" viewBox="0 0 8 8">
      <circle cx="4" cy="4" r="3" />
    </svg>
    Online
  </span>
</div>`
        }
      }
    ]
  },
  avatars: {
    category: "Avatars",
    description: "User avatar components with different styles and sizes",
    icon: "👤",
    components: [
      {
        id: "avatar-001",
        name: "Profile Avatar",
        description: "Round profile picture with different sizes",
        tags: ["avatar", "profile", "image"],
        preview: {
          component: `<div className="flex items-center space-x-4">
  <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" alt="Small avatar" />
  <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40x40" alt="Medium avatar" />
  <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" alt="Large avatar" />
  <img className="w-16 h-16 rounded-full" src="https://via.placeholder.com/64x64" alt="Extra large avatar" />
</div>`,
        },
        code: {
          jsx: `<div className="flex items-center space-x-4">
  <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" alt="Small avatar" />
  <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40x40" alt="Medium avatar" />
  <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" alt="Large avatar" />
  <img className="w-16 h-16 rounded-full" src="https://via.placeholder.com/64x64" alt="Extra large avatar" />
</div>`,
          html: `<div class="flex items-center space-x-4">
  <img class="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" alt="Small avatar" />
  <img class="w-10 h-10 rounded-full" src="https://via.placeholder.com/40x40" alt="Medium avatar" />
  <img class="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" alt="Large avatar" />
  <img class="w-16 h-16 rounded-full" src="https://via.placeholder.com/64x64" alt="Extra large avatar" />
</div>`
        }
      },
      {
        id: "avatar-002",
        name: "Avatar with Initials",
        description: "Avatar placeholder with user initials",
        tags: ["avatar", "initials", "placeholder"],
        preview: {
          component: `<div className="flex items-center space-x-4">
  <span className="inline-block h-8 w-8 rounded-full bg-gray-500 overflow-hidden">
    <span className="flex items-center justify-center h-full w-full text-xs font-medium text-white">JD</span>
  </span>
  <span className="inline-block h-10 w-10 rounded-full bg-blue-500 overflow-hidden">
    <span className="flex items-center justify-center h-full w-full text-sm font-medium text-white">AB</span>
  </span>
  <span className="inline-block h-12 w-12 rounded-full bg-green-500 overflow-hidden">
    <span className="flex items-center justify-center h-full w-full text-base font-medium text-white">CD</span>
  </span>
</div>`,
        },
        code: {
          jsx: `<div className="flex items-center space-x-4">
  <span className="inline-block h-8 w-8 rounded-full bg-gray-500 overflow-hidden">
    <span className="flex items-center justify-center h-full w-full text-xs font-medium text-white">JD</span>
  </span>
  <span className="inline-block h-10 w-10 rounded-full bg-blue-500 overflow-hidden">
    <span className="flex items-center justify-center h-full w-full text-sm font-medium text-white">AB</span>
  </span>
  <span className="inline-block h-12 w-12 rounded-full bg-green-500 overflow-hidden">
    <span className="flex items-center justify-center h-full w-full text-base font-medium text-white">CD</span>
  </span>
</div>`,
          html: `<div class="flex items-center space-x-4">
  <span class="inline-block h-8 w-8 rounded-full bg-gray-500 overflow-hidden">
    <span class="flex items-center justify-center h-full w-full text-xs font-medium text-white">JD</span>
  </span>
  <span class="inline-block h-10 w-10 rounded-full bg-blue-500 overflow-hidden">
    <span class="flex items-center justify-center h-full w-full text-sm font-medium text-white">AB</span>
  </span>
  <span class="inline-block h-12 w-12 rounded-full bg-green-500 overflow-hidden">
    <span class="flex items-center justify-center h-full w-full text-base font-medium text-white">CD</span>
  </span>
</div>`
        }
      }
    ]
  },
  tables: {
    category: "Tables",
    description: "Data table components for displaying structured information",
    icon: "📊",
    components: [
      {
        id: "table-001",
        name: "Simple Table",
        description: "Basic data table with hover effects",
        tags: ["table", "data", "hover"],
        preview: {
          component: `<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
  <table className="min-w-full divide-y divide-gray-300">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lindsay Walton</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Front-end Developer</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Member</td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Courtney Henry</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Designer</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
      </tr>
    </tbody>
  </table>
</div>`,
        },
        code: {
          jsx: `<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
  <table className="min-w-full divide-y divide-gray-300">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lindsay Walton</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Front-end Developer</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Member</td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Courtney Henry</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Designer</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
      </tr>
    </tbody>
  </table>
</div>`,
          html: `<div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
  <table class="min-w-full divide-y divide-gray-300">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr class="hover:bg-gray-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lindsay Walton</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Front-end Developer</td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Member</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Courtney Henry</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Designer</td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
      </tr>
    </tbody>
  </table>
</div>`
        }
      }
    ]
  },
  ecommerce: {
    category: "E-commerce",
    description: "E-commerce components for online stores and shopping",
    icon: "🛒",
    components: [
      {
        id: "ecom-001",
        name: "Product Card",
        description: "Product display card with image, price, and actions",
        tags: ["product", "card", "price", "shopping"],
        preview: {
          component: `<div className="group relative max-w-sm">
  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-48">
    <img src="https://via.placeholder.com/300x200" alt="Product" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
  </div>
  <div className="mt-4 flex justify-between">
    <div>
      <h3 className="text-sm text-gray-700">
        <a href="#" className="font-medium text-gray-900 hover:text-gray-700">
          Basic Tee
        </a>
      </h3>
      <p className="mt-1 text-sm text-gray-500">Black</p>
    </div>
    <p className="text-sm font-medium text-gray-900">$35</p>
  </div>
  <button className="mt-3 w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
    Add to cart
  </button>
</div>`,
        },
        code: {
          jsx: `<div className="group relative max-w-sm">
  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-48">
    <img src="https://via.placeholder.com/300x200" alt="Product" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
  </div>
  <div className="mt-4 flex justify-between">
    <div>
      <h3 className="text-sm text-gray-700">
        <a href="#" className="font-medium text-gray-900 hover:text-gray-700">
          Basic Tee
        </a>
      </h3>
      <p className="mt-1 text-sm text-gray-500">Black</p>
    </div>
    <p className="text-sm font-medium text-gray-900">$35</p>
  </div>
  <button className="mt-3 w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
    Add to cart
  </button>
</div>`,
          html: `<div class="group relative max-w-sm">
  <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-48">
    <img src="https://via.placeholder.com/300x200" alt="Product" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
  </div>
  <div class="mt-4 flex justify-between">
    <div>
      <h3 class="text-sm text-gray-700">
        <a href="#" class="font-medium text-gray-900 hover:text-gray-700">
          Basic Tee
        </a>
      </h3>
      <p class="mt-1 text-sm text-gray-500">Black</p>
    </div>
    <p class="text-sm font-medium text-gray-900">$35</p>
  </div>
  <button class="mt-3 w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
    Add to cart
  </button>
</div>`
        }
      }
    ]
  },
  stats: {
    category: "Statistics",
    description: "Statistic and metric display components",
    icon: "📈",
    components: [
      {
        id: "stat-001",
        name: "Stat Card",
        description: "Statistics card with icon and trend",
        tags: ["stats", "metrics", "dashboard"],
        preview: {
          component: `<div className="bg-white overflow-hidden shadow rounded-lg">
  <div className="p-5">
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <div className="ml-5 w-0 flex-1">
        <dl>
          <dt className="text-sm font-medium text-gray-500 truncate">Total Users</dt>
          <dd>
            <div className="text-lg font-medium text-gray-900">71,897</div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
  <div className="bg-gray-50 px-5 py-3">
    <div className="text-sm">
      <a href="#" className="font-medium text-cyan-700 hover:text-cyan-900">View all</a>
    </div>
  </div>
</div>`,
        },
        code: {
          jsx: `<div className="bg-white overflow-hidden shadow rounded-lg">
  <div className="p-5">
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <div className="ml-5 w-0 flex-1">
        <dl>
          <dt className="text-sm font-medium text-gray-500 truncate">Total Users</dt>
          <dd>
            <div className="text-lg font-medium text-gray-900">71,897</div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
  <div className="bg-gray-50 px-5 py-3">
    <div className="text-sm">
      <a href="#" className="font-medium text-cyan-700 hover:text-cyan-900">View all</a>
    </div>
  </div>
</div>`,
          html: `<div class="bg-white overflow-hidden shadow rounded-lg">
  <div class="p-5">
    <div class="flex items-center">
      <div class="flex-shrink-0">
        <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <div class="ml-5 w-0 flex-1">
        <dl>
          <dt class="text-sm font-medium text-gray-500 truncate">Total Users</dt>
          <dd>
            <div class="text-lg font-medium text-gray-900">71,897</div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
  <div class="bg-gray-50 px-5 py-3">
    <div class="text-sm">
      <a href="#" class="font-medium text-cyan-700 hover:text-cyan-900">View all</a>
    </div>
  </div>
</div>`
        }
      }
    ]
  }
};
