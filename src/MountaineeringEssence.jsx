import "./MountaineeringEssence.css";

function MountaineeringEssence() {
    return (
        <main className="aboutPage">

            <section className="pageHead">
                <span className="catBadge">ABOUT · ESSENCE &amp; HAZARDS</span>

                <h1>Mountaineering Essence &amp; Spirit</h1>

                <p>
                    The true definition, historical philosophy, psychological allure,
                    and life-threatening perils of scaling glaciated alpine peaks for
                    the untrained.
                </p>
            </section>

            <section className="contArea">

                <div className="contBox">
                    <div className="secLabel">
                        ▲ &nbsp; DEFINITION OF ALPINISM
                    </div>

                    <h2>What Sets Mountaineering Apart from Earthly Travel</h2>

                    <p>
                        Mountaineering—also known as alpinism—is the sport and lifestyle
                        of ascending high mountains, often over snow, ice, and glaciated
                        rock ridges, under intense exposure to the elements. Unlike
                        ordinary hiking or trekking on well-trodden paths, true
                        mountaineering requires technical rope management, crampon
                        footcraft, crevasse navigation, acclimatization strategy, and
                        psychological composure in the death zone.
                    </p>

                    <div className="coreMotive">
                        <strong>The Core Motive:</strong>{" "}
                        Climbing for the pure joy and test of the ascent. It is an
                        internal journey where summiting represents personal self-mastery
                        and profound communion with the untamed high alpine realm.
                    </div>
                </div>

                <div className="warningBox">
                    <div className="secLabel warningLabel">
                        ⚠ &nbsp; CRITICAL WARNING
                    </div>

                    <h2>Severe Hazards for the Untrained Climber</h2>

                    <p className="introText">
                        In high-altitude mountaineering, nature is indifferent.
                        Venturing onto glaciated slopes or into altitude without proper
                        training frequently proves fatal.
                    </p>

                    <div className="hazardGrid">

                        <article className="hazardCard">
                            <div className="hazardIcon">♥</div>

                            <h3>Acute Mountain Sickness &amp; Hypoxia</h3>

                            <p>
                                Ascending too rapidly without acclimatization induces AMS,
                                which rapidly spirals into High Altitude Pulmonary Edema
                                (HAPE) or Cerebral Edema (HACE), drowning the lungs or
                                brain within hours.
                            </p>
                        </article>

                        <article className="hazardCard">
                            <div className="hazardIcon">⚠</div>

                            <h3>Hidden Crevasses &amp; Snow Bridges</h3>

                            <p>
                                Glaciers conceal bottomless abysses beneath delicate
                                wind-blown snow bridges. An unroped climber collapsing
                                through a bridge plunges hundreds of feet into freezing
                                ice darkness.
                            </p>
                        </article>

                        <article className="hazardCard">
                            <div className="hazardIcon">✓</div>

                            <h3>Objective Avalanche &amp; Serac Collapse</h3>

                            <p>
                                Overhanging ice towers (seracs) and wind slabs release
                                without warning. Reading snowpack stability and terrain
                                exposure is non-negotiable for alpine survival.
                            </p>
                        </article>

                    </div>
                </div>

                <div className="pageNav">
                    <a href="#about-tiers" className="nextBtn">
                        Next: Explore Hiking vs Alpinism Tiers →
                    </a>
                </div>

            </section>
        </main>
    );
}

export { MountaineeringEssence };
