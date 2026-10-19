import React from "react";
import "./innovation.css";

export function InnovationPage({ onNavigate = () => {} }) {
    return (
        <>
    <main>
        <section className="pageHero4">
            <div className="heroCont">
                <p className="small">MORE / GEAR &amp; TECHNOLOGY</p>
                <h1>Mountain <span>Innovation</span></h1>
                <p className="heroCopy">Explore how equipment, navigation technology, weather information, and communication tools can support responsible mountain travel.</p>
            </div>
            <div className="heroStamp"><span>ALPINE</span><strong>ASCENT</strong><small>FIELD GUIDE</small></div>
        </section>

        <section className="sec">
            <div className="secHead">
                <p className="small">TOOLS &amp; TECHNOLOGY</p>
                <h2>Use innovation with good judgment.</h2>
                <p>Technology can improve preparation and communication, but it does not replace training, sound decisions, or the ability to navigate without a signal.</p>
            </div>
            <div className="infoGrid">
                
                <article className="infoCard">
                    <span className="tag">01 / NAVIGATION</span>
                    <h3>GPS and offline maps</h3>
                    <p>GPS devices and offline mapping apps can help with route awareness. Learn their limitations and carry backup navigation.</p>
                </article>
                <article className="infoCard">
                    <span className="tag">02 / EQUIPMENT</span>
                    <h3>Modern climbing gear</h3>
                    <p>Helmets, harnesses, ropes, insulation, and technical equipment should be selected for the route and used only with appropriate training.</p>
                </article>
                <article className="infoCard">
                    <span className="tag">03 / FORECASTS</span>
                    <h3>Weather and conditions</h3>
                    <p>Use reliable forecasts and official local reports to plan. Conditions can differ sharply from forecasts, especially in exposed terrain.</p>
                </article>
            </div>
        </section>

        

        <section className="splitSec">
            <div className="splitCopy">
                <p className="small">FIELD NOTES</p>
                <h2>Technology supports preparation—not certainty.</h2>
                <p>Charge devices, protect them from cold and moisture, carry spare power where needed, and make a plan for equipment failure or loss of connectivity.</p>
            </div>
            <div className="checkPanel">
                <h3>Technology checklist</h3>
                <ul><li>Update maps and download offline areas before departure.</li>
<li>Carry spare batteries or a power bank where practical.</li>
<li>Know how to use a compass and paper map.</li>
<li>Test communication equipment before leaving.</li>
<li>Check equipment fit, condition, and instructions.</li></ul>
            </div>
        </section>

    </main>

        </>
    );
}

export default InnovationPage;
