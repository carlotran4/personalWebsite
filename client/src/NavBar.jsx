import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import resume from "/Carlo Tran- Resume.pdf";
import tailwindConfig from "../tailwind.config";

function NavBar() {
  const [activePage, setActivePage] = useState("home");
  React.useEffect(() => {
    if (window.location.href.includes("projects")) setActivePage("projects");
  });

  const closeMenu = () => {
    if (window.innerWidth < parseInt(tailwindConfig.theme.screens["md"])) {
      document.getElementById("content").classList.add("hidden");
      document.getElementById("menu").classList.remove("hidden");
      document.getElementById("closeMenu").classList.add("hidden");
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-white/5 shadow-xl">
        <Link
          className="font-extrabold text-2xl inline-block pl-4 text-white"
          to="/"
          onClick={() => {
            setActivePage("home");
          }}
        >
          Carlo Tran
        </Link>
        <div className="block ml-auto md:hidden">
          <button
            className="flex items-center px-3 py-5 hover:text-white"
            onClick={() => {
              document.getElementById("content").classList.toggle("hidden");
              document.getElementById("menu").classList.toggle("hidden");
              document.getElementById("closeMenu").classList.toggle("hidden");
            }}
          >
            <svg id="menu" className="fill-current h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg id="closeMenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hidden">
              <title>Close Menu</title>
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div id="content" className="flex-grow hidden md:inline-block min-[0px]:max-md:w-full">
          <div className="md:float-right">
            <Link
              className={`block md:text-xs md:inline-block text-neutral-300 hover:text-white px-4 pt-3 ${
                activePage == "home" ? "text-white md:border-b-2" : ""
              }`}
              to="/"
              onClick={() => {
                setActivePage("home");
                closeMenu();
              }}
            >
              <HomeSvg />
              <span className="ml-2 md:block md:m-0">Home</span>
            </Link>
            <Link
              className={`block md:text-xs md:inline-block text-neutral-300 hover:text-white px-4 pt-3 ${
                activePage == "projects" ? "text-white md:border-b-2" : ""
              }`}
              to="/projects"
              onClick={() => {
                setActivePage("projects");
                closeMenu();
              }}
            >
              <CubeSvg />
              <span className="ml-2 md:block md:m-0">Projects</span>
            </Link>
            <Link className="block md:text-xs md:inline-block text-neutral-300 hover:text-white px-4 pt-3" target="_blank" to={resume}>
              <ResumeSvg />
              <span className="ml-2 md:block md:m-0">Resume</span>
            </Link>
            <Link
              className="block md:text-xs md:inline-block text-neutral-300 hover:text-white px-4 pt-3"
              target="_blank"
              to="https://github.com/carlotran4"
            >
              <GitHubSvg />
              <span className="ml-2 md:block md:m-0">GitHub</span>
            </Link>
            <Link
              className="block md:text-xs md:inline-block text-neutral-300 hover:text-white px-4 pt-3 pb-3 md:pb-0"
              target="_blank"
              to="https://linkedin.com/in/carlo-tran/"
            >
              <LinkedInSvg />
              <span className="ml-2 md:block md:m-0">LinkedIn</span>
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

const HomeSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 md:block md:m-auto">
      <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
      <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
    </svg>
  );
};

const CubeSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 md:block md:m-auto">
      <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
    </svg>
  );
};

const ResumeSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 md:block md:mx-auto">
      <path
        fillRule="evenodd"
        d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
        clipRule="evenodd"
      />
      <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
    </svg>
  );
};

const GitHubSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 md:block md:mx-auto">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
};

const LinkedInSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 md:block md:mx-auto">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
};

export default NavBar;
