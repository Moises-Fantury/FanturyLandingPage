import { ChangeDetectionStrategy, Component, inject, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-google-maps',
  imports: [],
  templateUrl: './google-maps.component.html',
  styleUrl: './google-maps.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleMapsComponent {

  #sanitize = inject(DomSanitizer)

  protected iFrameHtml = this.#sanitize.bypassSecurityTrustHtml(`
    <iframe style="border: 0; width: 100%" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30623.40935117282!2d-39.581524!3d-16.377723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7366dc11e5e87db%3A0x3c2dc77d10b2486!2sR.%20Joaquim%20Alves%20Pereira%2C%20500%20-%20Centro%2C%20Eun%C3%A1polis%20-%20BA%2C%2045820-171%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1574276255516!5m2!1spt-BR!2sus" width="1920" height="500" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
    `)

}
