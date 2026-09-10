import { Link } from "@tanstack/react-router";
import { TOC } from "@/content/toc";

export function TocNav({
  currentHref,
  onNavigate,
}: {
  currentHref: string;
  onNavigate?: () => void;
}) {
  return (
    <ol>
      {TOC.map((item) => {
        if (item.kind === "part") {
          return (
            <li key={item.id} className="parte">
              {item.label}
            </li>
          );
        }
        const active = currentHref === item.href;
        return (
          <li key={item.id}>
            <Link
              to={item.href as never}
              className={active ? "ativo" : undefined}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
