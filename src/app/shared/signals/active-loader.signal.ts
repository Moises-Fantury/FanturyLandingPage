import { Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { delay, of, tap } from 'rxjs';

export function activeLoaderTimer(timer: number): Signal<boolean> {
    const loader = signal(false);

    toSignal(of(true).pipe(
        delay(timer),
        tap((value) => loader.set(value))
    ))

    return loader.asReadonly()
}