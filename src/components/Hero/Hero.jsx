import React from 'react';

const Hero = () => {
    return (
        <div className='flex justify-between py-10 px-36 items-center rounded-3xl max-w-screen-xl mx-auto bg-[#1313130D] mb-20'>
            <div>
                <h1 className='text-6xl/relaxed text-black font-semibold playfair-font mb-10'>Books to freshen up <br /> <span>your bookshelf</span></h1>
                <button className='bg-[#23BE0A] py-3 px-6 rounded-md text-white font-medium'>View The List</button>
            </div>
            <div>
                <img className='w-[320px]' src="src/assets/book-hero.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;