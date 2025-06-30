import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_SYSTEM } from '@core/constants/routes.const';
import { WidgetButtonHeader } from '@widget/components/header/button/widget-button.header';
import { WidgetContentHeader } from '@widget/components/header/content/widget-content.header';
import { WidgetFigureHeader } from '@widget/components/header/figure/widget-figure.header';

@Component({
  selector: 'header-home',
  imports: [WidgetFigureHeader, WidgetContentHeader, WidgetButtonHeader],
  templateUrl: './header.home.html',
  styleUrl: './header.home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderHome {

  readonly #router = inject(Router)

  goRouter(){
    this.#router.navigate([`${ROUTER_SYSTEM.solution}/${ROUTER_SYSTEM.solution_child_fantury}`])
  }
}
