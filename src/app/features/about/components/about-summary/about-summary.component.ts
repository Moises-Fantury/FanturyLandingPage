import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTER_SYSTEM } from '@core/constants/routes.const';
import { DaisyHeroUi } from "../../../../shared/components/ui/daisy/daisy-hero/daisy-hero.ui";
import { DaisyHeroContent } from "../../../../shared/components/ui/daisy/components/hero/daisy-hero-content/daisy-hero-content.hero";

@Component({
  selector: 'about-summary',
  imports: [RouterLink, DaisyHeroUi, DaisyHeroContent],
  templateUrl: './about-summary.component.html',
  styleUrl: './about-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSummaryComponent {

  protected readonly router = ROUTER_SYSTEM

}
