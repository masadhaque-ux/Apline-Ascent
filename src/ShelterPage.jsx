import React from "react";
import "./shelter.css";

export function ShelterPage({ onNavigate = () => {} }) {
    return (
        <>
    <main>
        <section className="pageHero">
           
            <div className="heroCont">
                
                <p className="orgTop">MORE / SHELTER &amp; CAMPS</p>
                <h1>Mountain <span>Shelter</span></h1>
                <p className="heroCopy">Understand mountain shelters, camps, and the planning needed to stay protected in changing conditions.</p>
            </div>
            <div className="heroStamp"><span>ALPINE</span><strong>ASCENT</strong><small>FIELD GUIDE</small></div>
        </section>

        <section className="sec">
            <div className="secHead">
                <p className="orgTop">SHELTER BASICS</p>
                <h2>A safe place starts with a good plan.</h2>
                <p>Choose shelter according to the route, forecast, group size, and local regulations. Never assume an unstaffed hut will be open or supplied.</p>
            </div>
            <div className="infoGrid">
                
                <article className="infoCard">
                    <span className="tag">01 / HUTS</span>
                    <h3>Mountain huts</h3>
                    <p>Use established huts where available. Check opening dates, reservations, water, food, and emergency arrangements before setting out.</p>
                </article>
                <article className="infoCard">
                    <span className="tag">02 / CAMPS</span>
                    <h3>High-altitude camps</h3>
                    <p>Choose campsites away from avalanche paths, rockfall zones, exposed ridges, and water channels. Follow local camping rules.</p>
                </article>
                <article className="infoCard">
                    <span className="tag">03 / WEATHER</span>
                    <h3>Protection from the elements</h3>
                    <p>Carry suitable insulation and weatherproof equipment. Wind, wet clothing, and falling temperatures can make conditions dangerous quickly.</p>
                </article>
            </div>
        </section>

        

        <section className="splitSec">
            <div className="splitCopy">
                <p className="orgTop">FIELD NOTES</p>
                <h2>Pack for the night you expect—and the night you might not.</h2>
                <p>Shelter plans should include an alternative location, enough insulation for the expected temperatures, and a way to communicate if the schedule changes.</p>
            </div>
            <div className="checkPanel">
                <h3>Shelter checklist</h3>
                <ul><li>Check hut availability and booking requirements.</li>
                    <li>Carry a tent or emergency shelter suitable for the route.</li>
                    <li>Pack a sleeping system rated for expected conditions.</li>
                    <li>Keep food and water protected from weather.</li>
                    <li>Leave your route and expected return time with a trusted contact.</li></ul>
            </div>
        </section>

        </main>

      </>
    );
}

export default ShelterPage;
