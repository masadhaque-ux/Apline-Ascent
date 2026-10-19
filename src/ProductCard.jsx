import React from "react";

function ProductCard({ product, onView, onAddToCart }) {
    return (
        <article className="accCard">
            <div className="accCardImg">
                <span className="accBadge">{product.category}</span>
                <img src={product.image.startsWith("/") ? product.image : "/" + product.image} alt={product.name} />
            </div>
            <div className="accCardCont">
                <h3>{product.name}</h3>
                <p className="accPrice">Rs {Number(product.price).toLocaleString()}</p>
                <button className="accViewbtn" onClick={() => onView(product)}>
                    View Details
                </button>
                <button
                    className="accAddbtn"
                    onClick={() => onAddToCart && onAddToCart(product, 1)}
                >
                    Add to Cart
                </button>
            </div>
        </article>
    );
}

export default ProductCard;
