import "./History.css";

export function GoldenAgeOfAlpinism() {
  return (
    <div className="histSubpage">
      <section className="histHero">
        <p className="small">ALPINE ASCENT / HISTORY</p>
        <h1>Golden Age of Alpinism</h1>
        <p>
          A remarkable period of exploration and first ascents in the European
          Alps.
        </p>
      </section>

      <section className="histCont">
        <h2>The Golden Age</h2>
        <p>
          Between the middle of the nineteenth century and the early years of
          modern climbing, mountaineers completed many of the major Alpine
          first ascents.
        </p>

        <div className="histCard">
          <span>1865</span>
          <h3>Matterhorn Conquered</h3>
          <p>
            Edward Whymper and his team completed the first ascent of the
            Matterhorn, one of the most iconic peaks in the Alps.
          </p>
        </div>

        <div className="histCard">
          <span>LEGACY</span>
          <h3>New Routes and Techniques</h3>
          <p>
            The period produced new climbing routes, better equipment and a
            growing culture of exploration that influenced generations of
            alpinists.
          </p>
        </div>
      </section>
    </div>
  );
}
