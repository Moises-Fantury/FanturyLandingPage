import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderPartner } from "../../components/header/header.partner";
import { ContentPartner } from "../../components/content/content.partner";
import { fragmentScrollIntoViewSignal } from '@shared/signals/fragment-scrollintoview.signal';

@Component({
  selector: 'pages-partner',
  imports: [HeaderPartner, ContentPartner],
  templateUrl: './partner.pages.html',
  styleUrl: './partner.pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnerPages {

  constructor() {
    fragmentScrollIntoViewSignal()
  }

}
