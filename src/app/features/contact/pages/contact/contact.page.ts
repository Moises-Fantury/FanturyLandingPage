import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormContact } from '@features/contact/components/contact/form/form.contact';
import { HeaderContact } from '@features/contact/components/contact/header/header.contact';
import { WhatsappContact } from '@features/contact/components/contact/whatsapp/whatsapp.contact';
import { GoogleMapsComponent } from '@features/contact/components/google-maps/google-maps.component';
import { WrapperMainShared } from '@shared/components/wrapper-main/wrapper-main.shared';
import { MetaHeadService } from '@shared/services/meta-head.service';

@Component({
  selector: 'contact-page',
  imports: [GoogleMapsComponent, FormContact, WrapperMainShared, HeaderContact, WhatsappContact],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage {

  readonly #meta = inject(MetaHeadService)

  constructor() {
    this.#meta.updateMetaTags({
      descrition: `Temos a solução ideal para sua empresa!`,
      keywords: 'contato, fale conosco, canais de atendimentos, acesso'
    })
  }

}
