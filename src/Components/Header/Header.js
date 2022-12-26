import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import resume from '../../resume-of-mayraj.pdf'
import logo from '../../mj-logo.png'
const Header = () => {
    const menuItem = [
        <>
            <li> <Link to='/' className='text-neutral-900 font-semibold text-lg capitalize hover:text-[#68DECD] hover:bg-transparent duration-700 ease-in'>Home</Link></li>
            <li> <a href='#about' className='text-neutral-900 font-semibold text-lg capitalize hover:text-[#68DECD] hover:bg-transparent duration-700 ease-in'>about me</a></li>
            <li> <Link to='/projects' className='text-neutral-900 font-semibold text-lg capitalize hover:text-[#68DECD] hover:bg-transparent duration-700 ease-in'>Projects</Link></li>
            <li> <a href='/blog' className='text-neutral-900 font-semibold text-lg capitalize hover:text-[#68DECD] hover:bg-transparent duration-700 ease-in'>blog</a></li>
            <li><a href='#contact' className='text-neutral-900 font-semibold text-lg capitalize hover:text-[#68DECD] hover:bg-transparent duration-700 ease-in'>Contact</a></li>
        </>
    ]
    return (
        <div className="navbar bg-[#252525] text-white">
            <div className="container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl  hover:bg-transparent text-[#68DECD]">
                        <img src={logo} alt="" className='w-20 inline' />
                        <span className='-m-5 text-2xl '>Mayraj</span>
                    </Link>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItem}
                    </ul>
                </div>
                <div className="navbar-end text-end">
                    <a href={resume} download='mayraj-resume' className='capitalize font-semibold text-lg text-[#68DECD] border border-[#68DECD] py-1 px-3 rounded-2xl'>
                        resume
                        <FaDownload size={19} className='inline ml-2' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;