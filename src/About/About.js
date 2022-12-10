import React from 'react';

const About = () => {
    return (
        <section id='about'>
            <div className="container">
                <h3 className="text-3xl font-bold uppercase my-4">about me</h3>
                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        <h4 className="tex-xl capitalize"><b>mayraj uddin</b></h4>
                    </div>
                    <div className="col-span-1"></div>
                </div>
            </div>
        </section>
    );
};

export default About;