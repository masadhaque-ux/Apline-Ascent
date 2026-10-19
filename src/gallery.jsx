import "./gallery.css";

function GalleryPage() {
    return (
        <main className="gallery-page">
        <section className="gallery-hero">
            <p className="gallery-top-orange">ALPINE ASCENT / GALLERY</p>
            <h1>Mountain Gallery</h1>
            <p className="p2">
                <br />
                Explore the visual world of mountaineering through expedition
                photography, <br />climbing instruction and stories from the world's
                great mountain ranges.
            </p>
        </section>

        <section className="gallery-section">

            <div className="gallery-heading">
                <span>VISUAL ARCHIVE</span>
                <h2>Explore the Collection</h2>
                <p id="p3">
                    Discover mountain landscapes, historic expeditions, climbing
                    techniques, high camps and essential alpine equipment.
                </p>
            </div>

            <div className="gallery-grid">

                <a className="gallery-card" href="src/assets/images/mounteverest3.jpg">
                    <img className="gallery-image"
                        src="src/assets/images/mounteverest3.jpg"
                        alt="Historic mountain expedition" />
                    <div className="gallery-card-content">
                        <span>PHOTO ARCHIVE</span>
                        <h3>Historic Expeditions</h3>
                        <p>
                            Photographs documenting the spirit and history of
                            early mountain expeditions.
                        </p>
                    </div>
                </a>

                <a className="gallery-card" href="src/assets/images/mounteverest1.jpg">
                    <img className="gallery-image"
                        src="src/assets/images/mounteverest1.jpg"
                        alt="Alpine mountain landscape" />
                    <div className="gallery-card-content">
                        <span>PHOTO ARCHIVE</span>
                        <h3>Alpine Landscapes</h3>
                        <p>
                            Dramatic mountain landscapes from the high Alps and
                            remote climbing regions.
                        </p>
                    </div>
                </a>

                <a className="gallery-card" href="src/assets/images/climbing_technique_1790702882353.jpg">
                    <img className="gallery-image"
                        src="src/assets/images/climbing_technique_1790702882353.jpg"
                        alt="Climbing technique" />
                    <div className="gallery-card-content">
                        <span>INSTRUCTION</span>
                        <h3>Climbing Techniques</h3>
                        <p>
                            Explore instructional material covering practical
                            climbing skills and mountain movement.
                        </p>
                    </div>
                </a>

                <a className="gallery-card" href="src/assets/images/alpine_high_camp_1790702869575.jpg">
                    <img className="gallery-image"
                        src="src/assets/images/alpine_high_camp_1790702869575.jpg"
                        alt="Alpine high camp" />
                    <div className="gallery-card-content">
                        <span>PHOTO ARCHIVE</span>
                        <h3>High Camps</h3>
                        <p>
                            A visual look at life, preparation and shelter in
                            high-altitude environments.
                        </p>
                    </div>
                </a>

                <a className="gallery-card" href="src/assets/images/mountain_hazards_1790702893898.jpg">
                    <img className="gallery-image"
                        src="src/assets/images/mountain_hazards_1790702893898.jpg"
                        alt="Mountain hazards" />
                    <div className="gallery-card-content">
                        <span>INSTRUCTION</span>
                        <h3>Mountain Safety</h3>
                        <p>
                            Learn about hazards, preparation and responsible
                            movement in alpine terrain.
                        </p>
                    </div>
                </a>

                <a className="gallery-card" href="src/assets/images/climbing_accessories_gear_1790845482874.jpg">
                    <img className="gallery-image"
                        src="src/assets/images/climbing_accessories_gear_1790845482874.jpg"
                        alt="Climbing accessories and gear" />
                    <div className="gallery-card-content">
                        <span>MULTIMEDIA</span>
                        <h3>Gear & Equipment</h3>
                        <p>
                            Equipment, tools and accessories used by climbers
                            in demanding mountain environments.
                        </p>
                    </div>
                </a>

            </div>
        </section>

        <footer className="gallery-footer">
            <p>Alpine Ascent — Mountain Knowledge & Visual Archive</p>
        </footer>
        </main>
    );
}

export { GalleryPage };
