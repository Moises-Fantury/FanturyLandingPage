import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimelineChildComponent } from "../../other/timeline-child/timeline-child.component";
import { activeLoaderTimer } from '@shared/signals/active-loader.signal';
import { ID_VALUES_HTML } from '@features/company/constants/id-value-html.const';

@Component({
  selector: 'company-timeline',
  imports: [TimelineChildComponent],
  templateUrl: './timeline.company.html',
  styleUrl: './timeline.company.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineCompany {

  protected readonly loader = activeLoaderTimer(1000)
  protected readonly idValue = ID_VALUES_HTML

}
