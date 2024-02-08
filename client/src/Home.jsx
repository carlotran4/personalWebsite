import { Link } from "react-router-dom";
import headshot from "/headshot.jpg";
import resume from "/Carlo Tran- Resume.pdf";

const Home = () => {
  const old = false;

  if (!old) {
    return (
      <div className="w-full md:grid grid-cols-6">
        <div className="col-span-2">
          <img src="/headshot.jpg" className="rounded-full w-48 mx-auto mt-8 mb-4" />
          <h1 className="text-5xl text-center">Carlo Tran</h1>
          <p className="mx-auto text-lg text-center">Computer Science, B.S. (2026)</p>
          <Link
            target="_blank"
            to="https://www.caseys.com/careers/technology"
            className="block text-lg text-purple-300 max-w-max underline mx-auto text-center"
          >
            Casey's General Stores
          </Link>
          <Link
            target="_blank"
            to="https://dsri.uiowa.edu/"
            className="block text-lg text-purple-300 max-w-max underline mx-auto text-center"
          >
            Driving Safety Research Institute
          </Link>
          <Link
            target="_blank"
            to="https://pisa.cs.uiowa.edu/compepi/"
            className="block text-lg text-purple-300 max-w-max underline mx-auto text-center"
          >
            Computational Epidemiology Group
          </Link>
          <Link target="_blank" to={resume} className="block text-lg max-w-max underline mx-auto text-center">
            <button className="bg-purple-300 text-black hover:bg-purple-400 py-2 px-4 rounded my-4">See My Resume</button>
          </Link>
        </div>
        <div className="col-span-4">
          <h1 className="text-5xl pl-4 pt-12 md:pt-8">About Me</h1>
          <p className="text-lg px-4 py-4">
            I'm Carlo Tran, a computer science student at the University of Iowa. I'm a self driven worker, a passionate learner, and an
            enthusiastic team member.
          </p>
          <p className="text-lg px-4">
            I'm a software development intern at the Driving Safety Research Institute, where I've worked on several simulation, networking,
            and embedded projects.
          </p>
          <p className="text-lg px-4 py-4">
            I also have the pleasure of working with the Computational Epidemiology Group, where I develop tools to clean, organize, and
            build databases in order to streamline the insurance data analysis process.
          </p>
          <p className="text-lg px-4">
            I'm an incoming software engineering intern at Casey's General Stores, where I'll be developing workflows for their new data
            department.
          </p>
        </div>
        <div className="col-span-2 col-start-3 pb-12">
          <h1 className="text-5xl pl-4 pt-12 md:pt-0">Skills</h1>
          <ul>
            <li className="text-lg px-8 pt-2">- Node.Js</li>
            <li className="text-lg px-8">- React.Js</li>
            <li className="text-lg px-8">- Tailwind CSS</li>
            <li className="text-lg px-8">- C++</li>
            <li className="text-lg px-8">- Python</li>
            <li className="text-lg px-8">- SQL</li>
            <li className="text-lg px-8">- Java</li>
            <li className="text-lg px-8">- R</li>
          </ul>
        </div>
        <div className="col-span-2 col-start-5">
          <h1 className="text-5xl pl-4 md:pt-0">Interests</h1>
          <ul className="pt-2 pb-9">
            <li className="text-lg px-8">- Web Development</li>
            <li className="text-lg px-8">- Data Analysis</li>
            <li className="text-lg px-8">- Complex Data Parsing</li>
            <li className="text-lg px-8">- Networking</li>
            <li className="text-lg px-8">- Machine Learning</li>
            <li className="text-lg px-8">- Open Source LLMs</li>
          </ul>
        </div>
      </div>
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
