import {Link} from "react-router-dom";

export default function Navbar() {

    return (
        <nav className="navbar navbar-dark bg-dark px-3">

            <Link to="/" className="navbar-brand text-decoration-none">
                Mini E-Shop
            </Link>

            <Link to="/cart" className="btn btn-outline-light">
                <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-cart-white-icon.png"
                    height="20px"
                />
            </Link>

        </nav>
    );
}