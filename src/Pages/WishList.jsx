import React, { useEffect, useState } from 'react';
import Container from '../Components/Container';
import WishlistCard from '../Components/WishlistCard';

const WishList = () => {
    const [wishlist, setWishlist] = useState([]);
    const [sortOrder, setSortOrder] = useState('none')
    useEffect(() => {
        const savaList = JSON.parse(localStorage.getItem('wishlist'))
        savaList && setWishlist(savaList)
    }, [])

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
        </Container>
    );
};

export default WishList;