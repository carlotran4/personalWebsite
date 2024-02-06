import { Link } from "react-router-dom";
import headshot from "/headshot.jpg";
import resume from "/Carlo Tran- Resume.pdf";

const Home = () => {
  const old = false;

  if (!old) {
    return (
      <>
        <p>WIP</p>
      </>
    );
  }

  if (old) {
    return (
      <>
        <div class="flex">
          <div class="w-2/3 p-4">
            <p class="text-5xl font-semibold">
              I am a Computer Science Student with a passion for learning, and years of relevant work experience
            </p>
            <p class="text-2xl py-4">I hope to make the world a better place, by writing clean and elegant code.</p>
          </div>
        </div>
        <div class="flex">
          <img class="w-1/3 px-4" src={headshot} alt="Carlo Tran's Headshot" />
          <div class="w-2/3 text-center">
            <p class="text-4xl py-4">Nice to meet you, I'm Carlo Tran.</p>
            <p class="text-xl">I'm an aspiring software developer in the class of 2026 at the University of Iowa.</p>
            <p class="text-xl pb-4">I'm proficient in Node.Js, React.Js, C++, Python, R, SQL, and Java.</p>
            <Link target="_blank" to={resume}>
              <button class=" bg-white/10 hover:bg-white/20 font-bold py-2 px-4 rounded">See My Resume</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
};

export default Home;
