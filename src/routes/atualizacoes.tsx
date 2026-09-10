import { createFileRoute, Link } from "@tanstack/react-router";
import { ADDENDA } from "@/content/atualizacoes";

export const Route = createFileRoute("/atualizacoes")({ component: Atualizacoes });

function Atualizacoes() {
  return (
    <section>
      <span className="cap-num">Addenda editorial</span>
      <h2>O que mudou depois do fechamento de 08/09/2026</h2>
      <p className="lead">
        O texto dos quinze capítulos não foi reescrito, salvo a correção da
        decomposição 8,8%/17,7% no capítulo 10 — erro material, não atualização
        de calendário. Cada item abaixo é um acréscimo datado, com a fonte, o
        capítulo atingido e a razão da inclusão. A regra do próprio eBook —
        nenhuma afirmação normativa sem conferência na fonte oficial — é a que
        autoriza a addenda.
      </p>
      {ADDENDA.map((item) => (
        <article key={item.id} className="box atencao addenda">
          <span className="rotulo">{item.date.split("-").reverse().join("/")}</span>
          <h3 style={{ marginTop: 0 }}>{item.title}</h3>
          <p>{item.summary}</p>
          <p>
            <strong>Por que entra neste material.</strong> {item.why}
          </p>
          <p>
            Capítulos:{" "}
            {item.chapters.map((n, i) => (
              <span key={n}>
                {i > 0 ? ", " : ""}
                <Link to={`/capitulo/${n}` as never}>capítulo {n}</Link>
              </span>
            ))}
            . Fonte:{" "}
            <a className="disp" href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
              {item.sourceLabel}
            </a>
            .
          </p>
        </article>
      ))}
    </section>
  );
}
