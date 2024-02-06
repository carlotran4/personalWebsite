import { BrowserRouter, Link } from "react-router-dom";

const Projects = ({ projects }) => {
  return (
    <>
      <div className="flex flex-wrap p-4">
        {projects.map((project, index) => (
          <Card src={project.src} title={project.title} toolsUsed={project.toolsUsed} link={project.link} key={index} />
        ))}
      </div>
    </>
  );
};

const Card = ({ src, title, toolsUsed, link }) => {
  return (
    <>
      <Link className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] m-4" to={link}>
        <div className="rounded overflow-hidden shadow-lg bg-white/5 p-4 hover:bg-white/15 cursor-pointer">
          <img className="w-full " src={src} alt={title} />
          <div className="py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-300 text-base italic">{toolsUsed}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Projects;
