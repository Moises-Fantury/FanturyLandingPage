import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentMobile } from '@features/solution/components/mobile/content/content.mobile';
import { MetaHeadService } from '@shared/services/meta-head.service';

@Component({
  selector: 'pages-mobile',
  imports: [ContentMobile],
  templateUrl: './mobile.pages.html',
  styleUrl: './mobile.pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobilePages {

  readonly #metaHeadService = inject(MetaHeadService)

  constructor() {
    this.#metaHeadService.updateMetaTags({
      descrition: `O Fantury Mobile Sales é a nossa solução para vendas externas mais inteligentes e eficientes. Um aplicativo de vendas voltado para aparelhos Android que permite o gerenciamento de carteira de clientes do vendedor, catálogo de produtos e sincronismo com o retaguarda do Fantury ERP.`,
      keywords: `Fantury Mobile Sales, Mobile Sales, vendas externas, Controle de Saldo Flex, geolocalização `
    })
  }

}
