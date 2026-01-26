import Hero from './Hero';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Navbar from './Navbar';

const Me = () => {
    return (
        <div className="bg-[#ededed] min-h-screen pb-20 overflow-y-auto h-screen">
            <Navbar />

            {/* Header / Hero Section */}
            <div className="pt-20">
                <Hero />
            </div>

            {/* Resume Sections */}
            <div className="bg-white mt-2 pb-10">
                <Experience />
                <Projects />
                <Contact />
            </div>
        </div>
    );
};

export default Me;
