// data/cardData.js
export const cardData = [
    {
      id: 1,
      title: "Simple Button",
      preview: (
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Click Me
        </button>
      ),
      code: `<button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
    Click Me
  </button>`,
    },
    {
      id: 2,
      title: "Image Card",
      preview: (
        <img
          className="rounded-lg"
          src="https://via.placeholder.com/150"
          alt="Placeholder"
        />
      ),
      code: `<img
    className="rounded-lg"
    src="https://via.placeholder.com/150"
    alt="Placeholder"
  />`,
    },
  ];
  