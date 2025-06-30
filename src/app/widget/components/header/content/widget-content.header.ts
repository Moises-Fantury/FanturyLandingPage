import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LayoutBreakPointService } from '@shared/services/layout-break-point.service';
import { activeLoaderTimer } from '@shared/signals/active-loader.signal';

@Component({
  selector: 'widget-header-content',
  imports: [],
  templateUrl: './widget-content.header.html',
  styleUrl: './widget-content.header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetContentHeader {

  protected readonly layout = inject(LayoutBreakPointService)

  protected readonly loader = activeLoaderTimer(1000);

}
