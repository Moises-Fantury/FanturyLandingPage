import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'daisy-card-ui',
  imports: [],
  templateUrl: './daisy-card.ui.html',
  styleUrl: './daisy-card.ui.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyCardUi {

  readonly img = input<string | null>(null, { alias: 'o_img_src' })
  readonly alt = input<string | null>(null, { alias: 'o_img_alt' })  

  readonly title = input<string | null>(null, { alias: 'o_titleCard' })
  readonly text = input<string | null>(null, { alias: 'o_textCard' })
  readonly textSize = input<string | null>(null, { alias: 'o_textSizeCard' })
  readonly textHeight = input<string | null>('min-h-30', { alias: 'o_textheightCard' })

  readonly class = input('shadow-sm', { alias: 'o_class' })

  readonly btnHidden = input(false, {alias: 'o_btnHidden'})

  readonly eventClick = output({ alias: 'event-click' })

}
