import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pages-not-found',
  imports: [],
  template: `<p>not-found works!</p>`,
  styleUrl: './not-found.pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPages { }
