import "../Styles/Socials.css";
import soc1 from "../images/Instagram_icon.png";
import soc2 from "../images/github.png";
import soc3 from "../images/Facebook_logo.png";

function Socials() {
   return (
      <div id="socials">
         <div class="socDiv">
            <a href="https://www.instagram.com/simon4sho">
               <img src={soc1} alt="instagram icon" />
            </a>
         </div>
         <div class="socDiv">
            <a href="https://github.com/simonfromsweden">
               <img src={soc2} alt="github icon" />
            </a>
         </div>
         <div class="socDiv" id="fb">
            <a href="https://www.facebook.com/SimonBerglund/">
               <img src={soc3} alt="facebook icon" />
            </a>
         </div>
      </div>
   );
}

export default Socials;
