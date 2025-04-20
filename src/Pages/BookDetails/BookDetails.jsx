import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { setLocalData } from '../../utilities/localStorage';
import { setLocalWishData } from '../../utilities/LSWishList';

const BookDetails = () => {
    const { Id } = useParams();
    const convertedId = parseInt(Id);
    const data = useLoaderData();

    const bookData = data.find(book => book.bookId === convertedId)

    const handleAddToReadBook = (id) => {
        setLocalData(id);
        alert('book mark as read successfully')
    }

    const handleAddWishList = (id) => {
        setLocalWishData(id);
        alert('book mark as read successfully')
    }

    return (
        <div className='max-w-screen-xl mx-auto flex justify-between gap-8 mb-20 mt-4'>
            <div className='bg-[#1313130D] w-full rounded-2xl flex justify-center items-center'>
                <img className='h-[550px]' src={bookData.image} alt="" />
            </div>
            <div className='w-full flex flex-col gap-4'>
                <div>
                    <h1 className='playfair-font text-4xl font-semibold mb-4'>{bookData.bookName}</h1>
                    <p>By : {bookData.publisher}</p>
                </div>
                <div className='py-4 border-t border-b border-gray-200'>
                    <span>{bookData.category}</span>
                </div>
                <div className='flex flex-col gap-5 border-b border-gray-200 pb-5'>
                    <p><span className='font-bold'>Review :</span> {bookData.review}</p>
                    <div className='flex items-center gap-4'>
                        <span className='font-bold'>Tag :</span>
                        <div className='flex gap-4'>
                            {
                                bookData.tags.map((tag, index) => <span key={index} className='text-[#23BE0A] font-medium bg-[#23BE0A0D] px-4 py-1 rounded-4xl'>#{tag}</span>)
                            }
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 mb-2'>
                    <p>Number of pages : <span className='font-bold'>{bookData.totalPages}</span></p>
                    <p>Publisher : <span className='font-bold'>{bookData.publisher}</span></p>
                    <p>Year of Publishing: : <span className='font-bold'>{bookData.yearOfPublishing}</span></p>
                    <p>Rating : <span className='font-bold'>{bookData.rating}</span></p>
                </div>
                <div className='flex gap-5'>
                    <button onClick={() => handleAddToReadBook(bookData.bookId)} className='bg-transparent text-black py-3 px-6 rounded-md border border-slate-300 font-medium'>Read</button>
                    <button onClick={() => handleAddWishList(bookData.bookId)} className='bg-[#50B1C9] py-3 px-6 rounded-md text-white font-medium'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;