import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CardsCustomercenter } from '@features/customer-center/components/cards/cards.customercenter';
import { HeaderCustomerCenter } from '@features/customer-center/components/customer-center/header/header.customercenter';
import { WrapperMainShared } from '@shared/components/wrapper-main/wrapper-main.shared';
import { MetaHeadService } from '@shared/services/meta-head.service';

@Component({
  selector: 'pages-customer-center',
  imports: [HeaderCustomerCenter, WrapperMainShared, CardsCustomercenter],
  templateUrl: './customer-center.pages.html',
  styleUrl: './customer-center.pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerCenterPages {

  readonly #meta = inject(MetaHeadService)

  constructor() {
    this.#meta.updateMetaTags({
      descrition: 'central do cliente e Selecione abaixo para onde deseja ir. Acesso remoto ou acessar a área privada.',
      keywords: 'remoto,acesso,suporte,central do cliente'
    })
  }

}
