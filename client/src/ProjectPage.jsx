import React from "react";
import { Outlet, Link } from "react-router-dom";

function ProjectPage({ title, toolsUsed, dateRange, description, gitHubLink, websiteLink = "", videoLink = "" }) {
  return (
    <>
      <h1 className="text-5xl text-center py-2 mx-2 md:border-b-2 md:text-left md:pl-5">{title}</h1>
      <span className="block italic text-center py-2 md:inline-block md:pl-5">{toolsUsed}</span>
      <span className="block italic text-center py-2 md:inline-block md:float-end md:pr-5">{dateRange}</span>
      <h1 className="text-2xl py-5 text-center md:text-left mx-5">{description}</h1>
      <div className="w-full flex justify-center align-middle mt-5 flex-col md:inline-block md:text-center">
        {websiteLink != "" && (
          <Link target="_blank" to={websiteLink} className="max-w-max mx-auto my-2 md:mx-2">
            <button className="bg-purple-300 hover:bg-purple-400 text-black font-bold py-2 px-4 rounded">
              <LinkSVG />
              Visit Website
            </button>
          </Link>
        )}

        <Link target="_blank" to={gitHubLink} className="max-w-max mx-auto my-2 md:mx-2">
          <button className="bg-purple-300 hover:bg-purple-400 text-black font-bold py-2 px-4 rounded">
            <GitHubSvg />
            See the Code
          </button>
        </Link>
      </div>

      {videoLink != "" && (
        <iframe
          className="mx-auto p-5 aspect-video w-full md:w-3/4 lg:w-1/2"
          src={videoLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
}

const GitHubSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline mr-2">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
};

const LinkSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline mr-2">
      <path
        fillRule="evenodd"
        d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ProjectPage;
