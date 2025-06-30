import { Directive, effect, ElementRef, Renderer2 } from '@angular/core';
import { LayoutBreakPointService } from '@shared/services/layout-break-point.service';

@Directive({
  selector: '[FlexDimension]',
})
export class FlexDimensionDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private layout: LayoutBreakPointService
  ) {
    effect(() => {
      const isDesktop = this.layout.layoutDesktop()
      const width = isDesktop ? '500' : '350';
      const height = isDesktop ? '300' : '200';

      this.renderer.setAttribute(this.el.nativeElement, 'width', width);
      this.renderer.setAttribute(this.el.nativeElement, 'height', height);
    });
  }

}
