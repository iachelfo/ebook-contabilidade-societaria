import { Link } from "@tanstack/react-router";
import { SIMPLES_DEADLINE } from "@/content/atualizacoes";

function daysLeft() {
  const ms = SIMPLES_DEADLINE.getTime() - Date.now();
  return Math.ceil(ms / 86_400_000);
}

export function DeadlineBanner() {
  const days = daysLeft();
  if (days < -1) return null;
  const open = days >= 0;
  return (
    <aside className="deadline-banner no-print" role="status">
      <p style={{ margin: 0 }}>
        <strong>
          {open
            ? `Janela do Simples 2027 e do regime regular de IBS/CBS: ${days} dia${days === 1 ? "" : "s"} até 30/09/2026.`
            : "A janela de setembro de 2026 para o Simples 2027 já fechou."}
        </strong>{" "}
        Resolução CGSN nº 186/2026. Quem não optar pelo regime regular permanece com IBS
        e CBS dentro do DAS no primeiro semestre de 2027.{" "}
        <Link to="/ferramentas">Abrir o calendário</Link>
        {" · "}
        <Link to="/capitulo/$n" params={{ n: "15" }}>
          Capítulo 15
        </Link>
      </p>
    </aside>
  );
}
