import "./home.css";

function HomePage({ setCurrentPage = () => {} }) {
    return (
        <main className="homePage">

            <section className="heroSec">

                <div className="heroBg">
                    <img src="src/assets/images/hero_alpine_ascent_1790702854836.jpg" alt="High altitude Himalayan mountain peaks" />
                </div>

                <div className="heroOverlay"></div>

                <div className="heroCont">

                    <div className="heroBadge">
                        <span className="badgeDot">●</span>
                        Setting International Mountaineering &amp; Guiding Standards
                    </div>

                    <h1 className="heroTitle">
                        <span>The Summit</span>
                        <span> Awaits. <strong>Master</strong> </span>
                        <span>Alpine Ascents.</span>
                    </h1>

                    <p className="heroDesc">
                        Unparalleled mountain adventures, world-standard high-altitude
                        guiding, and comprehensive knowledge for every mountaineer.
                        From fundamental snow craft to 8,000-meter Himalayan giants.
                    </p>

                    <div className="heroActions">

                        <a href="#" className="heroBtn mainBtn" onClick={(e) => { e.preventDefault(); setCurrentPage("guidelines-page"); }}>
                            <span className="btnIcon">◉</span>
                            Explore Mountaineering Guide
                        </a>

                        <a href="#" className="heroBtn subBtn" onClick={(e) => { e.preventDefault(); setCurrentPage("clubmap-page"); }}>
                            <span>⌖</span>
                            Find Global Clubs Near You
                        </a>

                        <a href="#" className="heroBtn subBtn" onClick={(e) => { e.preventDefault(); setCurrentPage("stories"); }}>
                            <span>♙</span>
                            Success Stories of Organized Camps
                        </a>

                    </div>

                    <div className="heroStats">

                        <div className="statItem">
                            <span className="statNumber">14 / 14</span>
                            <span className="statLabel">
                                8,000M PEAKS COVERED
                            </span>
                        </div>

                        <div className="statItem">
                            <span className="statNumber org">
                                7 SUMMITS
                            </span>
                            <span className="statLabel">
                                GLOBAL CONTINENTS GUIDED
                            </span>
                        </div>

                        <div className="statItem">
                            <span className="statNumber green">
                                98.2%
                            </span>
                            <span className="statLabel">
                                SAFETY RECORD STANDARD
                            </span>
                        </div>

                        <div className="statItem">
                            <span className="statNumber gold">
                                38+ YEARS
                            </span>
                            <span className="statLabel">
                                ALPINE HERITAGE &amp; LORE
                            </span>
                        </div>

                    </div>

                  
                </div>

            </section>


            {/* ================= ABOUT / MISSION SECTION ================= */}

            <section className="missionSec" id="about">

                <div className="missionCont">
                    
                    <div className="missionLeft">

                        <div className="secSmallTitle">
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

                        <div className="missionBtns">

                            <a href="#" className="smallOrgBtn" onClick={(e) => { e.preventDefault(); setCurrentPage("about-essence"); }}>
                                READ MOUNTAINEERING FOUNDATION →
                            </a>

                            <a href="#" className="smallDarkBtn" onClick={(e) => { e.preventDefault(); setCurrentPage("stories"); }}>
                                JOIN AN EXPEDITION
                            </a>

                        </div>

                    </div>


                    <div className="missionRight">

                        <div className="missionBox">
                            <span className="missionNumber orgText">
                                100%
                            </span>
                            <strong>IFMGA / AMGA Certified</strong>
                            <p>
                                Lead guides holding world-class guiding credentials.
                            </p>
                        </div>

                        <div className="missionBox">
                            <span className="missionNumber">
                                38+ Yrs
                            </span>
                            <strong>Expedition Heritage</strong>
                            <p>
                                Operating on Seven Summits since 1986.
                            </p>
                        </div>

                        <div className="missionBox">
                            <span className="missionNumber greenText">
                                14 / 14
                            </span>
                            <strong>8,000m Coverage</strong>
                            <p>
                                Himalayan &amp; Karakoram deep exploration coverage.
                            </p>
                        </div>

                        <div className="missionBox">
                            <span className="missionNumber goldText">
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

            <section className="knowSec">

                <div className="knowHead">

                    <div className="secTag">
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


                <div className="knowGrid">

                    <div className="knowCard">
                       
                        <h3>About Mountaineering</h3>
                        <div className="cardOrgText">
                            The Spirit, Definition &amp; Philosophy
                        </div>
                        
                        <p>
                            Understand true high-altitude alpinism, the fellowship
                            of the rope, and the distinction between hill walking
                            and dangerous techniques.
                        </p>

                        <div className="cardBottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("about"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowCard">
                       

                        <h3>Historical Milestones</h3>
                        <div className="cardOrgText">
                            1786 Mont Blanc to 2021 Winter K2
                        </div>

                        <p>
                            Explore the defining chronological eras: the Golden Age,
                            8,000m conquests, oxygenless ascents, and recent alpine
                            speed feats.
                        </p>

                        <div className="cardBottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("history"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowCard">
                        

                        <h3>Styles &amp; Techniques</h3>
                        <div className="cardOrgText">
                            Alpine vs Siege &amp; Ice Techniques
                        </div>

                        <p>
                            Styles and Techniques, Step-by-step masterclasses on French crampon footwork,
                            ice self-arrest drills, and 3:1 Z-pulley crevasse
                            hauling systems.
                        </p>

                        <div className="cardBottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("techniques"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowCard">
                       
                        <h3>Expedition Sheltering</h3>
                        <div className="cardOrgText">
                            Basecamp Domes, Bivies &amp; Huts
                        </div>

                        <p>
                            Architectural specifications and thermal ratings for
                            4-season high tents, suspended portaledges,
                            engineered snow caves, and alpine refuges.
                        </p>

                        <div className="cardBottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("shelter-page"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowCard">
                       

                        <h3>Hazards &amp; Altitude Triage</h3>
                        <div className="cardOrgText">
                            Objective Perils &amp; Hypoxia Assessment
                        </div>

                        <p>
                            Deep dive into avalanches, hidden crevasses and seracs,
                            paired with interactive clinical triage tools for
                            AMS, HAPE and HACE.
                        </p>

                        <div className="cardBottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("hazards-page"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowCard">
                        

                        <h3>World Records Registry</h3>
                        <div className="cardOrgText">
                            14 Eight-Thousanders &amp; Seven Summits
                        </div>

                        <p>
                            World Record Registry, Searchable database of legendary feats, speed ascents,
                            winter firsts, and youngest/oldest mountaineers on Earth.
                        </p>

                        <div className="cardBottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("climbing-record"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowCard">
                        
                        <h3>Clubs &amp; Geolocation Map</h3>
                        <div className="cardOrgText">
                            Interactive World Map &amp; Proximity
                        </div>

                        <p>
                            Use HTML5 Geolocation to calculate exact distances to
                            international mountaineering clubs, alpine federations,
                            and guided expedition bases.
                        </p>

                        <div className="cardBottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("clubmap-page"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowCard">
                       

                        <h3>Camp Success Stories</h3>
                        <div className="cardOrgText">
                            Rainier, Denali, Aconcagua, Everest
                        </div>

                        <p>
                            Camp Success Stories, Dispatches, verified client reviews, summit rates,
                            and route profiles from world-class guided mountain
                            expeditions.
                        </p>

                        <div className="cardBottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("stories"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowCard">
                        

                        <h3>Multimedia Gallery</h3>
                        <div className="cardOrgText">
                            High-Res Photography &amp; Video Guides
                        </div>

                        <p>
                            Multimedia Gallery, Curated high-altitude photo archives with metadata
                            and video player tutorials for technical glacial
                            climbing.
                        </p>

                        <div className="cardBottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("gallery"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowCard">
                        
                        <h3>Climbing Accessories Store</h3>
                        <div className="cardOrgText">
                            Crampons, Ice Tools, Beacons &amp; Ropes
                        </div>

                        <p>
                            Certified mountaineering equipment available for sale:
                            modular crampons, technical ice axes, Barryx transceivers,
                            and Cat 4 glacier optics.
                        </p>

                        <div className="cardBottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("accessories"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowCard">
                       
                        <h3>Latest Developments</h3>
                        <div className="cardOrgText">
                            Carbon Gear, Satellite SOS &amp; AI Weather
                        </div>

                        <p>
                            Frontier technologies shaping high-altitude safety:
                            supercapacitor airbags, Dyneema boots, micro-climate
                            predictive algorithms.
                        </p>

                        <div className="cardBottom">
                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("innovation-page"); }}>Open Dedicated Page →</a>
                            <small>VIEW PAGE</small>
                        </div>
                    </div>


                    <div className="knowCard">

                        <h3>Guidelines &amp; Pack Readiness</h3>
                        <div className="cardOrgText">
                            The 10 Essentials &amp; Alpine List
                        </div>

                        <p>
                            Interactive pack readiness checklist, physical
                            conditioning benchmarks, and the Leave No Trace
                            principles for guided zones.
                        </p>

                        <div className="cardBottom">
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