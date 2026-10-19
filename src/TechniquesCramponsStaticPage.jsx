import React from "react";
import "./other.css";

export const TechniquesCramponsStaticPage = ({ setCurrentPage }) => {
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
                    <div className="small">Footwork fundamentals</div>
                    <h1>Crampon Mechanics &amp; Glacial Footwork</h1>
                    <p>
                        Crampons provide traction on snow and ice only when they
                        are fitted correctly and used with appropriate footwear
                        and movement technique. Flat-footing spreads points
                        across moderate terrain; front-pointing is used on
                        steeper ice where suitable.
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
                        {" / "}Crampon Mechanics &amp; Glacial Footwork
                    </div>

                    <div className="contGrid">
                        <section className="contCard">
                            <span className="tag">Footwork fundamentals</span>
                            <h2>Crampon Mechanics &amp; Glacial Footwork</h2>
                            <p>
                                Crampons provide traction on snow and ice only
                                when they are fitted correctly and used with
                                appropriate footwear and movement technique.
                                Flat-footing spreads points across moderate
                                terrain; front-pointing is used on steeper ice
                                where suitable.
                            </p>

                            <h3>Key considerations</h3>
                            <ul>
                                <li>Check fit and binding security before travel.</li>
                                <li>Place feet deliberately and maintain balance.</li>
                                <li>
                                    Match technique to slope angle and snow or
                                    ice conditions.
                                </li>
                                <li>Inspect points and bindings for damage.</li>
                            </ul>

                            <div className="callout">
                                <strong>Safety note</strong>
                                <p>
                                    Keep points clear of clothing and gaiters,
                                    maintain deliberate foot placement, and
                                    avoid crossing feet. Crampon use should be
                                    practised on safe terrain with a qualified
                                    instructor.
                                </p>
                            </div>
                        </section>

                        <aside>
                            <div className="contCard">
                                <h2>Related techniques</h2>
                                <div className="pills">
                                   
                                </div>
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

export default TechniquesCramponsStaticPage;