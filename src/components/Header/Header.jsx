import React from 'react';

const Header = () => {
    return (

        <nav className='bg-base-100 py-5'>
            <div className="max-w-screen-xl mx-auto navbar p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a href='/'>Home</a></li>
                            <li><a href='/readlist'>Listed Books</a></li>
                            <li><a href='/readcharts'>Pages to Read</a></li>
                        </ul>
                    </div>
                    <a className="text-2xl font-bold">Boi Poka</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg gap-8">
                        <li><a href='/'>Home</a></li>
                        <li><a href='/readlist'>Listed Books</a></li>
                        <li><a href='/readcharts'>Pages to Read</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <button className='bg-[#23BE0A] py-3 px-6 rounded-md text-white font-medium'>Sign In</button>
                    <button className='bg-[#59C6D2] py-3 px-6 rounded-md text-white font-medium'>Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Header;