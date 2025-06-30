import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ResponseArrayServer } from '@core/interface/response-server.interface';
import { map, Observable } from 'rxjs';

import { News } from '../model/news.model';


@Injectable()
export class BlogService {

  readonly #http = inject(HttpClient)

  readonly lastedNews = toSignal(this.#getNewsLast(), { initialValue: [] })

  #getNewsLast(): Observable<News[]> {
    const url = `https://api.news.fanturyerp.com.br/v1/newspapers/${0}/${1000}`
    return this.#http.get<ResponseArrayServer<News>>(url).pipe(
      map(response => response.data.reverse().slice(-10))      
    )
  }
}
