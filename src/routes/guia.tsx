import { createFileRoute, Link } from "@tanstack/react-router";
import { HtmlContent } from "@/components/reader/HtmlContent";
import { DeadlineBanner } from "@/components/reader/DeadlineBanner";
import { htmlGuia } from "@/content/load";

export const Route = createFileRoute("/guia")({ component: Guia });

function Guia() {
  return (
    <>
      <DeadlineBanner />
      <HtmlContent html={htmlGuia} />
      <p>
        <Link to="/capitulo/$n" params={{ n: "1" }}>
          Seguir para o capítulo 1
        </Link>
      </p>
    </>
  );
}
