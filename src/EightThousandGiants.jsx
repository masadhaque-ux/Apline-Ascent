import "./History.css";

export function EightThousandGiants() {
  return (
    <div className="histSubpage">
      <section className="histHero">
        <p className="small">ALPINE ASCENT / HISTORY</p>
        <h1>8,000m Giants</h1>
        <p>
          The extraordinary race to climb the highest mountains on Earth.
        </p>
      </section>

      <section className="histCont">
        <h2>The Himalayan Era</h2>
        <p>
          The twentieth century brought mountaineering into the extreme
          altitude of the Himalaya, where fourteen peaks rise above 8,000
          metres.
        </p>

        <div className="histCard">
          <span>1950</span>
          <h3>Annapurna I</h3>
          <p>
            Maurice Herzog and Louis Lachenal reached the summit of Annapurna
            I, the first successful ascent of an 8,000-metre peak.
          </p>
        </div>

        <div className="histCard">
          <span>1953</span>
          <h3>Mount Everest</h3>
          <p>
            Edmund Hillary and Tenzing Norgay reached the summit of Everest,
            creating one of the most famous moments in climbing history.
          </p>
        </div>
      </section>
    </div>
  );
}
