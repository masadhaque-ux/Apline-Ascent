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
        <main className="cartPage">
            <div className="cartWrap">
                <p className="cartSmall">ALPINE ASCENT STORE</p>
                <h1>Your <span>Shopping Cart</span></h1>
                <p className="cartIntro">Manage your mountain gear before checkout.</p>

                {cart.length === 0 ? (
                    <section className="cartEmpty">
                        <div className="cartEmptyIcon">🛒</div>
                        <h2>Your cart is empty</h2>
                        <p>Find the equipment you need for your next adventure.</p>
                        <button onClick={() => onNavigate("accessories")}>Browse Store</button>
                    </section>
                ) : (
                    <div className="cartGrid">
                        <section className="cartItems">
                            <h2>Cart Items <span>({itemCount})</span></h2>
                            {cart.map((item) => (
                                <article className="cartItem" key={item.id}>
                                    <div className="cartImg">
                                        {item.image ? (
                                            <img
                                                src={item.image.startsWith("/") ? item.image : `/${item.image}`}
                                                alt={item.name || "Mountaineering product"}
                                            />
                                        ) : <span>🏔️</span>}
                                    </div>
                                    <div className="cartInfo">
                                        <h3>{item.name || item.title || "Mountaineering item"}</h3>
                                        <p className="cartUnitPrice">Rs {priceOf(item).toLocaleString()}</p>
                                        <div className="cartCtrl">
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
                                            <button className="cartDel" onClick={() => onRemove(item.id)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <strong className="cartLineTotal">
                                        Rs {(priceOf(item) * Number(item.quantity || 1)).toLocaleString()}
                                    </strong>
                                </article>
                            ))}
                        </section>

                        <aside className="cartSum">
                            <h2>Order Summary</h2>
                            <div className="cartSumRow">
                                <span>Total items</span><strong>{itemCount}</strong>
                            </div>
                            <div className="cartSumRow cartTotal">
                                <span>Subtotal</span><strong>Rs {subtotal.toLocaleString()}</strong>
                            </div>
                            <p>Shipping and any applicable taxes are calculated separately.</p>
                            <button className="cartCheck" onClick={() => alert("Your cart is saved. Checkout and payment processing have not been configured yet.")}>
                                Proceed to Checkout
                            </button>
                            <button className="cartNext" onClick={() => onNavigate("accessories")}>
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
