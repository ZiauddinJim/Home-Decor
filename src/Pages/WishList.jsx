import React, { useEffect, useState } from 'react';
import Container from '../Components/Container';
import WishlistCard from '../Components/WishlistCard';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const WishList = () => {
    const [wishlist, setWishlist] = useState([]);
    const [sortOrder, setSortOrder] = useState('none')
    useEffect(() => {
        const savaList = JSON.parse(localStorage.getItem('wishlist'))
        savaList && setWishlist(savaList)
    }, [])
    if (!wishlist.length) return <div className='text-2xl font-bold text-center my-10'>Wishlist not found.</div>



    // An Immediately Invoked Function Expression (IIFE) in JavaScript
    // is a function that is defined and executed immediately after it is created.'🔽⬇⬇⬇🔽
    const sortItem = (() => {
        if (sortOrder === ('price-asc')) {
            return [...wishlist].sort((a, b) => a.price - b.price)
        } else if (sortOrder === ('price-desc')) {
            return [...wishlist].sort((a, b) => b.price - a.price)
        } else return wishlist;
    })();

    const handleRemove = (id) => {
        const removeList = JSON.parse(localStorage.getItem('wishlist'));
        let updateList = removeList.filter(p => p.id !== id)
        setWishlist(updateList)
        localStorage.setItem('wishlist', JSON.stringify(updateList))

    }
    // Generate chart data
    const totalsByCategory = {}
    wishlist.forEach(product => {
        const category = product.category
        totalsByCategory[category] = (totalsByCategory[category] || 0) + product.price
    })
    const chartData = Object.keys(totalsByCategory).map(category => ({
        category,
        total: totalsByCategory[category]
    }))
    console.log(chartData);
    return (
        <Container>
            <div>
                <div className="flex justify-between mt-5">
                    <h3 className="font-bold text-3xl">Wishlist
                        <span className='text-gray-500 font-normal text-lg'> ({sortItem.length}) products found.</span>
                    </h3>

                    <label className='from-control w-full max-w-xs'>
                        <select className='select select-border' value={sortOrder}
                            onChange={e => setSortOrder(e.target.value)}>
                            <option value="none">Sort by price</option>
                            <option value="price-asc">Low -&gt;High</option>
                            <option value="price-desc">High -&gt;Low</option>
                        </select>
                    </label>

                </div>
                <div className='space-y-7 mt-10'>
                    {
                        sortItem.map(p => <WishlistCard handleRemove={handleRemove} key={p.id} p={p} />)
                    }
                </div>
            </div>

            <div>
                <h1 className='text-3xl font-semibold my-10'>Wishlist summary</h1>
                <div className='h-80 p-4 rounded-2xl border bg-base-100 mb-10'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="total" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Container>
    );
};

export default WishList;