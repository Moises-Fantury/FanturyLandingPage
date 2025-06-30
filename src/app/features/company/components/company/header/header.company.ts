import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WidgetContentHeader } from '@widget/components/header/content/widget-content.header';
import { WidgetFigureHeader } from '@widget/components/header/figure/widget-figure.header';

@Component({
  selector: 'company-header',
  imports: [WidgetFigureHeader, WidgetContentHeader],
  templateUrl: './header.company.html',
  styleUrl: './header.company.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderCompany { }
