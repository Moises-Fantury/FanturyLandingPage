import { ChangeDetectionStrategy, Component } from '@angular/core';
import { activeLoaderTimer } from '@shared/signals/active-loader.signal';
import { DaisyHeroUi } from "../../../../shared/components/ui/daisy/daisy-hero/daisy-hero.ui";
import { DaisyHeroContent } from "../../../../shared/components/ui/daisy/components/hero/daisy-hero-content/daisy-hero-content.hero";

@Component({
  selector: 'about-differential',
  imports: [DaisyHeroUi, DaisyHeroContent],
  templateUrl: './about-differential.component.html',
  styleUrl: './about-differential.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutDifferentialComponent {

   protected readonly loader = activeLoaderTimer(1500)

}
