import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ROUTER_SYSTEM } from '@core/constants/routes.const';
import { ID_VALUES_HTML } from '@features/company/constants/id-value-html.const';
import { DaisyCardUi } from '@shared/components/ui/daisy/daisy-card/daisy-card.ui';
import { DaisyHeroUi } from '@shared/components/ui/daisy/daisy-hero/daisy-hero.ui';
import { LayoutBreakPointService } from '@shared/services/layout-break-point.service';

@Component({
  selector: 'partner-content',
  imports: [DaisyHeroUi, DaisyCardUi],
  templateUrl: './content.partner.html',
  styleUrl: './content.partner.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentPartner {

  protected readonly layout = inject(LayoutBreakPointService)

  protected readonly route = ROUTER_SYSTEM
  protected readonly idValue = ID_VALUES_HTML

}
