import { Link } from "@tanstack/react-router";

export function Pager({
  prev,
  next,
}: {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}) {
  return (
    <nav
      aria-label="Capítulos adjacentes"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0.8rem",
        marginTop: "2.8rem",
        paddingTop: "1.4rem",
        borderTop: "1px solid var(--borda)",
      }}
    >
      {prev ? (
        <Link to={prev.href as never} className="cover-card" style={{ margin: 0 }}>
          <span className="k">Anterior</span>
          <h3>{prev.label}</h3>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link to={next.href as never} className="cover-card" style={{ margin: 0 }}>
          <span className="k">Seguinte</span>
          <h3>{next.label}</h3>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
