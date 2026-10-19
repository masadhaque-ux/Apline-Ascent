import React from "react";
import "./other.css";

export const StoryMontBlancPage = ({
    onNavigate = () => {}
}) => {

    return (
        <>
            <section className="hero">
                <div className="hero-inner">
                    <div className="eyebrow">
                        Expedition field notes
                    </div>

                    <h1>Mont Blanc</h1>

                    <p>
                        A classic alpine objective where route conditions,
                        rockfall, crowding, and timing influence risk.
                    </p>
                </div>
            </section>

            <main>
                <div className="container">

                    <div className="breadcrumb">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                onNavigate("stories");
                            }}
                        >
                            Stories
                        </a>
                        {" / "}Mont Blanc
                    </div>

                    <div className="content-grid">

                        <section className="content-card">
                            <span className="tag">
                                European Alps
                            </span>

                            <h2>Mont Blanc: expedition profile</h2>

                            <p>
                                A classic alpine objective where route
                                conditions, rockfall, crowding, and
                                timing influence risk.
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
                                src={`${import.meta.env.BASE_URL}src/assets/images/climbing_technique_1790702882353.jpg`}
                                alt="Mont Blanc mountain landscape"
                            />

                            <div className="content-card">
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
                                            onNavigate("story-denali");
                                        }}
                                    >
                                        Denali
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

export default StoryMontBlancPage;