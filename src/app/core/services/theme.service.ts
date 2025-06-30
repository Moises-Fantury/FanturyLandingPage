import { DOCUMENT } from '@angular/common';
import { afterRender, inject, Injectable, Injector, signal } from '@angular/core';

export type ThemeType = 'light' | 'dark' | 'aqua'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {    
  
  readonly #themeType = signal<ThemeType>('light')  
  readonly getTheme = this.#themeType.asReadonly()
  setTheme(theme: ThemeType) {
    this.#themeType.set(theme)
  }

}
