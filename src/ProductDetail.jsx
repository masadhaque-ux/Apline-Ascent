import React, { useState } from "react";

function ProductDetail({ product, onBack, onAddToCart, onGoToCart }) {
    const [quantity, setQuantity] = useState(1);

    function addToCart() {
        if (onAddToCart) {
            onAddToCart(product, quantity);
        } else {
            // Fallback in case this component is used outside the Store page.
            const cart = JSON.parse(localStorage.getItem("alpineCart") || "[]");
            const existing = cart.find((item) => String(item.id) === String(product.id));
            const updated = existing
                ? cart.map((item) => String(item.id) === String(product.id)
                    ? { ...item, quantity: Number(item.quantity || 1) + quantity }
                    : item)
                : [...cart, { ...product, quantity }];
            localStorage.setItem("alpineCart", JSON.stringify(updated));
            if (onGoToCart) onGoToCart();
        }
    }

    return (
        <section className="accessory-detail-page">
            <button className="accessory-back-btn" onClick={onBack}>← Back to Accessories</button>
            <div className="accessory-product-box">
                <div className="accessory-product-image">
                    <img src={product.image.startsWith("/") ? product.image : "/" + product.image} alt={product.name} />
                </div>
                <div className="accessory-product-info">
                    <span className="accessory-detail-badge">{product.category}</span>
                    <h1>{product.name}</h1>
                    <h2>Rs {Number(product.price).toLocaleString()}</h2>
                    <p className="accessory-stock">● {product.stock}</p>
                    <p>{product.description}</p>
                    <ul className="accessory-specs">
                        <li><span>Product ID</span> #{product.id}</li>
                        <li><span>Category</span> {product.category}</li>
                        <li><span>Delivery</span> {product.delivery}</li>
                    </ul>
                    <label htmlFor="accessory-quantity">Quantity:</label>
                    <input
                        id="accessory-quantity"
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(event) => setQuantity(Math.max(1, Number(event.target.value)))}
                    />
                    <button className="accessory-cart-btn" onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;
