import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';

const ProductDetails = () => {
    const { id } = useParams();
    const [products, loading] = useProducts();
    const product = products.find(product => product.id == id)
    if (loading) return <p>loading....</p>;
    const { name, price, material, stock, image, description, idp = id, dimensions } = product

    const handleAddToWishlist = () => {
        const exitingList = JSON.parse(localStorage.getItem('wishlist'))
        console.log(exitingList);
        let updateList = [];
        if (exitingList) {
            const isDuplicate = exitingList.some(p => p.id === product.id)
            if (isDuplicate) return alert('Sorry vai')
            updateList = [...exitingList, product]
        } else {
            updateList.push(product)
        }
        localStorage.setItem('wishlist', JSON.stringify(updateList))
    }


    return (
        <div className='flex gap-10 p-10'>
            <div>
                <img className='rounded-2xl' src={image} alt={name} />
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='text-3xl font-bold mb-5'>{name}</h1>
                <div className='flex gap-2  '>
                    <span className='badge bg-gray-100 text-gray-500'> Price: <span className='font-bold text-black'> {price}$</span></span>
                    <span className='badge bg-gray-100 text-gray-500'> Status: <span className='font-bold text-black'> {stock ? 'In stock' : 'Out of stock'}</span> </span>
                    <span className='badge bg-gray-100 text-gray-500'> Product Code: <span className='font-bold text-black'> {idp}</span> </span>
                </div>
                <div>
                    <p className='mt-5'><span className='font-bold'>Description:</span> {description}</p>
                    <p className='mt-2'><span className='font-bold'>Material use:</span> {material}</p>
                    <p className='mt-2 mb-5'><span className='font-bold'>dimensions: </span> {dimensions}</p>
                </div>
                <div>
                    <button onClick={handleAddToWishlist}
                        className='btn btn-outline text-indigo-700 font-bold'>Add to wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;