export type TimelineEvent = {
  date: string;
  label: string;
  href?: string;
};

export const TIMELINE: TimelineEvent[] = [
  { date: "2026-01-01", label: "Ano-teste: IBS 0,1% (estadual) e CBS 0,9%. Apuração informativa; recolhimento dispensado a quem cumpre a obrigação acessória (LC 214, arts. 343, 346 e 348)." },
  { date: "2026-01-13", label: "LC 227/2026 institui o CGIBS, altera a LC 214/2025 e fixa as alíquotas do setor financeiro no art. 233." },
  { date: "2026-04-09", label: "Resolução CGSN nº 186/2026: antecipa para setembro a opção pelo Simples 2027 e pelo regime regular." },
  { date: "2026-04-29", label: "Decreto 12.955/2026: Regulamento da CBS. Art. 33: split payment gradual." },
  { date: "2026-07-20", label: "Orientação Técnica CFC nº 1/2026 sobre IBS e CBS." },
  { date: "2026-07-21", label: "Decreto 13.075/2026 adia obrigações de PF e produtor rural para 2027." },
  { date: "2026-07-29", label: "Resolução CGIBS nº 14/2026 estima 27,91% (18,70% IBS + 9,21% CBS) para o orçamento de 2027." },
  { date: "2026-08-27", label: "LC 235/2026: renúncias de receita excepcionais em 2026." },
  { date: "2026-08-28", label: "Ato Técnico Conjunto RFB/CGIBS nº 4: manuais da Plataforma Pública de split payment (publicado no sítio do CGIBS em 08/09)." },
  { date: "2026-09-01", label: "Abre a janela de opção pelo Simples 2027 e pelo regime regular de IBS/CBS." },
  { date: "2026-09-05", label: "ADI do Partido Verde contra regras de fiscalização da LC 227/2026." },
  { date: "2026-09-09", label: "Hoje. Addenda editorial desta edição, inclusive a correção da decomposição 17,7% IBS / 8,8% CBS." },
  { date: "2026-09-30", label: "Fecha a opção pelo Simples 2027 e pelo regime regular (1º semestre de 2027)." },
  { date: "2026-11-01", label: "NFS-e nacional obrigatória para microempresa e empresa de pequeno porte (calendário do capítulo 15)." },
  { date: "2026-11-30", label: "Prazo de cancelamento, irretratável, da opção pelo regime regular (1º semestre de 2027)." },
  { date: "2026-12-31", label: "Último período de apuração de PIS/Pasep e Cofins." },
  { date: "2027-01-01", label: "CBS integral; PIS e Cofins extintos; arts. 56 e 57 da Lei 12.973/2014 revogados; Imposto Seletivo entra." },
  { date: "2027-03-31", label: "Janela de opção pelo regime regular para o 2º semestre de 2027." },
  { date: "2027-06-30", label: "Prazo fatal do crédito presumido sobre estoque (LC 214, art. 381)." },
  { date: "2029-01-01", label: "Início da transição do ICMS e do ISS." },
  { date: "2032-12-31", label: "Corte do saldo credor de ICMS; extinção de ICMS e ISS." },
  { date: "2033-01-01", label: "A partir de 2033, o saldo credor de ICMS é atualizado pelo IPCA (ADCT, art. 134, § 5º). Parcelas gerais: 240 meses." },
];
