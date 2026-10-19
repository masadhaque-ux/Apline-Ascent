import { useEffect, useState } from "react";
import { Navbar, Footer } from "./NavbarFooter";
import "./style.css";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { HikingVsAlpinism } from "./HikingVsAlpinism";
import { MountaineeringEssence } from "./MountaineeringEssence";
import { PhilosophyAndCreed } from "./PhilosophyAndCreed";
import { HistoryPage } from "./HistoryPage"
import { PioneeringEra } from "./PioneeringEra";
import { GoldenAgeOfAlpinism } from "./GoldenAgeOfAlpinism";
import { EightThousandGiants } from "./EightThousandGiants";
import { ModernAlpinism } from "./ModernAlpinism";
import { GalleryPage } from "./gallery";
import { GalleryPhotosPage } from "./gallery-photos";
import { GalleryVideosPage } from "./gallery-videos";
import { GalleryAllPage } from "./gallery-all";
import Accessories from "./Accessories";
import CartPage from "./CartPage";
import { TechniquesStaticPage } from "./TechniquesStaticPage";
import { TechniquesCramponsStaticPage } from "./TechniquesCramponsStaticPage";
import { TechniquesCrevasseStaticPage } from "./TechniquesCrevasseStaticPage";
import { TechniquesSelfArrestStaticPage } from "./TechniquesSelfArrestStaticPage";
import { TechniquesStylesStaticPage } from "./TechniquesStylesStaticPage";
import { StoriesMainPage } from "./StoriesMainPage";
import { StoryAconcaguaPage } from "./StoryAconcaguaStaticPage";
import { StoryDenaliPage } from "./StoryDenaliStaticPage";
import { StoryKilimanjaroPage } from "./StoryKilimanjaroStaticPage";
import { StoryMontBlancPage } from "./StoryMontBlancStaticPage"
import { StoryRainierPage } from "./StoryRainierStaticPage"
import { RecordsPage } from "./RecordsStaticPage"
import { RecordEightThousandersPage } from "./RecordEightThousandersStaticPage"
import { RecordMilestonesPage } from "./RecordMilestonesStaticPage"
import { ShelterPage } from "./ShelterPage"
import { HazardsPage } from "./HazardsPage"
import { ClubMapsPage } from "./ClubMapsPage"
import { InnovationPage } from "./InnovationPage"
import { GuidelinesPage } from "./GuidelinesPage"
import { RecordSevenSummitsPage } from "./RecordSevenSummitsStaticPage"
import { RecordSpeedPage } from "./RecordSpeedStaticPage"
import  Sitemap from "./sitemap"

function App() {
    const [currentPage, setCurrentPage] = useState("home");
    const navigateToPage = (page) => {
        if (document.startViewTransition) {
            document.startViewTransition(() => setCurrentPage(page));
        } else {
            setCurrentPage(page);
        }
    };
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
    }, [currentPage]);
    const [cart, setCart] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("alpineCart") || "[]");
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("alpineCart", JSON.stringify(cart));
    }, [cart]);

    const handleAddToCart = (product, quantity = 1) => {
        setCart((currentCart) => {
            const existing = currentCart.find(
                (item) => String(item.id) === String(product.id)
            );
            if (existing) {
                return currentCart.map((item) =>
                    String(item.id) === String(product.id)
                        ? { ...item, quantity: Number(item.quantity || 1) + Number(quantity || 1) }
                        : item
                );
            }
            return [...currentCart, { ...product, quantity: Number(quantity || 1) }];
        });
        navigateToPage("cart");
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    const handleRemoveFromCart = (productId) => {
        setCart((currentCart) =>
            currentCart.filter((item) => String(item.id) !== String(productId))
        );
    };

    const handleQuantityChange = (productId, quantity) => {
        setCart((currentCart) =>
            currentCart.map((item) =>
                String(item.id) === String(productId)
                    ? { ...item, quantity: Math.max(1, Number(quantity) || 1) }
                    : item
            )
        );
    };

    const cartCount = cart.reduce(
        (total, item) => total + Number(item.quantity || 1),
        0
    );

    return (
        <>
            <Navbar
                currentPage={currentPage}
                setCurrentPage={navigateToPage}
                cartCount={cartCount}
            />

            <main className="pageTransition" key={currentPage}>
                {currentPage === "home" && <HomePage setCurrentPage={navigateToPage} />}

                {currentPage === "about" && <AboutPage />}

                {currentPage === "about-tiers" && ( <HikingVsAlpinism />)}

                {currentPage === "about-essence" && (<MountaineeringEssence />)}

                {currentPage === "about-philosophy" && (<PhilosophyAndCreed />)}

              {currentPage === "history" && <HistoryPage />}

                    {currentPage === "pioneering" && <PioneeringEra />}

                    {currentPage === "golden-age" && <GoldenAgeOfAlpinism />}

                    {currentPage === "8000-giants" && <EightThousandGiants />}

                    {currentPage === "modern-alpinism" && <ModernAlpinism />}
                    {currentPage === "gallery" && <GalleryPage />}
                    {currentPage === "gallery-photos" && <GalleryPhotosPage />}
                    {currentPage === "gallery-videos" && <GalleryVideosPage />}
                    {currentPage === "gallery-all" && <GalleryAllPage />}
                    {currentPage === "accessories" && (
                        <Accessories
                            onAddToCart={handleAddToCart}
                            onGoToCart={() => setCurrentPage("cart")}
                        />
                    )}
                    {currentPage === "cart" && (
                        <CartPage
                            cart={cart}
                            onRemove={handleRemoveFromCart}
                            onQuantityChange={handleQuantityChange}
                            onNavigate={setCurrentPage}
                        />
                    )}
                    {currentPage === "techniques" && (
                        <TechniquesStaticPage setCurrentPage={navigateToPage} />
                    )}
                    {currentPage === "techniques-crampons" && (
                        <TechniquesCramponsStaticPage
                            setCurrentPage={navigateToPage}
                        />
                    )}

                    {currentPage === "techniques-crevasse" && (
                        <TechniquesCrevasseStaticPage
                            setCurrentPage={navigateToPage}
                        />
                    )}
                    {currentPage === "techniques-self-arrest" && (
                        <TechniquesSelfArrestStaticPage
                            setCurrentPage={navigateToPage}
                        />
                    )}
                    {currentPage === "techniques-styles" && (
                        <TechniquesStylesStaticPage
                            setCurrentPage={navigateToPage}
                        />
                    )}
                    {currentPage === "stories" && (
                        <StoriesMainPage onNavigate={setCurrentPage} />
                    )}
                    {currentPage === "story-aconcagua" && (
                        <StoryAconcaguaPage onNavigate={setCurrentPage} />
                    )}
                    {currentPage === "story-denali" && (
                        <StoryDenaliPage onNavigate={setCurrentPage} />
                    )}
                    {currentPage === "story-kilimanjaro" && (
                        <StoryKilimanjaroPage
                            onNavigate={setCurrentPage}
                        />
                    )}
                    {currentPage === "story-montblanc" && (
                        <StoryMontBlancPage
                            onNavigate={setCurrentPage}
                        />
                    )}
                    {currentPage === "story-rainier" && (
                        <StoryRainierPage
                            onNavigate={setCurrentPage}
                        />
                    )}
                    {currentPage === "climbing-record" && (
                        <RecordsPage
                            onNavigate={setCurrentPage}
                        />
                    )}
                    {currentPage === "eight-record" && (
                        <RecordEightThousandersPage
                            onNavigate={setCurrentPage}
                        />
                    )}
                    {currentPage === "record-milestone" && (
                        <RecordMilestonesPage
                            onNavigate={setCurrentPage}
                        />
                    )}
                     {currentPage === "record-sevensummit" && (
                        <RecordSevenSummitsPage
                            onNavigate={setCurrentPage}
                        />
                    )}
                    {currentPage === "record-speed" && (
                        <RecordSpeedPage
                            onNavigate={setCurrentPage}
                        />
                    )}
                    {currentPage === "shelter-page" && (
                        <ShelterPage
                            onNavigate={setCurrentPage}
                        />
                    )}
                     {currentPage === "hazards-page" && (
                        <HazardsPage
                            onNavigate={setCurrentPage}
                        />
                    )}
                    {currentPage === "clubmap-page" && (
                        <ClubMapsPage
                            onNavigate={setCurrentPage}
                        />
                    )}
                    {currentPage === "innovation-page" && (
                        <InnovationPage
                            onNavigate={setCurrentPage}
                        />
                    )}
                     {currentPage === "guidelines-page" && (
                        <GuidelinesPage
                            onNavigate={setCurrentPage}
                        />
                    )}
                     {currentPage === "sitemap-page" && (
                        <Sitemap
                            onNavigate={setCurrentPage}
                        />
                    )}
                    
            </main>


            <Footer setCurrentPage={navigateToPage} />
        </>
    );
}

export default App;