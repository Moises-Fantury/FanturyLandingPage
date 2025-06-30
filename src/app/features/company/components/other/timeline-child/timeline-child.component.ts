import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Timeline } from '@features/company/model/timeline.model';

@Component({
  selector: 'component-timeline-child',
  imports: [],
  templateUrl: './timeline-child.component.html',
  styleUrl: './timeline-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineChildComponent {

  protected readonly timelines: Timeline[] = [
    {
      ano: '2000',
      title: 'Nascimento como desenvolvedora',
      linePosition: 'timeline-end',
      textPositon: 'md:text-start',
      text: `Início das atividades como desenvolvedora de software: lançamento do “Mr. Inventário”, primeiro aplicativo para gestão de inventário de estoque, 
      e do “Fantury Empresarial 1.0”, software para gestão empresarial para micro e pequenas empresas do comércio.`
    },
    {
      ano: '2004',
      title: 'Nova parceria',
      linePosition: 'timeline-start',
      textPositon: 'md:text-end',
      text: `Início da parceria com a Exactus Software, grande desenvolvedora de softwares contábeis e de gestão empresarial.`
    },
    {
      ano: '2005',
      title: 'Fim de uma parceria',
      linePosition: 'timeline-end',
      textPositon: 'md:text-start',
      text: `Fim da parceria com a Óptima Software.`
    },
    {
      ano: '2006',
      title: 'Fantury Empresarial 6',
      linePosition: 'timeline-start',
      textPositon: 'md:text-end',
      text: `Software Fantury Empresarial 6.0 recebe novos módulos para atender as empresas dos setores de indústrias e prestadoras de serviços. 
      Início da parceria com a desenvolvedora de software paulistana Mobility System para o aplicativo ECF.`
    },
    {
      ano: '2009',
      title: 'Início da era eletrônica',
      linePosition: 'timeline-end',
      textPositon: 'md:text-start',
      text: `A empresa tornou-se a primeira desenvolvedora de software a lançar o seu ERP integrado com a emissão de NF-e no Extremo Sul da Bahia.`
    },
    {
      ano: '2010',
      title: 'Novos lançamentos',
      linePosition: 'timeline-start',
      textPositon: 'md:text-end',
      text: `Lançamento do software ERP Fantury Empresarial 7, com nova interface gráfica e melhores processos de gestão e usabilidade. 
      Lançamento do “My Mobile”, aplicativo de automação da força de venda para dispositivo smartphone com Ordem de Serviço Windows Mobile 6.0.`
    },
    {
      ano: '2011',
      title: 'Crescimento',
      linePosition: 'timeline-end',
      textPositon: 'md:text-start',
      text: `A empresa ganha endereço próprio na cidade de Eunápolis, com 10 colaboradores ativos.`
    },
    {
      ano: '2012',
      title: 'Reconhecimento',
      linePosition: 'timeline-start',
      textPositon: 'md:text-end',
      text: `A empresa foi, pelo segundo ano consecutivo, a maior central de atendimento da Exactus em volume de vendas e faturamento. 
      Participou de vários eventos importantes, como o 14º Conescap, realizado em Costa do Sauípe, e a 10ª edição de Contadores do Estado da Bahia, 
      além de receber o Prêmio Gestão Empreendedora.`
    },
    {
      ano: '2013',
      title: 'Fim da parceria com Mobility System e novos parceiros',
      linePosition: 'timeline-end',
      textPositon: 'md:text-start',
      text: `Termina a parceria com a Mobility System e tem início a parceria com a Opaf e Ello para os aplicativos de PDV ECF. 
      São realizadas reforma e ampliação das instalações para melhor atender clientes internos e externos.`
    },
    {
      ano: '2014',
      title: 'Lançamento Fantury Mobile',
      linePosition: 'timeline-start',
      textPositon: 'md:text-end',
      text: `Lançamento do software “Fantury Mobile”, aplicativo de automação de força de venda para dispositivos móveis como tablete e smartphone com Sistema Operacional 
      Android.`
    },
    {
      ano: '2015',
      title: 'Lançamento Fantury PDV NFC-e',
      linePosition: 'timeline-end',
      textPositon: 'md:text-start',
      text: `Lançamento do software Fantury PDV NFC-e para atender os clientes de varejo.`
    },
    {
      ano: '2018',
      title: 'Mudanças de Nome',
      linePosition: 'timeline-start',
      textPositon: 'md:text-end',
      text: `Mudança do nome da empresa de “Caribé Silva Informática” para “Fantury Software”.`
    },
    {
      ano: '2019',
      title: 'Fantury ERP 10',
      linePosition: 'timeline-end',
      textPositon: 'md:text-start',
      text: `Lançamento da nova versão do software Fantury ERP versão 10`
    },
  ] as const

}
