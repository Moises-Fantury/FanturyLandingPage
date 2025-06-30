import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import { activeLoaderTimer } from '@shared/signals/active-loader.signal';

export interface Card {
  title: string,
  items: string[]
}

@Component({
  selector: 'ui-cards-group',
  imports: [],
  templateUrl: './cards-group.ui.html',
  styleUrl: './cards-group.ui.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsGroupUi {

  readonly titleMain = input<string | null>(null, { alias: 'o_titleMain' })
  readonly cardsGroup = input.required<Card[]>({ alias: 'r_cardsGroup' })

  readonly showAll = model<boolean>(true, {alias: 'o_showAll'})
  readonly btnShow = input<boolean>(false, {alias: 'o_btnShow'})

  protected readonly loader = activeLoaderTimer(1500)

  protected readonly visibleCards = computed(() => {
    return this.showAll() ? this.cardsGroup() : this.cardsGroup().slice(0, 3);
  })

  protected toggleShowAll() {
    this.showAll.update(value => !value)
  }


}
