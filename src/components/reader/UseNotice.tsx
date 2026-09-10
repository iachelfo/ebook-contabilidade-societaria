import { Link } from "@tanstack/react-router";

export function UseNotice() {
  return (
    <aside className="aviso-uso no-print" role="note">
      <p>
        <strong>Material educacional, não parecer.</strong> Versão 1.1, de 10/09/2026,
        sobre texto fechado em 08/09/2026. Interpretações, cenários e memórias de cálculo
        não substituem análise individual nem consulta à redação vigente. Confira a fonte
        oficial e o{" "}
        <Link to="/atualizacoes">changelog</Link> antes de aplicar qualquer conclusão.
      </p>
    </aside>
  );
}
