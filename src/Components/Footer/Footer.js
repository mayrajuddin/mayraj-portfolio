import React from 'react';
import logo from '../../mj-logo.png'
const Footer = () => {
    return (
        <section className='py-3 border-t border-[#585D65] bg-[#1B1B1B] text-white'>
            <div className="justify-center items-center gap-2">
                <p className="text-center md:text-xl capitalize font-sans font-semibold "> &copy; copyright | alright reserved by mayraj uddin <img src={logo} alt="" className='w-16 inline' />
                </p>
            </div>
        </section>
    );
};

export default Footer;