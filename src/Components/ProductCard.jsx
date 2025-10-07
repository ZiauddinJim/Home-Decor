import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
    const { name, price, material, stock, image, description, id } = product
    return (
        <div className="card bg-base-100 shadow-sm hover:scale-105 transition mx-3 lg:mx-auto">
            <figure>
                <img
                    className='w-full object-cover h-60'
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title justify-between">
                    <span className='flex-3'>{name}</span>
                    <span className="badge badge-outline text-indigo-700 font-bold flex-2">{stock ? `${price}$ ` : 'Out of stock'}</span>
                </h2>
                <p>{description}</p>
                <div className="flex justify-between lg:items-center items-baseline flex-col-reverse gap-3">
                    <Link to={`/productDetails/${id}`}
                        className='btn btn-outline text-indigo-700 font-bold'>View Details</Link>
                    <span className="badge badge-outline justify-end text-indigo-700">{material}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;