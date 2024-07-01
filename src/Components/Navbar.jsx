import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
   return (
      <div className="navBar">
         <div className="link">
            <Link to="/">Home</Link>
         </div>
         <div className="link">
            <Link to="/About">About</Link>
         </div>
         <div className="link">
            <Link to="/Contact">Contact</Link>
         </div>
      </div>
   );
}

export default Navbar;
