import "./home.css";

function HomePage({ setCurrentPage = () => {} }) {
    return (
        <main className="home-page">

            <section className="hero-section">

                <div className="hero-background">
                    <img src={`${import.meta.env.BASE_URL}src/assets/images/hero_alpine_ascent_1790702854836.jpg`} alt="High altitude Himalayan mountain peaks" />
                </div>

                <div className="hero-overlay"></div>

                <div className="hero-content">

                    <div className="hero-badge">
                        <span className="badge-dot">●</span>
                        Setting International Mountaineering &amp; Guiding Standards
                    </div>

                    <h1 className="hero-title">
                        <span>The Summit</span>
                        <span> Awaits. <strong>Master</strong> </span>
                        <span>Alpine Ascents.</span>
                    </h1>

                    <p className="hero-description">
                        Unparalleled mountain adventures, world-standard high-altitude
                        guiding, and comprehensive knowledge for every mountaineer.
                        From fundamental snow craft to 8,000-meter Himalayan giants.
                    </p>

                    <div className="hero-actions">

                        <a href="#" className="hero-button primary-button" onClick={(e) => { e.preventDefault(); setCurrentPage("guidelines-page"); }}>
                            <span className="button-icon">◉</span>
                            Explore Mountaineering Guide
                        </a>

                        <a href="#" className="hero-button secondary-button" onClick={(e) => { e.preventDefault(); setCurrentPage("clubmap-page"); }}>
                            <span>⌖</span>
                            Find Global Clubs Near You
                        </a>

                        <a href="#" className="hero-button secondary-button" onClick={(e) => { e.preventDefault(); setCurrentPage("stories"); }}>
                            <span>♙</span>
                            Success Stories of Organized Camps
                        </a>

                    </div>

                    <div className="hero-stats">

                        <div className="stat-item">
                            <span className="stat-number">14 / 14</span>
                            <span className="stat-label">
                                8,000M PEAKS COVERED
                            </span>
                        </div>

                        <div className="stat-item">
                            <span className="stat-number orange">
                                7 SUMMITS
                            </span>
                            <span className="stat-label">
                                GLOBAL CONTINENTS GUIDED
                            </span>
                        </div>

                        <div className="stat-item">
                            <span className="stat-number green">
                                98.2%
                            </span>
                            <span className="stat-label">
                                SAFETY RECORD STANDARD
                            </span>
                        </div>

                        <div className="stat-item">
                            <span className="stat-number gold">
                                38+ YEARS
                            </span>
                            <span className="stat-label">
                                ALPINE HERITAGE &amp; LORE
                            </span>
                        </div>

                    </div>

                  
                </div>

            </section>


            {/* ================= ABOUT / MISSION SECTION ================= */}

            <section className="mission-section" id="about">

                <div className="mission-content">
                    
                    <div className="mission-left">

                        <div className="section-small-title">
                            © THE ALPINE ASCENTS MISSION
                        </div>

                        <h2>
                            Setting International
                            <br />
                            Guiding Standards in
                            <br />
                            Mountain Exploration
                        </h2>

                        <p>
                            Alpine Ascents is a leader in the Mountaineering and Climbing
                            industry and has been instrumental in setting guiding standards
                            in the international climbing community. Our mission and goals
                            are simple: by using the best climbing talent in the country,
                            we offer the opportunity for climbers at all levels to achieve
                            their personal aspirations through quality, challenging, and
                            fun adventures.
                        </p>

                        <div className="mission-buttons">

                            <a href="#" className="small-orange-button" onClick={(e) => { e.preventDefault(); setCurrentPage("about-essence"); }}>
                                READ MOUNTAINEERING FOUNDATION →
                            </a>

                            <a href="#" className="small-dark-button" onClick={(e) => { e.preventDefault(); setCurrentPage("stories"); }}>
                                JOIN AN EXPEDITION
                            </a>

                        </div>

                    </div>


                    <div className="mission-right">

                        <div className="mission-box">
                            <span className="mission-number orange-text">
                                100%
                            </span>
                            <strong>IFMGA / AMGA Certified</strong>
                            <p>
                                Lead guides holding world-class guiding credentials.
                            </p>
                        </div>

                        <div className="mission-box">
                            <span className="mission-number">
                                38+ Yrs
                            </span>
                            <strong>Expedition Heritage</strong>
                            <p>
                                Operating on Seven Summits since 1986.
                            </p>
                        </div>

                        <div className="mission-box">
                            <span className="mission-number green-text">
                                14 / 14
                            </span>
                            <strong>8,000m Coverage</strong>
                            <p>
                                Himalayan &amp; Karakoram deep exploration coverage.
                            </p>
                        </div>

                        <div className="mission-box">
                            <span className="mission-number gold-text">
                                0 INT
                            </span>
                            <strong>Clean Glacier Code</strong>
                            <p>
                                Complete waste-pack-out and ecological stewardship.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* ================= KNOWLEDGE SECTION ================= */}

            <section className="knowledge-section">

                <div className="knowledge-heading">

                    <div className="section-tag">
                        DEDICATED EXPEDITION PAGES
                    </div>

                    <h2>
                        Explore Our
                        <br />
                        Mountaineering
                        <br />
                        Knowledge
                    </h2>

                    <p>
                        Navigate to dedicated individual pages covering history,
                        techniques, gear specs, world records, and real-time
                        interactive tools.
                    </p>

                </div>


                <div className="knowledge-grid">

                    <div className="knowledge-card">
                       
                        <h3>About Mountaineering</h3>
                        <div className="card-orange-text">
                            The Spirit, Definition &amp; Philosophy
                        </div>
                        
                        <p>
                            Understand true high-altitude alpinism, the fellowship
                            of the rope, and the distinction between hill walking
                            and dangerous techniques.
                        </p>

                        <div className="card-bottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("about"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowledge-card">
                       

                        <h3>Historical Milestones</h3>
                        <div className="card-orange-text">
                            1786 Mont Blanc to 2021 Winter K2
                        </div>

                        <p>
                            Explore the defining chronological eras: the Golden Age,
                            8,000m conquests, oxygenless ascents, and recent alpine
                            speed feats.
                        </p>

                        <div className="card-bottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("history"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowledge-card">
                        

                        <h3>Styles &amp; Techniques</h3>
                        <div className="card-orange-text">
                            Alpine vs Siege &amp; Ice Techniques
                        </div>

                        <p>
                            Styles and Techniques, Step-by-step masterclasses on French crampon footwork,
                            ice self-arrest drills, and 3:1 Z-pulley crevasse
                            hauling systems.
                        </p>

                        <div className="card-bottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("techniques"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowledge-card">
                       
                        <h3>Expedition Sheltering</h3>
                        <div className="card-orange-text">
                            Basecamp Domes, Bivies &amp; Huts
                        </div>

                        <p>
                            Architectural specifications and thermal ratings for
                            4-season high tents, suspended portaledges,
                            engineered snow caves, and alpine refuges.
                        </p>

                        <div className="card-bottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("shelter-page"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowledge-card">
                       

                        <h3>Hazards &amp; Altitude Triage</h3>
                        <div className="card-orange-text">
                            Objective Perils &amp; Hypoxia Assessment
                        </div>

                        <p>
                            Deep dive into avalanches, hidden crevasses and seracs,
                            paired with interactive clinical triage tools for
                            AMS, HAPE and HACE.
                        </p>

                        <div className="card-bottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("hazards-page"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowledge-card">
                        

                        <h3>World Records Registry</h3>
                        <div className="card-orange-text">
                            14 Eight-Thousanders &amp; Seven Summits
                        </div>

                        <p>
                            World Record Registry, Searchable database of legendary feats, speed ascents,
                            winter firsts, and youngest/oldest mountaineers on Earth.
                        </p>

                        <div className="card-bottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("climbing-record"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowledge-card">
                        
                        <h3>Clubs &amp; Geolocation Map</h3>
                        <div className="card-orange-text">
                            Interactive World Map &amp; Proximity
                        </div>

                        <p>
                            Use HTML5 Geolocation to calculate exact distances to
                            international mountaineering clubs, alpine federations,
                            and guided expedition bases.
                        </p>

                        <div className="card-bottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("clubmap-page"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowledge-card">
                       

                        <h3>Camp Success Stories</h3>
                        <div className="card-orange-text">
                            Rainier, Denali, Aconcagua, Everest
                        </div>

                        <p>
                            Camp Success Stories, Dispatches, verified client reviews, summit rates,
                            and route profiles from world-class guided mountain
                            expeditions.
                        </p>

                        <div className="card-bottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("stories"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowledge-card">
                        

                        <h3>Multimedia Gallery</h3>
                        <div className="card-orange-text">
                            High-Res Photography &amp; Video Guides
                        </div>

                        <p>
                            Multimedia Gallery, Curated high-altitude photo archives with metadata
                            and video player tutorials for technical glacial
                            climbing.
                        </p>

                        <div className="card-bottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("gallery"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowledge-card">
                        
                        <h3>Climbing Accessories Store</h3>
                        <div className="card-orange-text">
                            Crampons, Ice Tools, Beacons &amp; Ropes
                        </div>

                        <p>
                            Certified mountaineering equipment available for sale:
                            modular crampons, technical ice axes, Barryx transceivers,
                            and Cat 4 glacier optics.
                        </p>

                        <div className="card-bottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("accessories"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowledge-card">
                       
                        <h3>Latest Developments</h3>
                        <div className="card-orange-text">
                            Carbon Gear, Satellite SOS &amp; AI Weather
                        </div>

                        <p>
                            Frontier technologies shaping high-altitude safety:
                            supercapacitor airbags, Dyneema boots, micro-climate
                            predictive algorithms.
                        </p>

                        <div className="card-bottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("innovation-page"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowledge-card">

                        <h3>Guidelines &amp; Pack Readiness</h3>
                        <div className="card-orange-text">
                            The 10 Essentials &amp; Alpine List
                        </div>

                        <p>
                            Interactive pack readiness checklist, physical
                            conditioning benchmarks, and the Leave No Trace
                            principles for guided zones.
                        </p>

                        <div className="card-bottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("guidelines-page"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>

                </div>

            </section>


            </main>
    );
}

export { HomePage };