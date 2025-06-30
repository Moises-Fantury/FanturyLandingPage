import { inject, InjectionToken } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable, startWith } from 'rxjs';

export const GET_ROUTER_CURRENT = new InjectionToken<Observable<string>>('GET_ROUTER_CURRENT', {
    factory: () => {
        const router = inject(Router);

        return router.events.pipe(
            // Filtra apenas eventos de NavigationEnd, que ocorrem quando a navegação é concluída com sucesso.
            filter((event) => event instanceof NavigationEnd),
            // Mapeia o evento para a URL final após todos os redirecionamentos.
            map((event: NavigationEnd) => event.url),
            // Adiciona a URL atual do router como o valor inicial do Observable.
            // Isso garante que você tenha um valor imediatamente após a inscrição,
            // mesmo antes do primeiro evento de navegação acontecer.
            startWith(router.url)
        );
    }
})