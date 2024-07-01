import Navbar from "./Navbar";
import "../Styles/Header.css";

// write rfc to generate template
function Header() {
   return (
      <div>
         <hr />
         <div id="h1soc">
            <h1>Portfolio</h1>
            <div id="nav">
               <Navbar />
            </div>
         </div>
         <hr id="hr2" />
      </div>
   );
}

export default Header;
