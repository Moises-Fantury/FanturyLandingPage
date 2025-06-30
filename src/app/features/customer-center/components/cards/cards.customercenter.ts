import { Component, ChangeDetectionStrategy } from "@angular/core";
import { DaisyCardUi } from "@shared/components/ui/daisy/daisy-card/daisy-card.ui";
import { DaisyHeroUi } from "@shared/components/ui/daisy/daisy-hero/daisy-hero.ui";


@Component({
  selector: 'customercenter-cards',
  imports: [DaisyHeroUi, DaisyCardUi],
  templateUrl: './cards.customercenter.html',
  styleUrl: './cards.customercenter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsCustomercenter { }
