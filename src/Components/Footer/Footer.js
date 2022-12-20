import React from 'react';
import logo from '../../mjlogo.png'
const Footer = () => {
    return (
        <section className='py-3 border-t border-[#585D65] bg-[#1B1B1B] text-white'>
            <div className="flex justify-center gap-4">
                <p className="text-center text-xl capitalize font-sans font-semibold "> &copy; copyright| alright reserved by mayraj uddin</p>
                <img src={logo} alt="" className='w-12' />
            </div>
        </section>
    );
};

export default Footer;