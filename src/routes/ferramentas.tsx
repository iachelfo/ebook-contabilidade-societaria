import { createFileRoute, Link } from "@tanstack/react-router";
import { DeadlineBanner } from "@/components/reader/DeadlineBanner";
import { EffectiveRate } from "@/components/tools/EffectiveRate";
import { PricingCalculator } from "@/components/tools/PricingCalculator";
import { TimelineView } from "@/components/tools/TimelineView";

export const Route = createFileRoute("/ferramentas")({ component: Ferramentas });

function Ferramentas() {
  return (
    <section>
      <span className="cap-num">Ferramentas</span>
      <h2>Memória de cálculo que o leitor pode reexecutar</h2>
      <p className="lead">
        As fórmulas são as do eBook. Os números-padrão da precificação usam a
        alíquota conjunta estimada de 27,91% da Resolução CGIBS nº 14/2026
        (18,70% de IBS + 9,21% de CBS), e mostram ao lado a premissa pedagógica
        de 26,5% da nota da SERT de agosto de 2024. Nenhum dos dois números é a
        alíquota de referência definitiva, reservada a resolução do Senado.
      </p>
      <DeadlineBanner />
      <PricingCalculator />
      <p>
        Fonte da conversão: capítulo 10, a partir do art. 12, § 2º, I, da{" "}
        <a
          className="disp"
          href="https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          LC 214/2025
        </a>
        . <Link to="/capitulo/$n" params={{ n: "10" }}>Abrir o capítulo</Link>.
      </p>
      <EffectiveRate />
      <p>
        Fonte do redutor: arts. 16-A e 16-B da{" "}
        <a
          className="disp"
          href="https://www.planalto.gov.br/ccivil_03/leis/l9250.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lei 9.250/1995
        </a>
        , na redação da{" "}
        <a
          className="disp"
          href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15270.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lei 15.270/2025
        </a>
        . <Link to="/capitulo/$n" params={{ n: "6" }}>Abrir o capítulo 6</Link>.
      </p>
      <h3>Calendário com o marcador de 09/09/2026</h3>
      <TimelineView />
    </section>
  );
}
