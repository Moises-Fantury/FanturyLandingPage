import { Component, inject, linkedSignal, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ROUTER_SYSTEM } from '@core/constants/routes.const';
import { ID_VALUES_HTML } from '@features/company/constants/id-value-html.const';
import { DaisyHeroContent } from '@shared/components/ui/daisy/components/hero/daisy-hero-content/daisy-hero-content.hero';
import { DaisyHeroUi } from '@shared/components/ui/daisy/daisy-hero/daisy-hero.ui';
import { GET_ROUTER_CURRENT } from '@shared/injection-tokens/get-router-current.injection';
import { map } from 'rxjs';

@Component({
  selector: 'fantury-header',
  imports: [DaisyHeroUi, DaisyHeroContent],
  templateUrl: './header.fantury.html',
  styleUrl: './header.fantury.scss',

})
export class HeaderFantury implements OnInit {

  readonly #route = inject(Router)
  readonly #routeCurrent = inject(GET_ROUTER_CURRENT)

  protected readonly idValue = ID_VALUES_HTML
  readonly #childRoute = `/${ROUTER_SYSTEM.solution}/${ROUTER_SYSTEM.solution_child_fantury}/${ROUTER_SYSTEM.content}`
  
  protected readonly content = linkedSignal(() => this.#routeActived())
  readonly #routeActived = toSignal(this.#routeCurrent.pipe(map(route => route == this.#childRoute ? true : false)), { initialValue: false })

  ngOnInit(): void {
    this.content.set(false)
  }

  protected enableContent() {
    this.#route.navigate([this.#childRoute])
    this.content.set(true)
  }
}
