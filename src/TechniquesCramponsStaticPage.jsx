import React from "react";
import "./other.css";

export const TechniquesCramponsStaticPage = ({ setCurrentPage }) => {
    const navigateTo = (page) => {
        if (setCurrentPage) {
            setCurrentPage(page);
            window.scrollTo(0, 0);
        }
    };

    return (
        <>
            <section className="hero">
                <div className="hero-inner">
                    <div className="eyebrow">Footwork fundamentals</div>
                    <h1>Crampon Mechanics &amp; Glacial Footwork</h1>
                    <p>
                        Crampons provide traction on snow and ice only when they
                        are fitted correctly and used with appropriate footwear
                        and movement technique. Flat-footing spreads points
                        across moderate terrain; front-pointing is used on
                        steeper ice where suitable.
                    </p>
                </div>
            </section>

            <section className="techniques-section">
                <div className="container">
                    <div className="breadcrumb">
                        <button
                            type="button"
                            className="link"
                            onClick={() => navigateTo("techniques")}
                        >
                            Techniques
                        </button>
                        {" / "}Crampon Mechanics &amp; Glacial Footwork
                    </div>

                    <div className="content-grid">
                        <section className="content-card">
                            <span className="tag">Footwork fundamentals</span>
                            <h2>Crampon Mechanics &amp; Glacial Footwork</h2>
                            <p>
                                Crampons provide traction on snow and ice only
                                when they are fitted correctly and used with
                                appropriate footwear and movement technique.
                                Flat-footing spreads points across moderate
                                terrain; front-pointing is used on steeper ice
                                where suitable.
                            </p>

                            <h3>Key considerations</h3>
                            <ul>
                                <li>Check fit and binding security before travel.</li>
                                <li>Place feet deliberately and maintain balance.</li>
                                <li>
                                    Match technique to slope angle and snow or
                                    ice conditions.
                                </li>
                                <li>Inspect points and bindings for damage.</li>
                            </ul>

                            <div className="callout">
                                <strong>Safety note</strong>
                                <p>
                                    Keep points clear of clothing and gaiters,
                                    maintain deliberate foot placement, and
                                    avoid crossing feet. Crampon use should be
                                    practised on safe terrain with a qualified
                                    instructor.
                                </p>
                            </div>
                        </section>

                        <aside>
                            <div className="content-card">
                                <h2>Related techniques</h2>
                                <div className="pills">
                                    <button
                                        type="button"
                                        onClick={() => navigateTo("techniques-styles")}
                                    >
                                        Alpine vs Siege Styles
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => navigateTo("techniques-self-arrest")}
                                    >
                                        Self-Arrest &amp; Axe Drills
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => navigateTo("techniques-crevasse")}
                                    >
                                        Crevasse Rescue Systems
                                    </button>
                                </div>
                                <p>
                                    Preparation, judgment, and supervised
                                    practice matter more than memorizing steps
                                    from a webpage.
                                </p>
                            </div>

                            <img
                                className="techniques-image"
                                src={`${import.meta.env.BASE_URL}src/assets/images/climbing_technique_1790702882353.jpg`}
                                alt="Mountaineering training on snow and ice"
                            />
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TechniquesCramponsStaticPage;