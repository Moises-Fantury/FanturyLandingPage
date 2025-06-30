import { Routes } from "@angular/router";
import { ROUTER_SYSTEM } from "@core/constants/routes.const";

export const SOLUTION_ROUTES: Routes = [
    {
        path: ROUTER_SYSTEM.solution,
        loadComponent: () => import('@features/solution/pages/solution/solution.pages').then(c => c.SolutionPages),
        title: 'Soluções - Fantury Software',
        children: [
            {
                path: ROUTER_SYSTEM.solution_child_fantury,
                loadComponent: () => import('@features/solution/pages/fantury/fantury.pages').then(c => c.FanturyPages),
                children: [
                    {
                        path: ROUTER_SYSTEM.content,
                        loadComponent: () => import('@features/solution/components/fantury/content/content.fantury').then(c => c.ContentFantury),
                    }
                ]
            }, 
            {
                path: ROUTER_SYSTEM.pdv,
                loadComponent: () => import('@features/solution/pages/pdv/pdv.pages').then(c => c.PdvPages)
            },
            {
                path: ROUTER_SYSTEM.pdvweb,
                loadComponent: () => import('@features/solution/pages/pdv-web/pdv-web.pages').then(c => c.PdvWebPages)
            },
            {
                path: ROUTER_SYSTEM.mobile,
                loadComponent: () => import('@features/solution/pages/mobile/mobile.pages').then(c => c.MobilePages)
            },
            {
                path: ROUTER_SYSTEM.coletor,
                loadComponent: () => import('@features/solution/pages/coletor/coletor.pages').then(c => c.ColetorPages)
            },
            {
                path: ROUTER_SYSTEM.chef,
                loadComponent: () => import('@features/solution/pages/chef/chef.pages').then(c => c.ChefPages)
            },
            {
                path: ROUTER_SYSTEM.cotacao,
                loadComponent: () => import('@features/solution/pages/cotacao/cotacao.pages').then(c => c.CotacaoPages)
            },
            {
                path: ROUTER_SYSTEM.contador,
                loadComponent: () => import('@features/solution/pages/contador/contador.pages').then(c => c.ContadorPages)
            },
            {
                path: ROUTER_SYSTEM.catalogo,
                loadComponent: () => import('@features/solution/pages/catalogo/catalogo.pages').then(c => c.CatalogoPages)
            },
        ]
    },
]