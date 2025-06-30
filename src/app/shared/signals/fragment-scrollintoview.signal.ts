import { DOCUMENT } from '@angular/common';
import { effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

export function fragmentScrollIntoViewSignal() {
    const document = inject(DOCUMENT)
    const route = inject(ActivatedRoute)
    const fragment = toSignal(route.fragment)
    setTimeout(() => {
        const value = fragment();
        if (value) {
            requestAnimationFrame(() => {
                const element = document.getElementById(value);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        }
    }, 500);
    effect(() => {
        const value = fragment();
        if (value) {
            requestAnimationFrame(() => {
                const element = document.getElementById(value);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        }
    });
}