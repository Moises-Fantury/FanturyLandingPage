import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CARD_CONFIG_INTEGRATION } from '@features/solution/constants/card-config-integration.const';
import { CardIntegration } from '@features/solution/model/card-integration.model';
import { DaisyHeroContent } from '@shared/components/ui/daisy/components/hero/daisy-hero-content/daisy-hero-content.hero';
import { DaisyHeroUi } from '@shared/components/ui/daisy/daisy-hero/daisy-hero.ui';
import { LayoutBreakPointService } from '@shared/services/layout-break-point.service';
import { activeLoaderTimer } from '@shared/signals/active-loader.signal';

@Component({
  selector: 'solution-integrations',
  imports: [DaisyHeroUi, DaisyHeroContent, RouterLink],
  templateUrl: './integrations.solution.html',
  styleUrl: './integrations.solution.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntegrationsSolution {

  readonly #layout = inject(LayoutBreakPointService)

  protected readonly loader = activeLoaderTimer(500)

  protected readonly cardData: CardIntegration[] = CARD_CONFIG_INTEGRATION.map(card => ({
    ...card,
    isFlipped: signal(false)
  }));


  // protected readonly width_value = computed<string>(() => {
  //   if (this.#layout.layoutDesktop()) {
  //     return 'w-100'
  //   } return 'w-full'
  // })


}
