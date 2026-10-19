import React from 'react';
import './other.css';

export const RecordSpeedPage = ({ onNavigate = () => {} }) => {
    return (
        <>
            <section className="hero">
                <div className="hero-inner">
                    <div className="orange-top">
                        World record archive
                    </div>

                    <h1>Speed Ascents</h1>

                    <p>
                        Speed records depend on route definition,
                        start and finish points, conditions, and
                        independent verification.
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
                                onNavigate("records");
                            }}
                        >
                            Records
                        </a>
                        {' / Speed Ascents'}
                    </div>

                    <div className="content-grid">
                        <section className="content-card">
                            <span className="tag">
                                Time trials
                            </span>

                            <h2>Speed Ascents</h2>

                            <p>
                                Speed records depend on route definition,
                                start and finish points, conditions, and
                                independent verification.
                            </p>

                            <h3>How to evaluate a record</h3>

                            <ul>
                                <li>
                                    Confirm the exact route, summit,
                                    and definition being used.
                                </li>

                                <li>
                                    Check the date and the original
                                    reporting source.
                                </li>

                                <li>
                                    Distinguish a supported expedition
                                    from an unsupported ascent.
                                </li>

                                <li>
                                    Look for independent verification
                                    and consistent timing rules.
                                </li>

                                <li>
                                    Note whether the record is disputed,
                                    updated, or superseded.
                                </li>
                            </ul>

                            <div className="callout">
                                <img src={`${import.meta.env.BASE_URL}src/assets/images/mountaintop.webp`} alt="" />
                            </div>
                        </section>

                        <aside>
                            <img style={{
                                    height: "300px",
                                    borderRadius: "14px",
                                    border: "1px solid var(--line)"
                                }}
                                src={`${import.meta.env.BASE_URL}src/assets/images/climbing_technique_1790702882353.jpg`}
                                alt="Speed Ascents mountaineering"
                            />

                            <div className="content-card">
                                <img src={`${import.meta.env.BASE_URL}src/assets/images/montblan.jpg`} alt="" />
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    );
};

export default RecordSpeedPage;
