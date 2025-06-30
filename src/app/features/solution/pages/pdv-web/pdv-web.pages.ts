import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentPdvWeb } from '@features/solution/components/pdv-web/content/content.pdvweb';
import { MetaHeadService } from '@shared/services/meta-head.service';

@Component({
  selector: 'pages-pdv-web',
  imports: [ContentPdvWeb],
  templateUrl: './pdv-web.pages.html',
  styleUrl: './pdv-web.pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PdvWebPages {

  readonly #metaHeadService = inject(MetaHeadService)

  constructor() {
    this.#metaHeadService.updateMetaTags({
      descrition: `Desenvolvido para dar mais autonomia aos vendedores, o PDV Web elimina a necessidade de terminais fixos. Com ele, é possível realizar orçamentos, lançar produtos e concluir vendas diretamente de um celular ou tablet, de qualquer lugar da loja.`,
      keywords: `Fantury PDV WEB, PDV WEB, vendas e orçamentos diretamente de um celular ou tablet`
    })
  }

}
