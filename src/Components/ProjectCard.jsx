import "../Styles/ProjectCard.css";

function ProjectCard(props) {
   return (
      <a href={props.url} target="_blank">
         <div
            className="projCard"
            style={{ backgroundImage: `url(${props.bgrImg})` }}>
            <h3>{props.title}</h3>
            <h4>{props.description}</h4>
         </div>
      </a>
   );
}

export default ProjectCard;
