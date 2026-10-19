import { useState } from "react";
import milestones from "./history.json";
import "./history.css";

function HistoryPage() {
  const [selected, setSelected] = useState(milestones[0]);

  return (
    <div className="histPage">

      <section className="mountSec">
        <div className="mountCont">
          <p className="orgTop">Chronicles of Human</p>

          <span className="mountLabel">
            History of Mountaineering
          </span>

          <p className="labelWhite">
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

      <section className="histHero">

        <p className="histTopOrg">
          ALPINE ASCENT / HISTORY
        </p>

        <h1>Historical Milestones</h1>

        <p>
          From the first Alpine ascents to the conquest of the world's
          highest peaks, explore the achievements that shaped modern
          mountaineering.
        </p>

      </section>

      <section className="milesSec">

        <div className="milesList">

          {milestones.map((item) => (
            <button
              className={`mileBox ${
                selected.year === item.year ? "active" : ""
              }`}
              key={item.year}
              onClick={() => setSelected(item)}
            >

              <span className="mileYear">
                {item.year}
              </span>

              <span className="mileTitle">
                {item.title}
              </span>

              <span className="milePeak">
                {item.peak}
              </span>

            </button>
          ))}

        </div>

        <div className="mileDetail">

          <p className="detailLabel">
            {selected.era}
          </p>

          <h2>{selected.title}</h2>

          <div className="detailYear">
            {selected.year}
          </div>

          <div className="detailInfo">

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

          <p className="detailText">
            {selected.details}
          </p>

        </div>

      </section>

    </div>
  );
}

export { HistoryPage };
