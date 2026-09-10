import { createFileRoute, Link } from "@tanstack/react-router";
import { DeadlineBanner } from "@/components/reader/DeadlineBanner";
import { HtmlContent } from "@/components/reader/HtmlContent";
import { htmlCapa, htmlRodape } from "@/content/load";
import { CHAPTERS } from "@/content/toc";
import { ADDENDA } from "@/content/atualizacoes";
import { useReaderStore } from "@/lib/reader-store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const reopenCover = useReaderStore((s) => s.reopenCover);
  return (
    <>
      <HtmlContent html={htmlCapa} />
      <p className="remissao" style={{ marginTop: "-0.4rem" }}>
        Autor: <strong>Carlos Andre Moreira Chelfo</strong> · BSSP Centro Educacional ·
        disciplina PRC0004. Texto fechado em 08/09/2026, com addenda editorial em
        09/09/2026.{" "}
        <button type="button" className="link-quiet" onClick={reopenCover}>
          Ver a capa de abertura
        </button>
      </p>
      <DeadlineBanner />
      <div className="cover-grid">
        <Link to="/guia" className="cover-card">
          <span className="k">Comece aqui</span>
          <h3>Como usar este material</h3>
          <p>Calibragem, convenção visual e roteiro da aula de três horas.</p>
        </Link>
        <Link to="/capitulo/$n" params={{ n: "1" }} className="cover-card">
          <span className="k">Leitura</span>
          <h3>Abrir o capítulo 1</h3>
          <p>Do RTT à neutralidade condicionada do art. 58 da Lei 12.973/2014.</p>
        </Link>
        <Link to="/ferramentas" className="cover-card">
          <span className="k">Execução</span>
          <h3>Calculadoras e calendário</h3>
          <p>Precificação por fora, alíquota efetiva e linha do tempo com o marcador de hoje.</p>
        </Link>
        <Link to="/atualizacoes" className="cover-card">
          <span className="k">Addenda</span>
          <h3>{ADDENDA.length} atualizações após o fechamento</h3>
          <p>Correção 17,7%/8,8%, Simples, ADI da LC 227, split payment, 27,91% e IRRF de dividendos.</p>
        </Link>
      </div>
      <h2>Os quinze capítulos</h2>
      <div className="cover-grid">
        {CHAPTERS.map((ch, i) => (
          <Link key={ch.id} to={ch.href as never} className="cover-card">
            <span className="k">
              Capítulo {i + 1}
              {ch.minutes ? ` · ${ch.minutes}` : ""}
            </span>
            <h3>{ch.label}</h3>
          </Link>
        ))}
      </div>
      <HtmlContent html={htmlRodape} />
    </>
  );
}
