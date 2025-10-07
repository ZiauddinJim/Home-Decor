import { useRouteError } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <Navbar />
            <div>{error.message}</div>
            <Footer />
        </div>
    );
};

export default ErrorPage;