import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { activeLoaderTimer } from '@shared/signals/active-loader.signal';

@Component({
  selector: 'widget-header-button',
  imports: [],
  templateUrl: './widget-button.header.html',
  styleUrl: './widget-button.header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetButtonHeader {

  protected readonly loader = activeLoaderTimer(1500);
  readonly click_event = output<void>()

}