import { Route } from '@angular/router';
import { ROUTER_SYSTEM } from '@core/constants/routes.const';

export const PARTNER_ROUTES: Route[] = [
    {
        path: ROUTER_SYSTEM.partner,
        loadComponent: () => import('@features/partner/pages/partner/partner.pages').then(c => c.PartnerPages),
        title: 'Parcerias - Fantury Software',
    },
]