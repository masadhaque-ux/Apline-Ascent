import React from "react";
import "./other.css";

export const StoryDenaliPage = ({
    onNavigate = () => {}
}) => {

    return (
        <>
            <section className="hero">
                <div className="heroInner">
                    <div className="small">
                        Expedition field notes
                    </div>

                    <h1>Denali</h1>

                    <p>
                        Cold, altitude, heavy loads, and long periods
                        of self-sufficiency shape expeditions on
                        North America's highest peak.
                    </p>
                </div>
            </section>

            <main>
                <div className="wrap">

                    <div className="crumb">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                onNavigate("stories");
                            }}
                        >
                            Stories
                        </a>
                        {" / "}Denali
                    </div>

                    <div className="contGrid">

                        <section className="contCard">
                            <span className="tag">Alaska</span>

                            <h2>Denali: expedition profile</h2>

                            <p>
                                Cold, altitude, heavy loads, and long
                                periods of self-sufficiency shape
                                expeditions on North America's highest peak.
                            </p>

                            <h3>
                                What a well-managed expedition plans for
                            </h3>

                            <ul>
                                <li>
                                    Route conditions and current local guidance
                                </li>
                                <li>
                                    Weather forecasts, contingency days,
                                    and a firm turnaround time
                                </li>
                                <li>
                                    Gradual acclimatization and daily
                                    health checks
                                </li>
                                <li>
                                    Clear communication between climbers
                                    and guides
                                </li>
                                <li>
                                    A realistic retreat plan and
                                    emergency communications
                                </li>
                            </ul>

                            <h3>Lessons from the mountain</h3>

                            <p>
                                A summit is optional; a safe return is
                                the objective. Teams should adapt plans
                                to current conditions rather than follow
                                a fixed schedule at any cost.
                            </p>

                            <div className="callout">
                                <strong>Important:</strong>
                                <br />
                                Success rates vary by season, route,
                                operator, and how the rate is calculated.
                                Confirm current details with reputable
                                local operators and official park authorities.
                            </div>
                        </section>

                        <aside>
                            <img
                                style={{
                                    height: "300px",
                                    borderRadius: "14px",
                                    border: "1px solid var(--line)",
                                    maxWidth: "100%",
                                    objectFit: "cover"
                                }}
                                src="src/assets/images/hero_alpine_ascent_1790702854836.jpg"
                                alt="Denali mountain landscape"
                            />

                            <div className="contCard">
                                <h2>More field stories</h2>

                                <div className="pills">
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onNavigate("story-rainier");
                                        }}
                                    >
                                        Mount Rainier
                                    </a>

                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onNavigate("story-aconcagua");
                                        }}
                                    >
                                        Aconcagua
                                    </a>

                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onNavigate("story-mont-blanc");
                                        }}
                                    >
                                        Mont Blanc
                                    </a>

                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onNavigate("story-kilimanjaro");
                                        }}
                                    >
                                        Kilimanjaro
                                    </a>
                                </div>

                                <a
                                    className="link"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onNavigate("stories");
                                    }}
                                >
                                    ← All stories
                                </a>
                            </div>
                        </aside>

                    </div>
                </div>
            </main>
        </>
    );
};

export default StoryDenaliPage;
