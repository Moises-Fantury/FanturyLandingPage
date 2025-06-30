import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { activeLoaderTimer } from '@shared/signals/active-loader.signal';

@Component({
  selector: 'widget-header-figure',
  imports: [],
  templateUrl: './widget-figure.header.html',
  styleUrl: './widget-figure.header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetFigureHeader {

  readonly logoUrl = input.required<string>({ alias: 'r_logoUrl' })
  readonly logoAlt = input.required<string>({ alias: 'r_logoAlt' })

  protected readonly loader = activeLoaderTimer(200);

}
