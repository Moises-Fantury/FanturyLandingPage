import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LayoutBreakPointService {
  readonly #breakpointObserver = inject(BreakpointObserver);

  // Define breakpoints para layout mobile e desktop
  readonly #mobileBreakpoints = [
    Breakpoints.TabletPortrait,
    Breakpoints.TabletLandscape,
    Breakpoints.XSmall,
    Breakpoints.Small,
  ];

  readonly #desktopBreakpoints = [
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge,
  ];

  readonly layoutMobile = signal(false)
  readonly layoutDesktop = signal(false)

  readonly #layout = toSignal(this.#layoutObservable().pipe(tap(state => this.#updateLayoutSignals(state))))

  #updateLayoutSignals(state: BreakpointState): void {
    const isMobile = this.#mobileBreakpoints.some(breakpoint => state.breakpoints[breakpoint]);
    const isDesktop = this.#desktopBreakpoints.some(breakpoint => state.breakpoints[breakpoint]);

    this.layoutMobile.set(isMobile);
    this.layoutDesktop.set(isDesktop);
  }

  #layoutObservable(): Observable<BreakpointState> {
    return this.#breakpointObserver.observe([
      ...this.#mobileBreakpoints, ...this.#desktopBreakpoints
    ]);
  }
}
