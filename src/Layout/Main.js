import React from 'react';
import About from '../About/About';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Projects from '../Components/Projects/Projects';
import Skills from '../Components/Skills/Skills';
import Contact from '../Contact/Contact';

const Main = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Projects />
            <Skills />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default Main;