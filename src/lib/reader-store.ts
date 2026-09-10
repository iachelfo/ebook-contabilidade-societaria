import { create } from "zustand";

export type Tema = "sistema" | "claro" | "escuro";
export type Corpo = "compacto" | "normal" | "amplo";

type ReaderState = {
  ready: boolean;
  entered: boolean;
  tema: Tema;
  corpo: Corpo;
  bookmarks: string[];
  lastPath: string;
  openedQuizzes: string[];
  hydrate: () => void;
  enterMaterial: () => void;
  reopenCover: () => void;
  setTema: (tema: Tema) => void;
  cycleTema: () => void;
  cycleCorpo: () => void;
  setLastPath: (path: string) => void;
  toggleBookmark: (id: string) => void;
  markQuiz: (id: string) => void;
};

const KEY = "chelfo-ebook-reader";
/** Bump when the entrance cover is redesigned so returning readers see it once. */
const COVER_REV = 3;
const TEMAS: Tema[] = ["sistema", "claro", "escuro"];
const CORPOS: Corpo[] = ["compacto", "normal", "amplo"];

type Persisted = Pick<
  ReaderState,
  "tema" | "corpo" | "bookmarks" | "lastPath" | "openedQuizzes" | "entered"
> & { coverRev?: number };

function load(): Partial<Persisted> {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Persisted;
  } catch {
    return {};
  }
}

function save(state: ReaderState) {
  try {
    const payload: Persisted = {
      tema: state.tema,
      corpo: state.corpo,
      bookmarks: state.bookmarks,
      lastPath: state.lastPath,
      openedQuizzes: state.openedQuizzes,
      entered: state.entered,
      coverRev: COVER_REV,
    };
    localStorage.setItem(KEY, JSON.stringify(payload));
  } catch {
    /* private mode */
  }
}

export const useReaderStore = create<ReaderState>((set, get) => ({
  ready: false,
  entered: false,
  tema: "sistema",
  corpo: "normal",
  bookmarks: [],
  lastPath: "/",
  openedQuizzes: [],
  hydrate: () => {
    if (get().ready) return;
    const loaded = load();
    const entered = loaded.coverRev === COVER_REV && Boolean(loaded.entered);
    set({
      tema: loaded.tema ?? "sistema",
      corpo: loaded.corpo ?? "normal",
      bookmarks: loaded.bookmarks ?? [],
      lastPath: loaded.lastPath ?? "/",
      openedQuizzes: loaded.openedQuizzes ?? [],
      entered,
      ready: true,
    });
  },
  enterMaterial: () => {
    set({ entered: true });
    save(get());
  },
  reopenCover: () => {
    set({ entered: false });
    save(get());
    window.scrollTo(0, 0);
  },
  setTema: (tema) => {
    set({ tema });
    save(get());
  },
  cycleTema: () => {
    const i = TEMAS.indexOf(get().tema);
    set({ tema: TEMAS[(i + 1) % TEMAS.length] });
    save(get());
  },
  cycleCorpo: () => {
    const i = CORPOS.indexOf(get().corpo);
    set({ corpo: CORPOS[(i + 1) % CORPOS.length] });
    save(get());
  },
  setLastPath: (lastPath) => {
    set({ lastPath });
    save(get());
  },
  toggleBookmark: (id) => {
    const has = get().bookmarks.includes(id);
    set({
      bookmarks: has ? get().bookmarks.filter((item) => item !== id) : [...get().bookmarks, id],
    });
    save(get());
  },
  markQuiz: (id) => {
    if (get().openedQuizzes.includes(id)) return;
    set({ openedQuizzes: [...get().openedQuizzes, id] });
    save(get());
  },
}));

export function resolvedTema(tema: Tema, prefersDark: boolean): "claro" | "escuro" {
  if (tema === "sistema") return prefersDark ? "escuro" : "claro";
  return tema;
}

export const CORPO_LABEL: Record<Corpo, string> = {
  compacto: "Texto menor",
  normal: "Texto médio",
  amplo: "Texto maior",
};

export const TEMA_LABEL: Record<Tema, string> = {
  sistema: "Tema",
  claro: "Claro",
  escuro: "Escuro",
};
