import { Routes } from "@angular/router";
import { ROUTER_SYSTEM } from "@core/constants/routes.const";

export const CONTACT_ROUTES: Routes = [
    {
        path: ROUTER_SYSTEM.contact,
        loadComponent: () => import('@features/contact/pages/contact/contact.page').then(c => c.ContactPage),
        title: 'Contatos - Fantury Software'
    },
]