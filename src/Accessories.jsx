import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import "./accessories.css";

function Accessories({ onAddToCart, onGoToCart }) {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("All");
    const [selected, setSelected] = useState(null);

    const categories = ["All", "Bags", "Footwear", "Climbing Gear", "Safety", "Clothing", "Accessories"];

    useEffect(() => {
        fetch("src/js/product.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log("Could not load products", error));
    }, []);

    function openDetail(product) {
        setSelected(product);
        window.scrollTo(0, 0);
    }

    const shownProducts = category === "All"
        ? products
        : products.filter((product) => product.category === category);

    return (
        <main className="accessories-page">
            {selected ? (
                <ProductDetail product={selected} onBack={() => setSelected(null)} onAddToCart={onAddToCart} onGoToCart={onGoToCart} />
            ) : (
                <>
                    <section className="accessories-heading">
                        <p className="accessories-topline">ALPINE ASCENT · GEAR SHOP</p>
                        <h1>Climbing <span>Accessories</span></h1>
                        <p className="accessories-slogan">Reliable equipment for your next mountain adventure.</p>
                    </section>

                    <div className="accessories-buttons">
                        {categories.map((name) => (
                            <button
                                key={name}
                                className={name === category ? "active" : ""}
                                onClick={() => setCategory(name)}
                            >
                                {name}
                            </button>
                        ))}
                    </div>

                    <section className="accessories-grid">
                        {shownProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onView={openDetail}
                                onAddToCart={onAddToCart}
                            />
                        ))}
                    </section>
                </>
            )}
        </main>
    );
}

export default Accessories;
