import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentColetor } from '@features/solution/components/coletor/content/content.coletor';
import { MetaHeadService } from '@shared/services/meta-head.service';

@Component({
  selector: 'pages-coletor',
  imports: [ContentColetor],
  templateUrl: './coletor.pages.html',
  styleUrl: './coletor.pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColetorPages {

  readonly #metaHeadService = inject(MetaHeadService)

  constructor() {
    this.#metaHeadService.updateMetaTags({
      descrition: `Fantury Coletor é um aplicativo Android desenvolvido com a finalidade de auxiliar a contagem e conferência de estoque da sua empresa transformando o seu aparelho celular ou tablet em um um coletor de dados que realiza a leitura de código de barras de produtos, soma quantidades e gera listas de conferência de mercadoria.`,
      keywords: `Fantury Coletor, Coletor, conferência de estoque, Controle de Coletas por listas de conferência`
    })
  }
  
}
