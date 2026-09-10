export type TocKind = "part" | "page" | "chapter";

export type TocItem = {
  kind: TocKind;
  id: string;
  href: string;
  label: string;
  minutes?: string;
  part?: 1 | 2 | 3;
};

export const TOC: TocItem[] = [
  { kind: "page", id: "capa", href: "/", label: "Capa" },
  { kind: "page", id: "como-usar", href: "/guia", label: "Como usar este material" },
  { kind: "part", id: "parte-1", href: "/capitulo/1", label: "A ponte contábil-fiscal" },
  {
    kind: "chapter",
    id: "cap-1",
    href: "/capitulo/1",
    label: "Do RTT à neutralidade condicionada: por que a ponte existe",
    minutes: "10 min",
    part: 1,
  },
  {
    kind: "chapter",
    id: "cap-2",
    href: "/capitulo/2",
    label: "Valor justo, valor presente e a subconta que decide tudo",
    minutes: "12 min",
    part: 1,
  },
  {
    kind: "chapter",
    id: "cap-3",
    href: "/capitulo/3",
    label: "Receita bruta: o conceito que sustenta quatro tributos",
    minutes: "12 min",
    part: 1,
  },
  {
    kind: "chapter",
    id: "cap-4",
    href: "/capitulo/4",
    label: "CPC 47 e o momento em que a receita existe",
    minutes: "12 min",
    part: 1,
  },
  {
    kind: "chapter",
    id: "cap-5",
    href: "/capitulo/5",
    label: "Subvenções: quando o legislador desmonta um planejamento inteiro",
    minutes: "14 min",
    part: 1,
  },
  {
    kind: "chapter",
    id: "cap-6",
    href: "/capitulo/6",
    label: "O circuito se fecha: o lucro contábil vira base do imposto do sócio",
    minutes: "12 min",
    part: 1,
  },
  { kind: "part", id: "parte-2", href: "/capitulo/7", label: "A virada do consumo" },
  {
    kind: "chapter",
    id: "cap-7",
    href: "/capitulo/7",
    label: "A arquitetura do IBS, da CBS e do Imposto Seletivo",
    minutes: "10 min",
    part: 2,
  },
  {
    kind: "chapter",
    id: "cap-8",
    href: "/capitulo/8",
    label: "Base por fora: o que muda na demonstração do resultado",
    minutes: "14 min",
    part: 2,
  },
  {
    kind: "chapter",
    id: "cap-9",
    href: "/capitulo/9",
    label: "O crédito que depende de terceiro: um ativo condicionado no balanço",
    minutes: "12 min",
    part: 2,
  },
  {
    kind: "chapter",
    id: "cap-10",
    href: "/capitulo/10",
    label: "Precificação: a álgebra de sair de dentro para fora",
    minutes: "8 min",
    part: 2,
  },
  {
    kind: "chapter",
    id: "cap-11",
    href: "/capitulo/11",
    label: "A transição: o que já aconteceu e o que ainda vai acontecer",
    minutes: "18 min",
    part: 2,
  },
  { kind: "part", id: "parte-3", href: "/capitulo/12", label: "Execução" },
  {
    kind: "chapter",
    id: "cap-12",
    href: "/capitulo/12",
    label: "O workflow do diagnóstico de impacto",
    minutes: "10 min",
    part: 3,
  },
  {
    kind: "chapter",
    id: "cap-13",
    href: "/capitulo/13",
    label: "Catálogo de erros: o que cada um custa e como detectar",
    minutes: "8 min",
    part: 3,
  },
  {
    kind: "chapter",
    id: "cap-14",
    href: "/capitulo/14",
    label: "Inteligência artificial que sobrevive a uma fiscalização",
    minutes: "10 min",
    part: 3,
  },
  {
    kind: "chapter",
    id: "cap-15",
    href: "/capitulo/15",
    label: "O calendário das oportunidades: o que abre e o que fecha",
    minutes: "10 min",
    part: 3,
  },
  { kind: "page", id: "encerramento", href: "/encerramento", label: "Encerramento" },
  { kind: "page", id: "ferramentas", href: "/ferramentas", label: "Ferramentas" },
  { kind: "page", id: "atualizacoes", href: "/atualizacoes", label: "Addenda 09/09/2026" },
  { kind: "page", id: "normas", href: "/normas", label: "Índice de normas" },
];

export const CHAPTERS = TOC.filter((item) => item.kind === "chapter");

export function chapterByNumber(n: number) {
  return CHAPTERS.find((item) => item.id === `cap-${n}`);
}

export function adjacentChapters(n: number) {
  const i = CHAPTERS.findIndex((item) => item.id === `cap-${n}`);
  return {
    prev: i > 0 ? CHAPTERS[i - 1] : undefined,
    next: i >= 0 && i < CHAPTERS.length - 1 ? CHAPTERS[i + 1] : undefined,
  };
}

export function pathForContentId(id: string): string {
  if (id === "capa") return "/";
  if (id === "como-usar") return "/guia";
  if (id === "encerramento") return "/encerramento";
  const cap = /^cap-(\d+)$/.exec(id);
  if (cap) return `/capitulo/${cap[1]}`;
  return "/";
}
