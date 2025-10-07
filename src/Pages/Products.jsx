import useProducts from '../Hooks/useProducts';
import ProductCard from '../Components/ProductCard';
import Link from 'daisyui/components/link';
import Container from '../Components/Container';
import { useState } from 'react';
import { Search } from 'lucide-react';

const Products = () => {
    const [products] = useProducts();
    const [search, setSearch] = useState('')
    const term = search.trim().toLowerCase()
    const searchProducts = term
        ? products.filter(product => product.name.toLowerCase().includes(term))
        : products;

    return (
        <Container>
            <div>
                <div className="flex justify-between flex-col-reverse lg:flex-row mt-5 mx-2 lg:mx-auto ">
                    <div className='flex flex-col lg:flex-row'>
                        <h3 className="font-bold lg:text-3xl text-2xl">All Products</h3>
                        <span className='text-gray-500 font-normal text-lg'> ({searchProducts.length}) products found.</span>
                    </div>
                    <label className="input">
                        <Search />
                        <input onChange={(e) => setSearch(e.target.value)}
                            type="search"
                            required
                            placeholder="Search"
                            value={search} />
                    </label>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-10 gap-7 mx-auto">
                    {
                        searchProducts.length
                            ? searchProducts.map(product => <ProductCard key={product.id} product={product} />)
                            : <div className='text-2xl font-bold col-span-3 text-center'>Products not found.</div>
                    }
                </div>
            </div>
        </Container>
    );
};

export default Products;