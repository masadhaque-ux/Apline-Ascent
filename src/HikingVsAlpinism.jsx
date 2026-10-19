import "./HikingVsAlpinism.css";

function HikingVsAlpinism() {
    return (
        <main className="about-page">

            <section className="page-header">
                <span className="category-badge">
                    ABOUT · DISCIPLINE COMPARISONS
                </span>

                <h1>Hiking vs Alpinism: Discipline Tiers</h1>

                <p>
                    A detailed comparative breakdown across terrain difficulty,
                    gear requirements, altitude hypoxia, and physical conditioning.
                </p>
            </section>

            <section className="content-area">

                <div className="intro-box">
                    <h2>The Three Tiers of High Alpine Progression</h2>

                    <p>
                        Understanding the sharp physiological and technical distinction
                        between walking, ascending glaciated mountains, and elite
                        fast-and-light alpinism.
                    </p>
                </div>

                <div className="tier-grid">

                    <article className="tier-card">
                        <div className="tier-top">
                            <span>Tier 01</span>
                            <strong>LOW</strong>
                        </div>

                        <h2>Hiking &amp; Trekking</h2>

                        <div className="terrain">
                            Terrain: <b>Marked Trails &amp; Mountain Paths</b>
                        </div>

                        <p>
                            Walking and trekking on established routes with limited
                            technical exposure. The primary challenges are distance,
                            elevation gain, weather and endurance.
                        </p>

                        <div className="equipment">
                            <h3>Key Equipment Required:</h3>
                            <span>✓ Hiking Boots</span>
                            <span>✓ Backpack</span>
                            <span>✓ Navigation</span>
                            <span>✓ Water System</span>
                        </div>

                        <div className="standard">
                            Certified Standard <span>✓</span>
                        </div>
                    </article>

                    <article className="tier-card">
                        <div className="tier-top">
                            <span>Tier 02</span>
                            <strong>HIGH</strong>
                        </div>

                        <h2>Alpine Mountaineering</h2>

                        <div className="terrain">
                            Terrain: <b>Snow, Ice &amp; Glaciated Rock</b>
                        </div>

                        <p>
                            Technical mountain travel requiring rope systems, crampons,
                            ice axes, route finding and altitude acclimatization.
                        </p>

                        <div className="equipment">
                            <h3>Key Equipment Required:</h3>
                            <span>✓ Crampons</span>
                            <span>✓ Ice Axe</span>
                            <span>✓ Rope</span>
                            <span>✓ Harness</span>
                            <span>✓ Helmet</span>
                        </div>

                        <div className="standard">
                            Certified Standard <span>✓</span>
                        </div>
                    </article>

                    <article className="tier-card">
                        <div className="tier-top">
                            <span>Tier 03</span>
                            <strong>EXTREME</strong>
                        </div>

                        <h2>Fast-and-Light Alpinism</h2>

                        <div className="terrain">
                            Terrain: <b>Technical High-Altitude Faces</b>
                        </div>

                        <p>
                            Elite climbing where speed, efficiency, route knowledge and
                            advanced technical ability are combined to reduce exposure time.
                        </p>

                        <div className="equipment">
                            <h3>Key Equipment Required:</h3>
                            <span>✓ Technical Crampons</span>
                            <span>✓ Ice Tools</span>
                            <span>✓ Lightweight Rope</span>
                            <span>✓ Protection</span>
                            <span>✓ Avalanche Gear</span>
                        </div>

                        <div className="standard">
                            Certified Standard <span>✓</span>
                        </div>
                    </article>

                </div>

                <div className="page-navigation">
                    <a href="#about-philosophy" className="next-button">
                        Next: Read The Mountaineer's Philosophy →
                    </a>
                </div>

            </section>
        </main>
    );
}

export { HikingVsAlpinism };
