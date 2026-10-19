
import "./other.css";

export function IndexStaticPage({ onNavigate }) {

    return (
        <>
            <section className="hero">
                <div className="heroInner">
                    <div className="small">
                        Alpine Ascent Knowledge Base
                    </div>

                    <h1>The Summit Awaits</h1>

                    <p>
                        Mountaineering techniques, expedition stories,
                        and world-record categories in a responsive
                        static website.
                    </p>
                </div>
            </section>

            <div className="wrap">

                <div className="secHead">
                    <div className="small">
                        Explore Alpine Ascent
                    </div>

                    <h2>Choose a section</h2>

                    <p>
                        Explore Techniques, Stories, and Records.
                    </p>
                </div>

                <div className="cards">

                    <article className="card">
                        <img
                            src="/assets/images/climbing_technique_1790702882353.jpg"
                            alt="Mountaineering Techniques"
                        />

                        <div className="cardBody">
                            <span className="tag">Skills</span>

                            <h3>Techniques</h3>

                            <p>
                                Climbing styles, crampon mechanics,
                                self-arrest, and crevasse rescue.
                            </p>

                            <a
                                className="link"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onNavigate("techniques");
                                }}
                            >
                                Explore topic →
                            </a>
                        </div>
                    </article>

                    <article className="card">
                        <img
                            src="/assets/images/alpine_high_camp_1790702869575.jpg"
                            alt="Mountaineering Expedition"
                        />

                        <div className="cardBody">
                            <span className="tag">Field notes</span>

                            <h3>Stories</h3>

                            <p>
                                Expedition stories from Rainier,
                                Denali, Aconcagua, Mont Blanc,
                                and Kilimanjaro.
                            </p>

                            <a
                                className="link"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onNavigate("stories");
                                }}
                            >
                                Explore topic →
                            </a>
                        </div>
                    </article>

                    <article className="card">
                        <img
                            src="/assets/images/historic_expedition_1790702905379.jpg"
                            alt="Historic Mountaineering Expedition"
                        />

                        <div className="cardBody">
                            <span className="tag">Achievements</span>

                            <h3>Records</h3>

                            <p>
                                Explore the Seven Summits, speed
                                ascents, winter achievements,
                                and mountaineering milestones.
                            </p>

                            <a
                                className="link"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onNavigate("records");
                                }}
                            >
                                Explore topic →
                            </a>
                        </div>
                    </article>

                </div>
            </div>
        </>
    );
}

export default IndexStaticPage;

