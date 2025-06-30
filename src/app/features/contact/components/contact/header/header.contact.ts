import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WidgetContentHeader } from '@widget/components/header/content/widget-content.header';
import { WidgetFigureHeader } from '@widget/components/header/figure/widget-figure.header';

@Component({
  selector: 'contact-header',
  imports: [WidgetFigureHeader, WidgetContentHeader],
  templateUrl: './header.contact.html',
  styleUrl: './header.contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderContact { }
