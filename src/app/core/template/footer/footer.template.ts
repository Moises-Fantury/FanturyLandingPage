import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTER_SYSTEM } from '@core/constants/routes.const';
import { ID_VALUES_HTML } from '@features/company/constants/id-value-html.const';
import { activeLoaderTimer } from '@shared/signals/active-loader.signal';

@Component({
  selector: 'template-footer',
  imports: [RouterLink],
  templateUrl: './footer.template.html',
  styleUrl: './footer.template.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterTemplate {

  protected readonly loader = activeLoaderTimer(1500)
  protected readonly date = new Date().getFullYear()
  protected readonly router = ROUTER_SYSTEM
  protected readonly idValue = ID_VALUES_HTML

}
