import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Cart() {

    const [cart, setCart] = useState([]);

    useEffect(() => {

        async function loadCart() {

            const res = await fetch("http://localhost:3002/api/cart");
            const data = await res.json();

            setCart(data);
        }

        loadCart();

    }, []);

    const total = cart.reduce((sum, p) => sum + p.price, 0);

    return (
        <div className="container">

            <h2 className="mt-4">
                Your Cart
            </h2>

            {cart.length === 0 && (
                <div className="mt-3">
                    Cart is empty,
                    <Link to="/"> start shopping</Link>.
                </div>
            )}

            {cart.map((item, index) => (

                <div key={index} className="card mb-3">

                    <div className="card-body d-flex justify-content-between">

                        <div>
                            <strong>{item.name}</strong> - ${item.price}
                        </div>

                    </div>

                </div>

            ))}

            {cart.length > 0 && (

                <div className="text-end mt-3">

                    <h4>
                        Total: ${total}
                    </h4>

                    <button className="btn btn-success mt-2">
                        Checkout
                    </button>

                </div>

            )}

        </div>
    );
}