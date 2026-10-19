import React from "react";
import "./other.css";

export const TechniquesCrevasseStaticPage = ({ setCurrentPage }) => {
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
                    <div className="eyebrow">Rope teams &amp; rescue</div>
                    <h1>Crevasse Rescue &amp; Hauling Systems</h1>
                    <p>
                        Crevasse rescue depends on team preparation, a secure
                        system, sound anchors, rope management, and clear
                        communication. A 3:1 hauling system can provide
                        mechanical advantage, but friction and anchor quality
                        affect real performance.
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
                        {" / "}Crevasse Rescue &amp; Hauling Systems
                    </div>

                    <div className="content-grid">
                        <section className="content-card">
                            <span className="tag">Rope teams &amp; rescue</span>
                            <h2>Crevasse Rescue &amp; Hauling Systems</h2>
                            <p>
                                Crevasse rescue depends on team preparation, a
                                secure system, sound anchors, rope management,
                                and clear communication. A 3:1 hauling system
                                can provide mechanical advantage, but friction
                                and anchor quality affect real performance.
                            </p>

                            <h3>Key considerations</h3>
                            <ul>
                                <li>
                                    Secure the scene and communicate with the
                                    fallen climber.
                                </li>
                                <li>
                                    Build and assess an appropriate anchor
                                    system.
                                </li>
                                <li>
                                    Use progress capture and friction
                                    management.
                                </li>
                                <li>
                                    Protect the rope at the crevasse lip and
                                    reassess continuously.
                                </li>
                            </ul>

                            <div className="callout">
                                <strong>Safety note</strong>
                                <p>
                                    This overview is not a substitute for rescue
                                    training. Teams should practise rope-team
                                    travel, load transfers, anchors, and hauling
                                    with qualified instructors before glacier
                                    travel.
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
                                        onClick={() => navigateTo("techniques-crampons")}
                                    >
                                        Crampon Mechanics
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => navigateTo("techniques-self-arrest")}
                                    >
                                        Self-Arrest &amp; Axe Drills
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

export default TechniquesCrevasseStaticPage;