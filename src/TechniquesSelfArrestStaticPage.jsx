import React from "react";
import "./other.css";

export const TechniquesSelfArrestStaticPage = ({ setCurrentPage }) => {
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
                    <div className="eyebrow">
                        Safety &amp; essential skills
                    </div>
                    <h1>Ice Axe Self-Arrest &amp; Slide Arrest Drills</h1>
                    <p>
                        An ice axe can support balance and may help arrest a
                        slip on suitable snow, but self-arrest is not
                        guaranteed. Speed, terrain, snow hardness, body
                        position, and obstacles can make a slide impossible
                        to stop.
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
                        {" / "}Ice Axe Self-Arrest &amp; Slide Arrest Drills
                    </div>

                    <div className="content-grid">
                        <section className="content-card">
                            <span className="tag">
                                Safety &amp; essential skills
                            </span>

                            <h2>Ice Axe Self-Arrest &amp; Slide Arrest Drills</h2>

                            <p>
                                An ice axe can support balance and may help
                                arrest a slip on suitable snow, but self-arrest
                                is not guaranteed. Speed, terrain, snow
                                hardness, body position, and obstacles can make
                                a slide impossible to stop.
                            </p>

                            <h3>Key considerations</h3>

                            <ul>
                                <li>Learn axe positions and safe handling.</li>
                                <li>
                                    Practise on a gentle, obstacle-free slope
                                    with supervision.
                                </li>
                                <li>
                                    Keep crampon points from catching during a
                                    slide.
                                </li>
                                <li>
                                    Know when terrain makes a fall unsurvivable.
                                </li>
                            </ul>

                            <div className="callout">
                                <strong>Safety note</strong>
                                <p>
                                    Practise only with a trained instructor on
                                    a controlled slope. Prevention, correct axe
                                    carry, route choice, and appropriate
                                    protection are more reliable than relying
                                    on arrest after a fall.
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
                                            navigateTo("techniques-styles")
                                        }
                                    >
                                        Alpine vs Siege Styles
                                    </button>

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

export default TechniquesSelfArrestStaticPage;