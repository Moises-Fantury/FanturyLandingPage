import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ID_VALUES_HTML } from '@features/company/constants/id-value-html.const';
import { DaisyHeroContent } from '@shared/components/ui/daisy/components/hero/daisy-hero-content/daisy-hero-content.hero';
import { DaisyHeroUi } from '@shared/components/ui/daisy/daisy-hero/daisy-hero.ui';

@Component({
  selector: 'contador-content',
  imports: [DaisyHeroUi, DaisyHeroContent],
  templateUrl: './content.contador.html',
  styleUrl: './content.contador.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentContador {

  protected readonly idValue = ID_VALUES_HTML

}
