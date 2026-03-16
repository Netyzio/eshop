import {useEffect, useState} from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {

        async function loadProducts() {
            try {

                const res = await fetch("http://localhost:3002/api/products");

                if (!res.ok) {
                    throw new Error("Failed to load products");
                }

                const data = await res.json();
                setProducts(data);

            } catch (err) {
                setError(err.message);
            }
        }

        loadProducts();

    }, []);

    async function addToCart(productId) {

        await fetch("http://localhost:3002/api/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: productId})
        });

    }

    return (
        <div className="container py-4">

            <div className="row">

                {error && (
                    <div className="text-danger mb-3">
                        {error}
                    </div>
                )}

                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={() => addToCart(product.id)}
                    />
                ))}

            </div>

        </div>
    );
}