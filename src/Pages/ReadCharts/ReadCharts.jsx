import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { storedData } from '../../utilities/localStorage';
import { Bar, BarChart, CartesianGrid, Cell, Tooltip, XAxis, YAxis } from 'recharts';

const ReadCharts = () => {
    const data = useLoaderData();
    console.log(data);
    const [readBook, setReadBook] = useState([]);

    useEffect(() => {
        const storedReadBooks = storedData();
        const convertedReadBooks = storedReadBooks.map(id => parseInt(id))
        const filteredData = data.filter(books => convertedReadBooks.includes(books.bookId));
        setReadBook(filteredData);
    }, [])

    return (
        <div className='max-w-screen-xl mx-auto flex justify-center items-center bg-[#13131308] p-10 my-10 rounded-3xl'>
            <BarChart
                width={900}
                height={550}
                data={readBook}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip></Tooltip>
                <Bar dataKey="totalPages" fill="#8884d8" label={{ position: 'top' }}>
                    
                </Bar>
            </BarChart>
        </div>
    );
};

export default ReadCharts;