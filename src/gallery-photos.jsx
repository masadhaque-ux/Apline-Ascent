import "./gallery.css";

function GalleryPhotosPage() {
    return (
        <main className="gallery-page">
<section className="gallery-hero">
            <p className="gallery-top-orange">ALPINE ASCENT / GALLERY</p>
            <h1>Photo Archive</h1>
            <p className="p2">
                A collection of mountain landscapes, expeditions, high camps and
                climbing moments from the world of alpinism.
            </p>
        </section>

       
        <section className="gallery-section">

            <div className="gallery-heading">
                <span>PHOTOGRAPHY</span>
                <h2>Mountain Photography</h2>
                <p id="p3">
                    Visual records of the mountains, climbers, camps and
                    environments that define alpine exploration.
                </p>
            </div>

            <div className="gallery-grid">

                <article className="gallery-card">
                    <img className="gallery-image"
                        src="src/assets/images/about-mountain.jpg"
                        alt="Historic expedition" />
                    <div className="gallery-card-content">
                        <span>Mountain</span>
                        <h3>Historic Expedition</h3>
                        <p>Scenes inspired by the pioneering era of mountaineering.</p>
                    </div>
                </article>

                <article className="gallery-card">
                    <img className="gallery-image"
                        src="src/assets/images/alpine_high_camp_1790702869575.jpg"
                        alt="Alpine landscape" />
                    <div className="gallery-card-content">
                        <span>LANDSCAPE</span>
                        <h3>Alpine Ascent</h3>
                        <p>High mountain terrain and dramatic alpine horizons.</p>
                    </div>
                </article>

                <article className="gallery-card">
                    <img className="gallery-image"
                        src="src/assets/images/aoaraki 2.jpg"
                        alt="High altitude camp" />
                    <div className="gallery-card-content">
                        <span>EXPEDITION</span>
                        <h3>High Camp</h3>
                        <p>Life and preparation at a remote high-altitude camp.</p>
                    </div>
                </article>

                <article className="gallery-card">
                    <img className="gallery-image"
                        src="src/assets/images/climbing_technique_1790702882353.jpg"
                        alt="Climbing technique" />
                    <div className="gallery-card-content">
                        <span>CLIMBING</span>
                        <h3>Technical Climbing</h3>
                        <p>Movement, balance and technique on steep mountain terrain.</p>
                    </div>
                </article>

                <article className="gallery-card">
                    <img className="gallery-image"
                        src="src/assets/images/mountain_hazards_1790702893898.jpg"
                        alt="Mountain hazards" />
                    <div className="gallery-card-content">
                        <span>SAFETY</span>
                        <h3>Mountain Hazards</h3>
                        <p>Visual references for understanding demanding alpine conditions.</p>
                    </div>
                </article>

                <article className="gallery-card">
                    <img className="gallery-image"
                        src="src/assets/images/climbing_accessories_gear_1790845482874.jpg"
                        alt="Climbing equipment" />
                    <div className="gallery-card-content">
                        <span>EQUIPMENT</span>
                        <h3>Climbing Gear</h3>
                        <p>Essential equipment used for technical mountain travel.</p>
                    </div>
                </article>
                <article className="gallery-card">
                    <img className="gallery-image"
                        src="src/assets/images/denali 1.jpg"
                        alt="Climbing equipment" />
                    <div className="gallery-card-content">
                        <span>EQUIPMENT</span>
                        <h3>Climbing Gear</h3>
                        <p>Essential equipment used for technical mountain travel.</p>
                    </div>
                </article>
                <article className="gallery-card">
                    <img className="gallery-image"
                        src="src/assets/images/denali 2.jpg"
                        alt="Climbing equipment" />
                    <div className="gallery-card-content">
                        <span>EQUIPMENT</span>
                        <h3>Climbing Gear</h3>
                        <p>Essential equipment used for technical mountain travel.</p>
                    </div>
                </article>
                <article className="gallery-card">
                    <img className="gallery-image"
                        src="src/assets/images/denali 3.jpg"
                        alt="Climbing equipment" />
                    <div className="gallery-card-content">
                        <span>EQUIPMENT</span>
                        <h3>Climbing Gear</h3>
                        <p>Essential equipment used for technical mountain travel.</p>
                    </div>
                </article>
                <article className="gallery-card">
                    <img className="gallery-image"
                        src="src/assets/images/himalyanmountainpeak.jpg"
                        alt="Climbing equipment" />
                    <div className="gallery-card-content">
                        <span>EQUIPMENT</span>
                        <h3>Climbing Gear</h3>
                        <p>Essential equipment used for technical mountain travel.</p>
                    </div>
                </article>
                <article className="gallery-card">
                    <img className="gallery-image"
                        src="src/assets/images/k2 1.jpg"
                        alt="Climbing equipment" />
                    <div className="gallery-card-content">
                        <span>EQUIPMENT</span>
                        <h3>Climbing Gear</h3>
                        <p>Essential equipment used for technical mountain travel.</p>
                    </div>
                </article>
                <article className="gallery-card">
                    <img className="gallery-image"
                        src="src/assets/images/K2 2.jpg"
                        alt="Climbing equipment" />
                    <div className="gallery-card-content">
                        <span>EQUIPMENT</span>
                        <h3>Climbing Gear</h3>
                        <p>Essential equipment used for technical mountain travel.</p>
                    </div>
                </article>

            </div>
        </section>

        <footer className="gallery-footer">
            <p>Alpine Ascent — Photo Archive</p>
        </footer>
        </main>
    );
}

export { GalleryPhotosPage };
