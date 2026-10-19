import React from "react";
import "./other.css";

export const TechniquesStaticPage = ({ setCurrentPage }) => {
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
                    <div className="eyebrow">Alpine Masterclass</div>
                    <h1>Mountaineering Techniques</h1>
                    <p>
                        Movement, climbing strategy, ice-axe skills, and
                        rope-rescue concepts for informed mountain travel.
                    </p>
                </div>
            </section>

            <section className="techniques-section">
                <div className="container">
                    <div className="section-heading">
                        <div className="eyebrow">Field skills</div>
                        <h2>Techniques and Masterclasses</h2>
                        <p>
                            Choose a topic to explore core concepts, practical
                            considerations, and common risks. Technical climbing
                            and rescue skills require in-person instruction and
                            supervised practice.
                        </p>
                    </div>

                    <div className="cards">
                        <article className="card">
                            <img
                                src={`${import.meta.env.BASE_URL}src/assets/images/climbing_technique_1790702882353.jpg`}
                                alt="Alpine climbing techniques"
                            />
                            <div className="card-body">
                                <span className="tag">Strategy</span>
                                <h3>Alpine vs Siege Styles</h3>
                                <p>
                                    Compare fast-and-light alpine climbing with
                                    multi-camp expedition logistics.
                                </p>
                                <button
                                    className="link"
                                    type="button"
                                    onClick={() => navigateTo("techniques-styles")}
                                >
                                    Explore topic →
                                </button>
                            </div>
                        </article>

                        <article className="card">
                            <img
                                src={`${import.meta.env.BASE_URL}src/assets/images/climbing_technique_1790702882353.jpg`}
                                alt="Crampon footwork on snow and ice"
                            />
                            <div className="card-body">
                                <span className="tag">Footwork</span>
                                <h3>Crampon Mechanics</h3>
                                <p>
                                    Understand flat-footing, front-pointing,
                                    balance, and efficient movement on snow and ice.
                                </p>
                                <button
                                    className="link"
                                    type="button"
                                    onClick={() => navigateTo("techniques-crampons")}
                                >
                                    Explore topic →
                                </button>
                            </div>
                        </article>

                        <article className="card">
                            <img
                                src={`${import.meta.env.BASE_URL}src/assets/images/mountain_hazards_1790702893898.jpg`}
                                alt="Ice axe skills and mountain safety"
                            />
                            <div className="card-body">
                                <span className="tag">Safety</span>
                                <h3>Self-Arrest &amp; Axe Drills</h3>
                                <p>
                                    Learn the purpose of ice-axe arrest and why
                                    practice under qualified supervision matters.
                                </p>
                                <button
                                    className="link"
                                    type="button"
                                    onClick={() => navigateTo("techniques-self-arrest")}
                                >
                                    Explore topic →
                                </button>
                            </div>
                        </article>

                        <article className="card">
                            <img
                                src={`${import.meta.env.BASE_URL}src/assets/images/alpine_high_camp_1790702869575.jpg`}
                                alt="High-altitude camp and rope rescue preparation"
                            />
                            <div className="card-body">
                                <span className="tag">Rope &amp; Rescue</span>
                                <h3>Crevasse Rescue Systems</h3>
                                <p>
                                    Explore rope-team principles, anchors, hauling
                                    systems, and rescue planning.
                                </p>
                                <button
                                    className="link"
                                    type="button"
                                    onClick={() => navigateTo("techniques-crevasse")}
                                >
                                    Explore topic →
                                </button>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TechniquesStaticPage;