import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'daisy-list-ui',
  imports: [],
  templateUrl: './daisy-list.ui.html',
  styleUrl: './daisy-list.ui.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyListUi {

  readonly title = input.required({ alias: 'r_title' })

}
