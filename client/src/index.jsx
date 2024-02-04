import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import ProjectPage from "./ProjectPage.jsx";

export default function App() {
  const projects = [
    {
      src: "/archimedesCurve.gif",
      title: "Parametric Curve Animator",
      toolsUsed: "C++, ImGui, ImGraph",
      link: "/projects/parametric-curve-animator",
      dateRange: "February, 2023 - June, 2023",
      description: "Uses the shunting-yard algorithm to parse user-inputted functions, then animates it over an inputted range.",
      gitHubLink: "https://github.com/carlotran4/parametricCurveAnimations",
      videoLink: "https://www.youtube-nocookie.com/embed/wFEHnjKrwko?si=w27BIhjSYxjrIDwx&rel=0",
    },
    {
      src: "/frankenstein.png",
      title: "AI-Powered Visual Novel",
      toolsUsed: "React, NodeJS, OpenAI, Stable Diffusion",
      link: "/projects/ai-powered-frankenstein-visual-novel",
      dateRange: "November, 2023 - December, 2023",
      description:
        "A visual novel game that uses OpenAI's GPT-3 to generate the story and Stable Diffusion to generate the art. All content is generated on the fly, and the player's choices affect the story.",
      gitHubLink: "https://github.com/carlotran4/FrankensteinVisualNovel",
      websiteLink: "https://frankenstein-game.azurewebsites.net/",
    },
    {
      src: "",
      title: "Beat Maker & Piano",
      toolsUsed: "Javascript, CSS, HTML",
      link: "/projects/beat-maker",
      dateRange: "September, 2023",
      description:
        "A simple beat maker and piano app that allows users to create and play music. Made in 1 day for the 2023 UIowa hackathon.",
      websiteLink: "https://carlotran4.github.io/hackathonuiowa2023/",
      githubLink: "https://github.com/carlotran4/hackathonuiowa2023",
      videoLink: "https://www.youtube-nocookie.com/embed/rM-qDFu548Y?si=pT0J0uPVDPDqW7l-&rel=0",
    },
    {
      src: "/policeTracker.png",
      title: "Police Activity Tracker",
      toolsUsed: "Python, Django, CSS",
      link: "/projects/police-activity-tracker",
      dateRange: "July, 2023 - August, 2023",
      description:
        "Simple web app that displays data scraped from the Johnson County Police Blotter. Unfinished due to lack of interesting information to display.",
      gitHubLink: "https://github.com/carlotran4/PoliceActivityTracker",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects projects={projects} />} />
          {projects.map((project, index) => (
            <Route
              path={project.link}
              key={index}
              element={
                <ProjectPage
                  title={project.title}
                  toolsUsed={project.toolsUsed}
                  dateRange={project.dateRange}
                  description={project.description}
                  gitHubLink={project.gitHubLink}
                  websiteLink={project.websiteLink}
                  videoLink={project.videoLink}
                />
              }
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
