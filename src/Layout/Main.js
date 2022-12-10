import React from 'react';
import About from '../About/About';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Projects from '../Components/Projects/Projects';
import Skills from '../Components/Skills/Skills';

const Main = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Projects />
            <Skills />
            <About />
            <Footer />
        </div>
    );
};

export default Main;