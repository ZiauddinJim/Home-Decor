import { Facebook, Twitter, Youtube } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            <ul className="grid grid-flow-col gap-4">
                <li><NavLink to={'/'} >Home</NavLink></li>
                <li><NavLink to={'/products'} >Products</NavLink></li>
                <li><NavLink to={'/wishlist'} >Wish List</NavLink></li>
            </ul>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link><Twitter /></Link>
                    <Link><Youtube /></Link>
                    <Link><Facebook /></Link>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;