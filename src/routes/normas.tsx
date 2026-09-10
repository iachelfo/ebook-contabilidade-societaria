import { createFileRoute, Link } from "@tanstack/react-router";
import { NORMAS } from "@/content/normas";

export const Route = createFileRoute("/normas")({ component: Normas });

function Normas() {
  return (
    <section>
      <span className="cap-num">Índice</span>
      <h2>Normas citadas, com o texto oficial</h2>
      <p className="lead">
        O original falava em “vinte e sete diplomas”. As referências consolidadas
        já listavam mais. Aqui estão os principais, cada um com URL do Planalto,
        da Receita, do CGIBS, do CGSN ou do CPC - inclusive os que o HTML original
        citava sem link (Lei 11.638/2007, Lei 15.079/2024, Decreto 13.075/2026,
        Orientação Técnica CFC nº 1/2026) e os que a addenda de 09/09/2026
        acrescentou (Resolução CGSN 186/2026, Resolução CGIBS 14/2026, Ato
        Técnico Conjunto RFB/CGIBS nº 4/2026 e CPC 47).
      </p>
      <div className="tabela-wrap">
        <table>
          <caption>Diplomas e fontes oficiais</caption>
          <thead>
            <tr>
              <th>Norma</th>
              <th>Data</th>
              <th>Objeto</th>
              <th>Capítulos</th>
            </tr>
          </thead>
          <tbody>
            {NORMAS.map((n) => (
              <tr key={n.nome}>
                <td>
                  <a className="disp" href={n.href} target="_blank" rel="noopener noreferrer">
                    {n.nome}
                  </a>
                </td>
                <td>{n.data}</td>
                <td>{n.objeto}</td>
                <td>
                  {n.capitulos.map((c, i) => (
                    <span key={c}>
                      {i > 0 ? ", " : ""}
                      <Link to={`/capitulo/${c}` as never}>{c}</Link>
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
