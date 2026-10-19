import React from "react";
import "./sitemap.css";

function Sitemap({ onNavigate }) {

    const openPage = (e, page) => {
        e.preventDefault();
        onNavigate(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="site-map">
            <div className="site-top">
                <p className="site-small">ALPINE ASCENTS</p>
                <h1>Site Map</h1>
                <p>Find all pages of Alpine Ascents in one place.</p>
            </div>

            <div className="site-list">

                <div className="site-box">
                    <h2>Main Pages</h2>
                    <ul>
                        <li><a href="#home" onClick={(e) => openPage(e, "home")}>Home</a></li>
                        <li><a href="#about" onClick={(e) => openPage(e, "about")}>About Us</a></li>
                        <li><a href="#history" onClick={(e) => openPage(e, "history")}>Mountaineering History</a></li>
                        <li><a href="#gallery" onClick={(e) => openPage(e, "gallery")}>Gallery</a></li>
                        <li><a href="#stories" onClick={(e) => openPage(e, "stories")}>Stories</a></li>
                        <li><a href="#records" onClick={(e) => openPage(e, "climbing-record")}>Records</a></li>
                    </ul>
                </div>

                <div className="site-box">
                    <h2>Knowledge Core</h2>
                    <ul>
                        <li><a href="#essence" onClick={(e) => openPage(e, "about-essence")}>Mountaineering Essence</a></li>
                        <li><a href="#techniques" onClick={(e) => openPage(e, "techniques")}>Climbing Techniques</a></li>
                        <li><a href="#shelter" onClick={(e) => openPage(e, "shelter-page")}>Shelter</a></li>
                        <li><a href="#hazards" onClick={(e) => openPage(e, "hazards-page")}>Mountain Hazards</a></li>
                        <li><a href="#innovation" onClick={(e) => openPage(e, "innovation-page")}>Innovation</a></li>
                        <li><a href="#guidelines" onClick={(e) => openPage(e, "guidelines-page")}>Guidelines</a></li>
                        <li><a href="#philosophy" onClick={(e) => openPage(e, "about-philosophy")}>Philosophy &amp; Creed</a></li>
                        <li><a href="#tiers" onClick={(e) => openPage(e, "about-tiers")}>Hiking vs Alpinism</a></li>
                    </ul>
                </div>

                <div className="site-box">
                    <h2>Field &amp; Community</h2>
                    <ul>
                        <li><a href="#club-maps" onClick={(e) => openPage(e, "clubmap-page")}>Clubs &amp; Maps</a></li>
                        <li><a href="#accessories" onClick={(e) => openPage(e, "accessories")}>Accessories</a></li>
                        <li><a href="#cart" onClick={(e) => openPage(e, "cart")}>Shopping Cart</a></li>
                    </ul>
                </div>

                <div className="site-box">
                    <h2>Expedition Stories</h2>
                    <ul>
                        <li><a href="#aconcagua" onClick={(e) => openPage(e, "story-aconcagua")}>Aconcagua Story</a></li>
                        <li><a href="#denali" onClick={(e) => openPage(e, "story-denali")}>Denali Story</a></li>
                        <li><a href="#kilimanjaro" onClick={(e) => openPage(e, "story-kilimanjaro")}>Kilimanjaro Story</a></li>
                        <li><a href="#mont-blanc" onClick={(e) => openPage(e, "story-montblanc")}>Mont Blanc Story</a></li>
                        <li><a href="#rainier" onClick={(e) => openPage(e, "story-rainier")}>Mount Rainier Story</a></li>
                    </ul>
                </div>

                <div className="site-box">
                    <h2>Records</h2>
                    <ul>
                        <li><a href="#eight-thousanders" onClick={(e) => openPage(e, "eight-record")}>Eight-Thousanders</a></li>
                        <li><a href="#milestones" onClick={(e) => openPage(e, "record-milestone")}>Milestones</a></li>
                        <li><a href="#seven-summits" onClick={(e) => openPage(e, "record-sevensummit")}>Seven Summits</a></li>
                        <li><a href="#speed-records" onClick={(e) => openPage(e, "record-speed")}>Speed Records</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Sitemap;