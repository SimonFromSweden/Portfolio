import ProjectCard from "./ProjectCard";
import Socials from "./Socials";
import "../Styles/DisplayProjects.css";
import image1 from "../images/spintowin.png";
import image2 from "../images/munamii.png";
import image3 from "../images/taskmaster.png";
import image4 from "../images/assettracker.png";
import image5 from "../images/wiki.png";
import image6 from "../images/worldfact.png";
import image7 from "../images/parcel-tracker.png";
import image8 from "../images/websites.png";

function DisplayProjects() {
   return (
      <div>
         <h2>Projects (click for video presentation)</h2>
         <div className="dispProj">
            <ProjectCard
               bgrImg={image1}
               title="Spin To win"
               description="React App"
               url="https://youtu.be/gKy9-x_TKNE"
            />
            <ProjectCard
               bgrImg={image7}
               title="Parcel Tracker"
               description="React App"
               url="https://youtu.be/gKy9-x_TKNE"
            />
            <ProjectCard
               bgrImg={image2}
               title="Munamii Website"
               description="HTML/CSS Website"
               url="https://youtu.be/qAYL1-9dIRM"
            />
            <ProjectCard
               bgrImg={image3}
               title="TaskMaster"
               description="C# Console App"
               url="https://youtu.be/MZncYRYzlZM"
            />
            <ProjectCard
               bgrImg={image4}
               title="AssetTracker"
               description="C# Console App"
               url="https://youtu.be/qyGzYOP_DtI"
            />
            <ProjectCard
               bgrImg={image5}
               title="CS50 Wiki"
               description="Python/Django/SQL"
               url="https://youtu.be/m2MaK4A8KUo"
            />
            <ProjectCard
               bgrImg={image6}
               title="World Fact Generator"
               description="Javascript Project"
               url="https://simonfromsweden.github.io/"
            />
            <ProjectCard
               bgrImg={image8}
               title="A Few Homepages"
               description="Made with HTML/CSS"
               url="https://youtu.be/gKy9-x_TKNE"
            />
         </div>
         <div id="socialHome">
            <Socials />
         </div>
      </div>
   );
}

export default DisplayProjects;
