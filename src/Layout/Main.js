import React from 'react';
import Banner from '../Components/Banner/Banner';
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
        </div>
    );
};

export default Main;