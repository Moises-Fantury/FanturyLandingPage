import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ui-card-mini',
  imports: [],
  templateUrl: './card-mini.ui.html',
  styleUrl: './card-mini.ui.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardMiniUi<T> {

  readonly list = input.required<T[]>({ alias: 'r_list' })

}
