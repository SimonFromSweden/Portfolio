import React from "react";
import "../Styles/PicDisplayer.css";
import { useState, useEffect } from "react";
import img1 from "../images/simon1.jpg";
import img2 from "../images/simon2.png";
import img3 from "../images/simon3.png";
import img4 from "../images/simon4.png";
import img5 from "../images/simon5.png";
import img6 from "../images/simon6.png";
import img7 from "../images/simon7.jpg";
let images = [img1, img2, img3, img4, img5, img6, img7];

// https://www.geeksforgeeks.org/how-to-use-setinterval-method-inside-react-components/

export default function PicDisplayer() {
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval); // Clean up the interval on component unmount
   });

   return (
      <div className="slideshow">
         <img
            src={images[currentIndex]}
            alt="slideshow"
            style={{ width: "465px", height: "465px" }}
         />
      </div>
   );
}
