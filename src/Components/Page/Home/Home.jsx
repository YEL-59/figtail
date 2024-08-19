import { useEffect, useState } from "react";
import Navbars from "../../sharedComponents/Navbar/navbars";
import Footer from "../../sharedComponents/Footer/Footer";
import GridCard from "../../sharedComponents/GridCard/GridCard";

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



  const [buttonData, setButtonData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch("/simplebuttonData.json")
      .then((response) => response.json())
      .then((data) => setButtonData(data))
      .catch((error) => console.error("Error fetching button data:", error));
  }, []);
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
        <div class="absolute top-0 left-0 w-full h-auto overflow-hidden opacity-10">
          <img
            src="https://cdn.devdojo.com/assets/img/bg-patterns.svg"
            class="object-cover w-full h-auto"
          />
          <span class="absolute inset-0 block w-full h-full bg-gradient-to-b from-transparent to-white"></span>
        </div>
        <div class="max-w-3xl px-6 py-24 mx-auto text-left md:text-center sm:py-32 xl:px-0">
          <img
            src="https://cdn.devdojo.com/images/july2021/tw-logo.png"
            class="w-12 h-auto mb-4 sm:w-16 md:w-20 md:mx-auto"
          />
          <h1 class="text-4xl font-black sm:text-5xl md:text-7xl">
            TailwindCSS Buttons
          </h1>
          <p class="mt-0 text-base text-gray-500 sm:mt-2 md:mt-5 sm:text-xl md:text-2xl">
            A unique collection of Copy &amp; Paste TailwindCSS buttons 🙌
          </p>
          {/* <div class="flex items-center justify-center w-full mt-8">
              <a href="https://www.producthunt.com/posts/tailwindcss-buttons?utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-tailwindcss-buttons" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=303177&amp;theme=light" alt="TailwindCSS Buttons - 30+ Copy &amp; Paste TailwindCSS buttons 🙌 | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54"/></a>
            </div> */}
        </div>

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

        <div className="">
          {/* px-4 mx-auto max-w-8xl lg:px-4 lg:text-center <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 lg:font-extrabold lg:text-4xl lg:leading-snug dark:text-white lg:text-center 2xl:px-48">
            Tailwind CSS Components With Figma 
          </h2>
          <p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl lg:px-64 lg:mb-16">
            Explore the whole collection of over 62 open-source UI components
            and interactive elements built with the utility classes from
            Tailwind CSS and Flowbite and Figma
          </p> */}

          <div className="grid grid-cols-12 gap-4 xl:gap-10  p-2 mt-10">
            <div className="col-span-12 md:col-span-8 lg:col-span-9 mb-6 lg:mb-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 xl:gap-2  p-2 lg:p-0">
                <div className="w-full">
                  <div className="h-64  bg-white rounded-lg border border-gray-100 hover:border-white dark:border-gray-800 dark:hover:border-gray-700 hover:shadow-lg dark:hover:shadow-lg-light dark:bg-gray-900">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-t-md py-2.5 px-5 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Alerts
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        <svg
                          className="w-3.5 h-3.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="flex justify-center items-center h-52">
                      <div className="hidden relative h-4/6 dark:block w-56">
                        <span className="box-border block overflow-hidden w-auto h-auto bg-transparent opacity-100 border-0 m-0 p-0 absolute inset-0">
                          <img
                            alt="Alerts"
                            src="/images/components/alerts-dark.svg"
                            decoding="async"
                            data-nimg="fill"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              

                <GridCard
                  title="Hover Effect 2"
                  buttonHTML={`
    <a href="#_" class="relative px-5 py-2 font-medium text-white group">
      <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
      <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
      <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
      <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
      <span class="relative">Button Text</span>
    </a>
  `}
                />

                <GridCard
                  title="Hover Effect 3"
                  buttonHTML={`
    <a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
      <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
      <span class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Button Text</span>
    </a>
  `}
                />

                <GridCard
                  title="Hover Effect 4"
                  buttonHTML={`
   <a href="#_" class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
<span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
<span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
<span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
<span class="relative">Button Text</span>
</a>
  `}
                />

                <GridCard
                  title="Hover Effect 5"
                  buttonHTML={`
<a href="#_" class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
<span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
<span class="relative group-hover:text-white">Button Text</span>
</a>
  `}
                />
                <GridCard
                  title="Hover Effect 6"
                  buttonHTML={`
<a href="#_" class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white">
<span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
<span class="relative">Button Text</span>
</a>
  `}
                />
                <GridCard
                  title="Hover Effect 7"
                  buttonHTML={`
<a href="#_" class="inline-flex overflow-hidden text-white bg-gray-900 rounded group">
<span class="px-3.5 py-2 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
</span>
<span class="pl-4 pr-5 py-2.5">Button Text</span>
</a>
  `}
                />

                <GridCard
                  title="Hover Effect 8"
                  buttonHTML={`
<a href="#_" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative">Button Text</span>
</a>
  `}
                />

                <GridCard
                  title="Hover Effect 9"
                  buttonHTML={`
<a href="#_" class="relative px-6 py-3 font-bold text-black group">
<span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span class="absolute inset-0 w-full h-full border-4 border-black"></span>
<span class="relative">Button Text</span>
</a>
  `}
                />
                <GridCard
                  title="Hover Effect 10"
                  buttonHTML={`
<a href="#_" class="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
<span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative">Button Text</span>
</a>
  `}
                />
                <GridCard
                  title="Hover Effect 11"
                  buttonHTML={`
<a href="#_" class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
<span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
<span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
<span class="relative text-white">Button Text</span>
</a>
  `}
                />

                <GridCard
                  title="Hover Effect 12"
                  buttonHTML={`
<a href="#_" class="relative px-10 py-3 font-medium text-white transition duration-300 bg-green-400 rounded-md hover:bg-green-500 ease">
<span class="absolute bottom-0 left-0 h-full -ml-2">
<svg viewBox="0 0 487 487" class="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path></svg>
</span>
<span class="absolute top-0 right-0 w-12 h-full -mr-3">
<svg viewBox="0 0 487 487" class="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path></svg>
</span>
<span class="relative">Button Text</span>
</a>
  `}
                />
             
              </div>
              <h1 className="mt-20 mb-10 text-center border-b-4">
                Simple Button
              </h1>
           
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 xl:gap-2 p-2 lg:p-0">
                {buttonData.map((item, index) => (
                  <GridCard
                    key={index}
                    title={item.title}
                    imgSrc={item.imgSrc}
                    imgAlt={item.imgAlt}
                    buttonText={item.buttonText}
                    buttonStyles={item.buttonStyles}
                    buttonHTML={item.buttonHTML}
                  />
                ))}
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 lg:col-span-3 ">
              <div>
                <form>
                  <div className="relative">
                    <input
                      type="search"
                      id="search"
                      className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-2 bottom-[5px] bg-[#2c6777]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-1 "
                    >
                      Search
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3 mb-3">
                    <button
                      type="button"
                      className="text-black bg-white hover:bg-[#089bab] px-2 py-1 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-full text-sm  text-center inline-flex items-center"
                    >
                      btn.buttoncontant
                    </button>
                  </div>
                </form>
                <div className=" w-auto  bg-white border border-gray-200 rounded-lg shadow ">
                  <div className="p-3">
                    <h3 className="mb-4 font-semibold text-gray-900 ">
                      Categories
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;
