import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MODULES_ERP } from '@features/solution/constants/modules.const';
import { CardMiniUi } from '@shared/components/ui/card-mini/card-mini.ui';
import { Card, CardsGroupUi } from '@shared/components/ui/cards-group/cards-group.ui';
import { DaisyHeroContent } from '@shared/components/ui/daisy/components/hero/daisy-hero-content/daisy-hero-content.hero';
import { DaisyCardUi } from '@shared/components/ui/daisy/daisy-card/daisy-card.ui';
import { DaisyHeroUi } from '@shared/components/ui/daisy/daisy-hero/daisy-hero.ui';
import { activeLoaderTimer } from '@shared/signals/active-loader.signal';

@Component({
  selector: 'fantury-content',
  imports: [DaisyHeroUi, DaisyHeroContent, DaisyCardUi, CardMiniUi, CardsGroupUi],
  templateUrl: './content.fantury.html',
  styleUrl: './content.fantury.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentFantury {

  protected readonly loader = activeLoaderTimer(250)

  protected readonly modules = MODULES_ERP

  protected readonly cards: Card[] = [
    {
      title: 'Cadastros & Controles Básicos',
      items: [
        'Cadastro de clientes, fornecedores, vendedores e transportadores',
        'Vários endereços por entidade',
        'Listagem de aniversários de clientes',
        'Etiquetas de endereçamento de clientes',
      ],
    },
    {
      title: 'Financeiro',
      items: [
        'Configuração de parcelamentos com juros e multas',
        'Fluxo de caixa realizado e projetado',
        'Controle de contas a pagar e receber',
        'Emissão de boletos, cheques, duplicatas e promissórias',
        'Relatórios: DRE, extrato, razão e livro-caixa',
        'Controle de cartão de crédito, cheques e custos fixos/variáveis',
      ],
    },
    {
      title: 'Produção & Estoque',
      items: [
        'Geração de custo: aquisição, produção, composição',
        'Baixa automática via ordem de produção',
        'Inventário: custo de aquisição, médio, final e preço de venda',
        'Kardex – movimentação de estoque',
        'Controle de devolução, consignação e locação',
      ],
    },
    {
      title: 'Produtos & Preços',
      items: [
        'Grupos e subgrupos até 5 níveis',
        'Criação de várias listas de preços',
        'Controle de itens em promoção',
        'Geração de preço de vendas',
        'Relatórios de Margem de Mix e Curva ABC',
      ],
    },
    {
      title: 'Documentos Fiscais Eletrônicos',
      items: [
        'Emissão de NF-e (Nota Fiscal Eletrônica)',
        'Emissão de NFC-e (Nota Fiscal de Consumidor Eletrônica)',
        'Impressão de DANFE, Notas Fiscais e boletos',
        'Lançamento de Conhecimento de Transporte',
        'Manifestação e importação de XML de compras',
      ],
    },
    {
      title: 'Módulo de Compras',
      items: [
        'Histórico de compras por fornecedor',
        'Relatório de produtos mais comprados',
        'Relatório de fornecedores que mais vendem',
        'Geração de custo de aquisição',
        'Formação de preço de vendas e composição do item',
        'Controle de consignação',
        'Inventário com base no custo de aquisição',
        'Controle de estoque (Kardex)',
        'Controle de estoque (Kardex)',
      ],
    },
    {
      title: 'Serviços & O.S.',
      items: [
        'Controle de Ordem de Serviços e histórico de O.S.',
        'Várias formas de comissão dos vendedores',
      ],
    },
    {
      title: 'Compras',
      items: [
        'Registro e controle de operações por fornecedor',
        'Histórico detalhado de compras realizadas',
        'Relatórios de produtos mais comprados e fornecedores que mais vendem',
        'Relatório de sugestão de compras',
        'Curva ABC por fornecedores',
      ],
    },
    {
      title: 'Vendas',
      items: [
        'Operações e históricos de vendas por cliente',
        'Relatórios de produtos mais vendidos',
        'Relatório de clientes que mais compram',
        'Vários modelos de relatórios DAV e orçamentos',
      ],
    },
    {
      title: 'Relatórios & Análises',
      items: [
        'Relatórios analíticos e gráficos',
        'Relatórios de títulos abertos, quitados e por emissão',
        'Relatório de contagem e levantamento de estoque',
        'Relatório de produtos defasados',
      ],
    },
    {
      title: 'CRM & Gestão Comercial',
      items: [
        'CRM com histórico de atendimentos',
        'Follow-up',
        'Agenda comercial',
      ],
    },
    {
      title: 'Formação e Atualização de Preços',
      items: [
        'Geração de custo de aquisição',
        'Geração de composição do item',
        'Geração de preço de vendas',
        'Listagem para remarcação de preços',
      ],
    },
    {
      title: 'Estoque Integrado com Compras',
      items: [
        'Kardex – controle de movimentação do estoque',
        'Inventário com base em custo de aquisição',
        'Controle de consignação com históricos',
      ],
    },
  ] as const;

}
