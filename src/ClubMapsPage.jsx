import React from "react";
import "./club-maps.css";

export function ClubMapsPage({ onNavigate = () => {} }) {
    return (
        <>
    <main>
        <section className="pageHero2">
            <div className="heroCont">
                <p className="orgTop">MORE / COMMUNITY &amp; NAVIGATION</p>
                <h1>Club <span>&amp; Maps</span></h1>
                <p className="heroCopy">Build skills with experienced people and plan routes with reliable mapping tools before leaving the trailhead.</p>
            </div>
            <div className="heroStamp"><span>ALPINE</span><strong>ASCENT</strong><small>FIELD GUIDE</small></div>
        </section>

        <section className="sec">
            <div className="secHead">
                <p className="orgTop">CLIMBING COMMUNITY</p>
                <h2>Learn as a team.</h2>
                <p>Established clubs can help climbers develop skills, find mentors, and learn responsible mountain practices. Check each organization's current programs and membership details.</p>
            </div>
            <div className="infoGrid1">
                
                <article className="infoCard">
                    <span className="tag">01 / PAKISTAN</span>
                    <h3>Alpine Club of Pakistan</h3>
                    <p>Pakistan's national mountaineering organization. Explore its official site for current training, activities, and expedition information.</p>
                    <div className="cardLinks">
                        <a className="textLink" href="https://alpineclubpakistan.org/" target="_blank" rel="noopener noreferrer">Official Website ↗</a>
                        <a className="textLink" href="https://www.google.com/maps/search/?api=1&query=Alpine+Club+of+Pakistan+Islamabad" target="_blank" rel="noopener noreferrer">View Map ↗</a>
                    </div>
                </article>
                <article className="infoCard">
                    <span className="tag">02 / UNITED KINGDOM</span>
                    <h3>The Alpine Club</h3>
                    <p>A historic mountaineering club with a focus on climbing, exploration, mountain knowledge, and community.</p>
                    <div className="cardLinks">
                        <a className="textLink" href="https://www.alpineclub.org/" target="_blank" rel="noopener noreferrer">Official Website ↗</a>
                        <a className="textLink" href="https://www.google.com/maps/search/?api=1&query=The+Alpine+Club+London" target="_blank" rel="noopener noreferrer">View Map ↗</a>
                    </div>
                </article>
                <article className="infoCard">
                    <span className="tag">03 / UNITED STATES</span>
                    <h3>American Alpine Club</h3>
                    <p>A climbing organization supporting climbers with educational resources, community programs, and mountain knowledge.</p>
                    <div className="cardLinks">
                        <a className="textLink" href="https://americanalpineclub.org/" target="_blank" rel="noopener noreferrer">Official Website ↗</a>
                        <a className="textLink" href="https://www.google.com/maps/search/?api=1&query=American+Alpine+Club" target="_blank" rel="noopener noreferrer">View Map ↗</a>
                    </div>
                </article>
                <article className="infoCard">
                    <span className="tag">04 / HIMALAYAS</span>
                    <h3>The Himalayan Club</h3>
                    <p>Promotes Himalayan exploration, mountain knowledge, publications, and mountaineering culture.</p>
                    <div className="cardLinks">
                        <a className="textLink" href="https://www.himalayanclub.org/" target="_blank" rel="noopener noreferrer">Official Website ↗</a>
                        <a className="textLink" href="https://www.google.com/maps/search/?api=1&query=The+Himalayan+Club+Mumbai" target="_blank" rel="noopener noreferrer">View Map ↗</a>
                    </div>
                </article>
            </div>
        </section>

        
        <section className="sec">
            <div className="secHead">
                <p className="orgTop">FAMOUS MOUNTAINS</p>
                <h2>Explore legendary peaks.</h2>
                <p>Discover famous mountains across the Karakoram, Himalayas, Alps, and other major mountain regions.</p>
            </div>
            <div className="infoGrid mntGrid">
                <article className="infoCard mntCard">
                    <span className="tag">MOUNTAIN DESTINATION</span>
                    <h3>K2</h3>
                    <p className="locationText">Karakoram, Pakistan–China border</p>
                    <p className="mntHeight">8,611 m</p>
                    <a className="textLink" href="https://www.google.com/maps/search/?api=1&query=K2+Mountain" target="_blank" rel="noopener noreferrer">Explore on Google Maps ↗</a>
                </article>
                <article className="infoCard mntCard">
                    <span className="tag">MOUNTAIN DESTINATION</span>
                    <h3>Mount Everest</h3>
                    <p className="locationText">Himalayas, Nepal–China border</p>
                    <p className="mntHeight">8,848.86 m</p>
                    <a className="textLink" href="https://www.google.com/maps/search/?api=1&query=Mount+Everest" target="_blank" rel="noopener noreferrer">Explore on Google Maps ↗</a>
                </article>
                <article className="infoCard mntCard">
                    <span className="tag">MOUNTAIN DESTINATION</span>
                    <h3>Nanga Parbat</h3>
                    <p className="locationText">Gilgit-Baltistan, Pakistan</p>
                    <p className="mntHeight">8,126 m</p>
                    <a className="textLink" href="https://www.google.com/maps/search/?api=1&query=Nanga+Parbat+Pakistan" target="_blank" rel="noopener noreferrer">Explore on Google Maps ↗</a>
                </article>
                <article className="infoCard mntCard">
                    <span className="tag">MOUNTAIN DESTINATION</span>
                    <h3>Mont Blanc</h3>
                    <p className="locationText">French–Italian Alps</p>
                    <p className="mntHeight">About 4,806 m</p>
                    <a className="textLink" href="https://www.google.com/maps/search/?api=1&query=Mont+Blanc" target="_blank" rel="noopener noreferrer">Explore on Google Maps ↗</a>
                </article>
                <article className="infoCard mntCard">
                    <span className="tag">MOUNTAIN DESTINATION</span>
                    <h3>Denali</h3>
                    <p className="locationText">Alaska, United States</p>
                    <p className="mntHeight">6,190 m</p>
                    <a className="textLink" href="https://www.google.com/maps/search/?api=1&query=Denali+Alaska" target="_blank" rel="noopener noreferrer">Explore on Google Maps ↗</a>
                </article>
                <article className="infoCard mntCard">
                    <span className="tag">MOUNTAIN DESTINATION</span>
                    <h3>Kilimanjaro</h3>
                    <p className="locationText">Tanzania, Africa</p>
                    <p className="mntHeight">5,895 m</p>
                    <a className="textLink" href="https://www.google.com/maps/search/?api=1&query=Mount+Kilimanjaro" target="_blank" rel="noopener noreferrer">Explore on Google Maps ↗</a>
                </article></div>
        </section>
        <section className="sec">
            <div className="secHead">
                <p className="orgTop">INTERACTIVE MAP</p>
                <h2>Explore the mountain world.</h2>
                <p>Explore the K2 region on the map, or use the mountain links above to open other destinations.</p>
            </div>
            <div className="mapPanel">
                <iframe title="Map of K2 and surrounding region" src="https://maps.google.com/maps?q=K2%20Mountain&t=&z=4&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>

        <section className="splitSec">
            <div className="splitCopy">
                <p className="orgTop">FIELD NOTES</p>
                <h2>Carry more than a screen.</h2>
                <p>Digital maps are useful, but batteries, cold, damage, and poor signal can limit devices. Carry an appropriate paper map and compass, and practise using them.</p>
            </div>
            <div className="checkPanel">
                <h3>Route planning checklist</h3>
                <ul><li>Confirm the correct map and map scale.</li>
                    <li>Identify landmarks, junctions, and escape routes.</li>
                    <li>Check elevation gain, distance, and terrain.</li>
                    <li>Download offline maps and carry spare power.</li>
                    <li>Leave your itinerary with a trusted contact.</li></ul>
            </div>
        </section>

        </main>
        </>
    );
}

export default ClubMapsPage;
