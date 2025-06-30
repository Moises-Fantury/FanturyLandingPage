import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ID_VALUES_HTML } from '@features/company/constants/id-value-html.const';
import { DaisyHeroContent } from '@shared/components/ui/daisy/components/hero/daisy-hero-content/daisy-hero-content.hero';
import { DaisyHeroUi } from '@shared/components/ui/daisy/daisy-hero/daisy-hero.ui';
import { activeLoaderTimer } from '@shared/signals/active-loader.signal';

@Component({
  selector: 'company-mission',
  imports: [DaisyHeroUi, DaisyHeroContent],
  templateUrl: './mission.company.html',
  styleUrl: './mission.company.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionCompany {

  protected readonly loader = activeLoaderTimer(500)
  protected readonly idValue = ID_VALUES_HTML

}
