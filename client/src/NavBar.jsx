import { Outlet, Link } from "react-router-dom";
import resume from './assets/Carlo Tran- Resume.pdf';

const NavBar = () => {
  return (
    <>
      <nav class="flex items-center justify-between flex-wrap p-5 bg-neutral-800 shadow-xl">
        <div class="w-full block flex-grow">
          <Link class="block mt-4 lg:inline-block lg:mt-0 text-neutral-300 hover:text-white mr-4" to="/">Home</Link>
          <Link class="block mt-4 lg:inline-block lg:mt-0 text-neutral-300 hover:text-white mr-4" target='_blank' to={resume}>Resume</Link>
          <Link class="block mt-4 lg:inline-block lg:mt-0 text-neutral-300 hover:text-white mr-4" target='_blank' to="https://github.com/carlotran4">GitHub</Link>
          <Link class="block mt-4 lg:inline-block lg:mt-0 text-neutral-300 hover:text-white mr-4" target='_blank' to="https://linkedin.com/in/carlo-tran/">LinkedIn</Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default NavBar;