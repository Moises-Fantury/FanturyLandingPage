import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ROUTER_SYSTEM } from '@core/constants/routes.const';
import { ID_VALUES_HTML } from '@features/company/constants/id-value-html.const';
import { DaisyHeroContent } from '@shared/components/ui/daisy/components/hero/daisy-hero-content/daisy-hero-content.hero';
import { DaisyCardUi } from '@shared/components/ui/daisy/daisy-card/daisy-card.ui';
import { DaisyHeroUi } from '@shared/components/ui/daisy/daisy-hero/daisy-hero.ui';
import { activeLoaderTimer } from '@shared/signals/active-loader.signal';

@Component({
  selector: 'solution-summary',
  imports: [DaisyHeroUi, DaisyHeroContent, DaisyCardUi, RouterLink],
  templateUrl: './summary.solution.html',
  styleUrl: './summary.solution.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummarySolution {

  readonly #route = inject(Router)

  protected readonly loader = activeLoaderTimer(500)
  protected readonly idValue = ID_VALUES_HTML
  protected readonly route = ROUTER_SYSTEM

  protected routeNavigate(route: string, fragment: string) {
    this.#route.navigate(['/' + route], { fragment: fragment })
  }
}
