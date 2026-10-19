import React from "react";
import "./other.css";

export const StoriesMainPage = ({ onNavigate = () => {} }) => {

    return (
        <>
            <section className="hero">
                <div className="hero-inner">
                    <div className="eyebrow">
                        Field Chronicles & Triumphs
                    </div>

                    <h1>Success Stories of Organized Camps</h1>

                    <p>
                        Expedition profiles from famous mountains,
                        focusing on preparation, guide leadership,
                        acclimatization, and decision-making.
                    </p>
                </div>
            </section>

            <main>
                <div className="container">

                    <div className="section-heading">
                        <div className="eyebrow">
                            Field chronicles
                        </div>

                        <h2>Expedition stories and lessons</h2>

                        <p>
                            Explore representative expedition profiles
                            and the decisions that shape mountain journeys.
                            These are educational summaries, not verified
                            first-person testimonials or guarantees of
                            summit success.
                        </p>
                    </div>

                    <div className="cards">

                        <article className="card">
                            <img
                                src={`${import.meta.env.BASE_URL}src/assets/images/alpine_high_camp_1790702869575.jpg`}
                                alt="Mount Rainier"
                            />

                            <div className="card-body">
                                <span className="tag">
                                    North America
                                </span>

                                <h3>Mount Rainier</h3>

                                <p>
                                    Glacier travel and changing weather
                                    make preparation, pacing, and
                                    turnaround decisions central to
                                    a successful climb.
                                </p>

                                <a
                                    className="link"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onNavigate("story-rainier");
                                    }}
                                >
                                    Explore topic →
                                </a>
                            </div>
                        </article>

                        <article className="card">
                            <img
                                src={`${import.meta.env.BASE_URL}src/assets/images/hero_alpine_ascent_1790702854836.jpg`}
                                alt="Denali"
                            />

                            <div className="card-body">
                                <span className="tag">Alaska</span>

                                <h3>Denali</h3>

                                <p>
                                    Cold, altitude, heavy loads, and
                                    long periods of self-sufficiency
                                    shape expeditions on North America's
                                    highest peak.
                                </p>

                                <a
                                    className="link"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onNavigate("story-denali");
                                    }}
                                >
                                    Explore topic →
                                </a>
                            </div>
                        </article>

                        <article className="card">
                            <img
                                src={`${import.meta.env.BASE_URL}src/assets/images/historic_expedition_1790702905379.jpg`}
                                alt="Aconcagua"
                            />

                            <div className="card-body">
                                <span className="tag">
                                    South America
                                </span>

                                <h3>Aconcagua</h3>

                                <p>
                                    High altitude and dry conditions
                                    can challenge climbers even without
                                    highly technical climbing on the
                                    normal route.
                                </p>

                                <a className="link" href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onNavigate("story-aconcagua");
                                    }}
                                >
                                    Explore topic →
                                </a>
                            </div>
                        </article>

                        <article className="card">
                            <img
                                src={`${import.meta.env.BASE_URL}src/assets/images/climbing_technique_1790702882353.jpg`}
                                alt="Mont Blanc"
                            />

                            <div className="card-body">
                                <span className="tag">
                                    European Alps
                                </span>

                                <h3>Mont Blanc</h3>

                                <p>
                                    A classic alpine objective where
                                    route conditions, rockfall, crowding,
                                    and timing influence risk.
                                </p>

                                <a
                                    className="link"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onNavigate("story-montblanc");
                                    }}
                                >
                                    Explore topic →
                                </a>
                            </div>
                        </article>

                        <article className="card">
                            <img
                                src={`${import.meta.env.BASE_URL}src/assets/images/alpine_high_camp_1790702869575.jpg`}
                                alt="Kilimanjaro"
                            />

                            <div className="card-body">
                                <span className="tag">
                                    East Africa
                                </span>

                                <h3>Kilimanjaro</h3>

                                <p>
                                    A high-altitude trekking expedition
                                    where gradual pacing, acclimatization,
                                    and guide-led decisions are important.
                                </p>

                                <a
                                    className="link"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onNavigate("story-kilimanjaro");
                                    }}
                                >
                                    Explore topic →
                                </a>
                            </div>
                        </article>

                    </div>
                </div>
            </main>
        </>
    );
};

export default StoriesMainPage;
