import React from "react";
import "../Styles/About.css";
import PicDisplayer from "../Components/PicDisplayer";
import Socials from "../Components/Socials";

export default function about() {
   return (
      <div>
         <h2>About</h2>
         <div id="aboutDiv">
            <div>
               <p>
                  Hello my name is Simon. I am a lover of learning and
                  problem-solving on the path to becoming a developer. I live
                  quite an active lifestyle centered around my friends, hobbies
                  and passions. I enjoy travelling and going on adventures in my
                  spare time. For a taste of who I am and what I like to spend
                  my time doing, take a look at the marvelous slideshow to the
                  side! <br />
                  <br />
                  My latest passion (aside from discgolf) is the fun art of
                  programming, specifically full stack development. I have
                  studied through several different mediums, and am excited for
                  the prospect of getting to work on "real world projects" in
                  the time ahead. I am fluent in several programming languages,
                  including for example:
                  <br />
                  HTML/CSS/JavaScript, React and C#/Python.
               </p>
            </div>
            <div id="slideshow">
               <PicDisplayer />
            </div>
         </div>
         <div id="socials">
            <Socials />
         </div>
      </div>
   );
}
