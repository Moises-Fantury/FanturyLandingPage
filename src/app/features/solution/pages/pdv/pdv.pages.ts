import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentPdv } from '@features/solution/components/pdv/content/content.pdv';
import { MetaHeadService } from '@shared/services/meta-head.service';

@Component({
  selector: 'pages-pdv',
  imports: [ContentPdv],
  templateUrl: './pdv.pages.html',
  styleUrl: './pdv.pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PdvPages {

  readonly #metaHeadService = inject(MetaHeadService)

  constructor() {
    this.#metaHeadService.updateMetaTags({
      descrition: `Fantury PDV - Frente de Loja é mais do que uma simples sistema, é uma ferramenta completa projetada para otimizar todas as etapas do processo de venda, proporcionando uma experiência aprimorada tanto para os operadores de caixa quanto para os clientes. Capacite seus operadores de caixa com uma interface amigável e intuitiva, facilitando o processo de venda e garantindo uma experiência positiva para o cliente.`,
      keywords: `Fantury PDV, PDV, Frente de Loja, NFC-e, Notas Fiscais do Consumidor Eletrônicas, Solução Frente de Loja, Consulta de Preço`
    })
  }

}
