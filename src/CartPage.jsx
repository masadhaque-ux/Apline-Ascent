import React from "react";
import "./cart.css";

function CartPage({ cart = [], onRemove, onQuantityChange, onNavigate }) {
    const priceOf = (item) => Number(item.price || 0);
    const itemCount = cart.reduce((sum, item) => sum + Number(item.quantity || 1), 0);
    const subtotal = cart.reduce(
        (sum, item) => sum + priceOf(item) * Number(item.quantity || 1),
        0
    );

    return (
        <main className="aa-cart-page">
            <div className="aa-cart-container">
                <p className="aa-cart-eyebrow">ALPINE ASCENT STORE</p>
                <h1>Your <span>Shopping Cart</span></h1>
                <p className="aa-cart-intro">Manage your mountain gear before checkout.</p>

                {cart.length === 0 ? (
                    <section className="aa-cart-empty">
                        <div className="aa-cart-empty-icon">🛒</div>
                        <h2>Your cart is empty</h2>
                        <p>Find the equipment you need for your next adventure.</p>
                        <button onClick={() => onNavigate("accessories")}>Browse Store</button>
                    </section>
                ) : (
                    <div className="aa-cart-grid">
                        <section className="aa-cart-items">
                            <h2>Cart Items <span>({itemCount})</span></h2>
                            {cart.map((item) => (
                                <article className="aa-cart-item" key={item.id}>
                                    <div className="aa-cart-image">
                                        {item.image ? (
                                            <img
                                                src={item.image.startsWith("/") ? item.image : `/${item.image}`}
                                                alt={item.name || "Mountaineering product"}
                                            />
                                        ) : <span>🏔️</span>}
                                    </div>
                                    <div className="aa-cart-info">
                                        <h3>{item.name || item.title || "Mountaineering item"}</h3>
                                        <p className="aa-cart-unit-price">Rs {priceOf(item).toLocaleString()}</p>
                                        <div className="aa-cart-controls">
                                            <label>
                                                Qty
                                                <input
                                                    type="number"
                                                    min="1"
                                                    max="99"
                                                    value={item.quantity || 1}
                                                    onChange={(event) =>
                                                        onQuantityChange(item.id, event.target.value)
                                                    }
                                                />
                                            </label>
                                            <button className="aa-cart-remove" onClick={() => onRemove(item.id)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <strong className="aa-cart-line-total">
                                        Rs {(priceOf(item) * Number(item.quantity || 1)).toLocaleString()}
                                    </strong>
                                </article>
                            ))}
                        </section>

                        <aside className="aa-cart-summary">
                            <h2>Order Summary</h2>
                            <div className="aa-cart-summary-row">
                                <span>Total items</span><strong>{itemCount}</strong>
                            </div>
                            <div className="aa-cart-summary-row aa-cart-subtotal">
                                <span>Subtotal</span><strong>Rs {subtotal.toLocaleString()}</strong>
                            </div>
                            <p>Shipping and any applicable taxes are calculated separately.</p>
                            <button className="aa-cart-checkout" onClick={() => alert("Your cart is saved. Checkout and payment processing have not been configured yet.")}>
                                Proceed to Checkout
                            </button>
                            <button className="aa-cart-continue" onClick={() => onNavigate("accessories")}>
                                Continue Shopping
                            </button>
                        </aside>
                    </div>
                )}
            </div>
        </main>
    );
}

export default CartPage;
