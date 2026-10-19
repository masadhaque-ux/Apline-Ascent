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
            <div className="nav-container">

                <a
                    href="#"
                    className="logo"
                    onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage("home");
                    }}
                >
                    <span className="logo-icon">
                        <img
                            src={`${import.meta.env.BASE_URL}src/assets/images/logo3.svg`}
                            alt="Alpine Ascent Logo"
                        />
                    </span>

                    <span id="site-name">
                        Alpine <span id="span2">Ascent</span>
                    </span>
                </a>

                {/* Visitor Counter */}
                <div className="visitor-counter">
                    <span className="visitor-icon">👥</span>
                    <div className="visitor-details">
                        <span className="visitor-label">Visitors</span>
                        <strong id="para">{visitorCount.toLocaleString()}</strong>
                    </div>
                </div>

                <input type="checkbox" id="menu-toggle" />

                <label htmlFor="menu-toggle" className="menu-button">
                    ☰
                </label>

                {/* KEEP YOUR EXISTING nav-menu HERE */}


                <nav className="nav-menu">

                    {/* Home */}
                    <a
                        href="#"
                        className={`nav-link ${
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


                    {/* About */}
                    <div className="dropdown">

                        <a href="#" className={`nav-link ${currentPage === "about" ? "active" : "" }`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("about");
                            }}
                        >
                            <button>About</button>
                        </a>

                        <div className="dropdown-menu">

                            <a href="#" className={`nav-link ${currentPage === "about-essence" ? "active" : "" }`}
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
                            className={`nav-link ${currentPage === "about-tiers" ? "active" : ""}`}
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

                        <a href="#" className={`nav-link ${currentPage === "about-philosophy" ? "active" : ""}`}
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
        className={`nav-link ${currentPage === "history" ? "active" : ""}`}
        onClick={(e) => {
            e.preventDefault();
            setCurrentPage("history");
        }}
    >
        <button>History</button>
    </a>

    <div className="dropdown-menu">

        <a
            href="#"
            className={`nav-link ${currentPage === "pioneering" ? "active" : ""}`}
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
            className={`nav-link ${currentPage === "golden-age" ? "active" : ""}`}
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
            className={`nav-link ${currentPage === "8000-giants" ? "active" : ""}`}
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
            className={`nav-link ${currentPage === "modern-alpinism" ? "active" : ""}`}
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

                    {/* Techniques */}
                    <div className="dropdown">

                        <a
                            href="#"
                            className={`nav-link ${currentPage === "techniques" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("techniques");
                            }}
                        >
                            <button>Techniques</button>
                        </a>

                        <div className="dropdown-menu">

                            <a href="#"
                            className={`nav-link ${currentPage === "techniques-styles" ? "active" : ""}`}
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
                            className={`nav-link ${currentPage === "techniques-crampons" ? "active" : ""}`}
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
                            className={`nav-link ${currentPage === "techniques-self-arrest" ? "active" : ""}`}
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
                            className={`nav-link ${currentPage === "techniques-crevasse" ? "active" : ""}`}
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


                    {/* Gallery */}
                    <div className="dropdown">
                        <a 
                        href="#"
                        className={`nav-link ${currentPage === "gallery" ? "active" : ""}`}
                         onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage("gallery");
                        }}
                         >
                            <button>Gallery</button>
                            </a>
                       <div className="dropdown-menu">
                       <a
                            href="#"
                            className={`nav-link ${currentPage === "gallery-photos" ? "active" : ""}`}
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
                            className={`nav-link ${currentPage === "gallery-videos" ? "active" : ""}`}
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
                        
                        <a
                            href="#"
                            className={`nav-link ${currentPage === "gallery-all" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("gallery-all");
                            }}
                        >
                            <strong>All Multimedia</strong>
                            <small>
                                All Photos & Videos
                            </small>
                        </a>
                        
                        </div>
                        </div>

                    {/* Accessories */}
                    <div className="dropdown2">
                        <a 
                        href="#"
                        className={`nav-link ${currentPage === "accessories" ? "active" : ""}`}
                         onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage("accessories");
                        }}
                         >
                            <button>Store</button>
                            </a>
                    </div>


                    {/* Stories */}
                    <div className="dropdown">

                        <a href="#"
                        className={`nav-link ${currentPage === "stories" ? "active" : ""}`}
                         onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage("stories");
                        }}
                         >
                            <button>Stories</button>
                        </a>

                        <div className="dropdown-menu">

                            <a  href="#"
                        className={`nav-link ${currentPage === "story-aconcagua" ? "active" : ""}`}
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
                            className={`nav-link ${currentPage === "story-denali" ? "active" : ""}`}
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
                            className={`nav-link ${currentPage === "story-kilimanjaro" ? "active" : ""}`}
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
                            className={`nav-link ${currentPage === "story-montblanc" ? "active" : ""}`}
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

                            <a href="#"
                            className={`nav-link ${currentPage === "story-rainier" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("story-rainier");
                        }}
                         >
                                <strong>Rainier Story</strong>
                                <small>
                                    Highest Peak in Washington and the Cascade Range
                                </small>
                            </a>

                        </div>

                    </div>


                    {/* Records */}
                     <div className="dropdown">

                        <a href="#"
                            className={`nav-link ${currentPage === "climbing-record" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("climbing-record");
                        }}
                         >
                            <button>Records</button>
                        </a>

                        <div className="dropdown-menu">

                            <a href="#"
                            className={`nav-link ${currentPage === "eight-record" ? "active" : ""}`}
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
                            className={`nav-link ${currentPage === "record-milestone" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage("record-milestone");
                        }}
                         >
                                <strong>Milestone Ascents</strong>
                                <small>
                                    Age-related and other milestone
                                </small>
                            </a>

                             <a href="#" className={`nav-link ${currentPage === "record-sevensummit" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); setCurrentPage("record-sevensummit"); }}>
                                <strong>Seven Summit Record</strong>
                                <small>Highest Peak of Each Continent</small>
                            </a>

                            <a href="#" className={`nav-link ${currentPage === "record-speed" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); setCurrentPage("record-speed"); }}>
                                <strong>Speed Record</strong>
                                <small>Speed records depend on route</small>
                            </a>

                        </div>

                    </div>


                    {/* More */}
                    <div className="dropdown">

                        <a href="#" className={`nav-link ${currentPage === "shelter-page" ? "active" : ""}`} onClick={(e) => { e.preventDefault(); setCurrentPage("shelter-page"); }}>
                            <button>More</button>
                        </a>

                        <div className="dropdown-menu">

                            <a href="#"
                            className={`nav-link ${currentPage === "shelter-page" ? "active" : ""}`}
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
                            className={`nav-link ${currentPage === "hazards-page" ? "active" : ""}`}
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
                            className={`nav-link ${currentPage === "clubmap-page" ? "active" : ""}`}
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
                            className={`nav-link ${currentPage === "innovation-page" ? "active" : ""}`}
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
                            className={`nav-link ${currentPage === "guidelines-page" ? "active" : ""}`}
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

                <div className="account-cart-options">
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
                    <div className="account-popup-overlay" onClick={() => setShowAccount(false)}>
                        <div className="account-popup" role="dialog" aria-modal="true" aria-label={showRegister ? "Register" : "Sign in"} onClick={(e) => e.stopPropagation()}>
                            <button className="popup-close" type="button" onClick={() => setShowAccount(false)} aria-label="Close popup">×</button>
                            <h2>{showRegister ? "Create Account" : "Sign In"}</h2>
                            <form onSubmit={(e) => { e.preventDefault(); alert(showRegister ? "Registration form submitted. Connect this form to a backend to create an account." : "Sign-in form submitted. Connect this form to a backend to verify your account."); }}>
                                {showRegister && 
                                <input type="text" placeholder="Full name" aria-label="Full name" required />}
                                <input type="text" placeholder="Username or email" aria-label="Username or email" required />
                                <input type="password" placeholder="Password" aria-label="Password" required />
                                {showRegister && 
                                <input type="password" placeholder="Confirm password" aria-label="Confirm password" required />}
                                <button className="popup-submit" type="submit">{showRegister ? "Register" : "Sign In"}</button>
                            </form>
                            <p className="popup-register-text">
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
        <div className="date-time-ticker" aria-label="Current date and time" tabIndex="0">
            <div className="ticker-text">
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
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-brand">

                    <div className="footer-logo">

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


                <div className="footer-column">

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


                <div className="footer-column">

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

                </div>


                <div className="footer-column newsletter">

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


            <div className="footer-bottom">
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
        <div className="aa-chatbot-root">
           
            {isOpen && (
                <section className="aa-chat-window" role="dialog" aria-label="Alpine Ascent chatbot">
                    <div className="aa-chat-header">
                        <div><h2 className="aa-chat-heading">Alpine Ascent Assistant</h2><span className="aa-chat-subheading">Your mountain knowledge companion</span></div>
                        <button className="aa-chat-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close chat">×</button>
                    </div>
                    <div className="aa-chat-messages" aria-live="polite">
                        {messages.map((message, index) => (
                            <div className={`aa-chat-message ${message.type}`} key={`${index}-${message.type}`}>{message.text}</div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <form className="aa-chat-form" onSubmit={sendMessage}>
                        <input className="aa-chat-input" type="text" value={userInput} onChange={(event) => setUserInput(event.target.value)} placeholder="Ask about the mountains..." aria-label="Type your message" />
                        <button className="aa-chat-send" type="submit">Send</button>
                    </form>
                </section>
            )}
            <button className="aa-chat-toggle" type="button" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? "Close chatbot" : "Open chatbot"} aria-expanded={isOpen}>
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