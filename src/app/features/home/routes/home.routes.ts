import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('@features/home/pages/home/home.page').then(c => c.HomePage),
        title: 'Home - Fantury Software'
    }
]