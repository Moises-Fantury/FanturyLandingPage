import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentCatalogo } from "../../components/catalogo/content/content.catalogo";
import { MetaHeadService } from '@shared/services/meta-head.service';

@Component({
  selector: 'pages-catalogo',
  imports: [ContentCatalogo],
  templateUrl: './catalogo.pages.html',
  styleUrl: './catalogo.pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogoPages {

  readonly #metaHeadService = inject(MetaHeadService)

  constructor() {
    this.#metaHeadService.updateMetaTags({
      descrition: `O Catálogo On-line, totalmente integrado ao ERP, auxilia de forma direta o processo de realização de
                pedidos, proporcionando maior autonomia aos clientes. Com essa ferramenta, sua empresa pode modernizar
                suas operações de venda, oferecendo uma experiência digital eficiente e acessível.`,
      keywords: `Catálogo, Catálogo Online, agilidade nas vendas, açam pedidos de forma digital`
    })
  }

}
