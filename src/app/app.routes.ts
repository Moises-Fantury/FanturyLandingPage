import { Routes } from '@angular/router';
import { BLOG_ROUTES } from '@features/blog/routes/blog-routes.route';
import { COMPANY_ROUTES } from '@features/company/routes/company-routes.route';
import { CONTACT_ROUTES } from '@features/contact/routes/contact-routes.router';
import { CUSTOMECENTER_ROUTES } from '@features/customer-center/routes/customer-center-routes.router';
import { HOME_ROUTES } from '@features/home/routes/home.routes';
import { PARTNER_ROUTES } from '@features/partner/routes/partner.routes';
import { SOLUTION_ROUTES } from '@features/solution/routes/solution-routes.router';
import { NotFoundPages } from '@shared/components/pages/not-found/not-found.pages';

export const routes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    ...HOME_ROUTES,
    ...COMPANY_ROUTES,
    ...CONTACT_ROUTES,
    ...CUSTOMECENTER_ROUTES,
    ...SOLUTION_ROUTES,
    ...BLOG_ROUTES,
    ...PARTNER_ROUTES,
    // { path: '**', component: NotFoundPages }
];
