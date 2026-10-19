
import React from "react";
import "./other.css";

export const RecordsPage = ({ onNavigate = () => {} }) => {
    const recordCategories = [
        {
            image: "src/assets/images/historic_expedition_1790702905379.jpg",
            alt: "Historic mountaineering expedition",
            tag: "High altitude",
            title: "14 Eight-Thousanders",
            description:
                "The history of climbing all fourteen peaks above 8,000 metres includes changing styles, team efforts, and ongoing debate about verification.",
            page: "record-eight-thousanders",
        },
        {
            image: "src/assets/images/hero_alpine_ascent_1790702854836.jpg",
            alt: "High mountain summit representing the Seven Summits challenge",
            tag: "Global challenge",
            title: "Seven Summits",
            description:
                "The Seven Summits challenge involves reaching the highest peak on each continent; definitions can differ by continent model.",
            page: "record-seven-summits",
        },
        {
            image: "src/assets/images/climbing_technique_1790702882353.jpg",
            alt: "Mountaineer climbing a steep mountain route",
            tag: "Time trials",
            title: "Speed Ascents",
            description:
                "Speed records depend on route definition, start and finish points, conditions, and independent verification.",
            page: "record-speed",
        },
        {
            image: "src/assets/images/mountain_hazards_1790702893898.jpg",
            alt: "Snow-covered mountain terrain in winter",
            tag: "Winter climbing",
            title: "Winter Feats",
            description:
                "Winter ascents demand specialized cold-weather systems, risk management, and careful assessment of weather and snow conditions.",
            page: "record-winter",
        },
        // {
        //     image: "src/assets/images/alpine_high_camp_1790702869575.jpg",
        //     alt: "High-altitude mountaineering camp",
        //     tag: "Human achievement",
        //     title: "Milestone Ascents",
        //     description:
        //         "Age-related and other milestone ascents highlight individual achievement, but context and verified reporting matter.",
        //     page: "record-milestones",
        // },
    ];

    const handleNavigate = (event, page) => {
        event.preventDefault();
        onNavigate(page);
    };

    return (
        <>
            <section className="hero">
                <div className="heroInner">
                    <div className="small">
                        Pinnacles of Human Achievement
                    </div>

                    <h1>Mountaineering World Records</h1>

                    <p>
                        Explore notable record categories across extreme
                        altitude, global summits, speed ascents, winter
                        climbing, and milestone achievements.
                    </p>
                </div>
            </section>

            <main>
                <div className="wrap">
                    <div className="secHead">
                        <div className="small">
                            Pinnacles of Achievement
                        </div>

                        <h2>Explore Record Categories</h2>

                        <p>
                            Mountaineering records change as new ascents occur
                            and verification standards evolve. These pages
                            explain major categories rather than claiming to
                            be a live, authoritative leaderboard.
                        </p>
                    </div>

                    <div className="cards">
                        {recordCategories.map((record) => (
                            <article className="card" key={record.page}>
                                <img
                                    src={record.image}
                                    alt={record.alt}
                                    loading="lazy"
                                />

                                <div className="cardBody">
                                    <span className="tag">
                                        {record.tag}
                                    </span>

                                    <h3>{record.title}</h3>

                                    <p>{record.description}</p>

                                    <a
                                        className="link"
                                        href={`#${record.page}`}
                                        onClick={(event) =>
                                            handleNavigate(
                                                event,
                                                record.page
                                            )
                                        }
                                    >
                                        Explore topic →
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
};

export default RecordsPage;