import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ID_VALUES_HTML } from '@features/company/constants/id-value-html.const';
import { DaisyHeroContent } from '@shared/components/ui/daisy/components/hero/daisy-hero-content/daisy-hero-content.hero';
import { DaisyHeroUi } from '@shared/components/ui/daisy/daisy-hero/daisy-hero.ui';
import { FlexDimensionDirective } from '@shared/directives/flex-dimension.directive';

@Component({
  selector: 'mobile-content',
  imports: [DaisyHeroUi, DaisyHeroContent, FlexDimensionDirective],
  templateUrl: './content.mobile.html',
  styleUrl: './content.mobile.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentMobile {

  protected readonly idValue = ID_VALUES_HTML

}
