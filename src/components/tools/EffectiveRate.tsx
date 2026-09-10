import { useMemo, useState } from "react";

function pct(n: number) {
  return `${n.toFixed(2).replace(".", ",")}%`;
}

export function EffectiveRate() {
  const [irpj, setIrpj] = useState("150000");
  const [csll, setCsll] = useState("90000");
  const [lucro, setLucro] = useState("1000000");
  const [rendaPf, setRendaPf] = useState("1200000");

  const r = useMemo(() => {
    const i = Number(irpj.replace(",", ".")) || 0;
    const c = Number(csll.replace(",", ".")) || 0;
    const l = Number(lucro.replace(",", ".")) || 0;
    const pf = Number(rendaPf.replace(",", ".")) || 0;
    const efetivaPj = l > 0 ? ((i + c) / l) * 100 : 0;
    const irpfm =
      pf >= 1_200_000 ? 10 : pf <= 600_000 ? 0 : pf / 60_000 - 10;
    return { efetivaPj, irpfm, soma: efetivaPj + irpfm };
  }, [irpj, csll, lucro, rendaPf]);

  return (
    <div className="box calculo">
      <span className="rotulo">Calculadora · arts. 16-A e 16-B da Lei 9.250/1995</span>
      <p>
        Alíquota efetiva da pessoa jurídica = (IRPJ + CSLL) ÷ lucro contábil antes
        dos tributos sobre a renda, na forma do art. 16-B. Alíquota do IRPF mínimo:
        10% a partir de R$ 1.200.000; entre R$ 600.000 e R$ 1.200.000,{" "}
        <strong>(rendimentos / 60.000) − 10</strong>, conforme a Lei 15.270/2025.
        O redutor cabe quando a soma das alíquotas efetivas ultrapassa o teto
        nominal da pessoa jurídica.
      </p>
      <div className="calc-grid">
        <div className="calc-field">
          <label htmlFor="irpj">IRPJ devido</label>
          <input id="irpj" inputMode="decimal" value={irpj} onChange={(e) => setIrpj(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="csll">CSLL devida</label>
          <input id="csll" inputMode="decimal" value={csll} onChange={(e) => setCsll(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="lucro">Lucro contábil</label>
          <input id="lucro" inputMode="decimal" value={lucro} onChange={(e) => setLucro(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="pf">Rendimentos da PF no ano</label>
          <input id="pf" inputMode="decimal" value={rendaPf} onChange={(e) => setRendaPf(e.target.value)} />
        </div>
      </div>
      <div className="tabela-wrap" style={{ marginTop: "1.2rem" }}>
        <table>
          <caption>Alíquotas efetivas</caption>
          <tbody>
            <tr>
              <td>Alíquota efetiva da PJ</td>
              <td className="num calc-result">{pct(r.efetivaPj)}</td>
            </tr>
            <tr>
              <td>Alíquota do IRPF mínimo</td>
              <td className="num calc-result">{pct(r.irpfm)}</td>
            </tr>
            <tr>
              <td>Soma (insumo do redutor)</td>
              <td className="num calc-result">{pct(r.soma)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
