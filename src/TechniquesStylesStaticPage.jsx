import React from "react";
import "./other.css";

export const TechniquesStylesStaticPage = ({ setCurrentPage }) => {
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
                    <div className="eyebrow">Strategy &amp; planning</div>
                    <h1>Alpine Style vs Expedition Siege Style</h1>
                    <p>
                        Alpine style prioritizes a small team, limited
                        equipment, and a continuous push. Siege-style
                        expeditions establish camps, fixed ropes, and supply
                        caches to support repeated carries and acclimatization.
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
                        {" / "}Alpine Style vs Expedition Siege Style
                    </div>

                    <div className="content-grid">
                        <section className="content-card">
                            <span className="tag">
                                Strategy &amp; planning
                            </span>

                            <h2>Alpine Style vs Expedition Siege Style</h2>

                            <p>
                                Alpine style prioritizes a small team, limited
                                equipment, and a continuous push. Siege-style
                                expeditions establish camps, fixed ropes, and
                                supply caches to support repeated carries and
                                acclimatization.
                            </p>

                            <h3>Key considerations</h3>

                            <ul>
                                <li>Team size and experience.</li>
                                <li>Weather window and objective hazards.</li>
                                <li>Acclimatization and retreat options.</li>
                                <li>Impact on the mountain and other teams.</li>
                            </ul>

                            <div className="callout">
                                <strong>Safety note</strong>
                                <p>
                                    A lighter approach can reduce time spent on
                                    a route but leaves less margin for bad
                                    weather or setbacks. A larger expedition
                                    adds logistical support but requires more
                                    time, equipment, and coordination.
                                </p>
                            </div>
                        </section>

                        <aside>
                            <div className="content-card">
                                <h2>Related techniques</h2>

                                <div className="pills">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            navigateTo("techniques-crampons")
                                        }
                                    >
                                        Crampon Mechanics
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            navigateTo("techniques-self-arrest")
                                        }
                                    >
                                        Self-Arrest &amp; Axe Drills
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            navigateTo("techniques-crevasse")
                                        }
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

export default TechniquesStylesStaticPage;