import React, { Suspense } from 'react';
import BooksCard from '../../components/BooksCard/BooksCard';

const Books = ({ booksData }) => {

    return (
        <div className='max-w-screen-xl mx-auto'>
            <h2 className='playfair-font text-center text-4xl font-semibold'>Books</h2>
            <div className='grid grid-cols-3 py-6 gap-5'>
                <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
                    {
                        booksData.map(books => <BooksCard key={books.bookId} books={books}></BooksCard>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default Books;