import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const BooksCard = ({ books }) => {
    return (
        <Link to={`/bookDetails/${books.bookId}`}>
            <div className='p-5 shadow flex flex-col justify-between gap-5 rounded-xl h-[500px]'>

                <div className='bg-[#F3F3F3] flex justify-center py-10 rounded-xl'>
                    <img className=' h-40' src={books.image} alt="" />
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        {
                            books.tags.map((tag, index) => <span key={index} className='text-[#23BE0A] font-medium bg-[#23BE0A0D] px-4 py-1 rounded-4xl'>{tag}</span>)
                        }
                    </div>
                    <h3 className='playfair-font text-2xl font-semibold'>{books.bookName}</h3>
                    <p className='text-black'>By : {books.publisher}</p>
                </div>

                <div className='flex justify-between items-center'>
                    <span>{books.category}</span>
                    <div className='flex items-center gap-4'>
                        <span>{books.rating}</span>
                        <Star size={20}></Star>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default BooksCard;