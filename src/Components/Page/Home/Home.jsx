import { useState } from "react";
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
  return (
    <>
      <div
        className={`z-20 border  ${navfix
            ? " top-0 h-[9%] md:h-[11.5%] lg:h-[8%]  shadow-lg w-full fixed bg-white transition-all duration-300 ease-in-out "
            : ""
          }`}
      >
        <Navbars className="relative " />
      </div>

      <section className="container  mx-auto py-8 bg-white dark:bg-gray-900 lg:py-24 relative">

        <div class="absolute top-0 left-0 w-full h-auto overflow-hidden opacity-10">
          
          <img src="https://cdn.devdojo.com/assets/img/bg-patterns.svg" class="object-cover w-full h-auto" />
            <span class="absolute inset-0 block w-full h-full bg-gradient-to-b from-transparent to-white"></span>
        </div>
        <div class="max-w-3xl px-6 py-24 mx-auto text-left md:text-center sm:py-32 xl:px-0">
          <img src="https://cdn.devdojo.com/images/july2021/tw-logo.png" class="w-12 h-auto mb-4 sm:w-16 md:w-20 md:mx-auto"/>
            <h1 class="text-4xl font-black sm:text-5xl md:text-7xl">TailwindCSS Buttons</h1>
            <p class="mt-0 text-base text-gray-500 sm:mt-2 md:mt-5 sm:text-xl md:text-2xl">A unique collection of Copy &amp; Paste TailwindCSS buttons 🙌</p>
            {/* <div class="flex items-center justify-center w-full mt-8">
              <a href="https://www.producthunt.com/posts/tailwindcss-buttons?utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-tailwindcss-buttons" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=303177&amp;theme=light" alt="TailwindCSS Buttons - 30+ Copy &amp; Paste TailwindCSS buttons 🙌 | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54"/></a>
            </div> */}
        </div>

        <div className="mb-20 p-2">
          <div className="grid grid-cols-12 gap-4">

            <form className="col-span-12 sm:col-span-5">
              <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">

                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>

                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />

                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Search
                </button>
              </div>
            </form>


            <div className="col-span-12 sm:col-span-7 flex justify-end items-center space-x-4">
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-16 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Figma
              </button>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-16 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                  title="Alerts"
                  imgSrc="/images/components/alerts-dark.svg"
                  imgAlt="Alerts"
                  buttonText="Click Me"
                  buttonStyles="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                />
                <GridCard
                  title="Notifications"
                  imgSrc="/images/components/notifications-dark.svg"
                  imgAlt="Notifications"
                  buttonText="Notify"
                  buttonStyles="bg-green-500 text-white font-bold py-2 px-4 rounded"
                />
                <GridCard
                  title="Messages"
                  imgSrc="/images/components/messages-dark.svg"
                  imgAlt="Messages"
                  buttonText="Send Message"
                  buttonStyles="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                />


             
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
