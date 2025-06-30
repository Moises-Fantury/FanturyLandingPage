import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { ThemeService, ThemeType } from '@core/services/theme.service';

@Component({
  selector: 'template-theme',
  imports: [],
  templateUrl: './theme.template.html',
  styleUrl: './theme.template.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeTemplate implements AfterViewInit {

  readonly #document = inject(DOCUMENT)
  readonly #themeService = inject(ThemeService)

  protected readonly isDarkTheme = computed(() => this.#themeService.getTheme() == 'dark')
  readonly #theme = computed(() => this.#themeService.getTheme())

  readonly #effSyncDocumentTheme = effect(() => {
    this.#document.documentElement.setAttribute('data-theme', this.#theme())
  })

  ngAfterViewInit(): void {
    this.#setThemeBasedOnBrowserPreference()
  }

  protected changeTheme(event: Event) {
    const target = event.target as HTMLInputElement;
    this.#setTheme(target.checked ? 'dark' : 'light');
  }

  #setThemeBasedOnBrowserPreference(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.#setTheme(prefersDark ? 'dark' : 'light');
  }

  #setTheme(theme: ThemeType): void {
    this.#themeService.setTheme(theme);
  }
}
