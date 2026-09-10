import {
  htmlCapa,
  htmlChapter,
  htmlEncerramento,
  htmlGuia,
} from "./load";
import { pathForContentId, TOC } from "./toc";

export type SearchHit = {
  id: string;
  href: string;
  title: string;
  heading: string;
  snippet: string;
};

type Entry = {
  id: string;
  title: string;
  heading: string;
  text: string;
};

function strip(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function sections(id: string, title: string, html: string): Entry[] {
  if (!html) return [];
  const chunks = html.split(/<h[23][^>]*>/i);
  const out: Entry[] = [];
  const lead = strip(chunks[0] ?? "");
  if (lead.length > 40) {
    out.push({ id, title, heading: title, text: lead });
  }
  for (const chunk of chunks.slice(1)) {
    const close = chunk.match(/^([\s\S]*?)<\/h[23]>/i);
    const heading = close ? strip(close[1]) : title;
    const text = strip(chunk);
    if (text.length < 20) continue;
    out.push({ id, title, heading: heading || title, text });
  }
  return out.length ? out : [{ id, title, heading: title, text: strip(html) }];
}

function buildIndex(): Entry[] {
  const entries: Entry[] = [];
  entries.push(
    ...sections(
      "capa",
      "Planejamento e Aspectos Fiscais da Contabilidade Societária",
      htmlCapa,
    ),
  );
  entries.push(...sections("como-usar", "Como usar este material", htmlGuia));
  for (let n = 1; n <= 15; n++) {
    const item = TOC.find((row) => row.id === `cap-${n}`);
    entries.push(
      ...sections(`cap-${n}`, item?.label ?? `Capítulo ${n}`, htmlChapter(n)),
    );
  }
  entries.push(...sections("encerramento", "Encerramento", htmlEncerramento));
  for (const item of TOC) {
    if (item.kind === "part") continue;
    if (entries.some((entry) => entry.id === item.id || pathForContentId(entry.id) === item.href)) {
      continue;
    }
    entries.push({
      id: item.id,
      title: item.label,
      heading: item.label,
      text: item.label,
    });
  }
  return entries;
}

const ENTRIES = buildIndex();

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

export function searchEbook(query: string, limit = 18): SearchHit[] {
  const q = normalize(query.trim());
  if (q.length < 2) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const hits: SearchHit[] = [];
  for (const entry of ENTRIES) {
    const hay = normalize(`${entry.title} ${entry.heading} ${entry.text}`);
    if (!terms.every((term) => hay.includes(term))) continue;
    const lower = entry.text;
    const first = terms[0] ? normalize(entry.text).indexOf(terms[0]) : 0;
    const start = Math.max(0, first - 70);
    hits.push({
      id: `${entry.id}-${hits.length}`,
      href: pathForContentId(entry.id),
      title: entry.title,
      heading: entry.heading,
      snippet: (start > 0 ? "…" : "") + lower.slice(start, start + 220) + "…",
    });
    if (hits.length >= limit) break;
  }
  return hits;
}
