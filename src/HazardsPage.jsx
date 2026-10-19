import React from "react";
import "./hazards.css";

export function HazardsPage({ onNavigate = () => {} }) {
    return (
        <>
    <main>
        <section className="pageHero1">
            <div className="heroCont">
                <p className="orgTop">MORE / RISK AWARENESS</p>
                <h1>Mountain <span>Hazards</span></h1>
                <p className="heroCopy">Recognize changing mountain conditions, understand common hazards, and make conservative decisions before risk increases.</p>
            </div>
            <div className="heroStamp"><span>ALPINE</span><strong>ASCENT</strong><small>FIELD GUIDE</small></div>
        </section>

        <section className="sec">
            <div className="secHead">
                <p className="orgTop">KNOW THE RISKS</p>
                <h2>Awareness is part of preparation.</h2>
                <p>Mountain environments change quickly. Learn about local hazards before departure and turn back when conditions exceed your team's skills or equipment.</p>
            </div>
            <div className="infoGrid">
                
                <article className="infoCard">
                    <span className="tag">01 / WEATHER</span>
                    <h3>Rapid weather changes</h3>
                    <p>Storms, wind, cold, and poor visibility can develop quickly. Check reliable forecasts and identify safe turnaround points.</p>
                </article>
                <article className="infoCard">
                    <span className="tag">02 / TERRAIN</span>
                    <h3>Rockfall and avalanches</h3>
                    <p>Loose rock, unstable snow, and avalanche terrain require route-specific knowledge. Follow local advisories and avoid exposed areas when conditions are unsafe.</p>
                </article>
                <article className="infoCard">
                    <span className="tag">03 / ALTITUDE</span>
                    <h3>Altitude and exhaustion</h3>
                    <p>Gain elevation gradually, monitor the group, and take symptoms seriously. Descend and seek medical help when altitude illness is suspected.</p>
                </article>
            </div>
        </section>

        

        <section className="splitSec">
            <div className="splitCopy">
                <p className="orgTop">FIELD NOTES</p>
                <h2>Turnaround decisions are successful decisions.</h2>
                <p>Do not let summit goals, time pressure, or group expectations override safety. Set turnaround criteria before the climb and communicate them clearly.</p>
            </div>
            <div className="checkPanel">
                <h3>Risk-awareness checklist</h3>
                <ul><li>Check weather and official route or avalanche reports.</li>
                    <li>Identify escape routes and safe stopping points.</li>
                    <li>Carry suitable clothing, navigation, first aid, and communication equipment.</li>
                    <li>Watch for fatigue, cold stress, and altitude symptoms.</li>
                    <li>Turn back when conditions or group ability make the route unsafe.</li></ul>
            </div>
        </section>

        
    </main>

    
        </>
    );
}

export default HazardsPage;
