import "./PhilosophyAndCreed.css";

function PhilosophyAndCreed() {
    return (
        <main className="about-page">

            <section className="page-header">
                <span className="category-badge">ABOUT · ALPINE ETHICS</span>

                <h1>The Philosophy &amp; Unwritten Code</h1>

                <p>
                    The fellowship of the rope, moral imperatives of mutual survival,
                    and ecological stewardship in the fragile glaciated wilderness.
                </p>
            </section>

            <section className="content-area">

                <div className="fellowship-box">
                    <div className="section-label">
                        ♥ &nbsp; FELLOWSHIP OF THE ROPE
                    </div>

                    <h2>The Shared Destiny of the Tied Climber</h2>

                    <p>
                        When two or three climbers tie into opposite ends of an 8.9mm
                        dynamic rope on a glaciated arête, their fates merge into a single
                        entity. If one slips into an abyss, the partner must arrest the
                        fall instantly with body and axe. This absolute, silent mutual
                        trust is the highest moral fellowship in sports.
                    </p>
                </div>

                <h2 className="pillars-title">
                    The 4 Pillars of Alpine Ethics
                </h2>

                <div className="pillar-grid">

                    <article className="pillar-card">
                        <div className="pillar-number">PILLAR 01</div>

                        <h3>Self-Reliance Over Entitlement</h3>

                        <p>
                            Mountaineers enter the range knowing rescue is never guaranteed.
                            Every team member must possess the technical skills, navigational
                            ability, and medical equipment to rescue themselves.
                        </p>
                    </article>

                    <article className="pillar-card">
                        <div className="pillar-number">PILLAR 02</div>

                        <h3>The Summit is Optional; Returning is Mandatory</h3>

                        <p>
                            Ed Viesturs' immortal creed: “Getting to the top is optional.
                            Getting down is mandatory.” Turning around at the predetermined
                            turnaround time, regardless of proximity to the summit, is the
                            hallmark of master alpinism.
                        </p>
                    </article>

                    <article className="pillar-card">
                        <div className="pillar-number">PILLAR 03</div>

                        <h3>Pure Clean Climbing &amp; LNT</h3>

                        <p>
                            Leaving no traces, bolting sparingly, carrying out all human
                            solid waste from glaciated zones, and honoring the spiritual
                            traditions of local indigenous mountain communities.
                        </p>
                    </article>

                    <article className="pillar-card">
                        <div className="pillar-number">PILLAR 04</div>

                        <h3>Humility Before the Heights</h3>

                        <p>
                            Man never truly “conquers” a mountain; mountains merely permit
                            safe passage for a fleeting moment of favorable weather. True
                            alpinists approach peaks with profound humility.
                        </p>
                    </article>

                </div>

                <div className="page-navigation">
                    <a href="#history" className="next-button">
                        Explore Pioneers of 1786 →
                    </a>
                </div>

            </section>
        </main>
    );
}

export { PhilosophyAndCreed };
