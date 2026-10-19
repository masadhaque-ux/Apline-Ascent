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
                <div className="heroInner">
                    <div className="small">Strategy &amp; planning</div>
                    <h1>Alpine Style vs Expedition Siege Style</h1>
                    <p>
                        Alpine style prioritizes a small team, limited
                        equipment, and a continuous push. Siege-style
                        expeditions establish camps, fixed ropes, and supply
                        caches to support repeated carries and acclimatization.
                    </p>
                </div>
            </section>

            <section className="techSec">
                <div className="wrap">
                    <div className="crumb">
                        <button
                            type="button"
                            className="link"
                            onClick={() => navigateTo("techniques")}
                        >
                            Techniques
                        </button>
                        {" / "}Alpine Style vs Expedition Siege Style
                    </div>

                    <div className="contGrid">
                        <section className="contCard">
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
                            <div className="contCard">
                                <h2>Related techniques</h2>

                               

                                <p>
                                    Preparation, judgment, and supervised
                                    practice matter more than memorizing steps
                                    from a webpage.
                                </p>
                            </div>

                            <img
                                className="techImg"
                                src="src/assets/images/climbing_technique_1790702882353.jpg"
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