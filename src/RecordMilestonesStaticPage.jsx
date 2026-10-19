import React from "react";
import "./other.css";

export const RecordMilestonesPage = ({
    onNavigate = () => {},
}) => {
    const handleNavigate = (event, page) => {
        event.preventDefault();
        onNavigate(page);
    };

    return (
        <>
            <section className="hero">
                <div className="hero-inner">
                    <div className="eyebrow">World Record Archive</div>
                    <h1>Milestone Ascents</h1>
                    <p>
                        Age-related and other milestone ascents highlight
                        individual achievement, but context and verified
                        reporting matter.
                    </p>
                </div>
            </section>

            <main>
                <div className="container">
                    <div className="breadcrumb">
                        <a
                            href="#records"
                            onClick={(event) =>
                                handleNavigate(event, "records")
                            }
                        >
                            Records
                        </a>
                        <span> / Milestone Ascents</span>
                    </div>

                    <div className="content-grid">
                        <section className="content-card">
                            <span className="tag">Human Achievement</span>

                            <h2>Milestone Ascents</h2>
                            <p>
                                Age-related and other milestone ascents
                                highlight individual achievement, but
                                context and verified reporting matter.
                            </p>

                            <h3>How to Evaluate a Record</h3>
                            <ul>
                                <li>
                                    Confirm the exact route, summit, and
                                    definition being used.
                                </li>
                                <li>
                                    Check the date and the original reporting
                                    source.
                                </li>
                                <li>
                                    Distinguish a supported expedition from
                                    an unsupported ascent.
                                </li>
                                <li>
                                    Look for independent verification and
                                    consistent timing rules.
                                </li>
                                <li>
                                    Note whether the record is disputed,
                                    updated, or superseded.
                                </li>
                            </ul>

                            <div className="callout">
                                <img
                                className="record-image"
                                src={`${import.meta.env.BASE_URL}src/assets/images/hcamp3.jpg`}
                                alt="High-altitude alpine camp representing milestone ascents"
                                loading="lazy"
                            />
                            </div>
                        </section>

                        <aside>
                            <img
                                className="record-image"
                                src={`${import.meta.env.BASE_URL}src/assets/images/alpinecamp.jpg`}
                                alt="High-altitude alpine camp representing milestone ascents"
                                loading="lazy"
                            />

                            <div className="content-card">
                                <img
                                className="record-image"
                                src={`${import.meta.env.BASE_URL}src/assets/images/hcamp2.jpg`}
                                alt="High-altitude alpine camp representing milestone ascents"
                                loading="lazy"
                            />
                                {/* <h2>Record Categories</h2>

                                <div className="pills">
                                    <a
                                        href="#record-eight-thousanders"
                                        onClick={(event) =>
                                            handleNavigate(
                                                event,
                                                "record-eight-thousanders"
                                            )
                                        }
                                    >
                                        14 Eight-Thousanders
                                    </a>

                                    <a
                                        href="#record-seven-summits"
                                        onClick={(event) =>
                                            handleNavigate(
                                                event,
                                                "record-seven-summits"
                                            )
                                        }
                                    >
                                        Seven Summits
                                    </a>

                                    <a
                                        href="#record-speed"
                                        onClick={(event) =>
                                            handleNavigate(
                                                event,
                                                "record-speed"
                                            )
                                        }
                                    >
                                        Speed Ascents
                                    </a>

                                    <a
                                        href="#record-winter"
                                        onClick={(event) =>
                                            handleNavigate(
                                                event,
                                                "record-winter"
                                            )
                                        }
                                    >
                                        Winter Feats
                                    </a>
                                </div>

                                <a
                                    className="link"
                                    href="#records"
                                    onClick={(event) =>
                                        handleNavigate(event, "records")
                                    }
                                >
                                    ← All Records
                                </a> */}
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    );
};

export default RecordMilestonesPage;
