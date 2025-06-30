import { ROUTER_SYSTEM } from '@core/constants/routes.const';
import { ID_VALUES_HTML } from '@features/company/constants/id-value-html.const';

import { CardIntegration } from '../model/card-integration.model';
import { DEFAULT_ICON } from './icon-default-card-integration.const';

export const CARD_CONFIG_INTEGRATION: Omit<CardIntegration, 'isFlipped'>[] = [
  {
    image: './assets/image/pdv.jpg',
    frontIcon: DEFAULT_ICON,
    frontTitle: 'PDV',
    frontDescription: 'Frente de Loja',
    backTitle: 'PDV',
    backDescription: `O PDV NFC-e é mais do que uma simples sistema, é uma ferramenta completa projetada para otimizar todas as etapas do processo de venda, proporcionando uma melhora na experiência tanto para os operadores de caixa quanto para os clientes.`,
    route: ROUTER_SYSTEM.pdv,
    fragment: ID_VALUES_HTML.pdv
  },
  {
    image: './assets/image/pdv-web.png',
    frontIcon: DEFAULT_ICON,
    frontTitle: 'PDV WEB',
    frontDescription: 'Autonomia aos vendedores',
    backTitle: 'PDV Web',
    backDescription: 'Desenvolvido para dar mais autonomia aos vendedores, o PDV Web elimina a necessidade de terminais fixos.',
    route: ROUTER_SYSTEM.pdvweb,
    fragment: ID_VALUES_HTML.pdvweb
  },
  {
    image: './assets/image/restaurante.jpg',
    frontIcon: DEFAULT_ICON,
    frontTitle: 'CHEF',
    frontDescription: 'Restaurantes',
    backTitle: 'CHEF',
    backDescription: 'Solução perfeita para seu restaurante, ferramenta de gestão completa para o ramo, permite automatizar todas as áreas do estabelecimento com ferramentas voltadas para o atendimento, cozinha, garçons e entregas, tudo em um único sistema.',
    route: ROUTER_SYSTEM.chef,
    fragment: ID_VALUES_HTML.chef
  },
  {
    image: './assets/image/mobile.png',
    frontIcon: DEFAULT_ICON,
    frontTitle: 'MOBILE',
    frontDescription: 'Força de Vendas (AFV)',
    backTitle: 'MOBILE',
    backDescription: 'O Aplicativo Força de Vendas (AFV) foi projetado para capacitar sua equipe de vendas com todas as funcionalidades necessárias para maximizar o desempenho e a eficiência, mesmo em ambientes sem conexão à internet.',
    route: ROUTER_SYSTEM.mobile,
    fragment: ID_VALUES_HTML.mobile
  },
  {
    image: './assets/image/coletor.png',
    frontIcon: DEFAULT_ICON,
    frontTitle: 'COLETOR',
    frontDescription: 'Coletor de estoque',
    backTitle: 'COLETOR',
    backDescription: `O Módulo Material é a solução perfeita para o gerenciamento eficiente de estoques e
                                    materiais da sua empresa, garantindo controle total
                                    sobre todas as movimentações e processos relacionados à gestão de recursos.`,
    route: ROUTER_SYSTEM.coletor,
    fragment: ID_VALUES_HTML.coletor
  },
  {
    image: './assets/image/cotacao.jpg',
    frontIcon: DEFAULT_ICON,
    frontTitle: 'COTAÇÃO WEB',
    frontDescription: 'Cotações de compras WEB',
    backTitle: 'COTAÇÃO WEB',
    backDescription: 'Cotação de compra Web. Sua compras com mais rapidas e dinâmicas.',
    route: ROUTER_SYSTEM.cotacao,
    fragment: ID_VALUES_HTML.cotacao
  },
  {
    image: './assets/image/portal-contador.png',
    frontIcon: DEFAULT_ICON,
    frontTitle: 'PORTAL CONTADOR',
    frontDescription: 'Gerenciamento de documentos Fiscais',
    backTitle: 'PORTAL CONTADOR',
    backDescription: 'Cotação de compra Web. Sua compras com mais rapidas e dinâmicas.',
    route: ROUTER_SYSTEM.contador,
    fragment: ID_VALUES_HTML.contador
  },
  {
    image: './assets/image/catalogo-online.png',
    frontIcon: DEFAULT_ICON,
    frontTitle: 'CATALOGO',
    frontDescription: 'Vitrine Online',
    backTitle: 'CATALOGO',
    backDescription: `Tenha sua própria vitrine on-line Integrada ao ERP para otimizar a realização de
                                    pedidos através do Catálogo On-line.`,
    route: ROUTER_SYSTEM.catalogo,
    fragment: ID_VALUES_HTML.catalogo
  },
];