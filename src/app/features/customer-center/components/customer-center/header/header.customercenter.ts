import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WidgetContentHeader } from '@widget/components/header/content/widget-content.header';
import { WidgetFigureHeader } from '@widget/components/header/figure/widget-figure.header';

@Component({
  selector: 'customercenter-header',
  imports: [WidgetFigureHeader, WidgetContentHeader],
  templateUrl: './header.customercenter.html',
  styleUrl: './header.customercenter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderCustomerCenter { }
