import { Routes } from "@angular/router";
import { ROUTER_SYSTEM } from "@core/constants/routes.const";

export const COMPANY_ROUTES: Routes = [
    {
        path: ROUTER_SYSTEM.company,
        loadComponent: () => import('@features/company/pages/company/company.pages').then(c => c.CompanyPages),
        title: 'Empresa - Fantury Software'
    }
]