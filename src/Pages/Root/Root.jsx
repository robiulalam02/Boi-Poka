import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;