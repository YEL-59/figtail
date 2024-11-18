import { useState } from "react";
import Navbars from "../../sharedComponents/Navbar/navbars";
import Footer from "../../sharedComponents/Footer/Footer";
import GridCard from "../../sharedComponents/GridCard/GridCard";
import CustomParticles from "../../sharedComponents/CustomParticles/CustomParticles";
import cardimg from "../../../assets/thumb_u.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [navfix, setNavfix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
      //console.log(scrollY)
    } else {
      setNavfix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  return (
    <>
      <div
        className={`z-20 border  ${
          navfix
            ? " top-0 h-[9%] md:h-[11.5%] lg:h-[8%]  shadow-lg w-full fixed bg-white transition-all duration-300 ease-in-out "
            : ""
        }`}
      >
        <Navbars className="relative " />
      </div>

      <section className="container  mx-auto py-8 bg-white dark:bg-gray-900 lg:py-24 relative">
        <div className="absolute top-0 left-0 w-full h-auto overflow-hidden opacity-10">
          <img
            src="https://cdn.devdojo.com/assets/img/bg-patterns.svg"
            className="object-cover w-full h-auto"
          />
          <span className="absolute inset-0 block w-full h-full bg-gradient-to-b from-transparent to-white"></span>
        </div>
        <div className="max-w-4xl px-6 py-24 mx-auto text-left md:text-center sm:py-32 xl:px-0">
          <img
            src="https://cdn.devdojo.com/images/july2021/tw-logo.png"
            className="w-12 h-auto mb-4 sm:w-16 md:w-20 md:mx-auto"
          />
          <h1 className="text-4xl font-black sm:text-5xl md:text-7xl">
            TailwindCSS Components
          </h1>
          <p className="mt-0 text-base text-gray-500 sm:mt-2 md:mt-5 sm:text-xl md:text-2xl">
            A unique collection of Copy &amp; Paste TailwindCSS Component 🙌
          </p>
          {/* <div className="flex items-center justify-center w-full mt-8">
              <a href="https://www.producthunt.com/posts/tailwindcss-buttons?utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-tailwindcss-buttons" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=303177&amp;theme=light" alt="TailwindCSS Buttons - 30+ Copy &amp; Paste TailwindCSS buttons 🙌 | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54"/></a>
            </div> */}
        </div>
      </section>

      <div className="mb-20 p-2">
        <div className="grid grid-cols-12 gap-4">
          <form className="col-span-12 sm:col-span-5">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>

              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />

              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>

          <div className="col-span-12 sm:col-span-7 flex justify-end items-center space-x-4">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-16 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Figma
            </button>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-16 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Code
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 shadow-teal-600 shadow-2xl">
        <div className=" grid grid-cols-1 gap-8 p-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:p-2 xl:p-5">
          {/* Your grid content here */}
          <div>
            <div className="relative bg-teal-600 border rounded-lg shadow-md cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:shadow-primary-400">
              <div
                title="total components"
                className="absolute top-0 right-0 w-6 h-6 font-bold text-center text-gray-800 bg-white dark:text-white rounded-tr-md rounded-bl-md dark:bg-slate-800"
              >
                23
              </div>

              <div className="flex justify-center p-2">
                <a href="#">
                  <img
                    className="rounded-md"
                    src={cardimg}
                    alt="Card"
                    loading="lazy"
                  />
                </a>
              </div>

              <div className="px-4 pb-3">
                <div>
                  <Link
                    to={"card"}
                    className="text-xl font-semibold tracking-tight text-white hover:text-primary-800 dark:hover:text-primary-300 dark:text-white"
                  >
                    Card
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative bg-gradient-to-tr from-teal-500 to-teal-700 border border-gray-200 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-transform duration-300">
              {/* Badge */}
              <div
                title="Total components"
                className="absolute top-0 right-0 w-8 h-8 font-bold text-center text-white bg-teal-900 rounded-tr-lg rounded-bl-lg"
              >
                239
              </div>

              {/* Card Content */}
              <div className="flex flex-col items-center justify-center p-4 space-y-4 bg-white h-[17.5rem]">
                {/* Interactive Button */}
                <Link to="button">
                  <div className="relative inline-flex items-center justify-center w-full py-3 px-6 text-sm font-medium text-white transition duration-300 rounded-lg shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 hover:shadow-xl">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-0 bg-opacity-20 rounded-lg bg-white hover:opacity-10"></span>
                    Button Text
                  </div>
                </Link>
              </div>

              {/* Footer */}
              <div className="px-4 pb-4">
                <div className="flex justify-between items-center">
                  {/* Title */}
                  <Link
                    to="button"
                    className="text-lg font-semibold tracking-tight text-white hover:text-gray-300"
                  >
                    Button
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative bg-teal-600 border rounded-lg shadow-md cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:shadow-primary-400">
              <div
                title="total components"
                className="absolute top-0 right-0 w-6 h-6 font-bold text-center text-gray-800 bg-white dark:text-white rounded-tr-md rounded-bl-md dark:bg-slate-800"
              >
                23
              </div>

              <div className="flex justify-center p-2">
                <a href="#">
                  <img
                    className="rounded-md"
                    src={cardimg}
                    alt="Card"
                    loading="lazy"
                  />
                </a>
              </div>

              <div className="px-4 pb-3">
                <div>
                  <Link
                    to={"grid"}
                    className="text-xl font-semibold tracking-tight text-white hover:text-primary-800 dark:hover:text-primary-300 dark:text-white"
                  >
                    Grid
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
