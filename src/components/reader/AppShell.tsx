import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { WelcomeCover } from "./WelcomeCover";
import { TocNav } from "./TocNav";
import { SearchDialog } from "./SearchDialog";
import {
  CORPO_LABEL,
  TEMA_LABEL,
  resolvedTema,
  useReaderStore,
} from "@/lib/reader-store";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const tema = useReaderStore((s) => s.tema);
  const corpo = useReaderStore((s) => s.corpo);
  const cycleTema = useReaderStore((s) => s.cycleTema);
  const cycleCorpo = useReaderStore((s) => s.cycleCorpo);
  const hydrate = useReaderStore((s) => s.hydrate);
  const entered = useReaderStore((s) => s.entered);
  const ready = useReaderStore((s) => s.ready);
  const setLastPath = useReaderStore((s) => s.setLastPath);
  const openedQuizzes = useReaderStore((s) => s.openedQuizzes);
  const [sumario, setSumario] = useState(false);
  const [busca, setBusca] = useState(false);
  const [prefersDark, setPrefersDark] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => setPrefersDark(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const resolved = resolvedTema(tema, prefersDark);
    const root = document.documentElement;
    if (tema === "sistema") root.removeAttribute("data-tema");
    else root.setAttribute("data-tema", resolved);
    if (corpo === "normal") root.removeAttribute("data-corpo");
    else root.setAttribute("data-corpo", corpo);
  }, [tema, corpo, prefersDark]);

  useEffect(() => {
    setLastPath(pathname);
    setSumario(false);
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (el.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, setLastPath]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const t = event.target as HTMLElement | null;
      const typing = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
      if (typing) return;
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setBusca(true);
      }
      if (event.key === "/" && !event.metaKey && !event.ctrlKey) {
        event.preventDefault();
        setBusca(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const printAll = () => {
    document.querySelectorAll("details").forEach((d) => {
      d.open = true;
    });
    window.print();
  };

  const expandQuizzes = () => {
    const list = Array.from(document.querySelectorAll<HTMLDetailsElement>("details.quiz"));
    const open = list.some((d) => !d.open);
    list.forEach((d) => {
      d.open = open;
    });
  };

  if (!ready || !entered) {
    return <WelcomeCover />;
  }

  return (
    <div className="ebook min-h-dvh">
      <a href="#conteudo" className="btn ebook-skip">
        Ir para o conteúdo
      </a>
      <div className="topo no-print">
        <div className="topo-in">
          <Link to="/" className="marca-topo" style={{ textDecoration: "none" }}>
            ChelfoIA <span>· eBook da disciplina</span>
          </Link>
          <nav className="topo-nav" aria-label="Ferramentas">
            <button className="btn" type="button" onClick={() => setSumario(true)}>
              Sumário
            </button>
            <button className="btn" type="button" onClick={() => setBusca(true)}>
              Buscar
            </button>
            <button className="btn" type="button" onClick={expandQuizzes} id="btn-expandir">
              Questões {openedQuizzes.length}/15
            </button>
            <button className="btn" type="button" onClick={cycleCorpo} id="btn-corpo">
              {CORPO_LABEL[corpo]}
            </button>
            <button
              className="btn"
              type="button"
              onClick={cycleTema}
              id="btn-tema"
              aria-label={TEMA_LABEL[tema] === "Tema" ? "Usar tema claro ou escuro" : `Tema ${TEMA_LABEL[tema].toLowerCase()}`}
            >
              {TEMA_LABEL[tema]}
            </button>
            <button className="btn" type="button" onClick={printAll} id="btn-imprimir">
              Imprimir
            </button>
          </nav>
        </div>
        <div className="progresso" style={{ width: `${progress.toFixed(2)}%` }} />
      </div>

      <div className="pagina">
        <aside className="lateral no-print" aria-label="Sumário lateral">
          <h2>Nesta disciplina</h2>
          <TocNav currentHref={pathname} />
        </aside>
        <main className="miolo" id="conteudo">
          {children}
        </main>
      </div>

      {sumario ? (
        <div className="no-print">
          <button type="button" className="sheet-backdrop" aria-label="Fechar sumário" onClick={() => setSumario(false)} />
          <div className="sheet-panel" role="dialog" aria-label="Sumário">
            <div className="mark-row" style={{ justifyContent: "space-between", marginBottom: "1rem" }}>
              <h2 style={{ margin: 0, fontSize: "1rem" }}>Sumário</h2>
              <button className="btn" type="button" onClick={() => setSumario(false)}>
                Fechar
              </button>
            </div>
            <nav className="lateral" style={{ position: "static", maxHeight: "none", padding: 0, display: "block" }}>
              <TocNav currentHref={pathname} onNavigate={() => setSumario(false)} />
            </nav>
          </div>
        </div>
      ) : null}

      <SearchDialog open={busca} onClose={() => setBusca(false)} />
    </div>
  );
}
