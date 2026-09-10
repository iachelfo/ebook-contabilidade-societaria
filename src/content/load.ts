const files = import.meta.glob("./html/*.html", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function file(name: string): string {
  const hit = Object.entries(files).find(([path]) => path.endsWith(`/${name}`));
  return hit?.[1] ?? "";
}

export const htmlCapa = file("capa.html");
export const htmlGuia = file("guia.html");
export const htmlEncerramento = file("encerramento.html");
export const htmlRodape = file("rodape.html");

export function htmlChapter(n: number): string {
  return file(`cap-${n}.html`);
}
