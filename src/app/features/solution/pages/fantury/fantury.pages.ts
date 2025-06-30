import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ID_VALUES_HTML } from '@features/company/constants/id-value-html.const';
import { MetaHeadService } from '@shared/services/meta-head.service';

import { HeaderFantury } from '../../components/fantury/header/header.fantury';

@Component({
  selector: 'pages-fantury',
  imports: [HeaderFantury, RouterOutlet],
  templateUrl: './fantury.pages.html',
  styleUrl: './fantury.pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FanturyPages {

  readonly #metaHeadService = inject(MetaHeadService)

  protected readonly idValue = ID_VALUES_HTML

  constructor() {
    this.#metaHeadService.updateMetaTags({
      descrition: `A Fantury oferece como solução de Gestão Empresarial o software Fantury ERP. Este compreende um conjunto otimizado de ferramentas que, juntas, potencializam a gestão empresarial. As demais soluções oferecidas pela empresa são todas ligadas ao Fantury ERP.
O sistema de Gestão Empresarial ERP da Fantury foi desenvolvido para potencializar a gestão da sua empresa. Com ele, você tem em mãos um software ERP completo e eficiente, que diminui processos, agiliza a tomada de decisões e gera resultados precisos. Tudo isso de forma prática, automatizada, especialista e simplificada, facilitando sua gestão. O software Fantury ERP é a solução segura para destacar o seu negócio em um mercado competitivo, de forma planejada e efetiva.`,
      keywords: `O sistema de Gestão Empresarial ERP, Fantury ERP, ERP, potencializar a gestão da sua empresa, Setores Produtivos, Segurança, Cadastros & Controles Básicos, Financeiro,
      Produção & Estoque`
    })
  }

}
