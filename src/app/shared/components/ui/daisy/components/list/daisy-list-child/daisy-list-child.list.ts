import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'daisy-list-child',
  imports: [],
  templateUrl: './daisy-list-child.list.html',
  styleUrl: './daisy-list-child.list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyListChildList {

  readonly imgSrc = input.required<string>({ alias: 'r_imgSrc' })
  readonly titleNews = input.required<string>({ alias: 'r_titleNews' })
  readonly authorNews = input.required<string>({ alias: 'r_authorNews' })
  readonly textNews = input.required<string>({ alias: 'r_textNews' })

}
