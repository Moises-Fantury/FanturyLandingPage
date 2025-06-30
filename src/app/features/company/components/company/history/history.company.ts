import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ID_VALUES_HTML } from '@features/company/constants/id-value-html.const';
import { DaisyHeroContent } from '@shared/components/ui/daisy/components/hero/daisy-hero-content/daisy-hero-content.hero';
import { DaisyHeroUi } from '@shared/components/ui/daisy/daisy-hero/daisy-hero.ui';
import { LayoutBreakPointService } from '@shared/services/layout-break-point.service';
import { activeLoaderTimer } from '@shared/signals/active-loader.signal';

@Component({
  selector: 'company-history',
  imports: [DaisyHeroUi, DaisyHeroContent],
  templateUrl: './history.company.html',
  styleUrl: './history.company.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryCompany {

  readonly #layout = inject(LayoutBreakPointService)

  protected readonly loader = activeLoaderTimer(500)
  protected readonly idValue = ID_VALUES_HTML
  
  protected readonly minHeight = computed(() => {
    if (this.#layout.layoutMobile()) {
      return 'min-h-325'
    } else{
      return 'min-h-175'
    }
  })
}
