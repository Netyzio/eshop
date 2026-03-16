export default function ProductCard({product, addToCart}) {

    return (
        <div className="col-md-3">

            <div className="card h-100 shadow-sm">

                <img
                    src={product.img}
                    className="card-img-top"
                    alt={product.name}
                />

                <div className="card-body d-flex flex-column">

                    <h5 className="card-title">
                        {product.name}
                    </h5>

                    <p className="card-text">
                        ${product.price}
                    </p>

                    <button
                        className="btn btn-primary mt-auto"
                        onClick={addToCart}
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        </div>
    );
}