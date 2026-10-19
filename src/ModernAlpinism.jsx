import "./history.css";

export function ModernAlpinism() {
  return (
    <div className="histSubpage">
      <section className="histHero">
        <p className="small">ALPINE ASCENT / HISTORY</p>
        <h1>Modern Alpinism & K2</h1>
        <p>
          A new generation of climbers continues to push the limits of
          high-altitude exploration.
        </p>
      </section>

      <section className="histCont">
        <h2>The Modern Era</h2>
        <p>
          Modern alpinism focuses on lighter equipment, difficult technical
          routes, winter ascents and climbing with minimal support.
        </p>

        <div className="histCard">
          <span>1978</span>
          <h3>Everest Without Oxygen</h3>
          <p>
            Reinhold Messner and Peter Habeler demonstrated that Everest could
            be climbed without supplemental oxygen.
          </p>
        </div>

        <div className="histCard">
          <span>2021</span>
          <h3>Winter K2 Summit</h3>
          <p>
            A Nepalese team achieved the first successful winter ascent of K2,
            completing one of the greatest remaining challenges in Himalayan
            mountaineering.
          </p>
        </div>
      </section>
    </div>
  );
}
