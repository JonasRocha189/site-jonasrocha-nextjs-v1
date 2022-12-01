import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function BackToTop(){

  const [showButton, setShowButton] = useState(false);

  function onScroll() {
    let pixelsFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelsFromTop) / difference;
    document.getElementById("bar").style.width = `${percentage}%`;

    // Scroll to top button logic
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  function scrollToTop () {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  };

  return(
    <>
      <FaArrowUp
        className={showButton ? "showButton" : "hidden"}
        onClick={scrollToTop}
      />
    </>
  )
}