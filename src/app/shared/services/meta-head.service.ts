import { inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaHeadService {

  readonly #meta = inject(Meta)

  createInitialMetaTag(): void {
    this.#meta.addTag({ name: 'Fantury', content: 'Fantury Software' })
    this.#meta.addTag({
      name: 'description',
      content: `A Fantury oferece como solução de Gestão Empresarial o software Fantury ERP. 
      Este compreende um conjunto otimizado de ferramentas que, juntas, potencializam a gestão empresarial.`
    })
    this.#meta.addTag({
      name: 'keywords',
      content: `Sistema ERP,ERP,Gestão Empresarial,ERP para empresas,Software ERP, Fantury Frente de Loja,Mobile,soluções de gestão empresarial`
    })
    this.#meta.addTag({property:'og:title', content: 'Fantury Software'})
    this.#meta.addTag({property:'og:description', content: 'A Fantury oferece como solução de Gestão Empresarial'})
    this.#meta.addTag({property:'og:image', content: 'https://www.fantury.com.br/wp-content/uploads/2019/12/xD.png'})
    this.#meta.addTag({property:'og:url', content: 'https://www.fantury.com.br'})
    this.#meta.addTag({property:'og:type', content: 'website'})
  }

  updateMetaTags(meta_content: {
    descrition: string,
    keywords: string
  }
  ): void {
    this.#meta.updateTag({ name: 'description', content: meta_content.descrition })
    this.#meta.updateTag({ name: 'keywords', content: meta_content.keywords })
  }
}
