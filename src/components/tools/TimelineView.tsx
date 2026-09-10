import { TIMELINE } from "@/content/timeline";

const TODAY = "2026-09-09";

export function TimelineView() {
  return (
    <ol className="timeline" style={{ listStyle: "none", paddingLeft: "1.4rem" }}>
      {TIMELINE.map((event) => {
        const cls =
          event.date === TODAY ? "hoje" : event.date < TODAY ? "passado" : "";
        const [y, m, d] = event.date.split("-");
        return (
          <li key={event.date + event.label} className={`tl-item ${cls}`}>
            <p style={{ margin: 0 }}>
              <strong>
                {d}/{m}/{y}
              </strong>
              {event.date === TODAY ? " · hoje" : ""}
              {" - "}
              {event.label}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
