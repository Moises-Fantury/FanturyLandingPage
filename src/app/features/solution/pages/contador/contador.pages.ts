import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MetaHeadService } from '@shared/services/meta-head.service';

import { ContentContador } from '../../components/contador/content/content.contador';

@Component({
  selector: 'pages-contador',
  imports: [ContentContador],
  templateUrl: './contador.pages.html',
  styleUrl: './contador.pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContadorPages {

  readonly #metaHeadService = inject(MetaHeadService)

  constructor() {
    this.#metaHeadService.updateMetaTags({
      descrition: `O portal oferece uma plataforma totalmente integrada aos nossos sistemas, proporcionando uma maneira prática e automatizada de estabelecer contato direto com o contador. Além disso, permite o armazenamento e o envio de documentos fiscais e relatórios que são essenciais para a contabilidade da sua empresa. Simplifique e otimize seus processos ao adotar o envio automático desses documentos, economizando tempo, garantindo organização e eliminando preocupações relacionadas ao espaço e a possíveis perdas.`,
      keywords: `Portal do Contador, Contador, Acesso fácil aos documentos fiscais,XML diretamente pelo portal`
    })
  }

}
