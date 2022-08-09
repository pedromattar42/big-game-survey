import { RecordsComponent } from './../../views/records/records.component';
import { finalize, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageableInterface } from 'src/app/models/pageableInterface-model';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})

export class RecordInterfaceService {

  baseUrl = "https://sds1-tyandrer.herokuapp.com/records?linesPerPage=12&page=0"

  constructor(private http: HttpClient, private loadingService: LoadingService) { }

  listagemTotal(size: number, number: number): Observable<PageableInterface>{

    return this.http.get<PageableInterface>(`https://sds1-tyandrer.herokuapp.com/records?linesPerPage=${size}&page=${number}`)

  }

  paginaDeJogos(size: number, number: number): Observable<PageableInterface>{

    return this.http.get<PageableInterface>(`https://sds1-tyandrer.herokuapp.com/records?linesPerPage=${size}&page=${number}`)

  }

}
