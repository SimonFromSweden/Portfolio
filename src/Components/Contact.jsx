import React from "react";
import Socials from "../Components/Socials";
import "../Styles/Contact.css";

export default function Contact() {
   return (
      <div>
         <h2 id="h2contact">Contact</h2>
         <p>
            Do you wish to contact me? Please use the contact form (it's
            connected to my{" "}
            <a href="mailto:jenssimonberglund@gmail.com">e-mail</a>), <br />
            or feel free to click any of my socials below!
            <br />I am a very reasonably reachable person :)
         </p>
         <div>
            <form id="contactForm" action="">
               <input type="text" placeholder="Write subject here" />
               <textarea
                  name=""
                  id=""
                  rows="12"
                  cols="12"
                  placeholder="Write your message here"></textarea>
               <input type="button" value="Submit" id="submitBtn" />
            </form>
         </div>
         <div id="socials">
            <Socials />
         </div>
      </div>
   );
}
