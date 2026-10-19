import "./gallery.css";

function GalleryVideosPage() {
    return (
        <main className="gallery-page">
<section className="gallery-hero">
            <p className="gallery-top-orange">ALPINE ASCENT / GALLERY</p>
            <h1>Instructional Videos</h1>
            <p className="p2">
                Explore visual learning topics covering climbing movement,
                mountain safety, equipment and expedition preparation.
            </p>
        </section>

       
        <section className="gallery-section">

            <div className="gallery-heading">
                <span>VIDEO LIBRARY</span>
                <h2>Technical Climbing Videos</h2>
                <p id="p3">
                    These cards provide a simple visual structure for your
                    instructional video collection. Video files can be linked
                    later without changing the page design.
                </p>
            </div>

           
<div className="gallery-grid">

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
            <p>Alpine Ascent — Instructional Video Library</p>
        </footer>
        </main>
    );
}

export { GalleryVideosPage };
