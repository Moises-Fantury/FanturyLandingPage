import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ID_VALUES_HTML } from '@features/company/constants/id-value-html.const';
import { DaisyHeroUi } from "../../../../../shared/components/ui/daisy/daisy-hero/daisy-hero.ui";
import { DaisyHeroContent } from "../../../../../shared/components/ui/daisy/components/hero/daisy-hero-content/daisy-hero-content.hero";

@Component({
  selector: 'catalogo-content',
  imports: [DaisyHeroUi, DaisyHeroContent],
  templateUrl: './content.catalogo.html',
  styleUrl: './content.catalogo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentCatalogo {

  protected readonly idValue = ID_VALUES_HTML

}
