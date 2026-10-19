import React from "react";

function ProductCard({ product, onView, onAddToCart }) {
    return (
        <article className="accessory-card">
            <div className="accessory-card-img">
                <span className="accessory-badge">{product.category}</span>
                <img src={product.image.startsWith("/") ? product.image : "/" + product.image} alt={product.name} />
            </div>
            <div className="accessory-card-content">
                <h3>{product.name}</h3>
                <p className="accessory-price">Rs {Number(product.price).toLocaleString()}</p>
                <button className="accessory-viewbutton" onClick={() => onView(product)}>
                    View Details
                </button>
                <button
                    className="accessory-addbutton"
                    onClick={() => onAddToCart && onAddToCart(product, 1)}
                >
                    Add to Cart
                </button>
            </div>
        </article>
    );
}

export default ProductCard;
