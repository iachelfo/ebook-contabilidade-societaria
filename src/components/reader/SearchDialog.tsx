import { useRouter } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { searchEbook } from "@/content/search";

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const hits = useMemo(() => searchEbook(q), [q]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <button type="button" className="search-backdrop" aria-label="Fechar busca" onClick={onClose} />
      <div className="search-panel" role="dialog" aria-modal="true" aria-label="Buscar no eBook">
        <div className="calc-field">
          <label htmlFor="ebook-search">Buscar no texto</label>
          <input
            id="ebook-search"
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="subconta, art. 58, split payment, 16-B…"
          />
        </div>
        <div className="search-list">
          {q.trim().length < 2 ? (
            <p className="remissao">Digite ao menos dois caracteres. A busca ignora acentos.</p>
          ) : hits.length === 0 ? (
            <p className="remissao">Nada encontrado para “{q}”.</p>
          ) : (
            hits.map((hit) => (
              <button
                key={hit.id}
                type="button"
                className="search-item"
                onClick={() => {
                  onClose();
                  router.history.push(hit.href);
                }}
              >
                <strong>{hit.title}</strong>
                <span style={{ display: "block", color: "var(--apoio)", fontSize: ".88rem", marginTop: 4 }}>
                  {hit.snippet}
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </>
  );
}
