import "./History.css";

function PioneeringEra() {
  return (
    <div className="history-subpage">
      <section className="history-hero">
        <p className="eyebrow">ALPINE ASCENT / HISTORY</p>
        <h1>Pioneering Era</h1>
        <p>
          The early explorers who transformed mountain climbing into a
          disciplined pursuit.
        </p>
      </section>

      <section className="history-content">
        <h2>The Beginning of Alpinism</h2>
        <p>
          The late eighteenth and nineteenth centuries saw the first systematic
          exploration of the Alps. Climbers, scientists and guides began
          attempting peaks that had previously been considered inaccessible.
        </p>

        <div className="history-card">
          <span>1786</span>
          <h3>First Ascent of Mont Blanc</h3>
          <p>
            Jacques Balmat and Michel-Gabriel Paccard reached the summit of
            Mont Blanc, establishing one of the earliest landmarks of modern
            mountaineering.
          </p>
        </div>

        <div className="history-card">
          <span>1854</span>
          <h3>Pioneering the Alps</h3>
          <p>
            Exploration expanded across the Alps as climbers developed new
            routes, techniques and approaches to difficult mountain terrain.
          </p>
        </div>
      </section>
    </div>
  );
}
export { PioneeringEra}
