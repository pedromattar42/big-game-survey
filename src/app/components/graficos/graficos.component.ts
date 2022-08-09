import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RecordInterface } from 'src/app/models/record.model';
import { RecordInterfaceService } from '../services/record-interface.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})

export class GraficosComponent implements OnInit {


  colorScheme: Color = {
    domain: ['#E56B48', '#E56B48', '#E56B48', '#E56B48', '#E56B48', '#E56B48', '#E56B48', '#E56B48']
  } as Color;

  colorSchemeGeneros: Color = {
    domain: ['#96dedc','#e56b48','#00d6ff','#ffd7a3']
  } as Color;

  colorSchemePlataformas: Color = {
    domain: ['#00d6ff','#96dedc', '#e56b48']
  } as Color;

  conteudo!: RecordInterface[]

  // ARMAZENAM O TOTAL DE VOTOS DE CADA INSTÂNCIA
  totalPlataformas: number = 0
  totalGeneros: number = 0

  // ARMAZENAM AS PORCENTAGENS DE CADA PLATAFORMA
  porcentagemXbox: number = 0
  porcentagemPlaystation: number = 0
  porcentagemPc: number = 0
  //---
  porcentagemRPG: number = 0
  porcentagemMoba: number = 0
  porcentagemBattleRoyale: number = 0
  porcentagemShooter: number = 0

   // CONTADORES PARA ARMAZENAR OS VOTOS DOS JOGOS MAIS VOTADOS E SUAS RESPECTIVAS PLATAFORMAS
   contador: number = 0
   contador2: number = 0
   contador3: number = 0
   contador4: number = 0
   contador5: number = 0
   contador6: number = 0
   contador7: number = 0
   contador8: number = 0

   // CONTADORES PARA ARMAZENAR OS VOTOS DE CADA PLATAFORMA
   contadorXbox: number = 0
   contadorPc: number = 0
   contadorPlaystation: number = 0

   // CONTADORES PARA ARMAZENAR OS VOTOS DE CADA GÊNERO
   contadorRPG: number = 0
   contadorMoba: number = 0
   contadorBattleRoyale: number = 0
   contadorShooter: number = 0

   jogosQtde = [
    {
      name: "",
      value: Number('')
    },
    {
      name: "",
      value: Number('')
    },
    {
      name: "",
      value: Number('')
    },
    {
      name: "",
      value: Number('')
    },
    {
      name: "",
      value: Number('')
    },
    {
      name: "",
      value: Number('')
    },
    {
      name: "",
      value: Number('')
    },
    {
      name: "",
      value: Number('')
    }
  ]

  plataformasPorcentagem = [
    {
      name: "" + "-%",
      value: Number('')
    },
    {
      name: "" + "-%",
      value: Number('')
    },
    {
      name: "" + "-%",
      value: Number('')
    }
  ]

  generosPorcentagem = [
    {
      name: "" + "-%",
      value: Number('')
    },
    {
      name: "" + "-%",
      value: Number('')
    },
    {
      name: "" + "-%",
      value: Number('')
    },
    {
      name: "" + "-%",
      value: Number('')
    }
  ]


  //EXIBE A PORCENTAGEM DE VOTOS DE CADA PLATAFORMA
  porcentagemPlataformas(): void{
    this.recordInterfaceService.listagemTotal(224, 0).subscribe(conteudo_listado => {
      this.conteudo = conteudo_listado.content

      for(let i = 0; i<this.conteudo.length;i++){
        if(this.conteudo[i].gamePlatform == 'XBOX'){
          this.contadorXbox++
        }

        else if(this.conteudo[i].gamePlatform == 'PLAYSTATION'){
          this.contadorPlaystation++
        }

          else if(this.conteudo[i].gamePlatform == 'PC'){
            this.contadorPc++
          }
      }

      this.totalPlataformas = this.contadorXbox + this.contadorPlaystation + this.contadorPc
      this.porcentagemXbox = (this.contadorXbox / this.totalPlataformas) * 100
      this.porcentagemPc = (this.contadorPc/this.totalPlataformas) * 100
      this.porcentagemPlaystation = (this.contadorPlaystation/this.totalPlataformas) * 100

      this.plataformasPorcentagem = [
        {
          name: `XBOX`,
          value: this.porcentagemXbox
        },
        {
          name: "PC",
          value: this.porcentagemPc
        },
        {
          name: "PLAYSTATION",
          value: this.porcentagemPlaystation
        }
      ]

    })
  }

  //EXIBE A PORCENTAGEM DE VOTOS DE CADA GÊNERO
  porcentagemGeneros(): void{
    this.recordInterfaceService.listagemTotal(224, 0).subscribe(conteudo_listado => {
      this.conteudo = conteudo_listado.content

      for(let i = 0; i<this.conteudo.length;i++){
        if(this.conteudo[i].genreName == 'RPG'){
          this.contadorRPG++
        }

        else if(this.conteudo[i].genreName == 'Battle Royale'){
          this.contadorBattleRoyale++
        }

          else if(this.conteudo[i].genreName == 'Shooter'){
            this.contadorShooter++
          }
            else if(this.conteudo[i].genreName == 'MOBA'){
              this.contadorMoba++
            }
      }

      this.totalGeneros = this.contadorRPG + this.contadorBattleRoyale + this.contadorShooter + this.contadorMoba

      this.porcentagemRPG = (this.contadorRPG / this.totalGeneros) * 100
      this.porcentagemBattleRoyale = (this.contadorBattleRoyale / this.totalGeneros) * 100
      this.porcentagemShooter = (this.contadorShooter / this.totalGeneros) * 100
      this.porcentagemMoba = (this.contadorMoba / this.totalGeneros) * 100

      this.generosPorcentagem = [
        {
          name: "RPG",
          value: this.porcentagemRPG
        },
        {
          name: "Battle Royale",
          value: this.porcentagemBattleRoyale
        },
        {
          name: "Shooter",
          value: this.porcentagemShooter
        },
        {
          name: "MOBA",
          value: this.porcentagemMoba
        }
      ]
    })
  }

  // ARMAZENA AS QUANTIDADES DE JOGOS MAIS VOTADOS E SUAS RESPECTIVAS PLATAFORMAS
  listagemQtdeDeJogos(): void{
    this.recordInterfaceService.listagemTotal(224, 0).subscribe( conteudo_listado => {
      this.conteudo = conteudo_listado.content

      for(let i =0; i<this.conteudo.length;i++){

        if(this.conteudo[i].gameTitle == 'Fall Guys' && this.conteudo[i].gamePlatform == 'PLAYSTATION'){
          this.contador++
        }

        else if (this.conteudo[i].gameTitle == 'God of War' && this.conteudo[i].gamePlatform == 'PC'){
            this.contador2++
        }

        else if (this.conteudo[i].gameTitle == 'God of War' && this.conteudo[i].gamePlatform == 'PLAYSTATION'){
           this.contador3++
        }

        else if (this.conteudo[i].gameTitle == 'Cyberpunk 2077' && this.conteudo[i].gamePlatform == 'XBOX'){
           this.contador4++
        }

        else if (this.conteudo[i].gameTitle == 'Fall Guys' && this.conteudo[i].gamePlatform == 'PC'){
          this.contador5++
        }

        else if (this.conteudo[i].gameTitle == 'Cyberpunk 2077' && this.conteudo[i].gamePlatform == 'PC'){
          this.contador6++
        }

        else if (this.conteudo[i].gameTitle == 'The Witcher 3' && this.conteudo[i].gamePlatform == 'XBOX'){
          this.contador7++
        }

        else if (this.conteudo[i].gameTitle == 'Fortnite' && this.conteudo[i].gamePlatform == 'PC'){
          this. contador8++
        }
      }

      this.jogosQtde = [
        {
          name: "Fall Guys | PLAYSTATION",
          value: this.contador
        },
        {
          name: "God of War | PC",
          value: this.contador2
        },
        {
          name: "God of War | PLAYSTATION",
          value: this.contador3
        },
        {
          name: "Cyberpunk 2077 | XBOX",
          value: this.contador4
        },
        {
          name: "Fall Guys | PC",
          value: this.contador5
        },
        {
          name: "Cyberpunk 2077 | PC",
          value: this.contador6
        },
        {
          name: "The Witcher 3 | XBOX",
          value: this.contador7
        },
        {
          name: "Fortnite | PC",
          value: this.contador8
        }
      ]

    }
    )
  }


  constructor(private recordInterfaceService: RecordInterfaceService) {

  }


  ngOnInit(): void {
    this.listagemQtdeDeJogos()
    this.porcentagemPlataformas()
    this.porcentagemGeneros()
  }

}
