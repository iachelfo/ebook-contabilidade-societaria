import { createFileRoute, notFound } from "@tanstack/react-router";
import { AddendaBox } from "@/components/reader/AddendaBox";
import { DeadlineBanner } from "@/components/reader/DeadlineBanner";
import { HtmlContent } from "@/components/reader/HtmlContent";
import { Pager } from "@/components/reader/Pager";
import { htmlChapter } from "@/content/load";
import { adjacentChapters, chapterByNumber } from "@/content/toc";
import { PricingCalculator } from "@/components/tools/PricingCalculator";
import { EffectiveRate } from "@/components/tools/EffectiveRate";
import { TimelineView } from "@/components/tools/TimelineView";

export const Route = createFileRoute("/capitulo/$n")({
  component: Capitulo,
});

function Capitulo() {
  const { n } = Route.useParams();
  const num = Number(n);
  const meta = chapterByNumber(num);
  if (!meta || !Number.isInteger(num) || num < 1 || num > 15) {
    throw notFound();
  }
  const html = htmlChapter(num);
  const { prev, next } = adjacentChapters(num);

  return (
    <>
      {num === 15 || num === 11 ? <DeadlineBanner /> : null}
      <HtmlContent html={html} />
      <AddendaBox chapter={num} />
      {num === 6 ? <EffectiveRate /> : null}
      {num === 10 ? <PricingCalculator /> : null}
      {num === 15 ? (
        <div className="box chave">
          <span className="rotulo">Linha do tempo com o marcador de hoje</span>
          <TimelineView />
        </div>
      ) : null}
      <Pager prev={prev} next={next} />
    </>
  );
}
