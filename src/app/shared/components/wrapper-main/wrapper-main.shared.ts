import { ChangeDetectionStrategy, Component } from '@angular/core';
import { activeLoaderTimer } from '@shared/signals/active-loader.signal';

@Component({
  selector: 'wrapper-main-shared',
  imports: [],
  templateUrl: './wrapper-main.shared.html',
  styleUrl: './wrapper-main.shared.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperMainShared {

  protected readonly loader = activeLoaderTimer(1000);

}
