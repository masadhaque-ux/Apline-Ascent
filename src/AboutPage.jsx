import "./about.css";

function AboutPage() {
    return (
        <main className="aboutPage" id="about">

            <section className="aboutIntro">
                <div className="aboutWrap">
                    
                    <span className="aboutLabel">ABOUT ALPINE ASCENT</span>
                    

                    <h1>
                        Built for the <br /> Mountains.
                    </h1>

                    <p className="aboutIntroText">
                        Alpine Ascent is built around a simple idea: better preparation creates better adventures. We combine mountain knowledge, technical skill, and a deep respect for the alpine environment.
                    </p>
                </div>
            </section>


            <section className="aboutStory">
                <div className="aboutWrap aboutStoryGrid">

                    <div className="aboutImgWrap">
                        

                        <div className="aboutImgCaption">
                            <span>THE ALPINE SPIRIT</span>
                            <span>EST. 1988</span>
                        </div>
                    </div>


                    <div className="aboutStoryCont">

                        <span className="secLabel">
                            OUR PURPOSE
                        </span>

                        <h2>
                            More Than
                            <br />
                            A Summit.
                        </h2>

                        <p>
                            Mountains demand more than physical strength.
                            They require preparation, patience, awareness,
                            and the ability to make the right decision when
                            conditions change.
                        </p>

                        <p>
                            Alpine Ascent exists to help climbers develop
                            those qualities through practical knowledge,
                            thoughtful preparation, and a disciplined
                            approach to mountain travel.
                        </p>

                        <p>
                            From your first alpine experience to more
                            technical objectives, our focus remains the same:
                            helping you approach every ascent with confidence
                            and respect.
                        </p>

                        <div className="aboutHighlight">
                            <strong>38+</strong>
                            <span>Years of Alpine Heritage</span>
                        </div>

                    </div>
                </div>
            </section>


            <section className="valuesSec">
                <div className="aboutWrap">

                    <div className="valuesHead">
                        <div>
                            <span className="secLabel">
                                WHAT GUIDES US
                            </span>

                            <h2>
                                Principles Behind
                                <br />
                                Every Ascent.
                            </h2>
                        </div>

                        <p>
                            The mountains teach us that preparation,
                            awareness, and respect are just as important
                            as reaching the summit.
                        </p>
                    </div>


                    <div className="valuesGrid">

                        <article className="valueCard">
                            {/* <span className="valueNumber">01</span> */}

                            <h3>Safety First</h3>

                            <p>
                                Every decision begins with safety, preparation,
                                and an understanding of mountain conditions.
                            </p>
                        </article>


                        <article className="valueCard">
                            {/* <span className="valueNumber">02</span> */}

                            <h3>Knowledge</h3>

                            <p>
                                Strong mountain skills come from learning,
                                practicing, and understanding your environment.
                            </p>
                        </article>


                        <article className="valueCard">
                            {/* <span className="valueNumber">03</span> */}

                            <h3>Respect</h3>

                            <p>
                                We respect the mountains, the communities,
                                and the environments that make every ascent possible.
                            </p>
                        </article>


                        <article className="valueCard">
                            {/* <span className="valueNumber">04</span> */}

                            <h3>Progress</h3>

                            <p>
                                Every climb is an opportunity to learn,
                                improve, and prepare for the next challenge.
                            </p>
                        </article>

                    </div>

                </div>
            </section>


            <section className="missionSec">
                <div className="aboutWrap missionCont">

                    <span className="secLabel">
                        OUR MISSION
                    </span>

                    <h2>
                        Prepare Better.
                        <br />
                        Climb Smarter.
                    </h2>

                    <p>
                        We want to make mountain preparation more accessible,
                        practical, and purposeful so that climbers can spend
                        less time guessing and more time experiencing the mountains.
                    </p>

                    <a href="#contact" className="aboutBtn">
                        EXPLORE THE MOUNTAINS
                        <span>↗</span>
                    </a>

                </div>
            </section>

        </main>
    );
}

export { AboutPage };