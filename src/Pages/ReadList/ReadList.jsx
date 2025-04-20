import { ChevronDown } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { storedData } from '../../utilities/localStorage';
import ReadBooks from '../../components/ReadBooks/ReadBooks';
import WishLists from '../../components/WishLists/WishLists';
import { storedWishData } from '../../utilities/LSWishList';

const ReadList = () => {
    const [readBook, setReadBook] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState("")
    const data = useLoaderData();

    useEffect(() => {
        const storedReadBooks = storedData();
        const convertedReadBooks = storedReadBooks.map(id => parseInt(id))
        const filteredData = data.filter(books => convertedReadBooks.includes(books.bookId));
        setReadBook(filteredData);
    }, [])

    useEffect(() => {
        const storedWishList = storedWishData();
        const convertedWishList = storedWishList.map(id => parseInt(id))
        const filteredData = data.filter(books => convertedWishList.includes(books.bookId));
        setWishList(filteredData);
    }, [])

    const handleSort = type => {
        setSort(type)
        if (type === "pages") {
            const readBookSortedByPages = [...readBook].sort((a, b) => a.totalPages - b.totalPages);
            const wishListSortedByPages = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
            setReadBook(readBookSortedByPages);
            setWishList(wishListSortedByPages);
        } else if (type === "ratings") {
            const readBookSortedByRatings = [...readBook].sort((a, b) => b.rating - a.rating);
            const wishListSortedByRatings = [...wishList].sort((a, b) => b.rating - a.rating);
            setReadBook(readBookSortedByRatings);
            setWishList(wishListSortedByRatings);
        }
    }

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='bg-[#1313130D] text-center p-8 rounded-2xl mb-8'>
                <h1 className='font-bold text-2xl'>Books</h1>
            </div>
            <div className='text-center mb-12'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 font-normal py-5 bg-[#23BE0A] text-white">Sort by: {sort ? sort : ""}<ChevronDown /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort("pages")}>Pages</a></li>
                        <li><a onClick={() => handleSort("ratings")}>Ratings</a></li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <ReadBooks readBook={readBook}></ReadBooks>
                </TabPanel>
                <TabPanel>
                    <WishLists wishList={wishList}></WishLists>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;