import { createFileRoute, Link } from "@tanstack/react-router";
import { HtmlContent } from "@/components/reader/HtmlContent";
import { htmlEncerramento, htmlRodape } from "@/content/load";

export const Route = createFileRoute("/encerramento")({ component: Encerramento });

function Encerramento() {
  return (
    <>
      <HtmlContent html={htmlEncerramento} />
      <p>
        <Link to="/normas">Abrir o índice de normas com os links que faltavam no original</Link>
        {" · "}
        <Link to="/atualizacoes">Addenda de 09/09/2026</Link>
      </p>
      <HtmlContent html={htmlRodape} />
    </>
  );
}
