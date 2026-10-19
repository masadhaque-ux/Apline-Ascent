import "./gallery.css";

function GalleryAllPage() {
    return (
        <main className="gallery-page">
<section className="gallery-hero">
            <p className="gallery-top-orange">ALPINE ASCENT / GALLERY</p>
            <h1>All Multimedia</h1>
            <p className="p2">
                Bring together photography, instructional material and mountain
                stories in one complete multimedia collection.
            </p>
        </section>

      
        <section className="gallery-section">

            <div className="gallery-heading">
                <span>COMPLETE COLLECTION</span>
                <h2>Photos & Videos</h2>
                <p id="p3">
                    A combined view of the Alpine Ascent visual archive,
                    including photographs and instructional topics.
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
                <article className="video-card">
        <div className="video-preview">
            <video controls autoplay muted width="400">
                <source src="src/assets/videos/matterhorndrone.mp4" type="video/mp4" />
                Your browser does not support video.
            </video>
        </div>

        <div className="video-card-content">
            <span>TECHNIQUE</span>
            <h3>Basic Alpine Movement</h3>
            <p>
                Introduction to efficient movement on steep alpine terrain.
            </p>

            <a
                href="/videos/alpine-movement.mp4"
                target="_blank"
                rel="noopener noreferrer"
            >
                Open Video
            </a>
        </div>
    </article>


    <article className="video-card">
        <div className="video-preview">
             <video controls autoplay muted width="400">
                <source src="src/assets/videos/fuji.mp4" type="video/mp4" />
                Your browser does not support video.
            </video>
        </div>

        <div className="video-card-content">
            <span>ICE & SNOW</span>
            <h3>Crampon Footwork</h3>
            <p>
                Basic front-pointing and footwork concepts for icy terrain.
            </p>

            <a
                href="/videos/crampon-footwork.mp4"
                target="_blank"
                rel="noopener noreferrer"
            >
                Open Video
            </a>
        </div>
    </article>


    <article className="video-card">
        <div className="video-preview">
             <video controls autoplay muted width="400">
                <source src="src/assets/videos/himalayaas.mp4" type="video/mp4" />
                Your browser does not support video.
            </video>
        </div>

        <div className="video-card-content">
            <span>SAFETY</span>
            <h3>Self-Arrest Fundamentals</h3>
            <p>
                Introduction to the principles of stopping a slide on snow.
            </p>

            <a
                href="/videos/self-arrest.mp4"
                target="_blank"
                rel="noopener noreferrer"
            >
                Open Video
            </a>
        </div>
    </article>


    <article className="video-card">
        <div className="video-preview">
             <video controls autoplay muted width="400">
                <source src="src/assets/videos/k2.mp4" type="video/mp4" />
                Your browser does not support video.
            </video>
        </div>

        <div className="video-card-content">
            <span>GLACIER</span>
            <h3>Crevasse Rescue</h3>
            <p>
                An overview of rope systems and rescue preparation on glaciers.
            </p>

            <a
                href="/videos/crevasse-rescue.mp4"
                target="_blank"
                rel="noopener noreferrer"
            >
                Open Video
            </a>
        </div>
    </article>


    <article className="video-card">
        <div className="video-preview">
            <video controls autoplay muted width="400">
                <source src="src/assets/videos/nangaparbat.mp4" type="video/mp4" />
                Your browser does not support video.
            </video>
        </div>

        <div className="video-card-content">
            <span>EXPEDITION</span>
            <h3>High Camp Preparation</h3>
            <p>
                Preparing equipment, shelter and supplies before a
                high-altitude push.
            </p>

            <a
                href="/videos/high-camp.mp4"
                target="_blank"
                rel="noopener noreferrer"
            >
                Open Video
            </a>
        </div>
    </article>


    <article className="video-card">
        <div className="video-preview">
             <video controls autoplay muted width="400">
                <source src="src/assets/videos/Project _ MONT BLANC _ Cinematic Short Film - Sony A7CII.mp4" type="video/mp4" />
                Your browser does not support video.
            </video>
        </div>

        <div className="video-card-content">
            <span>SAFETY</span>
            <h3>Mountain Hazard Awareness</h3>
            <p>
                Recognizing common hazards and planning for changing
                mountain conditions.
            </p>

            <a
                href="/videos/mountain-hazards.mp4"
                target="_blank"
                rel="noopener noreferrer"
            >
                Open Video
            </a>
        </div>
    </article>


            </div>
        </section>

        <footer className="gallery-footer">
            <p>Alpine Ascent — Complete Multimedia Archive</p>
        </footer>
        </main>
    );
}

export { GalleryAllPage };
