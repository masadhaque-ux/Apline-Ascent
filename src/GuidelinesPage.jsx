import React from "react";
import "./guidelines.css";

export function GuidelinesPage({ onNavigate = () => {} }) {
    return (
        <>
    <main>
        <section className="page-hero5">
            <div className="hero-content">
                <p className="eyebrow">MORE / RESPONSIBLE CLIMBING</p>
                <h1>Mountain <span>Guidelines</span></h1>
                <p className="hero-copy">Prepare carefully, respect local rules and environments, and make decisions that protect the whole team.</p>
            </div>
            <div className="hero-stamp"><span>ALPINE</span><strong>ASCENT</strong><small>FIELD GUIDE</small></div>
        </section>

        <section className="section">
            <div className="section-heading">
                <p className="eyebrow">BEFORE YOU GO</p>
                <h2>Good habits make better expeditions.</h2>
                <p>Choose objectives that match your group's experience, confirm current local requirements, and be ready to change the plan when conditions demand it.</p>
            </div>
            <div className="info-grid">
                
                <article className="info-card">
                    <span className="tag">01 / PREPARATION</span>
                    <h3>Know your route</h3>
                    <p>Research route difficulty, permits, access restrictions, weather, expected timing, and reliable sources of local information.</p>
                </article>
                <article className="info-card">
                    <span className="tag">02 / RESPONSIBILITY</span>
                    <h3>Respect the mountain</h3>
                    <p>Follow Leave No Trace principles, respect wildlife and local communities, and pack out waste.</p>
                </article>
                <article className="info-card">
                    <span className="tag">03 / TEAM SAFETY</span>
                    <h3>Look after each other</h3>
                    <p>Agree on roles, communication, emergency plans, and turnaround criteria. No summit is worth an unsafe return.</p>
                </article>
            </div>
        </section>

        

        <section className="split-section">
            <div className="split-copy">
                <p className="eyebrow">FIELD NOTES</p>
                <h2>Plan carefully. Move thoughtfully. Return safely.</h2>
                <p>A responsible climber knows when to continue, when to pause, and when to turn around. Be honest about experience and do not pressure others to take risks.</p>
            </div>
            <div className="check-panel">
                <h3>Before-departure checklist</h3>
                <ul><li>Choose a route appropriate for the group's ability.</li>
<li>Check permits, access rules, weather, and local guidance.</li>
<li>Tell a trusted contact your itinerary and return time.</li>
<li>Pack suitable clothing, food, water, navigation, and first aid.</li>
<li>Set turnaround criteria and an emergency plan.</li>
<li>Respect the environment and local communities.</li></ul>
            </div>
        </section>

        </main>

        </>
    );
}

export default GuidelinesPage;
