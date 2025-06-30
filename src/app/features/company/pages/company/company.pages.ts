import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DescriptionCompany } from '@features/company/components/company/description/description.company';
import { HeaderCompany } from '@features/company/components/company/header/header.company';
import { HistoryCompany } from '@features/company/components/company/history/history.company';
import { MissionCompany } from '@features/company/components/company/mission/mission.company';
import { TimelineCompany } from '@features/company/components/company/timeline/timeline.company';
import { WrapperMainShared } from '@shared/components/wrapper-main/wrapper-main.shared';
import { MetaHeadService } from '@shared/services/meta-head.service';
import { fragmentScrollIntoViewSignal } from '@shared/signals/fragment-scrollintoview.signal';

@Component({
  selector: 'pages-company',
  imports: [DescriptionCompany, HeaderCompany, WrapperMainShared, HistoryCompany, MissionCompany, TimelineCompany],
  templateUrl: './company.pages.html',
  styleUrl: './company.pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyPages {

  readonly #metaHeadService = inject(MetaHeadService)

  constructor() {
    fragmentScrollIntoViewSignal()
    this.#metaHeadService.updateMetaTags({
      descrition: `A Fantury foi Fundada em Eunápolis-Bahia no ano de 1998, inicialmente com o nome de Caribé Silva Informática
      Até 2003, trabalhamos em parceria com a empresa Optima Informática, para atender escritórios de contabilidade na região sul Bahia. 
      A partir de 2000, começamos a desenvolver e a comercializar o Fantury ERP, com o objetivo de oferecer aos clientes um software com mais recursos, 
      praticidade e menor custo do que os encontrados no mercado à época. Desde então, contabilizamos um aumento substancial no faturamento da empresa., 
      trabalhamos em parceria com a empresa Optima Informática, para atender escritórios de contabilidade na região sul Bahia. A partir de 2000, começamos a 
      desenvolver e a comercializar o Fantury ERP, com o objetivo de oferecer aos clientes um software com mais recursos, praticidade e menor custo do que os 
      encontrados no mercado à época. Desde então, contabilizamos um aumento substancial no faturamento da empresa.`,
      keywords: `Prestação de serviços,História da Empresa,Meta,Missão,história`
    })
  }
}
