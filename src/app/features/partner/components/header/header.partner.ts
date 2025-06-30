import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WidgetContentHeader } from '@widget/components/header/content/widget-content.header';
import { WidgetFigureHeader } from '@widget/components/header/figure/widget-figure.header';

@Component({
  selector: 'partner-header',
  imports: [WidgetFigureHeader, WidgetContentHeader],
  templateUrl: './header.partner.html',
  styleUrl: './header.partner.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPartner { }
