import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ROUTER_SYSTEM } from '@core/constants/routes.const';
import { ID_VALUES_HTML } from '@features/company/constants/id-value-html.const';
import { HeaderSolution } from '@features/solution/components/solution/header/header.solution';
import { IntegrationsSolution } from '@features/solution/components/solution/integrations/integrations.solution';
import { VideoSolution } from '@features/solution/components/solution/video/video.solution';
import { DaisyHeroUi } from '@shared/components/ui/daisy/daisy-hero/daisy-hero.ui';
import { WrapperMainShared } from '@shared/components/wrapper-main/wrapper-main.shared';
import { MetaHeadService } from '@shared/services/meta-head.service';
import { fragmentScrollIntoViewSignal } from '@shared/signals/fragment-scrollintoview.signal';

@Component({
  selector: 'pages-solution',
  imports: [HeaderSolution, WrapperMainShared, VideoSolution, IntegrationsSolution, RouterLink, RouterOutlet, DaisyHeroUi],
  templateUrl: './solution.pages.html',
  styleUrl: './solution.pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SolutionPages {

  readonly #metaHeadService = inject(MetaHeadService)

  protected readonly routes = ROUTER_SYSTEM
  protected readonly idValue = ID_VALUES_HTML

  constructor() {
    fragmentScrollIntoViewSignal()
    this.#metaHeadService.updateMetaTags({
      descrition: `Aumente sua eficiência operacional e produtividade com softwares completos para gestão e automação de processos.`,
      keywords: `Fantury ERP, ERP,  solução de Gestão Empresarial, Soluções integradas ao Fantury ERP`
    })
  }

}
