import React from 'react';
import 'src/other.css';

export const RecordWinterStaticPage = ({ onNavigate = () => {} }) => {
    return (
        <>
<section className="hero"><div className="hero-inner"><div className="eyebrow">World record archive</div><h1>Winter Feats</h1><p>Winter ascents demand specialized cold-weather systems, risk management, and careful assessment of weather and snow conditions.</p></div></section>
<main><div className="container"><div className="breadcrumb"><a onClick={() => onNavigate("records")} href="#">Records</a> / Winter Feats</div><div className="content-grid"><section className="content-card"><span className="tag">Winter climbing</span><h2>Winter Feats</h2><p>Winter ascents demand specialized cold-weather systems, risk management, and careful assessment of weather and snow conditions.</p><h3>How to evaluate a record</h3><ul><li>Confirm the exact route, summit, and definition being used</li><li>Check the date and the original reporting source</li><li>Distinguish a supported expedition from an unsupported ascent</li><li>Look for independent verification and consistent timing rules</li><li>Note whether the record is disputed, updated, or superseded</li></ul><div className="callout"><strong>Accuracy note</strong><br />Record holders and statistics can change. Verify current claims with recognized mountaineering organizations and credible reporting before citing them as definitive.</div></section><aside><img style={{height: "300px", borderRadius: "14px", border: "1px solid var(--line)"}} src={`${import.meta.env.BASE_URL}src/assets/images/mountain_hazards_1790702893898.jpg`} alt="Winter Feats mountaineering" /><div className="content-card"><h2>Record categories</h2><div className="pills"><a onClick={() => onNavigate("record-eight-thousanders")} href="#">14 Eight-Thousanders</a><a onClick={() => onNavigate("record-seven-summits")} href="#">Seven Summits</a><a onClick={() => onNavigate("record-speed")} href="#">Speed Ascents</a><a onClick={() => onNavigate("record-milestones")} href="#">Milestone Ascents</a></div><a className="link" onClick={() => onNavigate("records")} href="#">← All records</a></div></aside></div></div></main>
        </>
    );
};

export default RecordWinterStaticPage;
