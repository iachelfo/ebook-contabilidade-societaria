import { Link } from "@tanstack/react-router";
import { addendaForChapter } from "@/content/atualizacoes";

export function AddendaBox({ chapter }: { chapter: number }) {
  const items = addendaForChapter(chapter);
  if (!items.length) return null;
  return (
    <aside className="box atencao addenda">
      <span className="rotulo">Addenda de 09/09/2026</span>
      <p>
        O texto do capítulo foi fechado em 08/09/2026. O que segue não substitui o
        raciocínio original: são fatos supervenientes, com fonte, para o leitor
        reconferir antes de aplicar a conclusão.
      </p>
      {items.map((item) => (
        <p key={item.id}>
          <strong>{item.title}.</strong> {item.summary}{" "}
          <a className="disp" href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
            {item.sourceLabel}
          </a>
          .
        </p>
      ))}
      <p>
        <Link to="/atualizacoes">Ver todas as addenda e a justificativa de cada uma</Link>
      </p>
    </aside>
  );
}
