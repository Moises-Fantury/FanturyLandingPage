import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';
import { LayoutBreakPointService } from '@shared/services/layout-break-point.service';

@Component({
  selector: 'header-logo',
  imports: [],
  templateUrl: './logo.header.html',
  styleUrl: './logo.header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoHeader {

  protected readonly layout = inject(LayoutBreakPointService)
  readonly #theme = inject(ThemeService)

  protected readonly theme = computed(() => this.#theme.getTheme())

  protected stylePadding = computed(() => {
    if (this.layout.layoutMobile()) {
      return 'padding: 50px; width: 370px; height: 100px'
    }
    return ''
  })

}
