import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import { SIMPLES_DEADLINE } from "@/content/atualizacoes";
import { useReaderStore } from "@/lib/reader-store";

function daysLeft() {
  return Math.ceil((SIMPLES_DEADLINE.getTime() - Date.now()) / 86_400_000);
}

export function WelcomeCover() {
  const router = useRouter();
  const enterMaterial = useReaderStore((s) => s.enterMaterial);
  const days = daysLeft();

  const enter = (href?: string) => {
    enterMaterial();
    if (href) router.history.push(href);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Enter" || event.metaKey || event.ctrlKey || event.altKey) return;
      const t = event.target as HTMLElement | null;
      if (t && (t.tagName === "BUTTON" || t.tagName === "A" || t.isContentEditable)) return;
      event.preventDefault();
      enterMaterial();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [enterMaterial]);

  return (
    <div className="ebook entrada">
      <a href="#entrada-acoes" className="btn ebook-skip">
        Ir para entrar no material
      </a>
      <article className="entrada-placa" aria-labelledby="entrada-titulo">
        <div className="entrada-cluster">
        <header className="entrada-topo stagger-item">
          <p className="entrada-marca">
            ChelfoIA <span>· eBook da disciplina PRC0004</span>
          </p>
          <p className="entrada-kicker">
            MBA Planejamento Tributário e Recuperação de Créditos · BSSP Centro Educacional
          </p>
        </header>

        <div className="entrada-miolo">
          <div className="entrada-bloco">
            <p className="destaque-aula stagger-item">
              <strong>AULA 1</strong>
              <span>Prof. Carlos Chelfo</span>
            </p>
            <h1 id="entrada-titulo" className="stagger-item">
              Planejamento e Aspectos Fiscais da Contabilidade Societária
            </h1>
            <p className="entrada-lead stagger-item">
              Da ponte de neutralidade da Lei 12.973/2014 à virada do consumo da LC 214/2025.
              Material completo da disciplina: para ler antes, consultar durante e usar depois.
            </p>

            <div className="entrada-acoes stagger-item" id="entrada-acoes">
              <button className="btn-primario" type="button" onClick={() => enter()}>
                Abrir o material
              </button>
              <button className="btn-secundario" type="button" onClick={() => enter("/guia")}>
                Começar pelo guia
              </button>
              <button className="btn-texto" type="button" onClick={() => enter("/capitulo/1")}>
                Capítulo 1
              </button>
            </div>
          </div>

          <ol className="entrada-indice stagger-item">
            <li>
              <span>I</span> Ponte contábil-fiscal
            </li>
            <li>
              <span>II</span> Virada do consumo
            </li>
            <li>
              <span>III</span> Execução
            </li>
          </ol>
        </div>

        <footer className="entrada-rodape stagger-item">
          {days >= 0 ? (
            <p className="entrada-prazo">
              Opção pelo Simples 2027 e pelo regime regular de IBS/CBS fecha em{" "}
              <strong>
                {days} dia{days === 1 ? "" : "s"}
              </strong>{" "}
              · 30/09/2026 · Resolução CGSN nº 186/2026
            </p>
          ) : null}
          <p className="entrada-autor">
            ChelfoIA · versão 1.1 em 10/09/2026 · fechado em 08/09/2026
            · 15 capítulos · 30 h
          </p>
          <p className="entrada-prazo">
            Material educacional, não parecer. Interpretações e memórias de cálculo
            não substituem análise individual nem a redação vigente.
          </p>
        </footer>
        </div>
      </article>
    </div>
  );
}
