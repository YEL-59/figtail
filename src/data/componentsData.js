// Import additional component categories
import { moreComponentCategories } from './moreComponents.js';
import { utilityComponents } from './utilityComponents.js';

// Centralized component library data structure
export const componentsData = {
  buttons: {
    category: "Buttons",
    description: "Interactive button components with various styles and hover effects",
    icon: "🔘",
    components: [
      {
        id: "btn-001",
        name: "Primary Button",
        description: "Simple primary button with hover effect",
        tags: ["basic", "primary", "hover"],
        preview: {
          component: `<button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
  ✨ Click Me
</button>`,
        },
        code: {
          jsx: `<button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
  ✨ Click Me
</button>`,
          html: `<button class="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
  ✨ Click Me
</button>`
        }
      },
      {
        id: "btn-002",
        name: "Gradient Button",
        description: "Button with gradient background and shadow",
        tags: ["gradient", "shadow", "modern"],
        preview: {
          component: `<button className="px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white rounded-2xl hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 transition-all duration-300 font-bold shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105">
  🚀 Get Started
</button>`,
        },
        code: {
          jsx: `<button className="px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white rounded-2xl hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 transition-all duration-300 font-bold shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105">
  🚀 Get Started
</button>`,
          html: `<button class="px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white rounded-2xl hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 transition-all duration-300 font-bold shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105">
  🚀 Get Started
</button>`
        }
      },
      {
        id: "btn-003",
        name: "Outline Button",
        description: "Button with outline style and fill animation",
        tags: ["outline", "animation", "fill"],
        preview: {
          component: `<button className="px-8 py-4 border-3 border-emerald-500 text-emerald-600 rounded-xl hover:bg-emerald-500 hover:text-white transition-all duration-300 font-bold shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105">
  📚 Learn More
</button>`,
        },
        code: {
          jsx: `<button className="px-8 py-4 border-3 border-emerald-500 text-emerald-600 rounded-xl hover:bg-emerald-500 hover:text-white transition-all duration-300 font-bold shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105">
  📚 Learn More
</button>`,
          html: `<button class="px-8 py-4 border-3 border-emerald-500 text-emerald-600 rounded-xl hover:bg-emerald-500 hover:text-white transition-all duration-300 font-bold shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105">
  📚 Learn More
</button>`
        }
      },
      {
        id: "btn-004",
        name: "Icon Button",
        description: "Button with icon and text",
        tags: ["icon", "text", "arrow"],
        preview: {
          component: `<button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-bold shadow-lg hover:shadow-orange-500/25 transform hover:scale-105">
  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
  ⚡ Continue
</button>`,
        },
        code: {
          jsx: `<button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-bold shadow-lg hover:shadow-orange-500/25 transform hover:scale-105">
  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
  ⚡ Continue
</button>`,
          html: `<button class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-bold shadow-lg hover:shadow-orange-500/25 transform hover:scale-105">
  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
  ⚡ Continue
</button>`
        }
      },
      {
        id: "btn-005",
        name: "Loading Button",
        description: "Button with loading spinner state",
        tags: ["loading", "spinner", "disabled"],
        preview: {
          component: `<button disabled className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg opacity-75 cursor-not-allowed font-medium">
  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading...
</button>`,
        },
        code: {
          jsx: `<button disabled className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg opacity-75 cursor-not-allowed font-medium">
  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading...
</button>`,
          html: `<button disabled class="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg opacity-75 cursor-not-allowed font-medium">
  <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading...
</button>`
        }
      },
      {
        id: "btn-006",
        name: "Hover Scale Button",
        description: "Button with scale animation on hover",
        tags: ["hover", "scale", "animation"],
        preview: {
          component: `<button className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 hover:scale-105 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
  Hover Me
</button>`,
        },
        code: {
          jsx: `<button className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 hover:scale-105 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
  Hover Me
</button>`,
          html: `<button class="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 hover:scale-105 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
  Hover Me
</button>`
        }
      },
      {
        id: "btn-007",
        name: "Neon Button",
        description: "Button with neon glow effect",
        tags: ["neon", "glow", "cyberpunk"],
        preview: {
          component: `<button className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-gray-900 hover:shadow-[0_0_30px_#00ffff,0_0_60px_#00ffff] transition-all duration-300 font-bold animate-pulse hover:animate-none">
  ⚡ NEON POWER
</button>`,
        },
        code: {
          jsx: `<button className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-gray-900 hover:shadow-[0_0_30px_#00ffff,0_0_60px_#00ffff] transition-all duration-300 font-bold animate-pulse hover:animate-none">
  ⚡ NEON POWER
</button>`,
          html: `<button class="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-gray-900 hover:shadow-[0_0_30px_#00ffff,0_0_60px_#00ffff] transition-all duration-300 font-bold animate-pulse hover:animate-none">
  ⚡ NEON POWER
</button>`
        }
      },
      {
        id: "btn-008",
        name: "Floating Action Button",
        description: "Circular floating action button with icon",
        tags: ["fab", "floating", "circle", "icon"],
        preview: {
          component: `<button className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group">
  <svg className="w-7 h-7 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
</button>`,
        },
        code: {
          jsx: `<button className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group">
  <svg className="w-7 h-7 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
</button>`,
          html: `<button class="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group">
  <svg class="w-7 h-7 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
</button>`
        }
      },
      {
        id: "btn-009",
        name: "Glassmorphism Button",
        description: "Modern glassmorphism effect with backdrop blur",
        tags: ["glassmorphism", "modern", "blur", "glass"],
        preview: {
          component: `<button className="px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-white/20 text-gray-800 rounded-2xl hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 font-bold shadow-xl hover:scale-105">
  ✨ Glass Effect
</button>`,
        },
        code: {
          jsx: `<button className="px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-white/20 text-gray-800 rounded-2xl hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 font-bold shadow-xl hover:scale-105">
  ✨ Glass Effect
</button>`,
          html: `<button class="px-8 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-white/20 text-gray-800 rounded-2xl hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 font-bold shadow-xl hover:scale-105">
  ✨ Glass Effect
</button>`
        }
      },
      {
        id: "btn-010",
        name: "3D Button",
        description: "3D button with depth and press animation",
        tags: ["3d", "depth", "press", "animation"],
        preview: {
          component: `<button className="px-8 py-4 bg-gradient-to-b from-yellow-400 to-yellow-500 text-gray-900 rounded-xl font-bold shadow-[0_8px_0_#ca8a04] hover:shadow-[0_6px_0_#ca8a04] hover:translate-y-[2px] active:shadow-[0_4px_0_#ca8a04] active:translate-y-[4px] transition-all duration-150">
  🎯 3D PRESS
</button>`,
        },
        code: {
          jsx: `<button className="px-8 py-4 bg-gradient-to-b from-yellow-400 to-yellow-500 text-gray-900 rounded-xl font-bold shadow-[0_8px_0_#ca8a04] hover:shadow-[0_6px_0_#ca8a04] hover:translate-y-[2px] active:shadow-[0_4px_0_#ca8a04] active:translate-y-[4px] transition-all duration-150">
  🎯 3D PRESS
</button>`,
          html: `<button class="px-8 py-4 bg-gradient-to-b from-yellow-400 to-yellow-500 text-gray-900 rounded-xl font-bold shadow-[0_8px_0_#ca8a04] hover:shadow-[0_6px_0_#ca8a04] hover:translate-y-[2px] active:shadow-[0_4px_0_#ca8a04] active:translate-y-[4px] transition-all duration-150">
  🎯 3D PRESS
</button>`
        }
      },
      {
        id: "btn-011",
        name: "Morphing Button",
        description: "Button that morphs shape on hover",
        tags: ["morph", "shape", "transform", "creative"],
        preview: {
          component: `<button className="px-8 py-3 bg-purple-500 text-white rounded-full hover:rounded-lg transition-all duration-500 font-medium hover:scale-105 hover:rotate-1">
  Morph Me
</button>`,
        },
        code: {
          jsx: `<button className="px-8 py-3 bg-purple-500 text-white rounded-full hover:rounded-lg transition-all duration-500 font-medium hover:scale-105 hover:rotate-1">
  Morph Me
</button>`,
          html: `<button class="px-8 py-3 bg-purple-500 text-white rounded-full hover:rounded-lg transition-all duration-500 font-medium hover:scale-105 hover:rotate-1">
  Morph Me
</button>`
        }
      },
      {
        id: "btn-012",
        name: "Slide Reveal Button",
        description: "Button with sliding text reveal effect",
        tags: ["slide", "reveal", "text", "animation"],
        preview: {
          component: `<button className="relative px-6 py-3 bg-gray-900 text-white rounded-lg font-medium overflow-hidden group">
  <span className="absolute inset-0 bg-blue-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Slide Effect</span>
</button>`,
        },
        code: {
          jsx: `<button className="relative px-6 py-3 bg-gray-900 text-white rounded-lg font-medium overflow-hidden group">
  <span className="absolute inset-0 bg-blue-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Slide Effect</span>
</button>`,
          html: `<button class="relative px-6 py-3 bg-gray-900 text-white rounded-lg font-medium overflow-hidden group">
  <span class="absolute inset-0 bg-blue-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
  <span class="relative z-10 group-hover:text-white transition-colors duration-300">Slide Effect</span>
</button>`
        }
      },
      {
        id: "btn-013",
        name: "Ripple Effect Button",
        description: "Button with animated ripple effect",
        tags: ["ripple", "wave", "animation", "material"],
        preview: {
          component: `<button className="relative px-6 py-3 bg-green-500 text-white rounded-lg font-medium overflow-hidden group">
  <span className="absolute inset-0 w-0 h-0 transition-all duration-300 ease-out bg-white opacity-10 rounded-full group-hover:w-56 group-hover:h-56 group-hover:-top-24 group-hover:-left-24"></span>
  <span className="relative z-10">Ripple Effect</span>
</button>`,
        },
        code: {
          jsx: `<button className="relative px-6 py-3 bg-green-500 text-white rounded-lg font-medium overflow-hidden group">
  <span className="absolute inset-0 w-0 h-0 transition-all duration-300 ease-out bg-white opacity-10 rounded-full group-hover:w-56 group-hover:h-56 group-hover:-top-24 group-hover:-left-24"></span>
  <span className="relative z-10">Ripple Effect</span>
</button>`,
          html: `<button class="relative px-6 py-3 bg-green-500 text-white rounded-lg font-medium overflow-hidden group">
  <span class="absolute inset-0 w-0 h-0 transition-all duration-300 ease-out bg-white opacity-10 rounded-full group-hover:w-56 group-hover:h-56 group-hover:-top-24 group-hover:-left-24"></span>
  <span class="relative z-10">Ripple Effect</span>
</button>`
        }
      },
      {
        id: "btn-014",
        name: "Neumorphism Button",
        description: "Soft UI neumorphism design button",
        tags: ["neumorphism", "soft", "ui", "modern"],
        preview: {
          component: `<button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-2xl font-medium shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_rgba(255,255,255,0.7)] transition-all duration-200">
  Neomorphism
</button>`,
        },
        code: {
          jsx: `<button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-2xl font-medium shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_rgba(255,255,255,0.7)] transition-all duration-200">
  Neomorphism
</button>`,
          html: `<button class="px-6 py-3 bg-gray-200 text-gray-800 rounded-2xl font-medium shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.15),inset_-2px_-2px_6px_rgba(255,255,255,0.7)] transition-all duration-200">
  Neomorphism
</button>`
        }
      },
      {
        id: "btn-015",
        name: "Split Button",
        description: "Button with split hover animation",
        tags: ["split", "hover", "animation", "creative"],
        preview: {
          component: `<button className="relative px-6 py-3 bg-red-500 text-white rounded-lg font-medium overflow-hidden group">
  <span className="absolute inset-0 bg-red-700"></span>
  <span className="absolute inset-0 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  <span className="relative z-10">Split Effect</span>
</button>`,
        },
        code: {
          jsx: `<button className="relative px-6 py-3 bg-red-500 text-white rounded-lg font-medium overflow-hidden group">
  <span className="absolute inset-0 bg-red-700"></span>
  <span className="absolute inset-0 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  <span className="relative z-10">Split Effect</span>
</button>`,
          html: `<button class="relative px-6 py-3 bg-red-500 text-white rounded-lg font-medium overflow-hidden group">
  <span class="absolute inset-0 bg-red-700"></span>
  <span class="absolute inset-0 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  <span class="relative z-10">Split Effect</span>
</button>`
        }
      },
      {
        id: "btn-016",
        name: "Floating Border Button",
        description: "Button with animated floating border",
        tags: ["border", "floating", "animation", "outline"],
        preview: {
          component: `<button className="relative px-6 py-3 text-blue-600 font-medium bg-transparent border-2 border-transparent rounded-lg group">
  <span className="absolute inset-0 border-2 border-blue-600 rounded-lg transform scale-105 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>
  <span className="relative z-10">Floating Border</span>
</button>`,
        },
        code: {
          jsx: `<button className="relative px-6 py-3 text-blue-600 font-medium bg-transparent border-2 border-transparent rounded-lg group">
  <span className="absolute inset-0 border-2 border-blue-600 rounded-lg transform scale-105 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>
  <span className="relative z-10">Floating Border</span>
</button>`,
          html: `<button class="relative px-6 py-3 text-blue-600 font-medium bg-transparent border-2 border-transparent rounded-lg group">
  <span class="absolute inset-0 border-2 border-blue-600 rounded-lg transform scale-105 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>
  <span class="relative z-10">Floating Border</span>
</button>`
        }
      },
      {
        id: "btn-017",
        name: "Particle Button",
        description: "Button with particle explosion effect",
        tags: ["particle", "explosion", "creative", "animation"],
        preview: {
          component: `<button className="relative px-6 py-3 bg-yellow-500 text-white rounded-lg font-medium overflow-hidden group">
  <span className="absolute top-1/2 left-1/2 w-0 h-0 transition-all duration-500 ease-out bg-yellow-300 rounded-full group-hover:w-72 group-hover:h-72 transform -translate-x-1/2 -translate-y-1/2 opacity-20"></span>
  <span className="relative z-10">Particle Burst</span>
</button>`,
        },
        code: {
          jsx: `<button className="relative px-6 py-3 bg-yellow-500 text-white rounded-lg font-medium overflow-hidden group">
  <span className="absolute top-1/2 left-1/2 w-0 h-0 transition-all duration-500 ease-out bg-yellow-300 rounded-full group-hover:w-72 group-hover:h-72 transform -translate-x-1/2 -translate-y-1/2 opacity-20"></span>
  <span className="relative z-10">Particle Burst</span>
</button>`,
          html: `<button class="relative px-6 py-3 bg-yellow-500 text-white rounded-lg font-medium overflow-hidden group">
  <span class="absolute top-1/2 left-1/2 w-0 h-0 transition-all duration-500 ease-out bg-yellow-300 rounded-full group-hover:w-72 group-hover:h-72 transform -translate-x-1/2 -translate-y-1/2 opacity-20"></span>
  <span class="relative z-10">Particle Burst</span>
</button>`
        }
      },
      {
        id: "btn-018",
        name: "Squeeze Button",
        description: "Button with squeeze and expand animation",
        tags: ["squeeze", "expand", "animation", "playful"],
        preview: {
          component: `<button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:scale-95 active:scale-90 transition-transform duration-150 hover:bg-purple-700">
  Squeeze Me
</button>`,
        },
        code: {
          jsx: `<button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:scale-95 active:scale-90 transition-transform duration-150 hover:bg-purple-700">
  Squeeze Me
</button>`,
          html: `<button class="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:scale-95 active:scale-90 transition-transform duration-150 hover:bg-purple-700">
  Squeeze Me
</button>`
        }
      },
      {
        id: "btn-019",
        name: "Wobble Button",
        description: "Button with wobble animation on hover",
        tags: ["wobble", "shake", "animation", "fun"],
        preview: {
          component: `<button className="px-6 py-3 bg-pink-500 text-white rounded-lg font-medium hover:animate-bounce transition-all duration-200 hover:bg-pink-600">
  Wobble Effect
</button>`,
        },
        code: {
          jsx: `<button className="px-6 py-3 bg-pink-500 text-white rounded-lg font-medium hover:animate-bounce transition-all duration-200 hover:bg-pink-600">
  Wobble Effect
</button>`,
          html: `<button class="px-6 py-3 bg-pink-500 text-white rounded-lg font-medium hover:animate-bounce transition-all duration-200 hover:bg-pink-600">
  Wobble Effect
</button>`
        }
      },
      {
        id: "btn-020",
        name: "Magnetic Button",
        description: "Button with magnetic pull effect",
        tags: ["magnetic", "pull", "interactive", "modern"],
        preview: {
          component: `<button className="relative px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold transform transition-all duration-300 hover:scale-115 hover:rotate-6 hover:shadow-2xl shadow-lg group">
  <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-red-600 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  <span className="relative z-10">🧲 MAGNETIC FORCE</span>
</button>`,
        },
        code: {
          jsx: `<button className="relative px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold transform transition-all duration-300 hover:scale-115 hover:rotate-6 hover:shadow-2xl shadow-lg group">
  <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-red-600 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  <span className="relative z-10">🧲 MAGNETIC FORCE</span>
</button>`,
          html: `<button class="relative px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold transform transition-all duration-300 hover:scale-115 hover:rotate-6 hover:shadow-2xl shadow-lg group">
  <span class="absolute inset-0 bg-gradient-to-r from-pink-600 via-red-600 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  <span class="relative z-10">🧲 MAGNETIC FORCE</span>
</button>`
        }
      }
    ]
  },
  forms: {
    category: "Forms",
    description: "Form elements including inputs, selects, and validation",
    icon: "📝",
    components: [
      {
        id: "form-001",
        name: "Text Input",
        description: "Basic text input with focus states",
        tags: ["input", "text", "basic"],
        preview: {
          component: `<div className="w-64">
  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
  <input 
    type="email" 
    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
    placeholder="Enter your email"
  />
</div>`,
        },
        code: {
          jsx: `<div className="w-64">
  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
  <input 
    type="email" 
    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
    placeholder="Enter your email"
  />
</div>`,
          html: `<div class="w-64">
  <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
  <input 
    type="email" 
    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
    placeholder="Enter your email"
  />
</div>`
        }
      },
      {
        id: "form-002",
        name: "Search Input",
        description: "Search input with icon",
        tags: ["search", "icon", "input"],
        preview: {
          component: `<div className="relative w-64">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
  <input 
    type="text"
    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
    placeholder="Search..."
  />
</div>`,
        },
        code: {
          jsx: `<div className="relative w-64">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
  <input 
    type="text"
    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
    placeholder="Search..."
  />
</div>`,
          html: `<div class="relative w-64">
  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
  <input 
    type="text"
    class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
    placeholder="Search..."
  />
</div>`
        }
      },
      {
        id: "form-003",
        name: "Select Dropdown",
        description: "Custom styled select dropdown",
        tags: ["select", "dropdown", "options"],
        preview: {
          component: `<div className="w-64">
  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
    <option>United States</option>
    <option>Canada</option>
    <option>United Kingdom</option>
    <option>Australia</option>
  </select>
</div>`,
        },
        code: {
          jsx: `<div className="w-64">
  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
    <option>United States</option>
    <option>Canada</option>
    <option>United Kingdom</option>
    <option>Australia</option>
  </select>
</div>`,
          html: `<div class="w-64">
  <label class="block text-sm font-medium text-gray-700 mb-2">Country</label>
  <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
    <option>United States</option>
    <option>Canada</option>
    <option>United Kingdom</option>
    <option>Australia</option>
  </select>
</div>`
        }
      },
      {
        id: "form-004",
        name: "Checkbox",
        description: "Custom styled checkbox",
        tags: ["checkbox", "toggle", "selection"],
        preview: {
          component: `<div className="flex items-center">
  <input 
    type="checkbox" 
    id="agree"
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
  />
  <label htmlFor="agree" className="ml-2 text-sm font-medium text-gray-700">
    I agree to the terms and conditions
  </label>
</div>`,
        },
        code: {
          jsx: `<div className="flex items-center">
  <input 
    type="checkbox" 
    id="agree"
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
  />
  <label htmlFor="agree" className="ml-2 text-sm font-medium text-gray-700">
    I agree to the terms and conditions
  </label>
</div>`,
          html: `<div class="flex items-center">
  <input 
    type="checkbox" 
    id="agree"
    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
  />
  <label for="agree" class="ml-2 text-sm font-medium text-gray-700">
    I agree to the terms and conditions
  </label>
</div>`
        }
      },
      {
        id: "form-005",
        name: "Textarea",
        description: "Multi-line text input",
        tags: ["textarea", "multiline", "text"],
        preview: {
          component: `<div className="w-64">
  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
  <textarea 
    rows="4"
    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
    placeholder="Enter your message..."
  ></textarea>
</div>`,
        },
        code: {
          jsx: `<div className="w-64">
  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
  <textarea 
    rows="4"
    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
    placeholder="Enter your message..."
  ></textarea>
</div>`,
          html: `<div class="w-64">
  <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
  <textarea 
    rows="4"
    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
    placeholder="Enter your message..."
  ></textarea>
</div>`
        }
      }
    ]
  },
  navigation: {
    category: "Navigation",
    description: "Navigation components including navbars, breadcrumbs, and pagination",
    icon: "🧭",
    components: [
      {
        id: "nav-001",
        name: "Simple Navbar",
        description: "Clean navigation bar with logo and links",
        tags: ["navbar", "header", "navigation"],
        preview: {
          component: `<nav className="bg-white shadow-sm border-b px-6 py-4">
  <div className="flex items-center justify-between max-w-6xl mx-auto">
    <div className="text-xl font-bold text-gray-900">Logo</div>
    <div className="hidden md:flex space-x-8">
      <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Home</a>
      <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
      <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Services</a>
      <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
    </div>
    <button className="md:hidden">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</nav>`,
        },
        code: {
          jsx: `<nav className="bg-white shadow-sm border-b px-6 py-4">
  <div className="flex items-center justify-between max-w-6xl mx-auto">
    <div className="text-xl font-bold text-gray-900">Logo</div>
    <div className="hidden md:flex space-x-8">
      <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Home</a>
      <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">About</a>
      <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Services</a>
      <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
    </div>
    <button className="md:hidden">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</nav>`,
          html: `<nav class="bg-white shadow-sm border-b px-6 py-4">
  <div class="flex items-center justify-between max-w-6xl mx-auto">
    <div class="text-xl font-bold text-gray-900">Logo</div>
    <div class="hidden md:flex space-x-8">
      <a href="#" class="text-gray-600 hover:text-gray-900 font-medium">Home</a>
      <a href="#" class="text-gray-600 hover:text-gray-900 font-medium">About</a>
      <a href="#" class="text-gray-600 hover:text-gray-900 font-medium">Services</a>
      <a href="#" class="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
    </div>
    <button class="md:hidden">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</nav>`
        }
      },
      {
        id: "nav-002",
        name: "Breadcrumbs",
        description: "Navigation breadcrumb trail",
        tags: ["breadcrumb", "trail", "navigation"],
        preview: {
          component: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <a href="#" className="text-gray-700 hover:text-blue-600 inline-flex items-center">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        <a href="#" className="ml-1 text-gray-700 hover:text-blue-600 md:ml-2">Products</a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        <span className="ml-1 text-gray-500 md:ml-2">Details</span>
      </div>
    </li>
  </ol>
</nav>`,
        },
        code: {
          jsx: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <a href="#" className="text-gray-700 hover:text-blue-600 inline-flex items-center">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        <a href="#" className="ml-1 text-gray-700 hover:text-blue-600 md:ml-2">Products</a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        <span className="ml-1 text-gray-500 md:ml-2">Details</span>
      </div>
    </li>
  </ol>
</nav>`,
          html: `<nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3">
    <li class="inline-flex items-center">
      <a href="#" class="text-gray-700 hover:text-blue-600 inline-flex items-center">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        <a href="#" class="ml-1 text-gray-700 hover:text-blue-600 md:ml-2">Products</a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        <span class="ml-1 text-gray-500 md:ml-2">Details</span>
      </div>
    </li>
  </ol>
</nav>`
        }
      },
      {
        id: "nav-003",
        name: "Pagination",
        description: "Page navigation component",
        tags: ["pagination", "pages", "navigation"],
        preview: {
          component: `<nav className="flex items-center justify-between">
  <div className="flex justify-between flex-1 sm:hidden">
    <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
      Previous
    </a>
    <a href="#" className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
      Next
    </a>
  </div>
  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    <div>
      <p className="text-sm text-gray-700">
        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
        <span className="font-medium">97</span> results
      </p>
    </div>
    <div>
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span className="sr-only">Previous</span>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
          1
        </a>
        <a href="#" className="bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
          2
        </a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
          3
        </a>
        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span className="sr-only">Next</span>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</nav>`,
        },
        code: {
          jsx: `<nav className="flex items-center justify-between">
  <div className="flex justify-between flex-1 sm:hidden">
    <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
      Previous
    </a>
    <a href="#" className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
      Next
    </a>
  </div>
  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    <div>
      <p className="text-sm text-gray-700">
        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
        <span className="font-medium">97</span> results
      </p>
    </div>
    <div>
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span className="sr-only">Previous</span>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
          1
        </a>
        <a href="#" className="bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
          2
        </a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
          3
        </a>
        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span className="sr-only">Next</span>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</nav>`,
          html: `<nav class="flex items-center justify-between">
  <div class="flex justify-between flex-1 sm:hidden">
    <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
      Previous
    </a>
    <a href="#" class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
      Next
    </a>
  </div>
  <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    <div>
      <p class="text-sm text-gray-700">
        Showing <span class="font-medium">1</span> to <span class="font-medium">10</span> of
        <span class="font-medium">97</span> results
      </p>
    </div>
    <div>
      <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span class="sr-only">Previous</span>
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
          1
        </a>
        <a href="#" class="bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
          2
        </a>
        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
          3
        </a>
        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span class="sr-only">Next</span>
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</nav>`
        }
      }
    ]
  },
  cards: {
    category: "Cards",
    description: "Card components for displaying content",
    icon: "🃏",
    components: [
      {
        id: "card-001",
        name: "Simple Card",
        description: "Basic card with title and description",
        tags: ["basic", "content", "simple"],
        preview: {
          component: `<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
  <h5 className="mb-2 text-xl font-semibold text-gray-900">Card Title</h5>
  <p className="text-gray-600">
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </p>
</div>`,
        },
        code: {
          jsx: `<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
  <h5 className="mb-2 text-xl font-semibold text-gray-900">Card Title</h5>
  <p className="text-gray-600">
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </p>
</div>`,
          html: `<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
  <h5 class="mb-2 text-xl font-semibold text-gray-900">Card Title</h5>
  <p class="text-gray-600">
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </p>
</div>`
        }
      },
      {
        id: "card-002",
        name: "Image Card",
        description: "Card with image, title, and description",
        tags: ["image", "content", "media"],
        preview: {
          component: `<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
  <img className="rounded-t-lg w-full h-48 object-cover" src="https://via.placeholder.com/400x200" alt="Card image" />
  <div className="p-5">
    <h5 className="mb-2 text-xl font-semibold text-gray-900">Noteworthy technology</h5>
    <p className="mb-3 text-gray-600">
      Here are the biggest enterprise technology acquisitions of 2021.
    </p>
    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-800">
      Read more
      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
</div>`,
        },
        code: {
          jsx: `<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
  <img className="rounded-t-lg w-full h-48 object-cover" src="https://via.placeholder.com/400x200" alt="Card image" />
  <div className="p-5">
    <h5 className="mb-2 text-xl font-semibold text-gray-900">Noteworthy technology</h5>
    <p className="mb-3 text-gray-600">
      Here are the biggest enterprise technology acquisitions of 2021.
    </p>
    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-800">
      Read more
      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
</div>`,
          html: `<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
  <img class="rounded-t-lg w-full h-48 object-cover" src="https://via.placeholder.com/400x200" alt="Card image" />
  <div class="p-5">
    <h5 class="mb-2 text-xl font-semibold text-gray-900">Noteworthy technology</h5>
    <p class="mb-3 text-gray-600">
      Here are the biggest enterprise technology acquisitions of 2021.
    </p>
    <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-800">
      Read more
      <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</div>`
        }
      },
      {
        id: "card-003",
        name: "Pricing Card",
        description: "Card designed for pricing plans",
        tags: ["pricing", "plan", "features"],
        preview: {
          component: `<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
  <div className="text-center">
    <h3 className="text-lg font-medium text-gray-900">Basic Plan</h3>
    <div className="mt-4">
      <span className="text-4xl font-bold text-gray-900">$9</span>
      <span className="text-gray-500">/month</span>
    </div>
    <ul className="mt-6 space-y-2 text-sm text-gray-600">
      <li className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        5 Projects
      </li>
      <li className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        10GB Storage
      </li>
      <li className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Email Support
      </li>
    </ul>
    <button className="w-full mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
      Get Started
    </button>
  </div>
</div>`,
        },
        code: {
          jsx: `<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
  <div className="text-center">
    <h3 className="text-lg font-medium text-gray-900">Basic Plan</h3>
    <div className="mt-4">
      <span className="text-4xl font-bold text-gray-900">$9</span>
      <span className="text-gray-500">/month</span>
    </div>
    <ul className="mt-6 space-y-2 text-sm text-gray-600">
      <li className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        5 Projects
      </li>
      <li className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        10GB Storage
      </li>
      <li className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Email Support
      </li>
    </ul>
    <button className="w-full mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
      Get Started
    </button>
  </div>
</div>`,
          html: `<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
  <div class="text-center">
    <h3 class="text-lg font-medium text-gray-900">Basic Plan</h3>
    <div class="mt-4">
      <span class="text-4xl font-bold text-gray-900">$9</span>
      <span class="text-gray-500">/month</span>
    </div>
    <ul class="mt-6 space-y-2 text-sm text-gray-600">
      <li class="flex items-center">
        <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        5 Projects
      </li>
      <li class="flex items-center">
        <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        10GB Storage
      </li>
      <li class="flex items-center">
        <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        Email Support
      </li>
    </ul>
    <button class="w-full mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
      Get Started
    </button>
  </div>
</div>`
        }
      }
    ]
  },
  layouts: {
    category: "Layouts",
    description: "Layout components and grid systems",
    icon: "📐",
    components: [
      {
        id: "layout-001",
        name: "Hero Section",
        description: "Hero section with title, subtitle and CTA",
        tags: ["hero", "landing", "cta"],
        preview: {
          component: `<div className="bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-24">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-5xl font-bold text-gray-900 mb-6">
      Build amazing things
    </h1>
    <p className="text-xl text-gray-600 mb-8">
      Create beautiful user interfaces with our component library. Copy, paste, and customize to your heart's content.
    </p>
    <div className="space-x-4">
      <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium">
        Get Started
      </button>
      <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium">
        Learn More
      </button>
    </div>
  </div>
</div>`,
        },
        code: {
          jsx: `<div className="bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-24">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-5xl font-bold text-gray-900 mb-6">
      Build amazing things
    </h1>
    <p className="text-xl text-gray-600 mb-8">
      Create beautiful user interfaces with our component library. Copy, paste, and customize to your heart's content.
    </p>
    <div className="space-x-4">
      <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium">
        Get Started
      </button>
      <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium">
        Learn More
      </button>
    </div>
  </div>
</div>`,
          html: `<div class="bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-24">
  <div class="max-w-4xl mx-auto text-center">
    <h1 class="text-5xl font-bold text-gray-900 mb-6">
      Build amazing things
    </h1>
    <p class="text-xl text-gray-600 mb-8">
      Create beautiful user interfaces with our component library. Copy, paste, and customize to your heart's content.
    </p>
    <div class="space-x-4">
      <button class="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium">
        Get Started
      </button>
      <button class="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium">
        Learn More
      </button>
    </div>
  </div>
</div>`
        }
      }
    ]
  },
  // Merge additional component categories
  ...moreComponentCategories,
  ...utilityComponents
};

// Helper function to get all components
export const getAllComponents = () => {
  const allComponents = [];
  Object.entries(componentsData).forEach(([categoryKey, categoryData]) => {
    categoryData.components.forEach(component => {
      allComponents.push({
        ...component,
        category: categoryData.category,
        categoryKey
      });
    });
  });
  return allComponents;
};

// Helper function to get components by category
export const getComponentsByCategory = (categoryKey) => {
  return componentsData[categoryKey]?.components || [];
};

// Helper function to search components
export const searchComponents = (query) => {
  const allComponents = getAllComponents();
  return allComponents.filter(component => {
    const searchText = query.toLowerCase();
    return (
      component.name.toLowerCase().includes(searchText) ||
      component.description.toLowerCase().includes(searchText) ||
      component.tags.some(tag => tag.toLowerCase().includes(searchText))
    );
  });
};
