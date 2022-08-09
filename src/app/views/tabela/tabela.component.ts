import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RecordInterfaceService } from 'src/app/components/services/record-interface.service';
import { PageableInterface } from 'src/app/models/pageableInterface-model';
import { RecordInterface } from 'src/app/models/record.model';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})

export class TabelaComponent implements OnInit {

  indice_Paginas = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

  conteudo!: RecordInterface[]

  private pagina!: PageableInterface

  displayedColumns = ['instante', 'nome', 'idade', 'plataforma', 'genero', 'titulo'];

  constructor(private recordInterfaceService : RecordInterfaceService, private http: HttpClient) { }

  ngOnInit(): void{
    this.paginacao(12, 0)
  }

  paginacao(size: number, number: number){
    this.recordInterfaceService.paginaDeJogos(size, number).subscribe(conteudo_listado => {
      this.pagina = conteudo_listado
      this.conteudo = this.pagina.content
    })
  }


}
