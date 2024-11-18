import { useState } from "react";

import Navbars from "../../sharedComponents/Navbar/navbars";
import SingleCard from "../../sharedComponents/SingleCard/SingleCard";
import img1 from "../../../assets/grid/img1.webp";
import img2 from "../../../assets/grid/img2.webp";
import img3 from "../../../assets/grid/img3.webp";
import img4 from "../../../assets/grid/img4.webp";
import img5 from "../../../assets/grid/img5.webp";
import img6 from "../../../assets/grid/img6.webp";
import img7 from "../../../assets/grid/img7.webp";
import img8 from "../../../assets/grid/img8.webp";
import img9 from "../../../assets/grid/img9.webp";
import img10 from "../../../assets/grid/img10.webp";
import img11 from "../../../assets/grid/img11.webp";
import img12 from "../../../assets/grid/img12.webp";
import img13 from "../../../assets/grid/img13.webp";
import img14 from "../../../assets/grid/img14.webp";
import img15 from "../../../assets/grid/img15.webp";
import img16 from "../../../assets/grid/img16.webp";
import img17 from "../../../assets/grid/img17.webp";
import img18 from "../../../assets/grid/img18.webp";
import img19 from "../../../assets/grid/img19.webp";
import img20 from "../../../assets/grid/img20.webp";
import img21 from "../../../assets/grid/img21.webp";

const Grid = () => {
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
        <div className="max-w-3xl px-6 py-24 mx-auto text-left md:text-center sm:py-32 xl:px-0">
          <img
            src="https://cdn.devdojo.com/images/july2021/tw-logo.png"
            className="w-12 h-auto mb-4 sm:w-16 md:w-20 md:mx-auto"
          />
          <h1 className="text-4xl font-black sm:text-5xl md:text-7xl">
            TailwindCSS Cards
          </h1>
          <p className="mt-0 text-base text-gray-500 sm:mt-2 md:mt-5 sm:text-xl md:text-2xl">
            A unique collection of Copy &amp; Paste TailwindCSS buttons 🙌
          </p>
          {/* <div className="flex items-center justify-center w-full mt-8">
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
            and interactive elements built with the utility classNamees from
            Tailwind CSS and Flowbite and Figma
          </p> */}
        </div>
      </section>

      <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-5">
        <SingleCard
          img_src={img1}
          title="grid"
          buttonHTML={`
                 
                         
        
        <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
    <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Services</h2>
    <p class="mb-12 text-lg text-gray-500">Here is a few of the awesome Services we provide.</p>
    <div class="w-full">
        <div class="flex flex-col w-full mb-10 sm:flex-row">
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">DAPP Development</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">A decentralized application (dapp) is an application built on a
                            decentralized network that combines a smart contract and a frontend user interface.</p>
                    </div>
                </div>
            </div>
            <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Web 3.0 Development</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Web 3.0 is the third generation of Internet services that will
                            focus on understanding and analyzing data to provide a semantic web.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-full mb-5 sm:flex-row">
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Project Audit</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">A Project Audit is a formal review of a project, which is intended
                            to assess the extent up to which project management standards are being upheld.</p>
                    </div>
                </div>
            </div>
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Hacking / RE</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">A security hacker is someone who explores methods for breaching
                            defenses and exploiting weaknesses in a computer system or network.</p>
                    </div>
                </div>
            </div>
            <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Bot/Script Development</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Bot development frameworks were created as advanced software tools
                            that eliminate a large amount of manual work and accelerate the development process.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

                           
           
                         `}
        />
        <SingleCard
          img_src={img2}
          title="grid"
          buttonHTML={`
                 
                         
      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

    <div class="border-b mb-5 flex justify-between text-sm">
        <div class="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            <svg class="h-6 mr-3" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 455.005 455.005"
                style="enable-background:new 0 0 455.005 455.005;" xml:space="preserve">
                <g>
                    <path d="M446.158,267.615c-5.622-3.103-12.756-2.421-19.574,1.871l-125.947,79.309c-3.505,2.208-4.557,6.838-2.35,10.343 c2.208,3.505,6.838,4.557,10.343,2.35l125.947-79.309c2.66-1.675,4.116-1.552,4.331-1.432c0.218,0.12,1.096,1.285,1.096,4.428 c0,8.449-6.271,19.809-13.42,24.311l-122.099,76.885c-6.492,4.088-12.427,5.212-16.284,3.084c-3.856-2.129-6.067-7.75-6.067-15.423 c0-19.438,13.896-44.61,30.345-54.967l139.023-87.542c2.181-1.373,3.503-3.77,3.503-6.347s-1.323-4.974-3.503-6.347L184.368,50.615 c-2.442-1.538-5.551-1.538-7.993,0L35.66,139.223C15.664,151.815,0,180.188,0,203.818v4c0,23.63,15.664,52.004,35.66,64.595 l209.292,131.791c3.505,2.207,8.136,1.154,10.343-2.35c2.207-3.505,1.155-8.136-2.35-10.343L43.653,259.72 C28.121,249.941,15,226.172,15,207.818v-4c0-18.354,13.121-42.122,28.653-51.902l136.718-86.091l253.059,159.35l-128.944,81.196 c-20.945,13.189-37.352,42.909-37.352,67.661c0,13.495,4.907,23.636,13.818,28.555c3.579,1.976,7.526,2.956,11.709,2.956 c6.231,0,12.985-2.176,19.817-6.479l122.099-76.885c11.455-7.213,20.427-23.467,20.427-37.004 C455.004,277.119,451.78,270.719,446.158,267.615z"> </path>
                    <path d="M353.664,232.676c2.492,0,4.928-1.241,6.354-3.504c2.207-3.505,1.155-8.136-2.35-10.343l-173.3-109.126 c-3.506-2.207-8.136-1.154-10.343,2.35c-2.207,3.505-1.155,8.136,2.35,10.343l173.3,109.126 C350.916,232.303,352.298,232.676,353.664,232.676z"> </path>
                    <path d="M323.68,252.58c2.497,0,4.938-1.246,6.361-3.517c2.201-3.509,1.14-8.138-2.37-10.338L254.46,192.82 c-3.511-2.202-8.139-1.139-10.338,2.37c-2.201,3.51-1.14,8.138,2.37,10.338l73.211,45.905 C320.941,252.21,322.318,252.58,323.68,252.58z"> </path>
                    <path d="M223.903,212.559c-3.513-2.194-8.14-1.124-10.334,2.39c-2.194,3.514-1.124,8.14,2.39,10.334l73.773,46.062 c1.236,0.771,2.608,1.139,3.965,1.139c2.501,0,4.947-1.251,6.369-3.529c2.194-3.514,1.124-8.14-2.39-10.334L223.903,212.559z"> </path>
                    <path d="M145.209,129.33l-62.33,39.254c-2.187,1.377-3.511,3.783-3.503,6.368s1.345,4.983,3.54,6.348l74.335,46.219 c1.213,0.754,2.586,1.131,3.96,1.131c1.417,0,2.833-0.401,4.071-1.201l16.556-10.7c3.479-2.249,4.476-6.891,2.228-10.37 c-2.248-3.479-6.891-4.475-10.37-2.228l-12.562,8.119l-60.119-37.38l48.2-30.355l59.244,37.147l-6.907,4.464 c-3.479,2.249-4.476,6.891-2.228,10.37c2.249,3.479,6.894,4.476,10.37,2.228l16.8-10.859c2.153-1.392,3.446-3.787,3.429-6.351 c-0.018-2.563-1.344-4.94-3.516-6.302l-73.218-45.909C150.749,127.792,147.647,127.795,145.209,129.33z"> </path>
                    <path d="M270.089,288.846c2.187-3.518,1.109-8.142-2.409-10.329l-74.337-46.221c-3.518-2.188-8.143-1.109-10.329,2.409 c-2.187,3.518-1.109,8.142,2.409,10.329l74.337,46.221c1.232,0.767,2.601,1.132,3.953,1.132 C266.219,292.387,268.669,291.131,270.089,288.846z"> </path>
                    <path d="M53.527,192.864c-2.187,3.518-1.109,8.142,2.409,10.329l183.478,114.081c1.232,0.767,2.601,1.132,3.953,1.132 c2.506,0,4.956-1.256,6.376-3.541c2.187-3.518,1.109-8.142-2.409-10.329L63.856,190.455 C60.338,188.266,55.714,189.346,53.527,192.864z"> </path>
                </g>
            </svg>
            <a href="#" class="font-semibold inline-block">Cooking BLog</a>
        </div>
        <a href="#">See All</a>
    </div>


    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        <!-- CARD 1 -->
        <div class="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#"></a>
            <div class="relative"><a href="#">
                    <img class="w-full"
                        src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                        alt="Sunset in the mountains">
                    <div
                        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        class="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Cooking
                    </div>
                </a>
            </div>
            <div class="px-6 py-4 mb-auto">
                <a href="#"
                    class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest
                    Salad Recipe ever</a>
                <p class="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div class="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <svg height="13px" width="13px" version="1.1" id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                        y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
                        xml:space="preserve">
                        <g>
                            <g>
                                <path
                                    d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                </path>
                            </g>
                        </g>
                    </svg>
                    <span class="ml-1">6 mins ago</span>
                </span>

                <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <svg class="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                        </path>
                    </svg>
                    <span class="ml-1">39 Comments</span>
                </span>
            </div>
        </div>



        <!-- CARD 2 -->
        <div class="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#"></a>
            <div class="relative"><a href="#">
                    <img class="w-full"
                        src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                        alt="Sunset in the mountains">
                    <div
                        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a><a href="#!">
                    <div
                        class="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Cooking
                    </div>
                </a>
            </div>
            <div class="px-6 py-4 mb-auto">
                <a href="#"
                    class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Best
                    FastFood Ideas (Yummy)</a>
                <p class="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div class="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <svg height="13px" width="13px" version="1.1" id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                        y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
                        xml:space="preserve">
                        <g>
                            <g>
                                <path
                                    d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                </path>
                            </g>
                        </g>
                    </svg>
                    <span class="ml-1"> 10 days ago</span>
                </span>

                <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <svg class="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                        </path>
                    </svg>
                    <span class="ml-1">0 Comments</span>
                </span>
            </div>
        </div>


        
        <!-- CARD 3 -->
        <div class="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#"></a>
            <div class="relative"><a href="#">
                    <img class="w-full"
                        src="https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                        alt="Sunset in the mountains">
                    <div
                        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a><a href="#!">
                    <div
                        class="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Cooking
                    </div>
                </a>
            </div>
            <div class="px-6 py-4 mb-auto">
                <a href="#"
                    class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Why
                    to eat salad?</a>
                <p class="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div class="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <svg height="13px" width="13px" version="1.1" id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                        y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
                        xml:space="preserve">
                        <g>
                            <g>
                                <path
                                    d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                </path>
                            </g>
                        </g>
                    </svg>
                    <span class="ml-1">16 hours ago</span>
                </span>

                <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <svg class="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                        </path>
                    </svg>
                    <span class="ml-1">9 Comments</span>
                </span>
            </div>
        </div>

    </div>

</div>
                           
           
                         `}
        />{" "}
        <SingleCard
          img_src={img3}
          title="grid"
          buttonHTML={`
               
                       
      
     <!-- source: https://github.com/mfg888/Responsive-Tailwind-CSS-Grid/blob/main/index.html -->

<div class="text-center p-10">
    <h1 class="font-bold text-4xl mb-4">Responsive Product card grid</h1>
    <h1 class="text-3xl">Tailwind CSS</h1>
</div>

<!-- ✅ Grid Section - Starts Here 👇 -->
<section id="Projects"
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

    <!--   ✅ Product card 1 - Starts Here 👇 -->
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div>
            </div>
        </a>
    </div>
    <!--   🛑 Product card 1 - Ends Here  -->

    <!--   ✅ Product card 2 - Starts Here 👇 -->
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div>
            </div>
        </a>
    </div>
    <!--   🛑 Product card 2- Ends Here  -->

    <!--   ✅ Product card 3 - Starts Here 👇 -->
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div>
            </div>
        </a>
    </div>
    <!--   🛑 Product card 3 - Ends Here  -->

    <!--   ✅ Product card 4 - Starts Here 👇 -->
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div>
            </div>
        </a>
    </div>
    <!--   🛑 Product card 4 - Ends Here  -->

    <!--   ✅ Product card 5 - Starts Here 👇 -->
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div>
            </div>
        </a>
    </div>
    <!--   🛑 Product card 5 - Ends Here  -->

    <!--   ✅ Product card 6 - Starts Here 👇 -->
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div>
            </div>
        </a>
    </div>
    <!--   🛑 Product card 6 - Ends Here  -->

</section>

<!-- 🛑 Grid Section - Ends Here -->







                         
         
                       `}
        />{" "}
        <SingleCard
          img_src={img4}
          title="grid"
          buttonHTML={`
             
                     
    
   <div class="h-full flex w-full justify-center items-center dark:bg-gray-800 p-2">

    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">

        <!-- card  -->
        <div
            class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                24
            </div>
            <div class="p-2 flex justify-center">
                <a href="#">
                    <img class="rounded-md"
                    src="https://tailwindflex.com/public/images/thumbnails/coming-soon-page/thumb_u.min.webp"
                    loading="lazy">
                </a>
            </div>

            <div class="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Card
                        </h5>
                    </a>

                    <p class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        A card component 
                    </p>
                </div>
            </div>

        </div>

        <!-- card  -->
        <div
            class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                19
            </div>

            <div class="p-2 flex justify-center">
                <a href="#">
                    <img class="rounded-md"
                    src="https://tailwindflex.com/public/images/thumbnails/radio-buttons/thumb_u.min.webp"
                    loading="lazy">
                </a>
            </div>

            <div class="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Input
                        </h5>
                    </a>

                    <p class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>
                </div>
            </div>
        </div>

        <!-- card  -->
        <div
            class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                18
            </div>
            <div class="p-2 flex justify-center">
                <a href="#">
                    <img class="rounded-md"
                    src="https://tailwindflex.com/public/images/thumbnails/buttons-with-border-bottom/thumb_u.min.webp"
                    loading="lazy">
                </a>
            </div>

            <div class="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Button
                        </h5>
                    </a>
                    <p class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>
                </div>
            </div>
        </div>

        <!-- card  -->
        <div
            class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">

            <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                15
            </div>

            <div class="p-2 flex justify-center">
                <a href="https://tailwindflex.com/tag/form">
                    <img class="rounded-md"
                    src="https://tailwindflex.com/public/images/thumbnails/sb-admin-2-login-page-with-tailwind/canvas.min.webp"
                    loading="lazy">
                </a>
            </div>


            <div class="px-4 pb-3">
                <div>
                    <a href="https://tailwindflex.com/tag/form">
                        <h5
                            class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Form
                        </h5>
                    </a>

                    <p class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>

                </div>
            </div>
        </div>

        <!-- card  -->
        <div
            class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                10
            </div>
            <div class="p-2 flex justify-center">
                <a href="#">
                    <img class="rounded-md"
                    src="https://tailwindflex.com/public/images/thumbnails/alert-mono-color/thumb_u.min.webp"
                    loading="lazy">
                </a>
            </div>


            <div class="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Alert
                        </h5>
                    </a>

                    <p class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>
                </div>
            </div>
        </div>

        <!-- card  -->
        <div
            class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                9
            </div>
            <div class="p-2 flex justify-center">
                <a href="#">
                    <img class="rounded-md"
                    src="https://tailwindflex.com/public/images/thumbnails/mango-gradient/canvas.min.webp"
                    loading="lazy">
                </a>
            </div>
            <div class="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Gradient
                        </h5>
                    </a>

                    <p class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>
                </div>
            </div>
        </div>

        <!-- card  -->
        <div
            class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">

            <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                8
            </div>

            <div class="p-2 flex justify-center">
                <a href="https://tailwindflex.com/tag/badge">
                    <img class="rounded-md"
                    src="https://tailwindflex.com/public/images/thumbnails/badges-without-border/thumb_u.min.webp"
                    loading="lazy">
                </a>
            </div>

            <div class="px-4 pb-3">
                <div>
                    <a href="https://tailwindflex.com/tag/badge">
                        <h5
                            class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Badge
                        </h5>
                    </a>
                    <p class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>
                </div>
            </div>
        </div>

        <!-- card  -->
        <div
            class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                7
            </div>

            <div class="p-2 flex justify-center">
                <a href="#">
                    <img class="rounded-md"
                    src="https://tailwindflex.com/public/images/thumbnails/pagination-with-buttons/thumb_u.min.webp"
                    loading="lazy">
                </a>
            </div>


            <div class="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Button Group
                        </h5>
                    </a>

                    <p class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>
                </div>
            </div>

        </div>

        <!-- card  -->
        <div
            class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                7
            </div>

            <div class="p-2 flex justify-center">
                <a href="#">
                    <img class="rounded-md"
                    src="https://tailwindflex.com/public/images/thumbnails/resonsive-card-grid-with-hover-animation/thumb_u.min.webp"
                    loading="lazy">
                </a>
            </div>

            <div class="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Feature
                        </h5>
                    </a>
                    <p class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>
                </div>
            </div>
        </div>

        <!-- card  -->
        <div
            class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                6
            </div>

            <div class="p-2 flex justify-center">
                <a href="https://tailwindflex.com/tag/call-to-action">
                    <img class="rounded-md"
                    src="https://tailwindflex.com/public/images/thumbnails/hero-header-with-search-button/thumb_u.min.webp"
                    loading="lazy">
                </a>
            </div>

            <div class="px-4 pb-3">
                <div>
                    <a href="https://tailwindflex.com/tag/call-to-action">
                        <h5
                            class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Call to Action
                        </h5>
                    </a>
                    <p class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>
                </div>
            </div>
        </div>

        <!-- card  -->
        <div
            class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                6
            </div>
            <div class="p-2 flex justify-center">
                <a href="#">
                    <img class="rounded-md"
                    src="https://tailwindflex.com/public/images/thumbnails/feature-showcase/canvas.min.webp"
                    loading="lazy">
                </a>
            </div>

            <div class="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Grid
                        </h5>
                    </a>

                    <p class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>
                </div>
            </div>
        </div>

        <!-- card  -->
        <div
            class="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div class="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 w-6 h-6 text-center">
                6
            </div>

            <div class="p-2 flex justify-center">
                <a href="#">
                    <img class="rounded-md"
                    src="https://tailwindflex.com/public/images/thumbnails/login-form-with-icon/thumb_u.min.webp"
                    loading="lazy">
                </a>
            </div>


            <div class="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Login
                        </h5>
                    </a>
                    <p class="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>
                </div>
            </div>
        </div>

    </div>

</div>

                       
       
                     `}
        />{" "}
        <SingleCard
          img_src={img5}
          title="grid"
          buttonHTML={`
           
                   
 <div class="bg-white dark:bg-gray-800 h-screen h-full py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div class="flex items-center gap-12">
                <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>

                <p class="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                    This is a section of some simple filler text,
                    also known as placeholder text. It shares some characteristics of a real written text.
                </p>
            </div>

            <a href="#"
                class="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
                More
            </a>
        </div>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <!-- image - start -->
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
            </a>
            <!-- image - end -->
        </div>
    </div>
</div>

                     
     
                   `}
        />{" "}
        <SingleCard
          img_src="https://tailwindflex.com/storage/thumbnails/feature-showcase/canvas.min.webp?v=1"
          title="grid"
          buttonHTML={`
         
                 

<div class="bg-white dark:bg-gray-800 h-screen h-full py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div class="flex items-center gap-12">
                <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>

                <p class="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                    This is a section of some simple filler text,
                    also known as placeholder text. It shares some characteristics of a real written text.
                </p>
            </div>

            <a href="#"
                class="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
                More
            </a>
        </div>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <!-- image - start -->
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
            </a>
            <!-- image - end -->

            <!-- image - start -->
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
            </a>
            <!-- image - end -->
        </div>
    </div>
</div>

                   
   
                 `}
        />{" "}
        <SingleCard
          img_src={img6}
          title="grid"
          buttonHTML={`
                 
                         
     <section id="testimonies" class="py-20 bg-slate-900">
    <div class="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">


        <div class="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div class="mb-12 space-y-5 md:mb-16 md:text-center">
                <div
                    class="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                    Words from Others
                </div>
                <h1 class="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
                    It's not just us.
                </h1>
                <p class="text-xl text-gray-100 md:text-center md:text-2xl">
                    Here's what others have to say about us.
                </p>
            </div>
        </div>


        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">


            <ul class="space-y-8">
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/kanyewest" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Kanye West</h3>
                                        <p class="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Find God.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/tim_cook" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p class="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/kanyewest" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Kanye West</h3>
                                        <p class="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Find God.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/tim_cook" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p class="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>


            <ul class="hidden space-y-8 sm:block">
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/paraga" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Parag Agrawal</h3>
                                        <p class="text-gray-500 text-md">CEO of Twitter</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
                                    semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                                    pellentesque nec. Turpis cursus in hac habitasse platea dictumst.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/tim_cook" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p class="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/paraga" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Parag Agrawal</h3>
                                        <p class="text-gray-500 text-md">CEO of Twitter</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
                                    semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                                    pellentesque nec. Turpis cursus in hac habitasse platea dictumst.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/tim_cook" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Tim Cook</h3>
                                        <p class="text-gray-500 text-md">CEO of Apple</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                                    fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                                    aliquam malesuada bibendum.</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>


            <ul class="hidden space-y-8 lg:block">
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/satyanadella" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Satya Nadella</h3>
                                        <p class="text-gray-500 text-md">CEO of Microsoft</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Tortor dignissim convallis aenean et
                                    tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam
                                    eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/dan_schulman" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Dan Schulman</h3>
                                        <p class="text-gray-500 text-md">CEO of PayPal</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
                                    et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/satyanadella" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Satya Nadella</h3>
                                        <p class="text-gray-500 text-md">CEO of Microsoft</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Tortor dignissim convallis aenean et
                                    tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam
                                    eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut.</p>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="text-sm leading-6">
                    <div class="relative group">
                        <div
                            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                        </div><a href="https://twitter.com/dan_schulman" class="cursor-pointer">
                            <div
                                class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                <div class="flex items-center space-x-4"><img
                                        src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                                        class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman">
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Dan Schulman</h3>
                                        <p class="text-gray-500 text-md">CEO of PayPal</p>
                                    </div>
                                </div>
                                <p class="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
                                    et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>


        </div>
    </div>
</section>

                           
           
                         `}
        />{" "}
        <SingleCard
          img_src={img7}
          title="grid"
          buttonHTML={`
               
                       
      
 <div class="p-5 sm:p-8">
    <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        <img src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1668491195456-9341d9cf3977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXQlMjB3aGl0ZXxlbnwwfDF8fHwxNzIxODIyMzU3fDA&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1475518112798-86ae358241eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1498100152307-ce63fd6c5424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1503777119540-ce54b422baff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjYXQlMjB3aGl0ZXxlbnwwfDF8fHwxNzIxODIyMzU3fDA&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1502083896352-259ab9e342d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1708791793972-cf97ef3c01c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXQlMjB3aGl0ZXxlbnwwfDB8fHwxNzIxODIyMjkwfDA&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1516470544373-df3edeb89d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjYXQlMjB3aGl0ZXxlbnwwfDB8fHwxNzIxODIyMjkwfDA&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1517451330947-7809dead78d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjYXR8ZW58MHwwfHx8MTcyMTgyMjE3OXww&ixlib=rb-4.0.3&q=80&w=1080"/>
        <img src="https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8Y2F0fGVufDB8MHx8fDE3MjE4MjIxNzl8MA&ixlib=rb-4.0.3&q=80&w=1080"/>
    </div>
</div>


                         
         
                       `}
        />{" "}
        <SingleCard
          img_src={img8}
          title="grid"
          buttonHTML={`
             
                     
  <section class="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 class="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">We are just
                getting started!</h2>
            <p class="mb-4">We are creating a tool that helps you be more productive and efficient when building
                websites and webapps</p>

        </div>
        <div
            class="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            <div class="relative">
                <div class="absolute -inset-1">
                    <div
                        class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div class="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                        </svg>
                        <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Realtime Collaboration</h3>
                        <p class="mt-6 text-base text-gray-600">Collaborate in realtime with other editors in a
                            project. See what othe editors are doing and edit even a simple text together</p>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden bg-white shadow-md rounded-xl">
                <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
                        <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
                        <rect x="11" y="13" width="2" height="6" rx="1" transform="rotate(90 11 13)" fill="#111827">
                        </rect>
                        <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
                        <path
                            d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                            stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                        <path
                            d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                            stroke="#111827" stroke-width="2"></path>
                    </svg>
                    <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">History of Edits</h3>
                    <p class="mt-6 text-base text-gray-600">Go back and forth your history of changes and
                        restore your designs to any point in time</p>
                </div>
            </div>
            <div class="relative">
                <div class="absolute -inset-1">
                    <div
                        class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div class="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                        </svg>
                        <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Integrations</h3>
                        <p class="mt-6 text-base text-gray-600">Step up your designs and workflow with
                            integrations with your favourite tools such as mailchimp, slack, jira etc</p>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden bg-white shadow-md rounded-xl">
                <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
                        <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
                        <rect x="11" y="13" width="2" height="6" rx="1" transform="rotate(90 11 13)" fill="#111827">
                        </rect>
                        <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
                        <path
                            d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                            stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                        <path
                            d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                            stroke="#111827" stroke-width="2"></path>
                    </svg>
                    <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Publish webpage online</h3>
                    <p class="mt-6 text-base text-gray-600">Effortlessly publish your webpages online and make
                        it available to the world with a click of a button</p>
                </div>
            </div>
            <div class="relative">
                <div class="absolute -inset-1">
                    <div
                        class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div class="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                    <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                        </svg>
                        <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Forms and Data Collection
                        </h3>
                        <p class="mt-6 text-base text-gray-600">Collect data and information from users with
                            forms built on windframe and sort through them in a nice interface</p>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden bg-white shadow-md rounded-xl">
                <div class="p-9"><svg class="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
                        <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
                        <rect x="11" y="13" width="2" height="6" rx="1" transform="rotate(90 11 13)" fill="#111827">
                        </rect>
                        <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
                        <path
                            d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                            stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                        <path
                            d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                            stroke="#111827" stroke-width="2"></path>
                    </svg>
                    <h3 class="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Custom Domains</h3>
                    <p class="mt-6 text-base text-gray-600">Attach your own custom domain to your published
                        projects or website on windframe</p>
                </div>
            </div>
        </div>
    </div>
</section>

                       
       
                     `}
        />{" "}
        <SingleCard
          img_src={img9}
          title="grid"
          buttonHTML={`
           
                   


<div class="container relative z-40 mx-auto mt-12">

    <div class="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">

        <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
                <img src="https://redpixelthemes.com/assets/images/icon-portfolio-green.svg" class="block mx-auto">

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                    portfolio
                </p>
            </div>
        </a>

        <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
                <img src="https://redpixelthemes.com/assets/images/icon-blog-green.svg" class="block mx-auto">

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                    blog
                </p>
            </div>
        </a>

        <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
                <img src="https://redpixelthemes.com/assets/images/icon-ecommerce-green.svg" class="block mx-auto">

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                    ecommerce
                </p>
            </div>
        </a>

        <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
                <img src="https://redpixelthemes.com/assets/images/icon-startup-green.svg" class="block mx-auto">

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                    startup
                </p>
            </div>
        </a>

        <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
                <img src="https://redpixelthemes.com/assets/images/icon-business-green.svg" class="block mx-auto">

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                    business
                </p>
            </div>
        </a>

        <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
                <img src="https://redpixelthemes.com/assets/images/icon-lifestyle-green.svg" class="block mx-auto">

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                    lifestyle
                </p>
            </div>
        </a>

        <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
                <img src="https://redpixelthemes.com/assets/images/icon-landing-page-green.svg" class="block mx-auto">

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                    landing pages
                </p>
            </div>
        </a>

        <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
                <img src="https://redpixelthemes.com/assets/images/icon-health-green.svg" class="block mx-auto">

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                    health
                </p>
            </div>
        </a>

    </div>

</div>

                     
     
                   `}
        />{" "}
        <SingleCard
          img_src={img10}
          title="grid"
          buttonHTML={`
         
                 
<div class="p-5 pt-8 border ignore border-gray-200 not-prose dark:border-gray-800 relative bg-gray-50 dark:bg-gray-800">
    <div
        class="absolute w-auto rounded-b-lg border-b uppercase -translate-y-px tracking-wide leading-none border-l border-r border-gray-200 dark:border-gray-800 shadow-sm top-0 left-1/2 -translate-x-1/2 px-3 pt-1 pb-2 bg-white dark:bg-black text-gray-400 text-[0.65rem]">
        🤩 Our Amazing Sponsors 👇</div>
    <div class="max-w-5xl mx-auto">
        <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3 sm:gap-5 not-prose">
            <a href="#" target="_blank"
                class="relative flex flex-col items-start justify-between p-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-black bg-white group">
                <span class="absolute w-full h-full bg-white dark:bg-black inset-0 dark:group-hover:bg-gray-900 group-hover:bg-gray-50 group-hover:bg-opacity-30"></span>
                <div class="flex items-center justify-between w-full mb-4 ">
                    <img src="https://cdn.devdojo.com/sponsors/digital-ocean.svg" alt="DigitalOcean" class="relative h-5 md:h-6">
                    <span class="opacity-0 -translate-x-2 flex-shrink-0 group-hover:translate-x-0 py-1 px-2.5 text-[0.6rem] group-hover:opacity-100 transition-all ease-out duration-200 rounded-full bg-blue-50 dark:bg-blue-500 dark:text-white text-blue-500 flex items-center justify-center">
                        <span>View Website</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        class="w-3 translate-x-0.5 h-3">
                        <path fill-rule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clip-rule="evenodd"></path>
                    </svg>
                    </span>
                </div>
                <span class="relative text-xs md:text-sm text-gray-600 dark:text-gray-400">DigitalOcean offers a simple and reliable cloud hosting solution that enables developers to get their website or application up and running quickly.</span>
            </a>
            <a href="#" target="_blank"
                class="relative flex flex-col items-start justify-between p-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-black bg-white group">
                <span class="absolute w-full h-full bg-white dark:bg-black inset-0 dark:group-hover:bg-gray-900 group-hover:bg-gray-50 group-hover:bg-opacity-30"></span>
                <div class="flex items-center justify-between w-full mb-4 ">
                    <img src="https://cdn.devdojo.com/sponsors/larajobs.svg" alt="Larajobs" class="relative h-5 md:h-6">
                    <span class="opacity-0 -translate-x-2 flex-shrink-0 group-hover:translate-x-0 py-1 px-2.5 text-[0.6rem] group-hover:opacity-100 transition-all ease-out duration-200 rounded-full bg-blue-50 dark:bg-blue-500 dark:text-white text-blue-500 flex items-center justify-center">
                        <span>View Website</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        class="w-3 translate-x-0.5 h-3">
                        <path fill-rule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clip-rule="evenodd"></path>
                    </svg>
                    </span>
                </div>
                <span class="relative text-xs md:text-sm text-gray-600 dark:text-gray-400">The official Laravel job board. Find the best and most talented Laravel developers by posting your job on the official Laravel job board.</span>
            </a>
            <a href="#" target="_blank"
                class="relative flex flex-col items-start justify-between p-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-black bg-white group">
                <span class="absolute w-full h-full bg-white dark:bg-black inset-0 dark:group-hover:bg-gray-900 group-hover:bg-gray-50 group-hover:bg-opacity-30"></span>
                <div class="flex items-center justify-between w-full mb-4 ">
                    <img src="https://cdn.devdojo.com/sponsors/coin-camp.svg" alt="CoinCamp" class="relative h-5 md:h-6">
                    <span class="opacity-0 -translate-x-2 flex-shrink-0 group-hover:translate-x-0 py-1 px-2.5 text-[0.6rem] group-hover:opacity-100 transition-all ease-out duration-200 rounded-full bg-blue-50 dark:bg-blue-500 dark:text-white text-blue-500 flex items-center justify-center">
                        <span>View Website</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        class="w-3 translate-x-0.5 h-3">
                        <path fill-rule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clip-rule="evenodd"></path>
                    </svg>
                    </span>
                </div>
                <span class="relative text-xs md:text-sm text-gray-600 dark:text-gray-400">Learn how to code your own blockchain and create your own crypto-currency with the CoinCamp interactive and fun online training platform.</span>
            </a>
        </div>
    </div>
</div>

                   
   
                 `}
        />{" "}
        <SingleCard
          img_src={img11}
          title="grid"
          buttonHTML={`
                 
                 <div class="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
    <div class="text-center mb-10">
        <h2 class="text-4xl tracking-tight font-bold text-primary-800">Highlighted Features</h2>
    </div>

    <div class="flex flex-col md:flex-row">
        <!-- can help image -->
        <div class="mr-0 md:mr-8 mb-6 md:mb-0">
            <img class="w-1/2 md:w-full mx-auto" src="https://placeholder.pics/svg/400" alt="can_help_banner">
        </div>
        <!-- end can help image -->

        <div class="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-bold text-md mb-6">Dynamic Personalization:</h3>
                    <p class="text-sm">Our platform leverages user data and behavior to provide a highly personalized experience, with dynamic content and product recommendations that change in real-time.</p>
                </div>
            </div>
            <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-bold text-md mb-6">Mobile-Optimized Interface</h3>
                    <p class="text-sm"> Our website is designed with a mobile-first approach, offering a seamless browsing experience across all devices, including smartphones and tablets.</p>
                </div>
            </div>

            <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-bold text-md mb-6">24/7 Customer Support</h3>
                    <p class="text-sm">ur U.S.-based customer support team is available around the clock to answer any questions, resolve any issues, and provide helpful solutions. Whether it's through email, phone, or live chat, we're always here to support you.</p>
                </div>
            </div>

            <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-bold text-md mb-6">Secure Payment Processing</h3>
                    <p class="text-sm">We use cutting-edge security measures to protect our customers' sensitive information and ensure the safety of all transactions made on our site.</p>
                </div>
            </div>


        </div>
    </div>
</div>

                           
           
                         `}
        />{" "}
        <SingleCard
          img_src={img12}
          title="grid"
          buttonHTML={`
               
                       
    <section class="bg-white">
	<div class="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
			<div class="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
				<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out">
					<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Wines</h3>
				</a>
			</div>
			<div class="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
				<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
					<img src="https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out">
					<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Gin</h3>
				</a>
				<div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
					<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out">
						<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Whiskey</h3>
					</a>
					<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out">
						<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Vodka</h3>
					</a>
				</div>
			</div>
			<div class="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
				<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src="https://images.unsplash.com/photo-1693680501357-a342180f1946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out">
					<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Brandy</h3>
				</a>
			</div>
		</div>
	</div>
</section>
                         
         
                       `}
        />{" "}
        <SingleCard
          img_src={img13}
          title="grid"
          buttonHTML={`
             
                     
 <div class="bg-gray-700 p-4 min-h-screen">
  <div aria-hidden="true" class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
    <div class="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
    <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
  </div>
  <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div class="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-secondary">
        <path fill-rule="evenodd"
          d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
          clip-rule="evenodd"></path>
      </svg>
      <h2 class="my-8 text-2xl font-bold text-white md:text-4xl">Our Work</h2>
      <p class="text-gray-300">We have built many products and some of them are below</p>
    </div>
    <div
      class="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden  rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4">
      <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/164986/logo.svg" loading="lazy" width="200" height="200"class="w-12 h-12 rounded-full" style="color:transparent">
          <div class="space-y-2">
            <h5 class="text-xl font-semibold text-white transition group-hover:text-secondary">Xyz.com</h5>
            <p class="text-gray-300">Platform to convert Domains into Content websites.</p>
          </div>
        </div>
      </div>
      <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/120853/logo.svg" loading="lazy" width="200" height="200"class="w-12 h-12 rounded-full" style="color:transparent" >
          <div class="space-y-2">
            <h5 class="text-xl font-semibold text-white transition group-hover:text-secondary">ABC.com</h5>
            <p class="text-gray-300">Platform to create dynamic widgets for websites.</p>
          </div>
        </div>
      </div>
      <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/120852/logo.svg" loading="lazy" width="200" height="200"class="w-12 h-12 rounded-full" style="color:transparent" >
          <div class="space-y-2">
            <h5 class="text-xl font-semibold text-white transition group-hover:text-secondary">ASD.com</h5>
            <p class="text-gray-300">API SaaS Platform that provides API Suit to help you ship fast.</p>
          </div>
        </div>
      </div>
      <div class="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <img src="https://www.svgrepo.com/show/120850/logo.svg" loading="lazy" width="200" height="200"class="w-12 h-12 rounded-full" style="color:transparent">
          <div class="space-y-2">
            <h5 class="text-xl font-semibold text-white transition group-hover:text-secondary">TMK.co</h5>
            <p class="text-gray-300">Chrome Extension that lets you add ChatGPT on any website</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
                       
       
                     `}
        />{" "}
        <SingleCard
          img_src={img14}
          title="grid"
          buttonHTML={`
           
                   
 
<div class="relative overflow-hidden bg-white">
    <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div class="sm:max-w-lg">
          <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Svelte signals are finally here</h1>
          <p class="mt-4 text-xl text-gray-500">This year, our new svelte signals will shelter you from the harsh
             elements of a world that doesn't care if you develop or die.</p>
        </div>
        <div>
          <div class="mt-10">
            <!-- Decorative image grid -->
            <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
              <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <img src="https://placekitten.com/g/200/300" class="h-full w-full object-cover object-center">
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://placekeanu.com/200/300" alt="" class="h-full w-full object-cover object-center">
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://placekeanu.com/684/350/" alt="" class="h-full w-full object-cover object-center">
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://placekeanu.com/250/350/y" alt="" class="h-full w-full object-cover object-center">
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://placekitten.com/g/200/300" alt="" class="h-full w-full object-cover object-center">
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://placekeanu.com/684/350/y" alt="" class="h-full w-full object-cover object-center">
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://placebear.com/684/350" alt="" class="h-full w-full object-cover object-center">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" class="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">Svelte Signals</a>
          </div>
        </div>
      </div>
    </div>
  </div>
                     
     
                   `}
        />{" "}
        <SingleCard
          img_src={img15}
          title="grid"
          buttonHTML={`
         
                 
<div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
    <div class="grid grid-cols-1 sm:grid-cols-12 gap-10">

        <div class="sm:col-span-6 lg:col-span-5">
            <a href="#">
                <div class="h-56 bg-cover text-center overflow-hidden"
                    style="background-image: url('https://tailwindcss.com/img/card-left.jpg')"
                    title="Woman holding a mug">
                </div>
            </a>
            <div
                class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div class="lg:pl-16">
                    <a href="#"
                        class="text-xs text-indigo-600 uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out">
                        Fashion
                    </a>
                    <a href="#"
                        class="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">The
                        perfect summer sweater that you can wear! </a>
                    <p class="text-gray-700 text-xs mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
            </div>
        </div>

        <div class="sm:col-span-6 lg:col-span-4">
            <div class="flex items-start mb-3 pb-3">
                <a href="#" class="inline-block mr-3">
                    <div class="w-20 h-20 bg-cover bg-center"
                        style="background-image:url(https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-looks-dejected-during-the-uefa-of-picture-id1227967060?k=6&amp;m=1227967060&amp;s=612x612&amp;w=0&amp;h=cMSMlRyI6YAzcE_C2KgHGRLeVojHYoUhIvhwPBYv8f4=);">
                    </div>
                </a>
                <div class="text-sm">
                    <p class="text-gray-600 text-xs">Aug 18</p>
                    <a href="#" class="text-gray-900 font-medium hover:text-indigo-600 leading-none">Cristiano Ronaldo
                        of Juventus FC looks dejected during the...</a>
                </div>
            </div>
            <div class="flex items-start mb-3 pb-3">
                <a href="#" class="inline-block mr-3">
                    <div class="w-20 h-20 bg-cover bg-center"
                        style="background-image:url(https://media.gettyimages.com/photos/lionel-messi-and-marcandre-ter-stegen-of-fc-barcelona-waits-in-the-picture-id1266763488?k=6&amp;m=1266763488&amp;s=612x612&amp;w=0&amp;h=8vxz9HfQVfrff5N7d1lBVxtLamRQGK3J3lyHkUuuIiw=);">
                    </div>
                </a>
                <div class="text-sm w-2/3">
                    <p class="text-gray-600 text-xs">Jan 18</p>
                    <a href="#" class="text-gray-900 font-medium hover:text-indigo-600 leading-none">Barcelona v Bayern
                        Munich </a>
                </div>
            </div>
            <div class="flex items-start mb-3 pb-3">
                <a href="#" class="inline-block mr-3">
                    <div class="w-20 h-20 bg-cover bg-center"
                        style="background-image:url(https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-looks-dejected-during-the-uefa-of-picture-id1227967060?k=6&amp;m=1227967060&amp;s=612x612&amp;w=0&amp;h=cMSMlRyI6YAzcE_C2KgHGRLeVojHYoUhIvhwPBYv8f4=);">
                    </div>
                </a>
                <div class="text-sm">
                    <p class="text-gray-600 text-xs">Aug 18</p>
                    <a href="#" class="text-gray-900 font-medium hover:text-indigo-600 leading-none">Cristiano Ronaldo
                        of Juventus FC looks dejected during the...</a>
                </div>
            </div>
            <div class="flex items-start">
                <a href="#" class="inline-block mr-3">
                    <div class="w-20 h-20 bg-cover bg-center"
                        style="background-image:url(https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-looks-dejected-following-his-teams-in-picture-id1266341828?k=6&amp;m=1266341828&amp;s=612x612&amp;w=0&amp;h=FZi-bSrIlOEE01780h79GsbBYPqZo2l3aaCxoktWADY=);">
                    </div>
                </a>
                <div class="text-sm w-2/3">
                    <p class="text-gray-600 text-xs">July 23</p>
                    <a href="#" class="text-gray-900 font-medium hover:text-indigo-600 leading-none">Barcelona v Bayern
                        Munich - UEFA Champions League </a>
                </div>
            </div>
        </div>

        <div class="sm:col-span-12 lg:col-span-3">
            <a href="#">
                <div class="h-56 bg-cover text-center overflow-hidden"
                    style="background-image: url('https://tailwindcss.com/img/card-left.jpg')"
                    title="Woman holding a mug">
                </div>
            </a>
            <div
                class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div class="">
                    <a href="#"
                        class="text-xs text-indigo-600 uppercase font-medium flex items-center hover:text-gray-900 transition duration-500 ease-in-out">
                        Fashion
                    </a>
                    <a href="#"
                        class="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">The
                        perfect summer sweater that you can wear! </a>
                    <p class="text-gray-700 text-xs mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>

    </div>
</div>
                   
   
                 `}
        />{" "}
        <SingleCard
          img_src={img16}
          title="grid"
          buttonHTML={`
                 
                         
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">

    <div
        class="flex flex-col justify-center items-center gap-2 border border-dashed border-gray-500 p-4 rounded-md h-32">
        <div class="flex gap-2 items-center">
            <span class="font-bold text-4xl">20</span>
            <svg class="w-8 h-8 opacity-70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z">
                </path>
            </svg>
        </div>
        <span class="font-semibold opacity-70 text-sm text-center">Documents Contributed</span>
    </div>

    <div
        class="flex flex-col justify-center items-center gap-2 border border-dashed border-gray-500 p-4 rounded-md h-32">
        <div class="flex gap-2 items-center">
            <span class="font-bold text-4xl">5k</span>
            <svg class="w-8 h-8 opacity-70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z">
                </path>
            </svg>

        </div>
        <span class="font-semibold opacity-70 text-sm text-center">Thanks Received</span>
    </div>

    <div
        class="flex flex-col justify-center items-center gap-2 border border-dashed border-gray-500 p-4 rounded-md h-32">
        <div class="flex gap-2 items-center">
            <span class="font-bold text-4xl">34K</span>
            <svg class="w-8 h-8 opacity-70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        </div>
        <span class="font-semibold opacity-70 text-sm text-center">Helped students</span>
    </div>

    <div
        class="md:col-start-2 lg:col-auto flex flex-col justify-center items-center gap-2 border border-dashed border-gray-500 p-4 rounded-md h-32">
        <div class="flex gap-2 items-center">
            <span class="font-bold text-4xl">3</span>
            <svg class="w-8 h-8 opacity-70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
            </svg>

        </div>
        <span class="font-semibold opacity-70 text-sm text-center">Highest Rank</span>
    </div>

</div>
                           
           
                         `}
        />{" "}
        <SingleCard
          img_src={img17}
          title="grid"
          buttonHTML={`
               
                       
  <div class="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 max-w-[400px] md:max-w-[600px] place-items-center">
    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1">
    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2">
    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3">
    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4">
    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5">
    <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6">
</div>
                         
         
                       `}
        />{" "}
        <SingleCard
          img_src={img18}
          title="grid"
          buttonHTML={`
             
                     
<div class="bg-white w-full px-4 pt-16 pb-16" id="faq">
    <h2 class="text-4xl font-bold text-center">Happy Customers</h2>
    <p class="pt-6 pb-8 text-base max-w-2xl text-center m-auto">
        Lorem ipsum dolor sit amet
        consectetur adipisicing elit nam maxime quas fugiat tempore blanditiis, eveniet quia accusantium.
    </p>
    <div
        class="mx-auto w-full max-w-4xl bg-white justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <a target="_blank" href="">
            <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/442910/brand-apple.svg">
        </a>
        <a target="_blank" href="">
            <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/443329/brand-pixar.svg">
        </a>
        <a target="_blank" href="">
            <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/443079/brand-geforce.svg">
        </a>
        <a target="_blank" href="">
            <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/443042/brand-ethereum.svg">
        </a>
        <a target="_blank" href="">
            <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/443206/brand-line.svg">
        </a>
        <a target="_blank" href="">
            <img alt="" class="h-20  mx-auto" src="https://www.svgrepo.com/show/519278/slack.svg">
        </a>
    </div>
</div>
                       
       
                     `}
        />{" "}
        <SingleCard
          img_src={img19}
          title="grid"
          buttonHTML={`
           
                   
<section id="features" class="px-2 space-y-6 py-8 md:py-12 lg:py-24 max-w-5xl mx-auto">
    <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
        <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Tools to empower your creative journey, enabling you to bring your artistic
            visions to life effortlessly.
    </div>
    <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div class="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6"><svg xmlns="http://www.w3.org/2000/svg"
                    width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="">
                    <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
                </svg>
                <div class="space-y-2">
                    <h3 class="font-bold">Custom Brushes</h3>
                    <p class="text-sm text-muted-foreground">Enhance your creativity with a variety of custom brushes.
                    </p>
                </div>
            </div>
        </div>
        <div class="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6"><svg xmlns="http://www.w3.org/2000/svg"
                    width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="12" y1="16" x2="16" y2="12"></line>
                    <line x1="12" y1="16" x2="8" y2="12"></line>
                </svg>
                <div class="space-y-2">
                    <h3 class="font-bold">Layer Management</h3>
                    <p class="text-sm text-muted-foreground">Efficiently organize your artwork with layer management
                        tools.</p>
                </div>
            </div>
        </div>
        <div class="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6"><svg xmlns="http://www.w3.org/2000/svg"
                    width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="3" y1="15" x2="21" y2="15"></line>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                    <line x1="15" y1="3" x2="15" y2="21"></line>
                </svg>
                <div class="space-y-2">
                    <h3 class="font-bold">Live Collaboration</h3>
                    <p class="text-sm text-muted-foreground">Work simultaneously with others on the same project in
                        real-time.</p>
                </div>
            </div>
        </div>
    </div>
</section>

                     
     
                   `}
        />{" "}
        <SingleCard
          img_src={img20}
          title="grid"
          buttonHTML={`
         
                 
<div class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold text-center mb-8">Bento Grid Layout with Images</h1>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- Large item -->
            <div class="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwwfHx8MTcyMTA0MjYwMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Nature" class="w-full h-full object-cover">
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h3 class="text-2xl font-bold text-white">Explore Nature</h3>
                        <p class="text-white">Discover the beauty of the natural world</p>
                    </div>
                </div>
            </div>

            <!-- Two small items -->
            <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Food" class="w-full h-48 object-cover">
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">Culinary Delights</h4>
                    </div>
                </div>
            </div>
            <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Technology" class="w-full h-48 object-cover">
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">Tech Innovations</h4>
                    </div>
                </div>
            </div>

            <!-- Three medium items -->
            <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0cmF2ZWx8ZW58MHwwfHx8MTcyMTA0MjY0MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Travel" class="w-full h-48 object-cover">
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">Travel Adventures</h4>
                    </div>
                </div>
            </div>
            <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxhcnR8ZW58MHwwfHx8MTcyMTA0MjY5Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Art" class="w-full h-48 object-cover">
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">Artistic Expressions</h4>
                    </div>
                </div>
            </div>

            <!-- bottom cards -->
            <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="https://images.unsplash.com/photo-1530549387789-4c1017266635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxzd2ltbWluZ3xlbnwwfDB8fHwxNzIxMDQzMjkxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sport" class="w-full h-48 object-cover">
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">Swimming</h4>
                    </div>
                </div>
            </div>
            <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8Y2hlc3N8ZW58MHwwfHx8MTcyMTA0MzI0Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Sport" class="w-full h-48 object-cover">
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">Chess</h4>
                    </div>
                </div>
            </div>
            <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxmb290YmFsbHxlbnwwfDB8fHwxNzIxMDQzMjExfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sport" class="w-full h-48 object-cover">
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">Football</h4>
                    </div>
                </div>
            </div>
            <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxjcmlja2V0fGVufDB8MHx8fDE3MjEwNDMxNTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Sport" class="w-full h-48 object-cover">
                <div
                    class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h4 class="text-xl font-bold text-white">Cricket</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

                   
   
                 `}
        />{" "}
        <SingleCard
          img_src={img21}
          title="grid"
          buttonHTML={`
                 
                         
 <div class="max-w-screen-[1440px] mx-auto mb-20">
            <p class="text-4xl md:text-6xl font-semibold font-[Raleway] mb-10 ml-4">What We do</p>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5 p-2">

                <div class="p-4 bg-white shadow border rounded-[10px]">

                    <button class="p-2 bg-[#F5F8FF] rounded-[10px] cursor-default">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 4V5M12 19V20M5.07178 8L5.9378 8.5M18.0622 15.5L18.9282 16M18.9282 7.99999L18.0622 8.49999M5.93781 15.5L5.07178 16M16 12C16 9.79086 14.2091 8 12 8C9.79084 8 7.99998 9.79086 7.99998 12C7.99998 14.2091 9.79084 16 12 16C14.2091 16 16 14.2091 16 12Z"
                                stroke="#252432" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

                    <p class="font-[Inter] text-lg text-[#252432] my-5">Web Design</p>

                    <p class="font-[Inter] text-sm text-[#8987A1] font-[400]">From concept to launch, we create
                        stunning, user-centric websites that elevate your brand and engage your audience.</p>

                </div>

                <div class="p-4 bg-white shadow border rounded-[10px]">

                    <button class="p-2 bg-[#F5F8FF] rounded-[10px] cursor-default">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.2442 4.86956C11.0022 3.47968 12.9979 3.47968 13.7559 4.86956L14.9723 7.09993C15.2599 7.62738 15.7694 7.99758 16.36 8.10817L18.8571 8.57579C20.4132 8.86719 21.0299 10.7653 19.9422 11.9157L18.1969 13.7617C17.7842 14.1983 17.5895 14.7973 17.6668 15.3931L17.9938 17.9125C18.1975 19.4824 16.5829 20.6555 15.1527 19.9766L12.8577 18.8871C12.3149 18.6295 11.6851 18.6295 11.1424 18.8871L8.84732 19.9766C7.41713 20.6555 5.80257 19.4824 6.00629 17.9125L6.3332 15.3931C6.41051 14.7973 6.21588 14.1983 5.80313 13.7617L4.05781 11.9157C2.97019 10.7653 3.58689 8.86719 5.14299 8.57579L7.64007 8.10817C8.2306 7.99758 8.74014 7.62738 9.02779 7.09993L10.2442 4.86956Z"
                                stroke="#252432" stroke-width="1.5" stroke-linejoin="round" />
                        </svg>

                    </button>

                    <p class="font-[Inter] text-lg text-[#252432] my-5">UI/UX Design</p>

                    <p class="font-[Inter] text-sm text-[#8987A1] font-[400]">From concept to launch, we create
                        stunning, user-centric websites that elevate your brand and engage your audience.</p>

                </div>

                <div class="p-4 bg-white shadow border rounded-[10px]">

                    <button class="p-2 bg-[#F5F8FF] rounded-[10px] cursor-default">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 18H6C4.34315 18 3 16.6569 3 15V6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V15C21 16.6569 19.6569 18 18 18H14M10 18V21M10 18H14M14 18V21M10 21H14M10 21H9M14 21H15"
                                stroke="#252432" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>

                    <p class="font-[Inter] text-lg text-[#252432] my-5">Responsive Design</p>

                    <p class="font-[Inter] text-sm text-[#8987A1] font-[400]">From concept to launch, we create
                        stunning, user-centric websites that elevate your brand and engage your audience.</p>

                </div>


                <div class="p-4 bg-white shadow border rounded-[10px] lg:row-span-2">

                    <button class="p-2 bg-[#F5F8FF] rounded-[10px] cursor-default">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.01005 11.75C9.42426 11.75 9.76005 11.4142 9.76005 11C9.76005 10.5858 9.42426 10.25 9.01005 10.25V11.75ZM9.00005 10.25C8.58583 10.25 8.25005 10.5858 8.25005 11C8.25005 11.4142 8.58583 11.75 9.00005 11.75V10.25ZM15.01 11.75C15.4243 11.75 15.76 11.4142 15.76 11C15.76 10.5858 15.4243 10.25 15.01 10.25V11.75ZM15 10.25C14.5858 10.25 14.25 10.5858 14.25 11C14.25 11.4142 14.5858 11.75 15 11.75V10.25ZM6.77814 8.75H17.222V7.25H6.77814V8.75ZM19.4653 10.8274L20.0038 17.8274L21.4994 17.7124L20.9609 10.7124L19.4653 10.8274ZM17.7604 20.25H6.23968V21.75H17.7604V20.25ZM3.99631 17.8274L4.53477 10.8274L3.03919 10.7124L2.50073 17.7124L3.99631 17.8274ZM6.23968 20.25C4.92903 20.25 3.89579 19.1342 3.99631 17.8274L2.50073 17.7124C2.33319 19.8904 4.05527 21.75 6.23968 21.75V20.25ZM20.0038 17.8274C20.1043 19.1342 19.0711 20.25 17.7604 20.25V21.75C19.9448 21.75 21.6669 19.8904 21.4994 17.7124L20.0038 17.8274ZM17.222 8.75C18.3977 8.75 19.3752 9.65519 19.4653 10.8274L20.9609 10.7124C20.8106 8.75865 19.1815 7.25 17.222 7.25V8.75ZM6.77814 7.25C4.81863 7.25 3.18947 8.75865 3.03919 10.7124L4.53477 10.8274C4.62494 9.65519 5.60244 8.75 6.77814 8.75V7.25ZM14.25 6V8H15.75V6H14.25ZM9.75005 8V6H8.25005V8H9.75005ZM12 3.75C13.2427 3.75 14.25 4.75736 14.25 6H15.75C15.75 3.92893 14.0711 2.25 12 2.25V3.75ZM12 2.25C9.92898 2.25 8.25005 3.92893 8.25005 6H9.75005C9.75005 4.75736 10.7574 3.75 12 3.75V2.25ZM9.01005 10.25H9.00005V11.75H9.01005V10.25ZM15.01 10.25H15V11.75H15.01V10.25Z"
                                fill="#252432" />
                        </svg>

                    </button>

                    <p class="font-[Inter] text-lg text-[#252432] my-5">E-commerce Solutions:</p>

                    <p class="font-[Inter] text-sm text-[#8987A1] font-[400]">From concept to launch, we create
                        stunning, user-centric websites that elevate your brand and engage your audience.</p>

                    <img class="hidden lg:block mt-5 rounded-[10px]" src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="Pictures" />

                </div>

                <div class="p-4 bg-white shadow border rounded-[10px] lg:col-span-2 flex justify-between gap-5">

                    <div>
                        <button class="p-3 py-4 bg-[#F5F8FF] rounded-[10px] cursor-default">
                            <svg width="21" height="13" viewBox="0 0 21 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M21 0L14.3528 12.8765H8.05945L10.8101 7.61233H10.6832C8.37078 10.5927 4.91823 12.5553 0 13V7.6855C0 7.6855 3.1455 7.50067 4.99585 5.57067H0.0023098V0H5.71431L5.61596 4.58333H5.74275L8.03687 0H12.5781L12.2834 4.555H12.4103L14.7885 0H21Z"
                                    fill="#5B54FF" />
                            </svg>

                        </button>

                        <p class="font-[Inter] text-lg text-[#252432] my-5">Webflow</p>

                        <p class="font-[Inter] text-sm text-[#8987A1] font-[400]">From concept to launch, we create
                            stunning, user-centric websites that elevate your brand and engage your audience.</p>

                    </div>
                    <div>
                        <img class="hidden lg:block mt-5 rounded-[10px]" src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=400" alt="Pictures" />
                    </div>

                </div>


                <div class="p-4 bg-white shadow border rounded-[10px]">

                    <button class="p-2 bg-[#F5F8FF] rounded-[10px] cursor-default">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 9L9.53354 10.5201C10.7287 11.2372 10.8423 12.9262 9.75394 13.7968L7 16M12 16H17M6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21Z"
                                stroke="#252432" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>

                    <p class="font-[Inter] text-lg text-[#252432] my-5">Custom Development</p>

                    <p class="font-[Inter] text-sm text-[#8987A1] font-[400]">From concept to launch, we create
                        stunning, user-centric websites that elevate your brand and engage your audience.</p>

                </div>

            </div>
        </div>

                           
           
                         `}
        />{" "}
      </div>
    </>
  );
};

export default Grid;
