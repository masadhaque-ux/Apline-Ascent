import { useState } from "react";
import milestones from "./history.json";
import "./history.css";

function HistoryPage() {
  const [selected, setSelected] = useState(milestones[0]);

  return (
    <div className="history-page">

      <section className="mountaineering-section">
        <div className="mountaineering-content">
          <p className="orange-top">Chronicles of Human</p>

          <span className="mountaineering-label">
            History of Mountaineering
          </span>

          <p className="label-white">
            From the 1786 conquest of Mont Blanc to the
            <span style={{ color: "var(--orange)" }}>
              <strong>
                {" "}2021 winter triumph on K2, explore the seminal climbs
                that reshaped human endurance.
              </strong>
            </span>
          </p>

         

        </div>
      </section>

      <section className="history-hero">

        <p className="history-top-orange">
          ALPINE ASCENT / HISTORY
        </p>

        <h1>Historical Milestones</h1>

        <p>
          From the first Alpine ascents to the conquest of the world's
          highest peaks, explore the achievements that shaped modern
          mountaineering.
        </p>

      </section>

      <section className="milestones-section">

        <div className="milestones-list">

          {milestones.map((item) => (
            <button
              className={`milestone-box ${
                selected.year === item.year ? "active" : ""
              }`}
              key={item.year}
              onClick={() => setSelected(item)}
            >

              <span className="milestone-year">
                {item.year}
              </span>

              <span className="milestone-title">
                {item.title}
              </span>

              <span className="milestone-peak">
                {item.peak}
              </span>

            </button>
          ))}

        </div>

        <div className="milestone-detail">

          <p className="detail-label">
            {selected.era}
          </p>

          <h2>{selected.title}</h2>

          <div className="detail-year">
            {selected.year}
          </div>

          <div className="detail-info">

            <div>
              <span>PEAK</span>
              <strong>{selected.peak}</strong>
            </div>

            <div>
              <span>LOCATION</span>
              <strong>{selected.location}</strong>
            </div>

            <div>
              <span>CLIMBERS</span>
              <strong>{selected.climbers}</strong>
            </div>

          </div>

          <p className="detail-text">
            {selected.details}
          </p>

        </div>

      </section>

    </div>
  );
}

export { HistoryPage };
