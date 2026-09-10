import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { WelcomeCover } from "./WelcomeCover";
import { TocNav } from "./TocNav";
import { SearchDialog } from "./SearchDialog";
import { UseNotice } from "./UseNotice";
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
  const [chromeOn, setChromeOn] = useState(true);
  const hovering = useRef(false);
  const lastY = useRef(0);
  const holdOpen = sumario || busca;

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
    setChromeOn(true);
    lastY.current = window.scrollY;
    const onScroll = () => {
      const el = document.documentElement;
      const y = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (y / total) * 100 : 0);
      if (hovering.current) {
        lastY.current = y;
        return;
      }
      if (y < 28) setChromeOn(true);
      else if (y > lastY.current + 8) setChromeOn(false);
      else if (y < lastY.current - 6) setChromeOn(true);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, setLastPath]);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      if (event.clientY < 36) setChromeOn(true);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const t = event.target as HTMLElement | null;
      const typing = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
      if (typing) return;
      if (event.key === "Escape") {
        setSumario(false);
        setBusca(false);
        return;
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setBusca(true);
        setChromeOn(true);
      }
      if (event.key === "/" && !event.metaKey && !event.ctrlKey) {
        event.preventDefault();
        setBusca(true);
        setChromeOn(true);
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

  const barOn = chromeOn || holdOpen;

  return (
    <div className="ebook min-h-dvh">
      <a href="#conteudo" className="btn ebook-skip">
        Ir para o conteúdo
      </a>

      <div
        className="chrome-hotzone no-print"
        onMouseEnter={() => {
          hovering.current = true;
          setChromeOn(true);
        }}
        onMouseLeave={() => {
          hovering.current = false;
        }}
      />

      <header
        className={`chrome no-print${barOn ? "" : " is-off"}`}
        onMouseEnter={() => {
          hovering.current = true;
          setChromeOn(true);
        }}
        onMouseLeave={() => {
          hovering.current = false;
        }}
      >
        <div className="chrome-island">
          <Link to="/" className="marca-topo" style={{ textDecoration: "none" }}>
            ChelfoIA <span>· PRC0004</span>
          </Link>
          <nav className="topo-nav" aria-label="Ferramentas de leitura">
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
          <div className="progresso" style={{ width: `${progress.toFixed(2)}%` }} />
        </div>
      </header>

      {!barOn ? (
        <button
          type="button"
          className="chrome-peek no-print"
          aria-label="Mostrar menu de leitura"
          onClick={() => setChromeOn(true)}
        >
          Menu
        </button>
      ) : null}

      <div className="pagina">
        <main className="miolo" id="conteudo">
          <UseNotice />
          {children}
        </main>
      </div>

      {sumario ? (
        <div className="no-print">
          <button type="button" className="sheet-backdrop" aria-label="Fechar sumário" onClick={() => setSumario(false)} />
          <div className="sheet-panel" role="dialog" aria-modal="true" aria-label="Sumário">
            <div className="mark-row" style={{ justifyContent: "space-between", marginBottom: "1rem" }}>
              <h2 style={{ margin: 0, fontSize: "1rem" }}>Nesta disciplina</h2>
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
