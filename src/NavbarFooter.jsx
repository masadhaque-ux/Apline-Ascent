import { useEffect, useRef, useState } from "react";
function Navbar({ setCurrentPage, currentPage, cartCount = 0 }) {
    const [visitorCount, setVisitorCount] = useState(0);
    const [showAccount, setShowAccount] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showCart, setShowCart] = useState(false);
    useEffect(() => {
        let visitor = localStorage.getItem("visitors");

        if (visitor === null) {
            visitor = 1;
        } else {
            visitor = Number(visitor) + 1;
        }

        localStorage.setItem("visitors", visitor);
        setVisitorCount(visitor);
    }, []);

    return (
        <header className="navbar">
            <div className="navWrap">

                <a
                    href="#"
                    className="logo"
                    onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage("home");
                    }}
                >
                    <span className="logoIcon">
                        <img
                            src="src/assets/images/logo3.png"
                            alt="Alpine Ascent Logo"
                        />
                    </span>

                    <span id="site-name">
                        Alpine <span id="span2">Ascent</span>
                    </span>
                </a>

                {/* Visitor Counter */}
                <div className="visitCounter">
                    <span className="visitIcon">👥</span>
                    <div className="visitDet">
                        <span className="visitLabel">Visitors</span>
                        <strong id="para">{visitorCount.toLocaleString()}</strong>
                    </div>
                </div>

                <input type="checkbox" id="menu-toggle" />

                <label htmlFor="menu-toggle" className="menuBtn">
                    ☰
                </label>

              <nav className="navMenu">

                    <a href="#"
                        className={`navLink ${
                            currentPage === "home" ? "active" : ""
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage("home");
                            const menu = document.getElementById("menu-toggle");
                            if (menu) menu.checked = false;
                        }}
                    >
                        <button>Home</button>
                    </a>

                    <div className="dropdown">

                        <a href="#" className={`navLink ${currentPage === "about" ? "active" : "" }`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("about");
                            }}
                        >
                            <button>About</button>
                        </a>

                        <div className="dropdownMenu">

                            <a href="#" className={`navLink ${currentPage === "about-essence" ? "active" : "" }`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("about-essence");
                            }}
                        >
                            <strong>Mountaineering Essence</strong>
                            <small>
                                Core definitions & mountain hazards
                            </small>
                        </a>

                        <a
                            href="#"
                            className={`navLink ${currentPage === "about-tiers" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("about-tiers");
                            }}
                        >
                            <strong>Hiking vs Alpinism</strong>
                            <small>
                                Mountain difficulty and comparison
                            </small>
                        </a>

                        <a href="#" className={`navLink ${currentPage === "about-philosophy" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("about-philosophy");
                            }}
                        >
                            <strong>Philosophy & Creed</strong>
                            <small>
                                Codes of alpine fellowship
                            </small>
                        </a>
                        </div>

                    </div>


                    {/* History */}
<div className="dropdown">

    <a
        href="#"
        className={`navLink ${currentPage === "history" ? "active" : ""}`}
        onClick={(e) => {
            e.preventDefault();
            setCurrentPage("history");
        }}
    >
        <button>History</button>
    </a>

    <div className="dropdownMenu">

        <a
            href="#"
            className={`navLink ${currentPage === "pioneering" ? "active" : ""}`}
            onClick={(e) => {
                e.preventDefault();
                setCurrentPage("pioneering");
            }}
        >
            <strong>Pioneering Era</strong>
            <small>
                Mont Blanc and early climbing
            </small>
        </a>

        <a
            href="#"
            className={`navLink ${currentPage === "golden-age" ? "active" : ""}`}
            onClick={(e) => {
                e.preventDefault();
                setCurrentPage("golden-age");
            }}
        >
            <strong>Golden Age</strong>
            <small>
                The Golden Age of Alpinism
            </small>
        </a>

        <a
            href="#"
            className={`navLink ${currentPage === "8000-giants" ? "active" : ""}`}
            onClick={(e) => {
                e.preventDefault();
                setCurrentPage("8000-giants");
            }}
        >
            <strong>8,000m Giants</strong>
            <small>
                Annapurna and Everest
            </small>
        </a>

        <a
            href="#"
            className={`navLink ${currentPage === "modern-alpinism" ? "active" : ""}`}
            onClick={(e) => {
                e.preventDefault();
                setCurrentPage("modern-alpinism");
            }}
        >
            <strong>Modern Alpinism</strong>
            <small>
                Messner, K2 and modern climbing
            </small>
        </a>

    </div>

</div>

                    <div className="dropdown">

                        <a
                            href="#"
                            className={`navLink ${currentPage === "techniques" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("techniques");
                            }}
                        >
                            <button>Techniques</button>
                        </a>

                        <div className="dropdownMenu">

                            <a href="#"
                            className={`navLink ${currentPage === "techniques-styles" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("techniques-styles");
                            }}
                        >
                                <strong>Alpine vs Siege Styles</strong>
                                <small>
                                    Different climbing approaches
                                </small>
                            </a>

                            <a
                            href="#"
                            className={`navLink ${currentPage === "techniques-crampons" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("techniques-crampons");
                            }}
                        >
                            
                                <strong>Crampon Mechanics</strong>
                                <small>
                                    Footwork and front pointing
                                </small>
                            </a>

                            <a href="#"
                            className={`navLink ${currentPage === "techniques-self-arrest" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("techniques-self-arrest");
                            }}
                        >
                                <strong>Self-Arrest</strong>
                                <small>
                                    Ice axe safety technique
                                </small>
                            </a>

                          <a
                            href="#"
                            className={`navLink ${currentPage === "techniques-crevasse" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("techniques-crevasse");
                            }}
                        >
                                <strong>Crevasse Rescue</strong>
                                <small>
                                    3:1 pulley rescue system
                                </small>
                            </a>

                        </div>

                    </div>

                    <div className="dropdown">
                        <a 
                        href="#"
                        className={`navLink ${currentPage === "gallery-all" ? "active" : ""}`}
                         onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage("gallery-all");
                        }}
                         >
                            <button>Gallery</button>
                            </a>
                       <div className="dropdownMenu">
                       <a
                            href="#"
                            className={`navLink ${currentPage === "gallery-photos" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("gallery-photos");
                            }}
                        >
                            <strong>Photo Archive</strong>
                            <small>
                                Only High Resolution Photography
                            </small>
                        </a>
                        <a
                            href="#"
                            className={`navLink ${currentPage === "gallery-videos" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("gallery-videos");
                            }}
                        >
                            <strong>Video Archive</strong>
                            <small>
                                Only Technical Video Guides
                            </small>
                        </a>
                        
                       
                        
                        </div>
                        </div>

                    <div className="dropdown2">
                        <a 
                        href="#"
                        className={`navLink ${currentPage === "accessories" ? "active" : ""}`}
                         onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage("accessories");
                        }}
                         >
                            <button>Store</button>
                            </a>
                    </div>

                    <div className="dropdown">

                        <a href="#"
                        className={`navLink ${currentPage === "stories" ? "active" : ""}`}
                         onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage("stories");
                        }}
                         >
                            <button>Stories</button>
                        </a>

                        <div className="dropdownMenu">

                            <a  href="#"
                        className={`navLink ${currentPage === "story-aconcagua" ? "active" : ""}`}
                         onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage("story-aconcagua");
                        }}
                         >
                                <strong>Aconcagua Story</strong>
                                <small>
                                    Mountain in Principal Cordillera
                                </small>
                            </a>

                            <a href="#"
                            className={`navLink ${currentPage === "story-denali" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("story-denali");
                        }}
                         >
                                <strong>Denali Story</strong>
                                <small>
                                    Highest Mountain in North America
                                </small>
                            </a>

                            <a href="#"
                            className={`navLink ${currentPage === "story-kilimanjaro" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("story-kilimanjaro");
                        }}
                         >
                                <strong>Kilimanjaro Story</strong>
                                <small>
                                    Highest Mountain of Africa
                                </small>
                            </a>

                            <a  href="#"
                            className={`navLink ${currentPage === "story-montblanc" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("story-montblanc");
                        }}
                         >
                                <strong>Mont Blanc Story</strong>
                                <small>
                                    Highest Mountain of Europe
                                </small>
                            </a>

                            {/* <a href="#"
                            className={`navLink ${currentPage === "story-rainier" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("story-rainier");
                        }}
                         >
                                <strong>Rainier Story</strong>
                                <small>
                                    Highest Peak in Washington and the Cascade Range
                                </small>
                            </a> */}

                        </div>

                    </div>


                    {/* Records */}
                     <div className="dropdown">

                        <a href="#"
                            className={`navLink ${currentPage === "climbing-record" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("climbing-record");
                        }}
                         >
                            <button>Records</button>
                        </a>

                        <div className="dropdownMenu">

                            <a href="#"
                            className={`navLink ${currentPage === "eight-record" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("eight-record");
                        }}
                         >
                                <strong>14 Eight-Thousanders</strong>
                                <small>
                                    Record of Clibming 8000 meters
                                </small>
                            </a>

                            <a href="#"
                            className={`navLink ${currentPage === "record-milestone" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("record-milestone");
                        }}
                         >
                                <strong>Winter Feat</strong>
                                <small>
                                    Specialized cold-weather systems
                                </small>
                            </a>

                             <a href="#" className={`navLink ${currentPage === "record-sevensummit" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); setCurrentPage("record-sevensummit"); }}>
                                <strong>Seven Summit Record</strong>
                                <small>Highest Peak of Each Continent</small>
                            </a>

                            <a href="#" className={`navLink ${currentPage === "record-speed" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); setCurrentPage("record-speed"); }}>
                                <strong>Speed Record</strong>
                                <small>Speed records depend on route</small>
                            </a>

                        </div>

                    </div>


                    {/* More */}
                    <div className="dropdown">

                        <a href="#" className={`navLink ${currentPage === "shelter-page" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); setCurrentPage("shelter-page"); }}>
                            <button>More</button>
                        </a>

                        <div className="dropdownMenu">

                            <a href="#"
                            className={`navLink ${currentPage === "shelter-page" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("shelter-page");
                        }}
                         >
                                <strong>Shelters</strong>
                                <small>
                                    Mountain shelters and camps
                                </small>
                            </a>

                            <a href="#"
                            className={`navLink ${currentPage === "hazards-page" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("hazards-page");
                        }}
                         >
                                <strong>Hazards</strong>
                                <small>
                                    Mountain hazards and safety
                                </small>
                            </a>

                            <a href="#"
                            className={`navLink ${currentPage === "clubmap-page" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("clubmap-page");
                        }}
                         >
                                <strong>Clubs & Maps</strong>
                                <small>
                                    Global climbing clubs
                                </small>
                            </a>

                            <a href="#"
                            className={`navLink ${currentPage === "innovation-page" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("innovation-page");
                        }}
                         >
                                <strong>Innovations</strong>
                                <small>
                                    Latest climbing technology
                                </small>
                            </a>

                            <a href="#"
                            className={`navLink ${currentPage === "guidelines-page" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("guidelines-page");
                        }}
                         >
                                <strong>Guidelines</strong>
                                <small>
                                    Mountain essentials
                                </small>
                            </a>

                        </div>

                    </div>

                </nav>

             <div className="accCartOptions">
                    <button type="button" onClick={() => { setShowAccount(true); setShowRegister(false); setShowCart(false); }}>
                        Sign In
                    </button>
                    <button type="button" className={currentPage === "cart" ? "active" : ""}
                        onClick={() => {
                            setCurrentPage("cart");
                            setShowCart(false);
                            setShowAccount(false);
                            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                        }}
                        aria-label={`Open shopping cart, ${cartCount} items`}
                    >
                        🛒 Cart ({cartCount})
                    </button>
                </div>

                {showAccount && (
                    <div className="accPopupOverlay" onClick={() => setShowAccount(false)}>
                        <div className="accPopup" role="dialog" aria-modal="true" aria-label={showRegister ? "Register" : "Sign in"} onClick={(e) => e.stopPropagation()}>
                            <button className="popupClose" type="button" onClick={() => setShowAccount(false)} aria-label="Close popup">×</button>
                            <h2>{showRegister ? "Create Account" : "Sign In"}</h2>
                            <form onSubmit={(e) => { e.preventDefault(); alert(showRegister ? "Registration form submitted. Connect this form to a backend to create an account." : "Sign-in form submitted. Connect this form to a backend to verify your account."); }}>
                                {showRegister && 
                                <input type="text" placeholder="Full name" aria-label="Full name" required />}
                                <input type="text" placeholder="Username or email" aria-label="Username or email" required />
                                <input type="password" placeholder="Password" aria-label="Password" required />
                                {showRegister && 
                                <input type="password" placeholder="Confirm password" aria-label="Confirm password" required />}
                                <button className="popupSubmit" type="submit">{showRegister ? "Register" : "Sign In"}</button>
                            </form>
                            <p className="popupRegText">
                                {showRegister ? "Already have an account?" : "New user?"}{" "}
                                <button type="button" onClick={() => setShowRegister(!showRegister)}>{showRegister ? "Sign in" : "Register here"}</button>
                            </p>
                        </div>
                    </div>
                )}



            </div>

        </header>
    );
}


function DateTimeTicker() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="dateTimeTicker" aria-label="Current date and time" tabIndex="0">
            <div className="tickerText">
                Current Date &amp; Time:{" "}
                {currentTime.toLocaleDateString('en-UK')}{" "}
                | {currentTime.toLocaleTimeString()}
                <span>   : © 2026 Alpine Ascents :  Setting International Mountaineering & Guiding Standards</span>
            </div>
        </div>
    );
}

function Footer({ setCurrentPage = () => {} }) {
    return (
        <>
        <footer className="foot">

            <div className="footWrap">

                <div className="footBrand">

                    <div className="footLogo">

                        <span>
                            <strong>Alpine</strong> Ascent
                        </span>

                    </div>

                    <p>
                        Alpine Ascent is a mountaineering information
                        platform providing knowledge about climbing,
                        mountain history, techniques, equipment and
                        alpine adventures.
                    </p>

                    

                </div>


                <div className="footColumn">

                    <h3>
                        Knowledge Core
                    </h3>

                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("home"); }}>Expedition Home</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("about"); }}>About Mountaineering</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("history"); }}>Historical Milestones</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("techniques"); }}>Styles &amp; Techniques</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("shelter-page"); }}>Expedition Sheltering</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("hazards-page"); }}>Hazards &amp; Safety</a>

                </div>


                <div className="footColumn">

                    <h3>
                        Field & Community
                    </h3>

                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("climbing-record"); }}>World Records</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("clubmap-page"); }}>Global Clubs &amp; Maps</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("stories"); }}>Success Stories</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("gallery"); }}>Multimedia Gallery</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("accessories"); }}>Climbing Accessories</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("innovation-page"); }}>Latest Technology</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("guidelines-page"); }}>Mountain Guidelines</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage("sitemap-page"); }}>Sitemap</a>
                </div>


                <div className="footColumn news">

                    <h3>
                        Alpine Weather Dispatch
                    </h3>

                    <p>
                        Subscribe for mountain updates, climbing
                        techniques, equipment information and alpine news.
                    </p>

                    <form>

                        <input
                            type="email"
                            placeholder="climber@example.com"
                            required
                        />

                        <button type="submit">
                            Subscribe
                        </button>

                    </form>

                </div>

            </div>


            <div className="footBottom">
                <DateTimeTicker />
            </div>

        </footer>
        <Chatbot />
        </>
    );
}

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: "bot", text: "Hello! Welcome to Alpine Ascent. Ask me about mountaineering, mountain history, climbing techniques, safety, or equipment." }
    ]);
    const [userInput, setUserInput] = useState("");
    const [chatbotData, setChatbotData] = useState([]);
    const [loadError, setLoadError] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        fetch("/chatbot.json")
            .then((response) => {
                if (!response.ok) throw new Error("Could not load chatbot.json");
                return response.json();
            })
            .then((data) => setChatbotData(Array.isArray(data.chatbot) ? data.chatbot : []))
            .catch(() => setLoadError(true));
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

    function getAnswer(question) {
        const normalizedQuestion = question.toLowerCase().trim().replace(/[?.!,]/g, "").replace(/\s+/g, " ");
        const match = chatbotData.find((item) =>
            item.question.toLowerCase().trim().replace(/[?.!,]/g, "").replace(/\s+/g, " ") === normalizedQuestion
        );
        if (match) return match.answer;

        const keywordMatch = chatbotData.find((item) => {
            const savedQuestion = item.question.toLowerCase().replace(/[?.!,]/g, "");
            return normalizedQuestion.length > 2 && (savedQuestion.includes(normalizedQuestion) || normalizedQuestion.includes(savedQuestion));
        });
        if (keywordMatch) return keywordMatch.answer;
        if (loadError) return "I couldn't load my knowledge file. Please check that chatbot.json is saved in your project's public folder.";
        return "I’m not sure about that yet. Try asking about mountaineering, alpinism, mountain hazards, climbing equipment, or climbing history.";
    }

    function sendMessage(event) {
        event?.preventDefault();
        const text = userInput.trim();
        if (!text) return;
        const answer = getAnswer(text);
        setMessages((current) => [...current, { type: "user", text }, { type: "bot", text: answer }]);
        setUserInput("");
    }

    return (
        <div className="chatbotRoot">
           
            {isOpen && (
                <section className="chatWindow" role="dialog" aria-label="Alpine Ascent chatbot">
                    <div className="aachatheader">
                        <div><h2 className="aachatheading">Alpine Ascent Assistant</h2><span className="chatSubhead">Your mountain knowledge companion</span></div>
                        <button className="chatClose" type="button" onClick={() => setIsOpen(false)} aria-label="Close chat">×</button>
                    </div>
                    <div className="chatMessages" aria-live="polite">
                        {messages.map((message, index) => (
                            <div className={`chatMessage ${message.type}`} key={`${index}-${message.type}`}>{message.text}</div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <form className="chatForm" onSubmit={sendMessage}>
                        <input className="chatInput" type="text" value={userInput} onChange={(event) => setUserInput(event.target.value)} placeholder="Ask about the mountains..." aria-label="Type your message" />
                        <button className="chatSend" type="submit">Send</button>
                    </form>
                </section>
            )}
            <button className="chatToggle" type="button" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? "Close chatbot" : "Open chatbot"} aria-expanded={isOpen}>
                {isOpen ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8v.5Z" /></svg>
                )}
            </button>
        </div>
    );
}

export { Navbar, Footer };