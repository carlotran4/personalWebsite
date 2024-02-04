import { BrowserRouter, Link } from "react-router-dom";

const Projects = ({ projects }) => {
  return (
    <>
      <div class="flex flex-wrap p-4">
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
      <Link class="w-[calc(33.33%-2rem)] m-4" to={link}>
        <div class="rounded overflow-hidden shadow-lg bg-white/5 p-4 hover:bg-white/15 cursor-pointer">
          <img class="w-full " src={src} alt={title} />
          <div class="py-4">
            <div class="font-bold text-xl mb-2">{title}</div>
            <p class="text-gray-300 text-base italic">{toolsUsed}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Projects;
