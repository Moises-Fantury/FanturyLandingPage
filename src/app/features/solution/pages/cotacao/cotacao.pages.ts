import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentCotacao } from "../../components/cotacao/content/content.cotacao";
import { MetaHeadService } from '@shared/services/meta-head.service';

@Component({
  selector: 'pages-cotacao',
  imports: [ContentCotacao],
  templateUrl: './cotacao.pages.html',
  styleUrl: './cotacao.pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CotacaoPages {

  readonly #metaHeadService = inject(MetaHeadService)

  constructor() {
    this.#metaHeadService.updateMetaTags({
      descrition: `Modernize o processo de compras da sua empresa com a Cotação Web. Agora ficou mais fácil e rápido solicitar preços a diversos fornecedores diretamente pelo sistema. Com a nova funcionalidade do Empresarial ERP, sua equipe de compras ganha agilidade e eficiência ao enviar cotações online, comparar propostas e tomar decisões com muito mais praticidade.`,
      keywords: `Fantury Cotação Web, cotações online, comunicação com os fornecedores, Simplifica o envio e recebimento de cotações`
    })
  }

}
