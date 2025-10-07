import React from 'react';

const WishlistCard = ({ p, handleRemove }) => {

    const { image, name, description, price, category } = p
    return (
        <div className="bg-base-100 shadow-sm h-full flex flex-col p-5 lg:flex-row items-center-safe border-2 rounded-2xl overflow-hidden">
            <figure>
                <img
                    className='h-30 w-44 rounded-2xl'
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title flex-2 lg:flex-none">{name}</h2>
                <p className='badge bg-gray-200 flex-1 lg:flex-none'>{category}</p>
            </div>
            <div>
                <span className="mx-5 font-bold">{price}$</span>
                <button onClick={() => handleRemove(p.id)} className="btn btn-outline mr-5">Remove</button>
            </div>
        </div>
    )
};

export default WishlistCard;