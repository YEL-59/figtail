import { useState } from "react";
import Navbars from "../../sharedComponents/Navbar/navbars";
import Footer from "../../sharedComponents/Footer/Footer";
import ComponentLibrary from "../../sharedComponents/ComponentLibrary/ComponentLibrary";

const Layout = () => {
  const [navfix, setNavfix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
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

      <div className="bg-gray-50 min-h-screen">
        <ComponentLibrary categoryFilter="layouts" />
      </div>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Layout;
