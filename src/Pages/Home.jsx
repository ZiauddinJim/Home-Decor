import { Link } from "react-router";
import ProductCard from "../Components/ProductCard";
import Container from "../Components/Container";
import useProducts from "../Hooks/useProducts";

const Home = () => {
    const [products] = useProducts()
    const homeProducts = products.slice(0, 6)
    return (
        <Container>
            <div>
                <div className="flex justify-between mt-5 mx-3 items-center">
                    <h3 className="font-bold lg:text-3xl text-2xl">Products Feature</h3>
                    <Link to={'/products'} className="btn btn-outline">See all products</Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-10 gap-7">
                    {
                        homeProducts.map(product => <ProductCard key={product.id} product={product} />)
                    }
                </div>
            </div>
        </Container>
    );
};

export default Home;