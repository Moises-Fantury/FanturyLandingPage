import { ChangeDetectionStrategy, Component } from '@angular/core';
import { activeLoaderTimer } from '@shared/signals/active-loader.signal';

@Component({
  selector: 'contact-whatsapp',
  imports: [],
  templateUrl: './whatsapp.contact.html',
  styleUrl: './whatsapp.contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappContact {

  protected readonly loader = activeLoaderTimer(500)

}
