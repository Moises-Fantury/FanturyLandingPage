import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WidgetContentHeader } from '@widget/components/header/content/widget-content.header';
import { WidgetFigureHeader } from '@widget/components/header/figure/widget-figure.header';

@Component({
  selector: 'solution-header',
  imports: [WidgetFigureHeader, WidgetContentHeader],
  templateUrl: './header.solution.html',
  styleUrl: './header.solution.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSolution { }
