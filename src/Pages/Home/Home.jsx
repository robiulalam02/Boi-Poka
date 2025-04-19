import React from 'react';
import Hero from '../../components/Hero/Hero';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const booksData = useLoaderData();

    return (
        <div>
            <Hero></Hero>
            <Books booksData={booksData}></Books>
        </div>
    );
};

export default Home;