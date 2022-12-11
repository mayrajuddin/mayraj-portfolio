import React from 'react';
import About from '../../About/About';
import Banner from '../../Components/Banner/Banner';
import Projects from '../../Components/Projects/Projects';
import Skills from '../../Components/Skills/Skills';
import Contact from '../../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner />
            <Projects />
            <Skills />
            <About />
            <Contact />
        </div>
    );
};

export default Home;