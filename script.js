/* ---------- Rolagem suave (easing longo) ---------- */
function suaveAte(destino, duracao) {
  var inicio = window.pageYOffset;
  var delta = destino - inicio;
  if (Math.abs(delta) < 2) { window.scrollTo(0, destino); return; }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { window.scrollTo(0, destino); return; }
  var t0 = null;
  function passo(t) {
    if (t0 === null) t0 = t;
    var p = Math.min((t - t0) / duracao, 1);
    var e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
    window.scrollTo(0, inicio + delta * e);
    if (p < 1) requestAnimationFrame(passo);
  }
  requestAnimationFrame(passo);
}

/* Márcia Pet Stories — lógica do site */

var CONTACTO = {
  whatsapp: '351910688326',
  email: 'geral@marciapetstories.pt',
  instagram: 'https://www.instagram.com/marciapetstories/',
  facebook: 'https://www.facebook.com/profile.php?id=100092173143189'
};

var WA = 'https://wa.me/' + CONTACTO.whatsapp;

var PAGINAS = [
  ['index.html', 'Início'],
  ['sobre.html', 'Sobre'],
  ['servicos.html', 'Serviços'],
  ['precos.html', 'Preços'],
  ['petiscos.html', 'Petiscos'],
  ['galeria.html', 'Galeria'],
  ['contacto.html', 'Contacto']
];

var MAPA_PAGINAS = {
  home: 'index.html',
  sobre: 'sobre.html',
  servicos: 'servicos.html',
  precos: 'precos.html',
  petiscos: 'petiscos.html',
  galeria: 'galeria.html',
  contacto: 'contacto.html'
};

function destinoPagina(pagina) {
  return MAPA_PAGINAS[pagina] || (pagina.indexOf('.html') > -1 ? pagina : pagina + '.html');
}

var SERVICOS = [
  { n: '01', titulo: 'Creche canina', texto: 'Dias de 2.ª a 6.ª feira em grupos reduzidos, com espaço para brincar, explorar e descansar ao ritmo de cada um.' },
  { n: '02', titulo: 'Estadia familiar', texto: 'Hospedagem em ambiente de casa, com a rotina e o carinho a que o seu patudo já está habituado.' },
  { n: '03', titulo: 'Dia de adaptação', texto: 'Um primeiro dia sem pressa, para conhecermos o seu cão e perceber como se sente no grupo.' },
  { n: '04', titulo: 'Transporte', texto: 'Leva e traz entre a sua casa e a creche, para os dias em que o horário não ajuda.' },
  { n: '05', titulo: 'Banho e tosa', texto: 'Higiene e tratamento do pelo, feitos com calma e sem stress.', pontual: true },
  { n: '06', titulo: 'Passeios', texto: 'Saídas ao ar livre em grupos equilibrados, pelo campo e pelos trilhos à volta.', pontual: true }
];

var NOTA_PONTUAL = 'Só acontece em dias específicos, previamente comunicados.';

var PASSOS = [
  { n: '1', titulo: 'Fale connosco', texto: 'Envie mensagem no WhatsApp a contar como é o seu cão e de que precisa.' },
  { n: '2', titulo: 'Dia de adaptação', texto: 'Marcamos um dia para o seu patudo conhecer o espaço e o grupo.' },
  { n: '3', titulo: 'Escolha do pack', texto: 'Definimos juntos quantos dias por semana fazem sentido.' },
  { n: '4', titulo: 'Primeiro dia', texto: 'A rotina começa, e vai recebendo notícias de como correu o dia.' }
];

var PACKS = [
  { freq: '1x por semana', preco: '45€' },
  { freq: '2x por semana', preco: '80€' },
  { freq: '3x por semana', preco: '105€', destaque: true },
  { freq: '4x por semana', preco: '125€' },
  { freq: '5x por semana', preco: '145€' }
];

var VALORES = [
  { titulo: 'Ao ritmo de cada um', texto: 'Cada patudo participa ao seu ritmo, sem pressões nem estímulos excessivos.' },
  { titulo: 'Comportamentos naturais', texto: 'As atividades estão ligadas aos comportamentos naturais da espécie, promovendo bem-estar físico e emocional.' },
  { titulo: 'Grupos equilibrados', texto: 'Grupos reduzidos e formados com cuidado, com supervisão e limites adequados.' }
];

var FAQS = [
  ['Qual é o horário da creche?', 'A creche funciona de 2.ª a 6.ª feira, das 8:30 às 18h.'],
  ['Como são formados os grupos?', 'Os grupos são reduzidos e formados com cuidado, garantindo segurança, equilíbrio e respeito entre todos.'],
  ['Posso marcar dias extra fora do meu pack?', 'Sim. Os dias avulso custam 13€ (2.ª a 6.ª feira) e são apenas para clientes que têm plano mensal, se precisarem de algum dia extra.'],
  ['O meu cão pode experimentar primeiro?', 'Pode. Fale connosco no WhatsApp para marcarmos um dia de adaptação.']
];

/* ---------- Loja Amor à Dentada ---------- */

/* Preencher com as credenciais do Supabase para carregar os produtos da base de dados.
   Se ficar vazio (ou se o pedido falhar), usa-se o CATALOGO_RESERVA abaixo. */
var SUPABASE = { url: '', anon: '', tabela: 'produtos' };

/* NÚMERO DE TESTES. O número real da creche é 351910688326 — trocar aqui depois dos testes. */
var WA_LOJA = '351934905941';

var CATALOGO_RESERVA = [
  { nome: 'Peito de frango', grupo: 'Desidratados 100% de frango', descricao: 'Peito de frango 100% natural, sequinho e estaladiço.', variantes: [{ rotulo: '50g', preco: 4.50 }, { rotulo: '100g', preco: 7.99 }] },
  { nome: 'Fígado de frango', grupo: 'Desidratados 100% de frango', descricao: 'Rico e aromático — ótimo para treino.', variantes: [{ rotulo: '50g', preco: 3.50 }, { rotulo: '100g', preco: 5.99 }] },
  { nome: 'Corações de frango', grupo: 'Desidratados 100% de frango', descricao: 'Petisco pequeno, ideal para recompensa.', variantes: [{ rotulo: '50g', preco: 3.99 }, { rotulo: '100g', preco: 6.49 }] },
  { nome: 'Moelas de frango', grupo: 'Desidratados 100% de frango', descricao: 'Textura firme, muito apreciada.', variantes: [{ rotulo: '50g', preco: 3.50 }, { rotulo: '100g', preco: 5.99 }] },
  { nome: 'Lombinho de porco', grupo: 'Desidratados 100% de porco', descricao: 'Macio e saboroso.', variantes: [{ rotulo: '50g', preco: 4.50 }, { rotulo: '100g', preco: 7.99 }] },
  { nome: 'Fígado de porco', grupo: 'Desidratados 100% de porco', descricao: 'Aroma intenso que os patudos adoram.', variantes: [{ rotulo: '50g', preco: 3.99 }, { rotulo: '100g', preco: 6.49 }] },
  { nome: 'Orelha de porco', grupo: 'Desidratados 100% de porco', descricao: 'Petisco duradouro para roer com gosto.', variantes: [{ rotulo: '1 uni', preco: 2.99 }, { rotulo: '2 uni', preco: 5.50 }] },
  { nome: 'Sardinhas', grupo: 'Desidratados 100% de peixe', descricao: 'Ómega natural, ajuda no pelo.', variantes: [{ rotulo: 'Pack 3', preco: 3.99 }, { rotulo: 'Pack 5', preco: 5.99 }] },
  { nome: 'Bites de salmão', grupo: 'Desidratados 100% de peixe', descricao: 'Pequenos bocados de salmão desidratado.', variantes: [{ rotulo: '50g', preco: 5.50 }, { rotulo: '100g', preco: 9.50 }] },
  { nome: 'Tiras de salmão', grupo: 'Desidratados 100% de peixe', descricao: 'Tiras finas, leves e crocantes.', variantes: [{ rotulo: '50g', preco: 5.99 }, { rotulo: '100g', preco: 9.99 }] }
];

/* Taxa de entrega por distância (linha reta a partir da creche em Palmela) */
var ENTREGA = { origem: { lat: 38.577348, lng: -8.875356 }, base: 2.5, baseKm: 3, porKm: 0.5, raioMax: 10 };

var PRODUTOS = [];
var CARRINHO = [];
/* Limites dos campos que não dependem do país */
var LIMITES = { nome: 60, telefone: 20, paisOutro: 40, notas: 300 };

/* ── Endereços por país ───────────────────────────────────────────────
   Fonte única de verdade do formulário de envio: que campos aparecem,
   por que ordem, com que rótulo, se são obrigatórios e como se validam.
   Cada país declara só o que difere de PAIS_FALLBACK / CAMPOS_BASE.
   Para acrescentar um país basta uma entrada nova em PAISES_CFG. */

/* Limpeza aplicada enquanto o utilizador escreve. */
var MASCARAS = {
  livre: function (v) { return v; },
  texto: function (v) { return v.replace(/[^\p{L}\p{M}\s.'-]/gu, ''); },
  local: function (v) { return v.replace(/[^\p{L}\p{M}\p{N}\s.,'\/-]/gu, ''); },
  numero: function (v) { return v.replace(/[^\p{L}\p{N}\s.ºª,\/-]/gu, ''); },
  digitos: function (v) { return v.replace(/\D/g, ''); },
  alfanumerico: function (v) { return v.replace(/[^\p{L}\p{N}\s-]/gu, '').toUpperCase(); },
  cpPt: function (v) {
    var d = v.replace(/\D/g, '').slice(0, 7);
    return d.length > 4 ? d.slice(0, 4) + '-' + d.slice(4) : d;
  }
};

/* Valores por omissão de cada campo, antes das especializações do país. */
var CAMPOS_BASE = {
  morada: { rotulo: 'Morada (rua)', ajuda: '', obrigatorio: true, min: 4, max: 80, mascara: 'livre', autocomplete: 'address-line1', placeholder: '' },
  numero: { rotulo: 'Nº / Andar', ajuda: '', obrigatorio: true, min: 1, max: 20, mascara: 'numero', meia: true, placeholder: '' },
  cpostal: { rotulo: 'Código postal', ajuda: '', obrigatorio: false, min: 0, max: 12, mascara: 'alfanumerico', meia: true, autocomplete: 'postal-code', regex: null, erro: '', placeholder: '' },
  localidade: { rotulo: 'Localidade', ajuda: '', obrigatorio: true, min: 2, max: 40, mascara: 'local', autocomplete: 'address-level2', placeholder: '' },
  regiao: { rotulo: 'Região / Estado', ajuda: '', obrigatorio: false, min: 0, max: 40, mascara: 'local', autocomplete: 'address-level1', placeholder: '' },
  destinatario: { rotulo: 'Nome do destinatário', ajuda: 'se a encomenda for para outra pessoa', obrigatorio: false, min: 0, max: 60, mascara: 'texto', placeholder: '' }
};

/* Usado por "Outro" e por qualquer país sem entrada própria. Nunca bloqueia. */
var PAIS_FALLBACK = {
  indicativo: '',
  telMax: 15,
  telRegex: null, /* null = só aceita número internacional começado por + */
  telErro: 'telefone com indicativo internacional (ex.: +34 600 000 000)',
  telPlaceholder: '+34 600 000 000',
  ordem: ['morada', 'numero', 'cpostal', 'localidade', 'regiao'],
  campos: {
    morada: { placeholder: 'Rua / Street' },
    cpostal: { ajuda: 'se existir no país de destino' },
    regiao: { ajuda: 'divisão administrativa' }
  }
};

var PAISES_CFG = {
  'Portugal': {
    indicativo: '+351', telMax: 9, telRegex: /^[29]\d{8}$/,
    telErro: 'telefone português com 9 dígitos', telPlaceholder: '912 345 678',
    ordem: ['morada', 'numero', 'cpostal', 'localidade', 'regiao'],
    campos: {
      morada: { placeholder: 'Rua das Videiras' },
      numero: { placeholder: '12, 2.º Esq.' },
      cpostal: { obrigatorio: true, max: 8, mascara: 'cpPt', inputmode: 'numeric', regex: /^\d{4}-\d{3}$/, erro: 'código postal no formato 0000-000', placeholder: '2950-034' },
      localidade: { placeholder: 'Palmela' },
      regiao: { rotulo: 'Distrito', placeholder: 'Setúbal' }
    }
  },
  'Espanha': {
    indicativo: '+34', telMax: 9, telRegex: /^[6789]\d{8}$/,
    telErro: 'telefone espanhol com 9 dígitos', telPlaceholder: '600 000 000',
    ordem: ['morada', 'numero', 'cpostal', 'localidade', 'regiao'],
    campos: {
      morada: { rotulo: 'Dirección (calle)', ajuda: 'morada / rua', placeholder: 'Calle Mayor' },
      numero: { rotulo: 'Nº / Piso', ajuda: 'número e andar' },
      cpostal: { obrigatorio: true, max: 5, mascara: 'digitos', inputmode: 'numeric', regex: /^\d{5}$/, erro: 'código postal espanhol com 5 dígitos', placeholder: '28013' },
      localidade: { rotulo: 'Población', ajuda: 'localidade', placeholder: 'Madrid' },
      regiao: { rotulo: 'Provincia', ajuda: 'província', obrigatorio: true, min: 2, placeholder: 'Madrid' }
    }
  },
  'França': {
    indicativo: '+33', telMax: 10, telRegex: /^0?[1-9]\d{8}$/,
    telErro: 'telefone francês com 9 ou 10 dígitos', telPlaceholder: '06 12 34 56 78',
    ordem: ['morada', 'numero', 'cpostal', 'localidade'],
    campos: {
      morada: { rotulo: 'Adresse (rue)', ajuda: 'morada / rua', placeholder: 'Rue de Rivoli' },
      numero: { rotulo: 'Nº / Étage', ajuda: 'número e andar' },
      cpostal: { rotulo: 'Code postal', ajuda: 'código postal', obrigatorio: true, max: 5, mascara: 'digitos', inputmode: 'numeric', regex: /^\d{5}$/, erro: 'code postal com 5 dígitos', placeholder: '75001' },
      localidade: { rotulo: 'Ville', ajuda: 'localidade', placeholder: 'Paris' }
    }
  },
  'Reino Unido': {
    indicativo: '+44', telMax: 11, telRegex: /^0?\d{10}$/,
    telErro: 'telefone britânico com 10 dígitos', telPlaceholder: '07700 900123',
    ordem: ['morada', 'numero', 'localidade', 'regiao', 'cpostal'],
    campos: {
      morada: { rotulo: 'Address (street)', ajuda: 'morada / rua', placeholder: 'Baker Street' },
      numero: { rotulo: 'House nº / Flat', ajuda: 'número e andar' },
      localidade: { rotulo: 'Town / City', ajuda: 'localidade', placeholder: 'London' },
      regiao: { rotulo: 'County', ajuda: 'condado', placeholder: 'Greater London' },
      cpostal: { rotulo: 'Postcode', ajuda: 'código postal', obrigatorio: true, max: 8, mascara: 'alfanumerico', regex: /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/, erro: 'postcode válido (ex.: SW1A 1AA)', placeholder: 'SW1A 1AA' }
    }
  },
  'Alemanha': {
    indicativo: '+49', telMax: 12, telRegex: /^0?\d{9,11}$/,
    telErro: 'telefone alemão', telPlaceholder: '0151 23456789',
    ordem: ['morada', 'numero', 'cpostal', 'localidade', 'regiao'],
    campos: {
      morada: { rotulo: 'Straße', ajuda: 'morada / rua', placeholder: 'Hauptstraße' },
      numero: { rotulo: 'Hausnr. / Etage', ajuda: 'número e andar' },
      cpostal: { rotulo: 'PLZ', ajuda: 'código postal', obrigatorio: true, max: 5, mascara: 'digitos', inputmode: 'numeric', regex: /^\d{5}$/, erro: 'PLZ com 5 dígitos', placeholder: '10115' },
      localidade: { rotulo: 'Ort', ajuda: 'localidade', placeholder: 'Berlin' },
      regiao: { rotulo: 'Bundesland', ajuda: 'estado federado', placeholder: 'Berlin' }
    }
  },
  'Suíça': {
    indicativo: '+41', telMax: 10, telRegex: /^0?\d{9}$/,
    telErro: 'telefone suíço', telPlaceholder: '079 123 45 67',
    ordem: ['morada', 'numero', 'cpostal', 'localidade', 'regiao'],
    campos: {
      morada: { rotulo: 'Straße / Rue', ajuda: 'morada / rua', placeholder: 'Bahnhofstrasse' },
      numero: { rotulo: 'Nr. / Etage', ajuda: 'número e andar' },
      cpostal: { rotulo: 'PLZ / NPA', ajuda: 'código postal', obrigatorio: true, max: 4, mascara: 'digitos', inputmode: 'numeric', regex: /^\d{4}$/, erro: 'PLZ suíço com 4 dígitos', placeholder: '8001' },
      localidade: { rotulo: 'Ort / Lieu', ajuda: 'localidade', placeholder: 'Zürich' },
      regiao: { rotulo: 'Kanton', ajuda: 'cantão', max: 20, placeholder: 'ZH' }
    }
  },
  'Luxemburgo': {
    indicativo: '+352', telMax: 9, telRegex: /^\d{6,9}$/,
    telErro: 'telefone luxemburguês', telPlaceholder: '621 123 456',
    ordem: ['morada', 'numero', 'cpostal', 'localidade'],
    campos: {
      morada: { rotulo: 'Adresse (rue)', ajuda: 'morada / rua', placeholder: 'Rue de la Gare' },
      numero: { rotulo: 'Nº / Étage', ajuda: 'número e andar' },
      cpostal: { rotulo: 'Code postal', ajuda: 'código postal', obrigatorio: true, max: 6, mascara: 'alfanumerico', regex: /^(L-)?\d{4}$/, erro: 'code postal com 4 dígitos (ex.: L-1611)', placeholder: 'L-1611' },
      localidade: { rotulo: 'Localité', ajuda: 'localidade', placeholder: 'Luxembourg' }
    }
  },
  'Bélgica': {
    indicativo: '+32', telMax: 10, telRegex: /^0?\d{8,9}$/,
    telErro: 'telefone belga', telPlaceholder: '0470 12 34 56',
    ordem: ['morada', 'numero', 'cpostal', 'localidade'],
    campos: {
      morada: { rotulo: 'Straat / Rue', ajuda: 'morada / rua', placeholder: 'Rue Neuve' },
      numero: { rotulo: 'Nr. / Étage', ajuda: 'número e andar' },
      cpostal: { rotulo: 'Postcode / Code postal', ajuda: 'código postal', obrigatorio: true, max: 4, mascara: 'digitos', inputmode: 'numeric', regex: /^\d{4}$/, erro: 'código postal belga com 4 dígitos', placeholder: '1000' },
      localidade: { rotulo: 'Gemeente / Commune', ajuda: 'localidade', placeholder: 'Bruxelles' }
    }
  },
  'Países Baixos': {
    indicativo: '+31', telMax: 10, telRegex: /^0?\d{9}$/,
    telErro: 'telefone neerlandês', telPlaceholder: '06 12345678',
    ordem: ['morada', 'numero', 'cpostal', 'localidade', 'regiao'],
    campos: {
      morada: { rotulo: 'Straat', ajuda: 'morada / rua', placeholder: 'Damrak' },
      numero: { rotulo: 'Huisnr. / Etage', ajuda: 'número e andar' },
      cpostal: { rotulo: 'Postcode', ajuda: 'código postal', obrigatorio: true, max: 7, mascara: 'alfanumerico', regex: /^\d{4} ?[A-Z]{2}$/, erro: 'postcode no formato 1234 AB', placeholder: '1012 AB' },
      localidade: { rotulo: 'Plaats', ajuda: 'localidade', placeholder: 'Amsterdam' },
      regiao: { rotulo: 'Provincie', ajuda: 'província', placeholder: 'Noord-Holland' }
    }
  },
  'Itália': {
    indicativo: '+39', telMax: 11, telRegex: /^\d{9,11}$/,
    telErro: 'telefone italiano', telPlaceholder: '312 345 6789',
    ordem: ['morada', 'numero', 'cpostal', 'localidade', 'regiao'],
    campos: {
      morada: { rotulo: 'Indirizzo (via)', ajuda: 'morada / rua', placeholder: 'Via Roma' },
      numero: { rotulo: 'Nº civico / Piano', ajuda: 'número e andar' },
      cpostal: { rotulo: 'CAP', ajuda: 'código postal', obrigatorio: true, max: 5, mascara: 'digitos', inputmode: 'numeric', regex: /^\d{5}$/, erro: 'CAP com 5 dígitos', placeholder: '00184' },
      localidade: { rotulo: 'Comune', ajuda: 'localidade', placeholder: 'Roma' },
      regiao: { rotulo: 'Provincia', ajuda: 'sigla da província', obrigatorio: true, min: 2, max: 20, placeholder: 'RM' }
    }
  },
  'Irlanda': {
    indicativo: '+353', telMax: 10, telRegex: /^0?\d{9}$/,
    telErro: 'telefone irlandês', telPlaceholder: '085 123 4567',
    ordem: ['morada', 'numero', 'localidade', 'regiao', 'cpostal'],
    campos: {
      morada: { rotulo: 'Address (street)', ajuda: 'morada / rua', placeholder: "O'Connell Street" },
      numero: { rotulo: 'House nº / Flat', ajuda: 'número e andar' },
      localidade: { rotulo: 'Town / City', ajuda: 'localidade', placeholder: 'Dublin' },
      regiao: { rotulo: 'County', ajuda: 'condado', obrigatorio: true, min: 2, placeholder: 'Co. Dublin' },
      cpostal: { rotulo: 'Eircode', ajuda: 'código postal', max: 8, mascara: 'alfanumerico', regex: /^[A-Z]\d{2} ?[A-Z\d]{4}$/, erro: 'Eircode válido (ex.: D02 AF30)', placeholder: 'D02 AF30' }
    }
  },
  'Outro': {}
};

var PAISES = Object.keys(PAISES_CFG);

/* A entrega em mão é sempre em Portugal (a geocodificação está travada em PT),
   por isso só o modo "Envio CTT" consulta o país escolhido. */
var ORDEM_ENTREGA = ['morada', 'numero', 'cpostal', 'localidade'];

function paisAtivo() {
  return CHECKOUT.modo === 'ctt' ? CHECKOUT.pais : 'Portugal';
}

function juntaCfg(base, extra) {
  var r = {}, k;
  for (k in base) if (Object.prototype.hasOwnProperty.call(base, k)) r[k] = base[k];
  for (k in extra) if (Object.prototype.hasOwnProperty.call(extra, k)) r[k] = extra[k];
  return r;
}

function cfgPais(nome) {
  return juntaCfg(PAIS_FALLBACK, PAISES_CFG[nome] || {});
}

/* Config final de um campo: base → fallback → especialização do país.
   Devolve null para chaves que não são de endereço (nome, notas, ...). */
function cfgCampo(pais, chave) {
  if (!CAMPOS_BASE[chave]) return null;
  var especifico = ((PAISES_CFG[pais] || {}).campos || {})[chave];
  var generico = especifico ? {} : (PAIS_FALLBACK.campos[chave] || {});
  return juntaCfg(juntaCfg(CAMPOS_BASE[chave], generico), especifico || {});
}

function ordemCampos() {
  return CHECKOUT.modo === 'ctt' ? cfgPais(CHECKOUT.pais).ordem : ORDEM_ENTREGA;
}

/* Troca de país: re-valida o que já estava preenchido em vez de deitar fora.
   O código postal é testado ANTES do corte pelo `max` do novo país — senão um
   2950-034 truncado a 29500 passaria na regex espanhola e guardava-se lixo. */
function trocaPais(novo) {
  CHECKOUT.pais = novo;
  var cfg = cfgPais(novo);
  var cc = cfgCampo(novo, 'cpostal');
  var cru = (MASCARAS[cc.mascara] || MASCARAS.livre)(String(CHECKOUT.cpostal || ''));
  CHECKOUT.cpostal = (cru && cc.regex && !cc.regex.test(cru.trim())) ? '' : cru.slice(0, cc.max);
  if (cfg.ordem.indexOf('regiao') === -1) CHECKOUT.regiao = '';
  else CHECKOUT.regiao = limpaCampo('regiao', CHECKOUT.regiao);
  if (novo !== 'Outro') CHECKOUT.paisOutro = '';
  CHECKOUT.telefone = limpaCampo('telefone', CHECKOUT.telefone);
  limpaEntrega();
}

/* Nome legível de um campo para as mensagens de erro. Os rótulos nativos são
   siglas (PLZ, CAP), por isso não se põem em minúsculas — junta-se a ajuda em PT. */
function nomeCampo(c) {
  return c.ajuda ? c.rotulo + ' (' + c.ajuda + ')' : c.rotulo.toLowerCase();
}

/* Devolve '' se o campo está bom, ou a descrição do que falta. */
function validaCampo(chave, c) {
  var v = String(CHECKOUT[chave] || '').trim();
  if (!v) return c.obrigatorio ? nomeCampo(c) : '';
  if (c.min && v.length < c.min) return nomeCampo(c);
  if (c.regex && !c.regex.test(v)) return c.erro || nomeCampo(c);
  return '';
}

function limpaCampo(chave, valor) {
  var v = String(valor).replace(/[\u0000-\u001F\u007F<>]/g, '');
  if (chave === 'telefone') {
    var mais = v.trim().charAt(0) === '+';
    var dig = v.replace(/\D/g, '').slice(0, mais ? 15 : (cfgPais(paisAtivo()).telMax || 15));
    return (mais ? '+' : '') + dig;
  }
  var c = cfgCampo(paisAtivo(), chave);
  if (c) return (MASCARAS[c.mascara] || MASCARAS.livre)(v).slice(0, c.max);
  if (chave === 'nome' || chave === 'paisOutro') v = MASCARAS.texto(v);
  var max = LIMITES[chave];
  return max ? v.slice(0, max) : v;
}

function paisEnvio() {
  if (CHECKOUT.modo !== 'ctt') return 'Portugal';
  return CHECKOUT.pais === 'Outro' ? (CHECKOUT.paisOutro || 'Outro país') : CHECKOUT.pais;
}

function telefoneValido(t) {
  var s = String(t).trim();
  var dig = s.replace(/\D/g, '');
  if (s.charAt(0) === '+') return dig.length >= 8 && dig.length <= 15;
  var regex = cfgPais(paisAtivo()).telRegex;
  return regex ? regex.test(dig) : false;
}

function checkoutVazio() {
  return { nome: '', telefone: '', modo: 'recolha', morada: '', numero: '', cpostal: '', localidade: '', regiao: '', pais: 'Portugal', paisOutro: '', destinatario: '', notas: '', taxa: null, dist: null, aviso: '' };
}
var CHECKOUT = checkoutVazio();
var ULTIMO_LINK_WA = '';

function euros(v) {
  return Number(v || 0).toFixed(2).replace('.', ',') + '€';
}

function distanciaKm(a, b) {
  var R = 6371;
  var dLat = (b.lat - a.lat) * Math.PI / 180;
  var dLng = (b.lng - a.lng) * Math.PI / 180;
  var la1 = a.lat * Math.PI / 180, la2 = b.lat * Math.PI / 180;
  var h = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(la1) * Math.cos(la2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function taxaPorDistancia(km) {
  if (km > ENTREGA.raioMax) return null;
  if (km <= ENTREGA.baseKm) return ENTREGA.base;
  return ENTREGA.base + Math.ceil(km - ENTREGA.baseKm) * ENTREGA.porKm;
}

function limpaEntrega() {
  CHECKOUT.taxa = null;
  CHECKOUT.dist = null;
  CHECKOUT.aviso = '';
}

function mostraInfoEntrega(texto, tipo) {
  var el = document.getElementById('info-entrega');
  if (!el) return;
  el.hidden = !texto;
  el.className = 'info-entrega' + (tipo ? ' ' + tipo : '');
  el.textContent = texto || '';
}

function geocodifica(consulta) {
  var url = 'https://nominatim.openstreetmap.org/search?format=json&countrycodes=pt&limit=1&addressdetails=1&q=' + encodeURIComponent(consulta);
  return fetch(url)
    .then(function (r) { if (!r.ok) throw new Error('http ' + r.status); return r.json(); })
    .then(function (d) {
      if (!d || !d.length) return null;
      var a = d[0].address || {};
      return { lat: Number(d[0].lat), lng: Number(d[0].lon), cp: a.postcode || '' };
    })
    .catch(function () { return null; });
}

/* Distância máxima aceitável entre a morada encontrada e o código postal indicado.
   Serve para descartar ruas com o mesmo nome noutra zona do país. */
var TOLERANCIA_CP_KM = 6;

function calculaEntrega() {
  var morada = (CHECKOUT.morada || '').trim().replace(/[,;]+$/, '');
  var cp = (CHECKOUT.cpostal || '').trim();
  /* A entrega em mão é sempre em PT, mas a regra vem na mesma da configuração. */
  var cpCfg = cfgCampo('Portugal', 'cpostal');
  var cpValido = cpCfg.regex.test(cp);
  var cp4 = cp.slice(0, 4);

  if (!morada && !cpValido) { mostraInfoEntrega('Indique a morada e o ' + cpCfg.erro + '.', 'erro'); return; }
  if (cp && !cpValido) { mostraInfoEntrega('Código postal inválido. Use o ' + cpCfg.erro + '.', 'erro'); return; }
  mostraInfoEntrega('A calcular…', '');

  /* Âncora: o código postal completo e, se falhar, os 4 primeiros dígitos —
     o OpenStreetMap raramente guarda o código postal completo em Portugal. */
  var pedidoCp = cpValido
    ? geocodifica(cp + ', Portugal').then(function (p) {
        if (p && (p.cp || '').slice(0, 4) === cp4) return p;
        return geocodifica(cp4 + ', Portugal');
      })
    : Promise.resolve(null);
  var loc = (CHECKOUT.localidade || '').trim();
  var pedidoMorada = morada ? geocodifica(morada + (loc ? ', ' + loc : '') + (cpValido ? ', ' + cp : '') + ', Portugal') : Promise.resolve(null);

  Promise.all([pedidoCp, pedidoMorada]).then(function (res) {
    var ancora = res[0];
    var ponto = res[1];
    var nota = '';

    if (ancora && ponto) {
      /* A rua só vale se estiver perto da zona do código postal. */
      if (distanciaKm(ancora, ponto) > TOLERANCIA_CP_KM) { ponto = ancora; nota = ' (estimado pelo código postal)'; }
    } else if (ancora) {
      ponto = ancora;
      nota = ' (estimado pelo código postal)';
    } else if (ponto) {
      nota = ' (aproximado)';
    }

    if (!ponto) {
      limpaEntrega();
      mostraInfoEntrega('Não encontrámos esta morada no mapa. Pode seguir assim — a entrega fica "a confirmar" e combinamos o valor por WhatsApp.', '');
      atualizaTotais();
      return;
    }

    var km = distanciaKm(ENTREGA.origem, ponto);
    CHECKOUT.dist = km;
    var taxa = taxaPorDistancia(km);
    var kmTxt = km.toFixed(1).replace('.', ',');
    if (taxa === null) {
      CHECKOUT.taxa = null;
      CHECKOUT.aviso = 'fora';
      mostraInfoEntrega('A ~' + kmTxt + ' km' + nota + ' — fora da área de entrega em mão (máx. ' + ENTREGA.raioMax + ' km). Escolha Recolha na creche ou fale connosco para envio pelos CTT.', 'erro');
    } else {
      CHECKOUT.taxa = taxa;
      CHECKOUT.aviso = '';
      mostraInfoEntrega('A ~' + kmTxt + ' km' + nota + ' · entrega ' + euros(taxa), 'ok');
    }
    atualizaTotais();
  });
}

function taxaAtual() {
  if (CHECKOUT.modo === 'ctt') return null;
  if (CHECKOUT.modo !== 'entrega') return 0;
  return typeof CHECKOUT.taxa === 'number' ? CHECKOUT.taxa : null;
}

function atualizaTotais() {
  var caixa = document.getElementById('bloco-totais');
  if (!caixa) return;
  var sub = totalCarrinho();
  var t = taxaAtual();
  var rotulo = CHECKOUT.modo === 'ctt' ? 'Portes CTT' : 'Entrega';
  var porConfirmar = CHECKOUT.modo === 'ctt' || (CHECKOUT.modo === 'entrega' && t === null);
  var entregaTxt = CHECKOUT.modo === 'recolha' ? 'Grátis' : (porConfirmar ? 'a confirmar' : euros(t));
  caixa.innerHTML =
    '<div class="linha-total"><span>Subtotal</span><span>' + euros(sub) + '</span></div>' +
    '<div class="linha-total"><span>' + rotulo + '</span><span>' + entregaTxt + '</span></div>' +
    '<div class="linha-total grande"><span>Total</span><b>' + euros(sub + (t || 0)) + (porConfirmar ? ' + ' + (CHECKOUT.modo === 'ctt' ? 'portes' : 'entrega') : '') + '</b></div>';
}

function normalizaProduto(p) {
  var vars = p.variantes;
  if (typeof vars === 'string') { try { vars = JSON.parse(vars); } catch (e) { vars = []; } }
  if (!vars || !vars.length) vars = [{ rotulo: '1 uni', preco: 0 }];
  return {
    nome: p.nome || '',
    grupo: p.grupo || 'Petiscos',
    descricao: p.descricao || '',
    imagem_url: p.imagem_url || '',
    variantes: vars.map(function (v) { return { rotulo: String(v.rotulo), preco: Number(v.preco) }; })
  };
}

function carregaProdutos(depois) {
  function reserva() {
    PRODUTOS = CATALOGO_RESERVA.map(normalizaProduto);
    depois();
  }
  if (!SUPABASE.url || !SUPABASE.anon) { reserva(); return; }
  var url = SUPABASE.url.replace(/\/$/, '') + '/rest/v1/' + SUPABASE.tabela +
    '?select=nome,grupo,descricao,variantes,imagem_url&ativo=eq.true&order=ordem.asc';
  fetch(url, { headers: { apikey: SUPABASE.anon, Authorization: 'Bearer ' + SUPABASE.anon } })
    .then(function (r) { if (!r.ok) throw new Error('erro'); return r.json(); })
    .then(function (dados) {
      if (!dados || !dados.length) { reserva(); return; }
      PRODUTOS = dados.map(normalizaProduto);
      depois();
    })
    .catch(reserva);
}

function desenhaLoja() {
  var caixa = document.getElementById('loja');
  if (!caixa) return;
  var grupos = [];
  PRODUTOS.forEach(function (p) {
    var g = grupos.filter(function (x) { return x.nome === p.grupo; })[0];
    if (!g) { g = { nome: p.grupo, itens: [] }; grupos.push(g); }
    g.itens.push(p);
  });

  caixa.innerHTML = grupos.map(function (g) {
    return '<div class="loja-grupo"><header><h3>' + esc(g.nome) + '</h3></header>' +
      '<div class="loja-cartoes">' + g.itens.map(function (p) {
        var i = PRODUTOS.indexOf(p);
        var foto = p.imagem_url
          ? '<img src="' + esc(p.imagem_url) + '" alt="' + esc(p.nome) + '" loading="lazy" />'
          : '<span aria-hidden="true">🦴</span>';
        var seletor = p.variantes.length > 1
          ? '<div class="variantes" role="group" aria-label="Variante de ' + esc(p.nome) + '">' +
              p.variantes.map(function (v, k) {
                return '<button type="button" class="variante' + (k === 0 ? ' ativa' : '') + '" data-var="' + i + '" data-k="' + k + '">' +
                  '<span class="rot">' + esc(v.rotulo) + '</span><span class="pre">' + euros(v.preco) + '</span></button>';
              }).join('') + '</div>'
          : '<span class="variante-unica">' + esc(p.variantes[0].rotulo) + ' — ' + euros(p.variantes[0].preco) + '</span>';
        return '<div class="produto">' +
          '<div class="foto-prod">' + foto + '</div>' +
          '<div class="corpo">' +
            '<h4>' + esc(p.nome) + '</h4>' +
            (p.descricao ? '<p class="desc">' + esc(p.descricao) + '</p>' : '') +
            seletor +
            '<button type="button" class="btn btn-laranja btn-sm" data-add="' + i + '">Adicionar</button>' +
          '</div></div>';
      }).join('') + '</div></div>';
  }).join('');
}

function adicionaAoCarrinho(indice) {
  var p = PRODUTOS[indice];
  if (!p) return;
  var sel = document.querySelector('[data-var="' + indice + '"].ativa');
  var k = sel ? Number(sel.getAttribute('data-k')) : 0;
  var v = p.variantes[k];
  var chave = p.nome + '|' + v.rotulo;
  var existente = CARRINHO.filter(function (l) { return l.chave === chave; })[0];
  if (existente) existente.qtd += 1;
  else CARRINHO.push({ chave: chave, nome: p.nome, rotulo: v.rotulo, preco: v.preco, qtd: 1 });
  atualizaCarrinho();
  avisaAdicionado(p.nome, v.rotulo);
}

function avisaAdicionado(nome, rotulo) {
  var t = document.getElementById('aviso-add');
  if (!t) return;
  t.innerHTML = '<span class="visto-mini" aria-hidden="true">✓</span>' +
    '<span class="txt"><b>' + esc(nome) + '</b> (' + esc(rotulo) + ') adicionado</span>' +
    '<button type="button" id="aviso-ver">Ver carrinho</button>';
  t.hidden = false;
  t.classList.add('visivel');
  clearTimeout(avisaAdicionado.t);
  avisaAdicionado.t = setTimeout(function () {
    t.classList.remove('visivel');
    setTimeout(function () { t.hidden = true; }, 300);
  }, 3200);
  var fab = document.getElementById('fab-carrinho');
  fab.classList.remove('pulsa');
  void fab.offsetWidth;
  fab.classList.add('pulsa');
}

function totalCarrinho() {
  return CARRINHO.reduce(function (s, l) { return s + l.preco * l.qtd; }, 0);
}

function atualizaCarrinho() {
  var fab = document.getElementById('fab-carrinho');
  var contador = document.getElementById('fab-contador');
  var n = CARRINHO.reduce(function (s, l) { return s + l.qtd; }, 0);
  if (fab) fab.hidden = n === 0;
  if (contador) contador.textContent = n;
  if (n === 0) fechaCarrinho();
  desenhaCarrinho();
}

function desenhaCarrinho() {
  var corpo = document.getElementById('carrinho-corpo');
  if (!corpo) return;
  if (!CARRINHO.length) {
    corpo.innerHTML = '<p class="carrinho-vazio">O carrinho está vazio.<br />Escolha os petiscos do seu patudo.</p>';
    return;
  }
  var linhas = CARRINHO.map(function (l, i) {
    return '<div class="linha-item">' +
      '<div class="cabeca"><div><strong>' + esc(l.nome) + '</strong>' +
        '<span class="var">' + esc(l.rotulo) + ' · ' + euros(l.preco) + '</span></div>' +
        '<span class="subtotal">' + euros(l.preco * l.qtd) + '</span></div>' +
      '<div class="base"><div class="stepper">' +
        '<button type="button" data-qtd="' + i + '" data-d="-1" aria-label="Menos">−</button>' +
        '<span>' + l.qtd + '</span>' +
        '<button type="button" data-qtd="' + i + '" data-d="1" aria-label="Mais">+</button>' +
      '</div><button type="button" class="remover" data-rm="' + i + '">Remover</button></div>' +
      '</div>';
  }).join('');

  var modo = CHECKOUT.modo;
  var entrega = modo === 'entrega';
  var ctt = modo === 'ctt';
  var cfgTel = cfgPais(paisAtivo());

  function campo(id, chave, rotulo, extra) {
    return '<div class="campo"><label for="' + id + '">' + rotulo + '</label>' +
      '<input id="' + id + '" data-ck="' + chave + '" value="' + esc(CHECKOUT[chave] || '') + '" ' + (extra || '') + ' /></div>';
  }

  /* Um campo de endereço, desenhado só a partir da configuração do país. */
  function campoCfg(chave, c) {
    var id = 'ck-' + chave;
    var extra = 'maxlength="' + c.max + '"';
    if (c.autocomplete) extra += ' autocomplete="' + c.autocomplete + '"';
    if (c.inputmode) extra += ' inputmode="' + c.inputmode + '"';
    if (c.placeholder) extra += ' placeholder="' + esc(c.placeholder) + '"';
    if (c.obrigatorio) extra += ' aria-required="true"';
    var notas = [];
    if (c.ajuda) notas.push(c.ajuda);
    if (!c.obrigatorio) notas.push('opcional');
    var ajuda = notas.length ? '<span class="ajuda-campo">' + esc(notas.join(' · ')) + '</span>' : '';
    return '<div class="campo"><label for="' + id + '">' + esc(c.rotulo) + '</label>' +
      '<input id="' + id + '" data-ck="' + chave + '" value="' + esc(CHECKOUT[chave] || '') + '" ' + extra + ' />' +
      ajuda + '</div>';
  }

  /* Percorre a ordem definida pelo país; campos de meia largura juntam-se dois a dois. */
  function camposDe(pais, ordem) {
    var out = '', i = 0;
    while (i < ordem.length) {
      var c1 = cfgCampo(pais, ordem[i]);
      var c2 = i + 1 < ordem.length ? cfgCampo(pais, ordem[i + 1]) : null;
      if (c1.meia && c2 && c2.meia) {
        out += '<div class="par-campos">' + campoCfg(ordem[i], c1) + campoCfg(ordem[i + 1], c2) + '</div>';
        i += 2;
      } else if (c1.meia) {
        out += '<div class="par-campos">' + campoCfg(ordem[i], c1) + '</div>';
        i += 1;
      } else {
        out += campoCfg(ordem[i], c1);
        i += 1;
      }
    }
    return out;
  }

  var blocoMorada = '';
  if (entrega) {
    blocoMorada = '<p class="aviso-entrega">A entrega em mão tem um custo calculado pela distância à creche (até ' + ENTREGA.raioMax + ' km). Confirmamos sempre o valor por WhatsApp antes de enviar.</p>' +
      camposDe('Portugal', ORDEM_ENTREGA) +
      '<button type="button" class="btn btn-linha btn-sm" id="calcular-entrega">Calcular entrega</button>' +
      '<p class="info-entrega" id="info-entrega" hidden></p>';
  } else if (ctt) {
    var cfg = cfgPais(CHECKOUT.pais);
    var intl = CHECKOUT.pais !== 'Portugal';
    blocoMorada = '<p class="aviso-entrega">Os portes dos CTT dependem do peso e do destino da encomenda. Confirmamos o valor e o prazo por WhatsApp antes do envio.</p>' +
      '<div class="campo"><label for="ck-pais">País</label><select id="ck-pais" data-ck="pais">' +
        PAISES.map(function (p) {
          return '<option value="' + esc(p) + '"' + (CHECKOUT.pais === p ? ' selected' : '') + '>' + esc(p) + '</option>';
        }).join('') +
      '</select></div>' +
      (CHECKOUT.pais === 'Outro' ? campo('ck-pais-outro', 'paisOutro', 'Indique o país', 'maxlength="40" placeholder="País de destino"') : '') +
      camposDe(CHECKOUT.pais, cfg.ordem) +
      campoCfg('destinatario', cfgCampo(CHECKOUT.pais, 'destinatario')) +
      (intl ? '<p class="aviso-entrega">Envio internacional: os prazos são mais longos e, fora da União Europeia, podem existir taxas alfandegárias a cargo de quem recebe.' +
        (cfg.indicativo ? ' O telefone deve levar o indicativo ' + esc(cfg.indicativo) + '.' : ' Indique o telefone com o indicativo internacional.') + '</p>' : '');
  }

  corpo.innerHTML = linhas +
    '<div class="acoes-carrinho">' +
      '<button type="button" class="continuar" id="continuar">+ Continuar a escolher</button>' +
      '<button type="button" class="limpar" id="limpar">Limpar carrinho</button>' +
    '</div>' +
    campo('ck-nome', 'nome', 'Nome', 'maxlength="60" autocomplete="name" placeholder="O seu nome"') +
    '<div class="campo"><label for="ck-tel">Telefone</label>' +
      '<input id="ck-tel" data-ck="telefone" type="tel" inputmode="tel" autocomplete="tel" maxlength="20"' +
      ' placeholder="' + esc(cfgTel.telPlaceholder) + '" value="' + esc(CHECKOUT.telefone) + '" />' +
      '<span class="ajuda-campo">' + (cfgTel.indicativo
        ? 'indicativo ' + esc(cfgTel.indicativo) + ' — pode escrever só os dígitos locais'
        : 'escreva com o indicativo internacional (ex.: +34 600 000 000)') + '</span></div>' +
    '<div class="campo"><label>Como quer receber</label><div class="modo-botoes">' +
      '<button type="button" data-modo="recolha" class="' + (modo === 'recolha' ? 'ativo' : '') + '">Recolha na creche</button>' +
      '<button type="button" data-modo="entrega" class="' + (entrega ? 'ativo' : '') + '">Entrega em mão</button>' +
      '<button type="button" data-modo="ctt" class="' + (ctt ? 'ativo' : '') + '">Envio CTT</button>' +
    '</div></div>' +
    blocoMorada +
    '<div class="campo"><label for="ck-notas">Notas (opcional)</label><textarea id="ck-notas" data-ck="notas" rows="2" maxlength="300" placeholder="Alguma indicação para a encomenda?">' + esc(CHECKOUT.notas) + '</textarea></div>' +
    '<div class="carrinho-total" id="bloco-totais"></div>' +
    '<p class="erro-checkout" id="erro-checkout" hidden></p>' +
    '<button type="button" class="btn btn-wa" id="finalizar">Finalizar no WhatsApp</button>';

  atualizaTotais();
  if (entrega && CHECKOUT.dist !== null) {
    if (CHECKOUT.aviso === 'fora') {
      mostraInfoEntrega('A ~' + CHECKOUT.dist.toFixed(1).replace('.', ',') + ' km — fora da área de entrega em mão (máx. ' + ENTREGA.raioMax + ' km). Escolha Recolha na creche ou Envio CTT.', 'erro');
    } else if (typeof CHECKOUT.taxa === 'number') {
      mostraInfoEntrega('A ~' + CHECKOUT.dist.toFixed(1).replace('.', ',') + ' km · entrega ' + euros(CHECKOUT.taxa), 'ok');
    }
  }
}

function escondeAviso() {
  var t = document.getElementById('aviso-add');
  if (!t) return;
  clearTimeout(avisaAdicionado.t);
  t.classList.remove('visivel');
  t.hidden = true;
}

function abreCarrinho() {
  escondeAviso();
  document.getElementById('carrinho').classList.add('aberto');
  document.getElementById('carrinho-overlay').hidden = false;
}
function fechaCarrinho() {
  document.getElementById('carrinho').classList.remove('aberto');
  document.getElementById('carrinho-overlay').hidden = true;
}

function mensagemEncomenda() {
  var linhas = CARRINHO.map(function (l) {
    return '• ' + l.qtd + '× ' + l.nome + ' (' + l.rotulo + ') — ' + euros(l.preco * l.qtd);
  }).join('\n');
  var sub = totalCarrinho();
  var taxa = taxaAtual();
  var rotuloEnvio = CHECKOUT.modo === 'ctt' ? 'Portes CTT' : 'Entrega';
  var totais = CHECKOUT.modo === 'recolha'
    ? '\n\n*Total: ' + euros(sub) + '*'
    : '\n\n*Subtotal:* ' + euros(sub) +
      '\n*' + rotuloEnvio + ':* ' + (taxa === null ? 'a confirmar' : euros(taxa)) +
      '\n*Total: ' + euros(sub + (taxa || 0)) + (taxa === null ? ' + ' + (CHECKOUT.modo === 'ctt' ? 'portes' : 'entrega') : '') + '*';
  var t = '*Nova encomenda — Amor à Dentada* 🩵\n\n*Produtos:*\n' + linhas + totais + '\n\n' +
    '*Cliente:* ' + CHECKOUT.nome + '\n' +
    '*Telefone:* ' + CHECKOUT.telefone + '\n' +
    '*Modo:* ' + (CHECKOUT.modo === 'entrega' ? 'Entrega em mão' : CHECKOUT.modo === 'ctt' ? 'Envio CTT' : 'Recolha na creche');
  if (CHECKOUT.modo !== 'recolha') {
    /* A morada segue a ordem e os rótulos do país de destino. */
    var pais = paisAtivo();
    var ordem = ordemCampos();
    for (var oi = 0; oi < ordem.length; oi++) {
      var valor = String(CHECKOUT[ordem[oi]] || '').trim();
      if (!valor) continue;
      var cm = cfgCampo(pais, ordem[oi]);
      /* Rótulo nativo + tradução, para quem lê a encomenda perceber o campo. */
      t += '\n*' + (cm.ajuda ? cm.rotulo + ' (' + cm.ajuda + ')' : cm.rotulo) + ':* ' + valor;
    }
    if (CHECKOUT.modo === 'ctt') t += '\n*País:* ' + paisEnvio();
    if (CHECKOUT.destinatario) t += '\n*Destinatário:* ' + CHECKOUT.destinatario;
    if (CHECKOUT.modo === 'entrega' && CHECKOUT.dist !== null) t += '\n*Distância:* ~' + CHECKOUT.dist.toFixed(1).replace('.', ',') + ' km';
    if (taxa === null) t += '\n_(' + (CHECKOUT.modo === 'ctt' ? 'portes CTT' : 'custo de entrega') + ' a confirmar)_';
  }
  if (CHECKOUT.notas) t += '\n*Notas:* ' + CHECKOUT.notas;
  return t;
}

function finalizaEncomenda() {
  var erro = document.getElementById('erro-checkout');
  var falta = [];
  if (CHECKOUT.nome.trim().length < 2) falta.push('nome');
  if (!telefoneValido(CHECKOUT.telefone)) falta.push(cfgPais(paisAtivo()).telErro);
  if (CHECKOUT.modo !== 'recolha') {
    /* As regras vêm todas da configuração do país — nada fixo aqui. */
    var pais = paisAtivo();
    var ordem = ordemCampos();
    if (CHECKOUT.modo === 'ctt' && CHECKOUT.pais === 'Outro' && CHECKOUT.paisOutro.trim().length < 3) {
      falta.push('país de destino');
    }
    for (var oi = 0; oi < ordem.length; oi++) {
      var msg = validaCampo(ordem[oi], cfgCampo(pais, ordem[oi]));
      if (msg) falta.push(msg);
    }
  }
  if (falta.length) {
    erro.hidden = false;
    erro.textContent = 'Verifique: ' + falta.join(', ') + '.';
    return;
  }
  ULTIMO_LINK_WA = 'https://wa.me/' + WA_LOJA + '?text=' + encodeURIComponent(mensagemEncomenda());
  window.open(ULTIMO_LINK_WA, '_blank', 'noopener');
  CARRINHO = [];
  CHECKOUT = checkoutVazio();
  document.getElementById('fab-carrinho').hidden = true;
  document.getElementById('fab-contador').textContent = '0';
  ecraSucesso();
}

function ecraSucesso() {
  document.getElementById('carrinho-corpo').innerHTML =
    '<div class="sucesso">' +
      '<div class="visto" aria-hidden="true">✓</div>' +
      '<h3>Encomenda recebida! 🩵</h3>' +
      '<p>Obrigada pela sua encomenda. Vamos já preparar os petiscos e entramos em contacto em breve para combinar a entrega ou recolha e o pagamento.</p>' +
      '<p class="dica">Não se esqueça de confirmar o envio da mensagem no WhatsApp.</p>' +
      '<a class="recurso" href="' + esc(ULTIMO_LINK_WA) + '" target="_blank" rel="noopener">O WhatsApp não abriu? Abrir agora</a>' +
      '<button type="button" class="btn btn-teal" id="concluir">Concluir</button>' +
    '</div>';
  abreCarrinho();
}

function ligaLoja() {
  var fabCarrinho = document.getElementById('fab-carrinho');
  var fecharCarrinho = document.getElementById('fechar-carrinho');
  var carrinhoOverlay = document.getElementById('carrinho-overlay');

  document.addEventListener('click', function (ev) {
    var vb = ev.target.closest('.variante');
    if (vb) {
      var irmaos = document.querySelectorAll('[data-var="' + vb.getAttribute('data-var') + '"]');
      for (var vi = 0; vi < irmaos.length; vi++) irmaos[vi].classList.remove('ativa');
      vb.classList.add('ativa');
      return;
    }

    var add = ev.target.closest('[data-add]');
    if (add) { adicionaAoCarrinho(Number(add.getAttribute('data-add'))); return; }

    var scr = ev.target.closest('[data-scroll]');
    if (scr) {
      var alvo = document.getElementById(scr.getAttribute('data-scroll'));
      if (alvo) suaveAte(alvo.getBoundingClientRect().top + window.pageYOffset - 80, 900);
      return;
    }

    var q = ev.target.closest('[data-qtd]');
    if (q) {
      var li = CARRINHO[Number(q.getAttribute('data-qtd'))];
      if (li) {
        li.qtd += Number(q.getAttribute('data-d'));
        if (li.qtd < 1) CARRINHO.splice(CARRINHO.indexOf(li), 1);
        atualizaCarrinho();
      }
      return;
    }

    var rm = ev.target.closest('[data-rm]');
    if (rm) { CARRINHO.splice(Number(rm.getAttribute('data-rm')), 1); atualizaCarrinho(); return; }

    var modo = ev.target.closest('[data-modo]');
    if (modo) { CHECKOUT.modo = modo.getAttribute('data-modo'); desenhaCarrinho(); return; }

    if (ev.target.closest('#continuar')) { fechaCarrinho(); return; }
    if (ev.target.closest('#limpar')) {
      if (window.confirm('Quer limpar o carrinho?')) { CARRINHO = []; atualizaCarrinho(); }
      return;
    }
    if (ev.target.closest('#aviso-ver')) { escondeAviso(); abreCarrinho(); return; }
    if (ev.target.closest('#calcular-entrega')) { calculaEntrega(); return; }
    if (ev.target.closest('#finalizar')) { finalizaEncomenda(); return; }
    if (ev.target.closest('#concluir')) { fechaCarrinho(); desenhaCarrinho(); return; }
  });

  document.addEventListener('input', function (ev) {
    var campo = ev.target.closest('[data-ck]');
    if (!campo) return;
    var chave = campo.getAttribute('data-ck');
    if (chave === 'pais') { trocaPais(campo.value); desenhaCarrinho(); return; }
    var limpo = limpaCampo(chave, campo.value);
    if (limpo !== campo.value) {
      var pos = campo.selectionStart;
      var delta = limpo.length - campo.value.length;
      var novaPos = Math.max(0, Math.min(limpo.length, pos + delta));
      campo.value = limpo;
      try { campo.setSelectionRange(novaPos, novaPos); } catch (e) {}
    }
    CHECKOUT[chave] = limpo;
    if (chave === 'morada' || chave === 'cpostal' || chave === 'numero' || chave === 'localidade' || chave === 'regiao') {
      limpaEntrega();
      mostraInfoEntrega('', '');
      atualizaTotais();
    }
  });

  if (fabCarrinho) fabCarrinho.addEventListener('click', abreCarrinho);
  if (fecharCarrinho) fecharCarrinho.addEventListener('click', fechaCarrinho);
  if (carrinhoOverlay) carrinhoOverlay.addEventListener('click', fechaCarrinho);
}

var FOTOS = [
  ['img/grupo-serra.jpg', 'Grupo de cães em passeio pela serra'],
  ['img/campo-flores.jpg', 'Cão a brincar num campo florido'],
  ['img/tres-caes.jpg', 'Três cães sobre uma rocha'],
  ['img/dois-caes.jpg', 'Dois cães ao ar livre'],
  ['img/border-collie.jpg', 'Border collie a correr no campo'],
  ['img/cao-branco.jpg', 'Cão branco a sorrir para a câmara'],
  ['img/marcia.jpg', 'Márcia com um dos patudos']
];

var FOTOS_PETISCOS = [
  ['img/petisco-1.jpg', 'Saqueta de petiscos e cães à espera'],
  ['img/petisco-2.jpg', 'Petiscos desidratados sobre tábua de madeira'],
  ['img/petisco-3.jpg', 'Variedade de petiscos desidratados'],
  ['img/petisco-4.jpg', 'Cão a cheirar um petisco'],
  ['img/petisco-5.jpg', 'Petiscos e embalagem no jardim'],
  ['img/petisco-6.jpg', 'Cão a receber um petisco']
];

var ICONES = {
  ig: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.8.07-1.1.05-1.7.24-2.1.4-.5.2-.9.44-1.3.84-.4.4-.64.8-.84 1.3-.16.4-.35 1-.4 2.1C2.5 9.9 2.5 10.3 2.5 12s0 2.1.06 3.3c.05 1.1.24 1.7.4 2.1.2.5.44.9.84 1.3.4.4.8.64 1.3.84.4.16 1 .35 2.1.4 1.3.06 1.7.06 4.8.06s3.5 0 4.8-.06c1.1-.05 1.7-.24 2.1-.4.5-.2.9-.44 1.3-.84.4-.4.64-.8.84-1.3.16-.4.35-1 .4-2.1.06-1.2.06-1.6.06-3.3s0-2.1-.06-3.3c-.05-1.1-.24-1.7-.4-2.1-.2-.5-.44-.9-.84-1.3-.4-.4-.8-.64-1.3-.84-.4-.16-1-.35-2.1-.4C15.5 4 15.1 4 12 4Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Zm6.2-8.2a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z"></path></svg>',
  fb: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"></path></svg>',
  wa: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.36-1.4a9.8 9.8 0 0 0 4.68 1.2h.01c5.43 0 9.84-4.4 9.84-9.84A9.78 9.78 0 0 0 12.04 2Zm0 17.98h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.18.83.85-3.1-.2-.32a8.15 8.15 0 0 1-1.25-4.35c0-4.51 3.68-8.18 8.2-8.18a8.16 8.16 0 0 1 8.18 8.2c0 4.51-3.67 8.18-8.13 8.18Zm4.49-6.13c-.25-.13-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.13-.16.24-.63.79-.77.95-.14.17-.28.19-.53.06-.24-.12-1.03-.38-1.97-1.21-.73-.65-1.22-1.45-1.36-1.7-.14-.24-.02-.37.11-.5.11-.11.24-.28.37-.42.12-.15.16-.25.24-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.47-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.24 1.02.39 1.37.5.57.19 1.1.16 1.51.1.46-.07 1.45-.59 1.65-1.17.2-.57.2-1.06.14-1.16-.06-.11-.22-.17-.47-.3Z"></path></svg>'
};

function esc(t) {
  return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ---------- Conteúdo ---------- */
function preenche() {
  var servicosHome = document.getElementById('servicos-home');
  if (servicosHome) {
    servicosHome.innerHTML = SERVICOS.map(function (s) {
      return '<div class="cartao">' +
        '<div class="titulo-linha"><h3>' + s.titulo + '</h3>' +
        (s.pontual ? '<span class="tag-pontual">Pontual</span>' : '') + '</div>' +
        '<p>' + s.texto + '</p>' +
        (s.pontual ? '<p class="nota">' + NOTA_PONTUAL + '</p>' : '') +
        '</div>';
    }).join('');
  }

  var servicosLista = document.getElementById('servicos-lista');
  if (servicosLista) {
    servicosLista.innerHTML = SERVICOS.map(function (s) {
      return '<div class="cartao" style="flex-direction:row;gap:20px;align-items:flex-start;padding:28px">' +
        '<div style="display:flex;flex-direction:column;gap:8px">' +
        '<div class="titulo-linha"><h3 style="font-size:20px">' + s.titulo + '</h3>' +
        (s.pontual ? '<span class="tag-pontual">Pontual</span>' : '') + '</div>' +
        '<p style="font-size:16px">' + s.texto + '</p>' +
        (s.pontual ? '<p class="nota" style="font-size:15px">' + NOTA_PONTUAL + '</p>' : '') +
        '</div></div>';
    }).join('');
  }

  var passos = document.getElementById('passos');
  if (passos) {
    passos.innerHTML = PASSOS.map(function (p) {
      return '<div class="passo"><div class="passo-topo"><div class="numero laranja">' + p.n + '</div>' +
        '<h3 style="font-size:18px;margin:0">' + p.titulo + '</h3></div><p>' + p.texto + '</p></div>';
    }).join('');
  }

  var packs = document.getElementById('packs');
  if (packs) {
    packs.innerHTML = PACKS.map(function (p) {
      return '<div class="pack' + (p.destaque ? ' destaque' : '') + '">' +
        '<span class="freq">' + p.freq + '</span>' +
        '<span class="valor">' + p.preco + '</span>' +
        '<span class="mes">por mês</span>' +
        (p.destaque ? '<span class="top">Mais escolhido</span>' : '') +
        '</div>';
    }).join('');
  }

  var valores = document.getElementById('valores');
  if (valores) {
    valores.innerHTML = VALORES.map(function (v) {
      return '<div class="caixa-teal"><h3 style="color:var(--teal-dark)">' + v.titulo + '</h3>' +
        '<p style="font-size:15px;line-height:1.75">' + v.texto + '</p></div>';
    }).join('');
  }

  var faq = document.getElementById('faq');
  if (faq) {
    faq.innerHTML = FAQS.map(function (f, i) {
      return '<div class="faq-item' + (i === 0 ? ' aberto' : '') + '">' +
        '<button type="button">' + f[0] + '<span>' + (i === 0 ? '−' : '+') + '</span></button>' +
        '<p>' + f[1] + '</p></div>';
    }).join('');
  }

  function fotosHtml(lista, proporcao) {
    return lista.map(function (f) {
      return '<div class="foto ' + proporcao + '"><img src="' + f[0] + '" alt="' + esc(f[1]) + '" loading="lazy" /></div>';
    }).join('');
  }

  var railCreche = document.getElementById('rail-creche');
  if (railCreche) railCreche.innerHTML = fotosHtml(FOTOS, 'r11');

  var railGaleria = document.getElementById('rail-galeria');
  if (railGaleria) railGaleria.innerHTML = fotosHtml(FOTOS, 'r34');

  var fotosPetiscos = document.getElementById('fotos-petiscos');
  if (fotosPetiscos) fotosPetiscos.innerHTML = fotosHtml(FOTOS_PETISCOS, 'r34');

  var navHtml = PAGINAS.map(function (p) {
    var href = p[0];
    var atual = (window.location.pathname || '').split('/').pop() === href;
    return '<a class="nav-link' + (atual ? ' atual' : '') + '" href="' + href + '">' + p[1] + '</a>';
  }).join('');

  var navDesktop = document.getElementById('nav-desktop');
  if (navDesktop) navDesktop.innerHTML = navHtml;

  var navMobile = document.getElementById('nav-mobile');
  if (navMobile) navMobile.innerHTML = navHtml;

  var navRodape = document.getElementById('nav-rodape');
  if (navRodape) navRodape.innerHTML = navHtml;

  var links = document.querySelectorAll('a.wa');
  for (var i = 0; i < links.length; i++) links[i].href = WA;

  var waTopo = document.getElementById('wa-topo');
  if (waTopo) waTopo.href = WA;

  var igs = document.querySelectorAll('a.ig');
  for (var j = 0; j < igs.length; j++) { igs[j].href = CONTACTO.instagram; igs[j].innerHTML = ICONES.ig; }

  var fbs = document.querySelectorAll('a.fb');
  for (var k = 0; k < fbs.length; k++) { fbs[k].href = CONTACTO.facebook; fbs[k].innerHTML = ICONES.fb; }

  var waIcones = document.querySelectorAll('a.wa.cheio');
  for (var m = 0; m < waIcones.length; m++) waIcones[m].innerHTML = ICONES.wa;

  ['email-link', 'email-rodape'].forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.href = 'mailto:' + CONTACTO.email;
    el.textContent = CONTACTO.email;
  });

  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
}

/* ---------- Navegação ---------- */
function limpaHashAntigo() {
  var h = (window.location.hash || '').replace('#', '');
  if (!h) return;
  if (['home', 'sobre', 'servicos', 'precos', 'petiscos', 'galeria', 'contacto'].indexOf(h) === -1) return;
  if (window.history && window.history.replaceState) {
    var novaUrl = window.location.pathname + window.location.search;
    if (window.location.href !== novaUrl) {
      window.history.replaceState(null, '', novaUrl);
    }
  }
}

function irPara(pagina, semScroll) {
  if (!PAGINAS.some(function (p) { return p[0] === pagina || p[0].replace(/\.html$/, '') === pagina; })) pagina = 'home';

  var paginaAtual = (window.location.pathname || '').split('/').pop() || 'index.html';
  var paginaArquivo = destinoPagina(pagina);

  if (paginaAtual !== paginaArquivo) {
    window.location.assign(paginaArquivo);
    return;
  }

  var secao = document.getElementById('pg-' + pagina);
  if (!secao) return;

  var paginas = document.querySelectorAll('.pagina');
  for (var i = 0; i < paginas.length; i++) paginas[i].classList.remove('ativa');
  secao.classList.add('ativa');

  var botoes = document.querySelectorAll('[data-ir]');
  for (var j = 0; j < botoes.length; j++) {
    botoes[j].classList.toggle('atual', botoes[j].getAttribute('data-ir') === pagina);
  }

  var barraVoltar = document.getElementById('barra-voltar');
  if (barraVoltar) barraVoltar.hidden = pagina === 'home';
  var drawer = document.getElementById('drawer');
  if (drawer) drawer.classList.remove('aberto');

  limpaHashAntigo();
  try { window.localStorage.setItem('mps-page', pagina); } catch (e) {}
  if (!semScroll) suaveAte(0, 900);
}

function paginaInicial() {
  var h = (window.location.hash || '').replace('#', '');
  if (['home', 'sobre', 'servicos', 'precos', 'petiscos', 'galeria', 'contacto'].indexOf(h) !== -1) {
    limpaHashAntigo();
    return 'home';
  }

  var paginaAtual = (window.location.pathname || '').split('/').pop() || 'index.html';
  if (paginaAtual && paginaAtual !== 'index.html') {
    var nomePagina = paginaAtual.replace(/\.html$/, '');
    if (PAGINAS.some(function (p) { return p[0] === paginaAtual || p[0].replace(/\.html$/, '') === nomePagina; })) return nomePagina;
  }

  var guardada = null;
  try { guardada = window.localStorage.getItem('mps-page'); } catch (e) {}
  if (PAGINAS.some(function (p) { return p[0] === guardada || p[0].replace(/\.html$/, '') === guardada; })) return guardada;
  return 'home';
}

/* ---------- Eventos ---------- */
function liga() {
  document.addEventListener('click', function (ev) {
    var alvo = ev.target.closest('[data-ir]');
    if (alvo) { irPara(alvo.getAttribute('data-ir')); return; }

    var seta = ev.target.closest('[data-rail]');
    if (seta) {
      var rail = document.getElementById(seta.getAttribute('data-rail'));
      if (rail) {
        var primeiro = rail.firstElementChild;
        var passo = (primeiro ? primeiro.offsetWidth : rail.clientWidth / 2) + 16;
        rail.scrollBy({ left: Number(seta.getAttribute('data-dir')) * passo, behavior: 'smooth' });
      }
      return;
    }

    var faq = ev.target.closest('.faq-item button');
    if (faq) {
      var item = faq.parentElement;
      var abertos = document.querySelectorAll('.faq-item.aberto');
      for (var i = 0; i < abertos.length; i++) {
        if (abertos[i] !== item) {
          abertos[i].classList.remove('aberto');
          abertos[i].querySelector('span').textContent = '+';
        }
      }
      item.classList.toggle('aberto');
      faq.querySelector('span').textContent = item.classList.contains('aberto') ? '−' : '+';
    }
  });

  var abrirMenu = document.getElementById('abrir-menu');
  var fecharMenu = document.getElementById('fechar-menu');
  if (abrirMenu) abrirMenu.addEventListener('click', function () {
    var drawer = document.getElementById('drawer');
    if (drawer) drawer.classList.add('aberto');
  });
  if (fecharMenu) fecharMenu.addEventListener('click', function () {
    var drawer = document.getElementById('drawer');
    if (drawer) drawer.classList.remove('aberto');
  });

  var formReserva = document.getElementById('form-reserva');
  if (formReserva) formReserva.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var d = new FormData(ev.target);
    var texto = [
      'Olá! Chamo-me ' + (d.get('nome') || '—') + '.',
      'Cão: ' + (d.get('cao') || '—'),
      'Serviço: ' + d.get('servico'),
      d.get('msg')
    ].filter(Boolean).join('\n');
    window.open(WA + '?text=' + encodeURIComponent(texto), '_blank', 'noopener');
  });

  window.addEventListener('hashchange', function () {
    var h = (window.location.hash || '').replace('#', '');
    if (['home', 'sobre', 'servicos', 'precos', 'petiscos', 'galeria', 'contacto'].indexOf(h) !== -1) {
      limpaHashAntigo();
      return;
    }
    if (PAGINAS.some(function (p) { return p[0] === h; })) irPara(h);
  });
}

limpaHashAntigo();
preenche();
liga();
ligaLoja();
carregaProdutos(function () { desenhaLoja(); });
desenhaCarrinho();
if (document.getElementById('pg-home')) {
  irPara(paginaInicial(), true);
}
