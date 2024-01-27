import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div class="flex flex-wrap p-4">
        <Card
          src="/archimedesCurve.gif"
          alt="Parametric Curve Animator"
          title="Parametric Curve Animator"
          description="C++, ImGui, ImGraph"
          link="/projects/parametric-curve-animator"
        />
      </div>
    </>
  );
};

const Card = ({ src, alt, title, description, link }) => {
  return (
    <>
      <Link class="w-[calc(33.33%-2rem)] m-4" to={link}>
        <div class="rounded overflow-hidden shadow-lg bg-white/5 p-4 hover:bg-white/15 cursor-pointer">
          <img class="w-full" src={src} alt={alt} />
          <div class="py-4">
            <div class="font-bold text-xl mb-2">{title}</div>
            <p class="text-gray-300 text-base italic">{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Projects;
