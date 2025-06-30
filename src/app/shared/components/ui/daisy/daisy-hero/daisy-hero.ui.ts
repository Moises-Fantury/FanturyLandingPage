import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'daisy-hero-ui',
  imports: [],
  templateUrl: './daisy-hero.ui.html',
  styleUrl: './daisy-hero.ui.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyHeroUi {

  readonly bgBase = input('bg-base-100', { alias: 'o_bgBase' })
  readonly minHeight = input('min-h-screen', { alias: 'o_minHeight' })
 

}
