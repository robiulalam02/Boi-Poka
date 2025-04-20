import React from 'react';
import ReadBooksItem from './ReadBooksItem';

const ReadBooks = ({ readBook }) => {

    return (
        <div className='flex flex-col gap-5 py-8'>
            {
                readBook.map(books=> <ReadBooksItem key={books.bookId} books={books}></ReadBooksItem>)
            }
        </div>
    );
};

export default ReadBooks;