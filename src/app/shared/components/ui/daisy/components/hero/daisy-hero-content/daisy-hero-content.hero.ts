import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'daisy-hero-content',
  imports: [],
  templateUrl: './daisy-hero-content.hero.html',
  styleUrl: './daisy-hero-content.hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyHeroContent {

   readonly class = input('flex-col lg:flex-row', { alias: 'o_hero-content_class' })

}
