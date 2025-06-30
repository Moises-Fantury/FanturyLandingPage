import { ChangeDetectionStrategy, Component } from '@angular/core';
import { activeLoaderTimer } from '@shared/signals/active-loader.signal';

@Component({
  selector: 'contact-form',
  imports: [],
  templateUrl: './form.contact.html',
  styleUrl: './form.contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormContact {

  protected readonly loader = activeLoaderTimer(2000)

}
