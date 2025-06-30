import { RenderMode, ServerRoute } from '@angular/ssr';
import { ROUTER_SYSTEM } from '@core/constants/routes.const';

export const serverRoutes: ServerRoute[] = [
  {
    path: ROUTER_SYSTEM.home,
    renderMode: RenderMode.Server
  },
  {
    path: ROUTER_SYSTEM.contact,
    renderMode: RenderMode.Server
  },
  {
    path: ROUTER_SYSTEM.customerCenter,
    renderMode: RenderMode.Server
  },
  {
    path: ROUTER_SYSTEM.company,
    renderMode: RenderMode.Server
  },
  {
    path: ROUTER_SYSTEM.solution,
    renderMode: RenderMode.Server
  },
  {
    path: ROUTER_SYSTEM.blog,
    renderMode: RenderMode.Server
  },
  {
    path: ROUTER_SYSTEM.partner,
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
