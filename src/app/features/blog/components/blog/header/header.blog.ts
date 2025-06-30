import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WidgetFigureHeader } from "../../../../../widget/components/header/figure/widget-figure.header";
import { WidgetContentHeader } from "../../../../../widget/components/header/content/widget-content.header";

@Component({
  selector: 'blog-header',
  imports: [WidgetFigureHeader, WidgetContentHeader],
  templateUrl: './header.blog.html',
  styleUrl: './header.blog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderBlog { }
