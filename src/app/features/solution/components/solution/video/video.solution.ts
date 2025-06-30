import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, HostListener, inject, signal } from '@angular/core';
import { CARD_VIDEO } from '@features/solution/constants/card-config-video.const';
import { DaisyHeroUi } from '@shared/components/ui/daisy/daisy-hero/daisy-hero.ui';
import { LayoutBreakPointService } from '@shared/services/layout-break-point.service';

@Component({
  selector: 'solution-video',
  standalone: true,
  imports: [DaisyHeroUi, CommonModule],
  templateUrl: './video.solution.html',
  styleUrl: './video.solution.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoSolution {

  readonly #layout = inject(LayoutBreakPointService);

  readonly #startIndex = signal(0);
  readonly #visibleCount = signal(3);

  protected readonly cards = CARD_VIDEO;

  protected readonly classChanges = computed(() =>
    this.#layout.layoutDesktop() ? 'w-full' : 'max-w-sm mx-auto p-4'
  );

  protected readonly visibleCards = computed(() => {
    const start = this.#startIndex();
    const count = this.#visibleCount();
    const end = start + count;

    return (end <= this.cards.length) ?
      this.cards.slice(start, end)
      :
      [...this.cards.slice(start), ...this.cards.slice(0, end - this.cards.length)];
  });

  constructor() {
    this.#updateVisibleCardsByResolution()
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.#updateVisibleCardsByResolution();
  }

  protected next(): void {
    this.#startIndex.update((start) =>
      (start + this.#visibleCount()) % this.cards.length
    );
  }

  protected prev(): void {
    this.#startIndex.update((start) =>
      (start - this.#visibleCount() + this.cards.length) % this.cards.length
    );
  }

  #updateVisibleCardsByResolution(): void {
    effect(() => {
      if (this.#layout.layoutMobile()) {
        this.#visibleCount.set(1);
      } else if (this.#layout.layoutDesktop()) {
        this.#visibleCount.set(3);
      }
    });
  }


}
