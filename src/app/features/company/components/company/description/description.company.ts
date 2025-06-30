import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ID_VALUES_HTML } from '@features/company/constants/id-value-html.const';
import { DaisyHeroContent } from '@shared/components/ui/daisy/components/hero/daisy-hero-content/daisy-hero-content.hero';
import { DaisyHeroUi } from '@shared/components/ui/daisy/daisy-hero/daisy-hero.ui';
import { LayoutBreakPointService } from '@shared/services/layout-break-point.service';

@Component({
  selector: 'company-description',
  imports: [DaisyHeroUi, DaisyHeroContent],
  templateUrl: './description.company.html',
  styleUrl: './description.company.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionCompany {

  readonly #layout = inject(LayoutBreakPointService)

  protected readonly idValue = ID_VALUES_HTML

  protected readonly minHeight = computed(() => {
    if (this.#layout.layoutMobile()) {
      return 'min-h-200'
    } else {
      return 'min-h-125'
    }
  })

}
