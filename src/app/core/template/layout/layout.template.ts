import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FooterTemplate } from '../footer/footer.template';
import { HeaderTemplate } from '../header/header.template';

@Component({
  selector: 'template-layout',
  imports: [HeaderTemplate, FooterTemplate],
  templateUrl: './layout.template.html',
  styleUrl: './layout.template.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutTemplate { }
