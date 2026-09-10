export type Addenda = {
  id: string;
  date: string;
  title: string;
  chapters: number[];
  summary: string;
  why: string;
  sourceLabel: string;
  sourceUrl: string;
};

export const ADDENDA: Addenda[] = [
  {
    id: "inversao-aliquotas",
    date: "2026-09-09",
    title: "Correção: a SERT atribuiu 17,7% ao IBS e 8,8% à CBS, não o inverso",
    chapters: [8, 9, 10],
    summary:
      "A edição de 08/09/2026 inverteu a decomposição da estimativa de 26,5% da nota técnica da SERT (agosto de 2024), escrevendo 8,8% de IBS e 17,7% de CBS. A parcela maior cabe ao IBS, substituto do ICMS e do ISS; a menor, à CBS, substituta da Contribuição para o PIS/Pasep e da Cofins. A Resolução CGIBS nº 14, de 29 de julho de 2026, atualizou o total para 27,91% (18,70% de IBS e 9,21% de CBS), para o orçamento de 2027, e declarou que esse número não é a alíquota de referência definitiva.",
    why: "Erro material, não atualização de calendário. Quem precifica com a decomposição invertida erra o peso relativo de cada ente e a conversa de reequilíbrio. A tabela pedagógica de 26,5% permanece; a de 27,91% foi acrescentada no capítulo 10.",
    sourceLabel: "Resolução CGIBS nº 14/2026, cobertura no Portal Contábeis e na Folha",
    sourceUrl:
      "https://www.contabeis.com.br/noticias/78568/cgibs-estima-aliquota-de-referencia-de-27-91-para-ibs-e-cbs/",
  },
  {
    id: "simples-186",
    date: "2026-09-09",
    title: "Janela do Simples e do regime regular de IBS/CBS está aberta até 30/09/2026",
    chapters: [11, 15],
    summary:
      "A Resolução CGSN nº 186, de 9 de abril de 2026 (DOU de 17/04/2026), antecipou para 1º a 30 de setembro de 2026 a opção pelo Simples Nacional de 2027 e, no mesmo prazo, a opção pelo regime regular (híbrido) de IBS e CBS, com efeitos de janeiro a junho de 2027. O cancelamento da opção, irretratável, vai até 30/11/2026. Quem não optar permanece com IBS e CBS dentro do DAS no primeiro semestre. Empresas inscritas no CNPJ entre 1º/10 e 31/12/2026 optam no momento do registro.",
    why: "O eBook já registra 30/09/2026 no calendário do capítulo 15, mas não destaca que a janela está em curso nem aponta o diploma regulamentar. São 21 dias a partir desta addenda.",
    sourceLabel: "Resolução CGSN nº 186/2026 no Diário Oficial da União",
    sourceUrl:
      "https://www.in.gov.br/web/dou/-/resolucao-cgsn-n-186-de-9-de-abril-de-2026-700230741",
  },
  {
    id: "adi-lc227",
    date: "2026-09-05",
    title: "ADI contra regras de fiscalização da LC 227/2026",
    chapters: [7, 11],
    summary:
      "O Partido Verde ajuizou ADI, com pedido de medida cautelar, contra dispositivos da LC 227/2026 que tratam da fiscalização do IBS pelo CGIBS. A tese é de que a lei complementar teria ultrapassado a função regulamentadora da EC 132/2023 e restringido a autonomia dos fiscos estaduais.",
    why: "O capítulo 7 apresenta a arquitetura institucional do IBS como fato consolidado. A ADI não suspende a lei, mas é controvérsia superveniente que o leitor precisa conhecer antes de opinar sobre governança e fiscalização integrada.",
    sourceLabel: "JOTA, 05/09/2026",
    sourceUrl:
      "https://www.jota.info/coberturas-especiais/pulso-da-reforma/pv-questiona-regras-de-fiscalizacao-do-ibs-na-lc-227-que-regulamentou-a-reforma",
  },
  {
    id: "split-manuais",
    date: "2026-09-08",
    title: "Manuais da Plataforma Pública de split payment e implantação gradual",
    chapters: [9, 11],
    summary:
      "O Ato Técnico Conjunto RFB/CGIBS nº 4, de 28 de agosto de 2026, publicado no sítio do CGIBS em 08/09/2026, aprovou o Manual de Habilitação de Participantes e o Manual de Redes da Plataforma Pública de split payment. Não confundir com o Ato Conjunto RFB/CGIBS nº 4, de 30 de julho de 2026, nem com o Ato Conjunto nº 6, de 28 de agosto: a numeração de atos conjuntos e de atos técnicos conjuntos é distinta. O art. 33 do Decreto 12.955/2026 já previa implantação gradual em no mínimo duas etapas.",
    why: "O capítulo 9 trata o split payment como deslocamento da extinção do débito para o fluxo de pagamento. A regulamentação técnica e o adiamento operacional mudam o calendário de reconhecimento do crédito condicionado.",
    sourceLabel: "Atos Técnicos Conjuntos do CGIBS e Decreto 12.955/2026, art. 33",
    sourceUrl: "https://www.cgibs.gov.br/atos-tecnicos-conjuntos",
  },
  {
    id: "aliquota-ref",
    date: "2026-07-29",
    title: "Alíquota estimada em 27,91%, acima do teto político de 26,5%",
    chapters: [7, 10, 11],
    summary:
      "A Resolução CGIBS nº 14, de 29 de julho de 2026, adotou 27,91% como alíquota conjunta estimada para subsidiar o orçamento de 2027 (arrecadação de IBS projetada em R$ 5,15 bilhões). A composição interna é 18,70 pontos de IBS e 9,21 de CBS. O próprio ato ressalva que não se trata da alíquota de referência definitiva, reservada a resolução do Senado. Se a soma das alíquotas de referência estimadas ultrapassar 26,5%, a LC 214/2025 manda o Executivo, ouvido o CGIBS, encaminhar projeto de lei complementar com medidas de redução.",
    why: "O material original trabalha com a carga de referência do debate (26,5%) e declara a premissa. Sem o número de 27,91%, a conversa de reequilíbrio contratual e a calculadora de precificação ficam defasadas em mais de um ponto percentual.",
    sourceLabel: "Resolução CGIBS nº 14/2026, relatada pela Folha em 05/08/2026",
    sourceUrl:
      "https://www1.folha.uol.com.br/blogs/que-imposto-e-esse/2026/08/comite-estima-aliquota-de-ibs-e-cbs-em-28-acima-do-teto-previsto-na-reforma.shtml",
  },
  {
    id: "setor-financeiro",
    date: "2026-01-13",
    title: "Alíquotas do setor financeiro já estão no art. 233 da LC 214, pela LC 227",
    chapters: [7, 10],
    summary:
      "A LC 227/2026, de 13 de janeiro, deu nova redação ao art. 233 da LC 214/2025 e fixou a soma das alíquotas de IBS e CBS sobre os serviços financeiros do art. 189: 10,85% em 2027 e 2028; 11,00% em 2029; 11,15% em 2030; 11,30% em 2031; 11,50% em 2032; 12,50% em 2033. O capítulo 7 trata a LC 227 como fato consolidado na governança e não registra essa tabela, que já constava do texto compilado na data de fechamento.",
    why: "Omissão do original, não fato posterior. Quem aplica 26,5% ou 27,91% a banco, seguradora, câmbio ou instituição de pagamento usa a alíquota errada. A cobertura de 08-09/09/2026 sobre o parecer no PLP 108/2024 descreve os mesmos percentuais já escritos pela LC 227.",
    sourceLabel: "LC 214/2025, art. 233, na redação da LC 227/2026 (texto compilado da Câmara)",
    sourceUrl: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm",
  },
  {
    id: "irrf-dividendos",
    date: "2026-08-26",
    title: "IRRF sobre dividendos arrecadou R$ 3,1 bi até julho, abaixo da previsão",
    chapters: [6],
    summary:
      "A Receita Federal arrecadou R$ 3,145 bilhões de janeiro a julho de 2026 com IRRF sobre lucros e dividendos: 18,3% da previsão revisada de R$ 17,2 bilhões no ano. A orientação de 06/08/2026 confirma a escrituração no evento R-4010 da EFD-Reinf, com rendimento tributável quando a mesma PJ paga mais de R$ 50.000,00 no mês à mesma PF, à alíquota de 10% sobre o total, não sobre o excedente.",
    why: "Não altera a regra do art. 6º-A da Lei 9.250/1995, mas muda o diagnóstico de comportamento: a janela de deliberação até 31/12/2025 e o planejamento de remuneração de sócios (capítulos 6 e 15) continuam a ser o serviço, agora com evidência de arrecadação abaixo do esperado.",
    sourceLabel: "Receita Federal, 06/08/2026, e Agência Brasil, 26/08/2026",
    sourceUrl:
      "https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/agosto/receita-federal-orienta-sobre-os-procedimentos-para-o-recolhimento-do-imposto-de-renda-retido-na-fonte-sobre-lucros-e-dividendos",
  },
  {
    id: "cfc-ot1",
    date: "2026-07-20",
    title: "Link oficial da Orientação Técnica CFC nº 1/2026",
    chapters: [8, 9, 11],
    summary:
      "A OT CFC nº 1/2026, publicada em 20 de julho de 2026, não é vinculante e não altera as NBCs. Esclarece que IBS e CBS, cobrados por fora, não integram a receita; admite divergência sobre o reconhecimento do passivo no ano-teste para o contribuinte adimplente com a obrigação acessória; e exige divulgação da política adotada nas notas explicativas de 2026.",
    why: "O eBook cita a orientação no glossário e nas referências, mas o HTML original não abria o texto em nova aba. Sem o link, o leitor não confere o item 4.2 (agente arrecadador) nem os itens 29-30 (julgamento no ano-teste).",
    sourceLabel: "Orientação Técnica CFC nº 1/2026",
    sourceUrl: "https://www.reformatributaria.com/wp-content/uploads/2026/07/CFC_Orientacao_Tecnica-1.pdf",
  },
  {
    id: "auditoria-aviso",
    date: "2026-09-10",
    title: "Aviso de uso e versão 1.1: material educacional, não parecer",
    chapters: [1, 3, 9, 11, 14],
    summary:
      "A revisão de 10/09/2026 incorpora achados de auditoria jurídica-contábil da versão pública. O site passa a exibir aviso permanente de que interpretações, cenários e memórias não substituem análise individual. Os capítulos 3, 9 e 11 foram reescritos nos trechos categóricos. A busca interna, o changelog e o índice de normas já existiam nesta edição e respondem a lacunas do HTML original.",
    why: "Sem o aviso, o leitor trata tese e estimativa como regra vigente. A classificação da auditoria (necessita revisão substancial) deixa de ser verdadeira na parte em que o texto categórico foi o problema.",
    sourceLabel: "Relatório executivo e técnico de auditoria, 09/09/2026",
    sourceUrl: "https://ebook-contabilidade-societaria.vercel.app/",
  },
  {
    id: "auditoria-art57",
    date: "2026-09-10",
    title: "Capítulo 9: o art. 57, § 3º, admite crédito em EPI, refeitório, saúde, creche, planos coletivos e vales",
    chapters: [9],
    summary:
      "A redação vigente do art. 57 da LC 214/2025, dada pela LC 227/2026, continua a vedar uso ou consumo pessoal no caput e no § 5º, mas o § 3º exclui da vedação bens e serviços utilizados preponderantemente na atividade econômica: uniforme e EPI; alimentação e bebida não alcoólica no estabelecimento durante a jornada; saúde e creche no estabelecimento; planos de saúde e benefícios educacionais de acordo coletivo; vale-transporte, vale-refeição e vale-alimentação. A edição anterior aplicava a vedação por categoria e omitia essa matriz.",
    why: "P0. Quem glosa crédito de EPI ou de refeitório com base no caput, sem o § 3º, aplica a lei pela metade.",
    sourceLabel: "LC 214/2025, art. 57, na redação da LC 227/2026",
    sourceUrl: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm",
  },
  {
    id: "auditoria-cfc-2026",
    date: "2026-09-10",
    title: "Capítulo 11: reconhecimento de IBS/CBS em 2026 deixa de ser regra universal",
    chapters: [11],
    summary:
      "O ponto-chave do capítulo 11 passou a separar o efeito fiscal (sem crédito nem débito, se a obrigação acessória foi cumprida) da política contábil. A Orientação Técnica CFC nº 1/2026, itens 29 e 30, admite posições favorável e contrária, é não vinculante e exige julgamento, documentação e notas explicativas. Também se distingue o gatilho jurídico de 01/08/2026 do marco operacional de 03/08/2026, e a publicação do Ato Conjunto RFB/CGIBS nº 1 no DOU de 23/12/2025, sem afirmar retificação em 24/12 não reconfirmada.",
    why: "P0. Linguagem categórica de não reconhecimento excedia a fonte do CFC e podia induzir política contábil inadequada.",
    sourceLabel: "Orientação Técnica CFC nº 1/2026",
    sourceUrl: "https://www.reformatributaria.com/wp-content/uploads/2026/07/CFC_Orientacao_Tecnica-1.pdf",
  },
];

export function addendaForChapter(n: number): Addenda[] {
  return ADDENDA.filter((item) => item.chapters.includes(n));
}

export const SIMPLES_DEADLINE = new Date("2026-09-30T23:59:59-03:00");
export const CLOSED_ON = new Date("2026-09-08T00:00:00-03:00");
