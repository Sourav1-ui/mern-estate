import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <Link to='/'>
                    <span className='text-slate-500'>Real </span>
                    <span className='text-slate-700'>Estate</span>
                    </Link>
                </h1>
                <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                    <input type='text' placeholder='Search....'  className='bg-transparent outline-none w-24 sm:w-64'></input>
                    <FaSearch className='text-slate-500'></FaSearch>
                </form>
                <ul className='flex gap-4'>
                    <Link to='/'>
                    <li className='hidden sm:inline text-slate-700  text-lg hover:underline cursor-pointer'>Home</li>
                    </Link>
                    <Link to='/about'>
                    <li className='hidden sm:inline text-slate-700  text-lg hover:underline cursor-pointer'>About</li>
                    </Link>
                    <Link to='signin'>
                    <li className='hidden sm:inline text-slate-700  text-lg hover:underline cursor-pointer'>Sign in</li>
                    </Link>
                </ul>

            </div>


        </header>
    )
}

export default Header