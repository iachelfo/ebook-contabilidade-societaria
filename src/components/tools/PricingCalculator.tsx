import { useMemo, useState } from "react";

function money(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function pct(n: number) {
  return `${n.toFixed(2).replace(".", ",")}%`;
}

function convert(p: number, t: number, a: number) {
  const liquido = p * (1 - t);
  const desembolso = liquido * (1 + a);
  const delta = desembolso - p;
  return { liquido, desembolso, delta, pct: p ? (delta / p) * 100 : 0 };
}

export function PricingCalculator() {
  const [preco, setPreco] = useState("1000");
  const [dentro, setDentro] = useState("13.65");
  const [fora, setFora] = useState("27.91");

  const r = useMemo(() => {
    const p = Number(preco.replace(",", ".")) || 0;
    const t = (Number(dentro.replace(",", ".")) || 0) / 100;
    const a = (Number(fora.replace(",", ".")) || 0) / 100;
    return {
      atual: convert(p, t, a),
      sert: convert(p, t, 0.265),
    };
  }, [preco, dentro, fora]);

  return (
    <div className="box calculo">
      <span className="rotulo">Calculadora · capítulo 10</span>
      <p>
        Conversão que preserva a receita líquida: <strong>P′ = P × (1 − t)</strong>,
        desembolso do adquirente <strong>P′ × (1 + a)</strong>. O padrão de <em>a</em> é
        27,91% (Resolução CGIBS nº 14/2026: 18,70% de IBS + 9,21% de CBS). A coluna
        “SERT 26,5%” guarda a premissa pedagógica do eBook. Troque <em>a</em> se o item
        tiver redução de 30% ou 60%, ou se for serviço financeiro do art. 233 da LC 214.
      </p>
      <div className="calc-grid">
        <div className="calc-field">
          <label htmlFor="p">Preço atual P (por dentro)</label>
          <input id="p" inputMode="decimal" value={preco} onChange={(e) => setPreco(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="t">Carga por dentro t (%)</label>
          <input id="t" inputMode="decimal" value={dentro} onChange={(e) => setDentro(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="a">Alíquota por fora a (%)</label>
          <input id="a" inputMode="decimal" value={fora} onChange={(e) => setFora(e.target.value)} />
        </div>
      </div>
      <div className="tabela-wrap" style={{ marginTop: "1.2rem" }}>
        <table>
          <caption>Memória de cálculo</caption>
          <thead>
            <tr>
              <th>Linha</th>
              <th className="num">Sua alíquota</th>
              <th className="num">SERT 26,5%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Receita líquida / nova base P′</td>
              <td className="num calc-result">{money(r.atual.liquido)}</td>
              <td className="num">{money(r.sert.liquido)}</td>
            </tr>
            <tr>
              <td>Desembolso do adquirente</td>
              <td className="num calc-result">{money(r.atual.desembolso)}</td>
              <td className="num">{money(r.sert.desembolso)}</td>
            </tr>
            <tr>
              <td>Variação do desembolso</td>
              <td className="num calc-result">
                {money(r.atual.delta)} ({pct(r.atual.pct)})
              </td>
              <td className="num">
                {money(r.sert.delta)} ({pct(r.sert.pct)})
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
