import React from 'react';
import WishListItems from './WishListItems';

const WishLists = ({wishList}) => {
    console.log(wishList);
    return (
        <div className='flex flex-col gap-5 py-8'>
            {
                wishList.map(books=> <WishListItems key={books.bookId} books={books}></WishListItems>)
            }
        </div>
    );
};

export default WishLists;