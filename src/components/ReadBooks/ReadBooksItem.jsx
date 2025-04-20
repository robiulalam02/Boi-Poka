import { BookOpenText, CalendarDays, Users } from 'lucide-react';
import React from 'react';

const ReadBooksItem = ({ books }) => {
    return (
        <div className='flex flex-col md:flex-row gap-5 w-full p-4 rounded-xl shadow-sm'>
            <div className='bg-[#1313130D] w-52 p-6 flex justify-center items-center rounded-xl'>
                <img className='h-36' src={books.image} alt="" />
            </div>
            <div className='w-full flex flex-col justify-between gap-4'>
                <div>
                    <h3 className='playfair-font text-2xl font-semibold mb-4'>{books.bookName}</h3>
                    <p>By : {books.publisher}</p>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='font-bold'>Tag</p>
                    <div className='flex gap-4'>
                        {
                            books.tags.map((tag, index) => <span key={index} className='text-[#23BE0A] font-medium bg-[#23BE0A0D] px-4 py-1 rounded-4xl'>#{tag}</span>)
                        }
                    </div>
                    <div className='flex items-center gap-2'>
                        <CalendarDays />
                        <span>Year of publishing : {books.yearOfPublishing}</span>
                    </div>
                </div>
                <div className='flex items-center gap-4 pb-3 border-b-1 border-gray-200'>
                    <div className='flex items-center gap-2'>
                        <Users></Users>
                        <span>Publisher: {books.publisher}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BookOpenText />
                        <span>Page: {books.totalPages}</span>
                    </div>
                </div>
                <div>
                    <button className='bg-[#328EFF26] font-medium mr-4 text-[#328EFF] py-2 px-3 rounded-full'>Category: {books.category}</button>
                    <button className='bg-[#FFAC3326] font-medium mr-4 text-[#FFAC33] py-2 px-3 rounded-full'>Rating: {books.rating}</button>
                    <button className='bg-[#23BE0A] font-medium mr-4 text-white py-2 px-3 rounded-full'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ReadBooksItem;