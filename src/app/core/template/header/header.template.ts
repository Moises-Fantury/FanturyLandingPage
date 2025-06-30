import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { ThemeService, ThemeType } from '@core/services/theme.service';
import { LayoutBreakPointService } from '@shared/services/layout-break-point.service';

import { LogoHeader } from '../../components/header/logo/logo.header';
import { NavHeader } from '../../components/header/nav/nav.header';
import { ThemeTemplate } from '../theme/theme.template';

@Component({
  selector: 'template-header',
  imports: [LogoHeader, NavHeader, ThemeTemplate],
  templateUrl: './header.template.html',
  styleUrl: './header.template.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderTemplate {

  protected readonly layout = inject(LayoutBreakPointService)
  readonly #themeService = inject(ThemeService)

  protected readonly loader = signal(false)

  @HostListener('window:scroll')
  scrollView() {
    if (window.scrollY >= 100) {
      this.loader.set(true)
    }
    if (window.scrollY < 120) {
      this.loader.set(false)
    }
  }


  setTheme(theme: ThemeType) {
    this.#themeService.setTheme(theme)
  }
}
