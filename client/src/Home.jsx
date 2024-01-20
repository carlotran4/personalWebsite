import headshot from './assets/headshot.jpg'


const Home = () => {
    return (
        // <div class="flex border-b">
        //     <div class="w-1/3 border-r p-4">
        //         <h1 class="text-4xl ">Carlo Tran</h1>
        //         <p>Computer Science B.S. at University of Iowa, 2026</p>
        //         <p>Current Intern with the Driving Safety Research Institute and the Computational Epidemiology Research Group</p>
        //         <p>Future Intern at Casey's General Stores</p>
        //     </div>
        //     <div class="w-2/3 px-4 py-2">
        //         <p>My Mission: Make the world a better place by writing elegant code</p>
        //         <p>My Passion: Software Development, Data Analysis, and Problem-Solving</p>
        //         <p>My Skillset: Node.Js, React.Js, Tailwind CSS, C++, Java, Python, SQL, R</p>
        //     </div>
        // </div>
        <>
        <div class="flex">
            <div class="w-2/3 p-4">
                <p class="text-5xl">I am a Computer Science Student with a passion for learning, and years of relevant work experience</p>
                <p class="text-2xl py-4">I hope to make the world a better place, by writing clean and elegant code.</p>
            </div>
        </div>
        <div class="flex">
            <img class="w-1/3" src={headshot} alt="Carlo Tran's Headshot"/>
        </div>
        </>
    )
}

export default Home