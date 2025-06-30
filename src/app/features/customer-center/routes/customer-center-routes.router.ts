import { Routes } from "@angular/router";
import { ROUTER_SYSTEM } from "@core/constants/routes.const";

export const CUSTOMECENTER_ROUTES: Routes = [
    {
        path: ROUTER_SYSTEM.customerCenter,
        loadComponent: () => import('@features/customer-center/pages/customer-center/customer-center.pages').then(c => c.CustomerCenterPages),
        title: 'Central do Cliente - Fantury Software'
    },
]