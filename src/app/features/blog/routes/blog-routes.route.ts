import { Routes } from "@angular/router";
import { ROUTER_SYSTEM } from "@core/constants/routes.const";

export const BLOG_ROUTES: Routes = [
    {
        path: ROUTER_SYSTEM.blog,
        loadComponent: () => import('@features/blog/pages/blog/blog.pages').then(c => c.BlogPages),
        title: 'Blog - Fantury Software'
    },
]