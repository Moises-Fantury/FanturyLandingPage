import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ROUTER_SYSTEM } from '@core/constants/routes.const';
import { LayoutBreakPointService } from '@shared/services/layout-break-point.service';

@Component({
  selector: 'header-nav',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav.header.html',
  styleUrl: './nav.header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavHeader {

  protected readonly layout = inject(LayoutBreakPointService)
  
  protected readonly routes = ROUTER_SYSTEM

  protected readonly detailControlOpen = signal(false)

  detailClicked() {    
    this.detailControlOpen.update(value => !value)
  }

  scrollTop() {    
    window.scrollTo({ top: 0 })
  }
}
