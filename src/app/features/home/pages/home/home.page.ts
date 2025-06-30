import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AboutDifferentialComponent } from '@features/about/components/about-differential/about-differential.component';
import { AboutSummaryComponent } from '@features/about/components/about-summary/about-summary.component';
import { FormContact } from '@features/contact/components/contact/form/form.contact';
import { GoogleMapsComponent } from '@features/contact/components/google-maps/google-maps.component';
import { HeaderHome } from '@features/home/components/home/header/header.home';
import { SummarySolution } from '@features/solution/components/solution/summary/summary.solution';
import { WrapperMainShared } from '@shared/components/wrapper-main/wrapper-main.shared';
import { MetaHeadService } from '@shared/services/meta-head.service';
import { activeLoaderTimer } from '@shared/signals/active-loader.signal';

@Component({
  selector: 'home-page',
  imports: [HeaderHome, WrapperMainShared, AboutSummaryComponent, SummarySolution, AboutDifferentialComponent, FormContact, GoogleMapsComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {

  readonly #metaHeadService = inject(MetaHeadService)

  protected readonly loader = activeLoaderTimer(3500);

  constructor() {
    this.#metaHeadService.createInitialMetaTag()
    // this.#metaHeadService.updateMetaTags({
    //   descrition: 'Soluções: Fantury ERP / Fantury PDV (NFC-e, Web), Fantury Mobile, Fantury Coletor',
    //   keywords: `Gestão Comercial,Gestão Compras,Gestão de Estoque,Gestão Financeira,Gestão de Faturamento,Gestão de Custos,
    //   Vendas Mobile,PDV,Emissão NF-e, Emissão NFC-e, Emissão MDF-e, integrado com a NF-e NFC-e,EFD Fiscal e EFD Contribuição,Cobrança Eletrônica,Controle de Caixa Diário,
    //   Lançamento de Sangria e Suprimento,Transferência Eletrônica de Fundos (TEF)`
    // })
  }

}