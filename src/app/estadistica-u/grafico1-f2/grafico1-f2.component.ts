import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ResultObject_UE, Transaction } from 'src/app/interfaces/incidentes.interface';
import { ConnectService } from 'src/app/service/connect.service';

@Component({
  selector: 'app-grafico1-f2',
  templateUrl: './grafico1-f2.component.html',
  styleUrls: ['./grafico1-f2.component.css']
})
export class Grafico1F2Component implements OnInit {
  @ViewChild('chart', { static: true }) chart: any;
  @Input() transactions: Transaction[] = [];

  //ESTRUCTURA DE DATOS
  dataIncidentes: ResultObject_UE = {
    robo: 0,
    acosoSexual: 0,
    bullyng: 0,
    alcoholDrogas: 0,
    violenciaPares: 0,
    pandillas: 0,
    otros: 0,
    sinIncidente: 0,
    total: 0
  };

  public total: number = 0;
  public roboRes: number = 0;
  public acosoSexualRes: number = 0;
  public bullyngRes: number = 0;
  public alcoholDrogasRes: number = 0;
  public violenciaParesRes: number = 0;
  public otrosRes: number = 0;
  public sinIncidenteRes: number = 0;


  constructor(private connectService: ConnectService) { }

  ngOnInit(): void {
    this.inicializarDatos();
  }

  inicializarDatos() {
    this.connectService.cargarTotalIncidentes_UE().subscribe((res: any) => {
      this.dataIncidentes = res;

      this.total = this.dataIncidentes.total;
      this.sinIncidenteRes = ((this.dataIncidentes.sinIncidente / this.total) * 100);
      const incidentes = this.total - this.dataIncidentes.sinIncidente;

      this.roboRes = (this.dataIncidentes.robo / this.total) * 100;
      this.acosoSexualRes = (this.dataIncidentes.acosoSexual / this.total) * 100;
      this.bullyngRes = (this.dataIncidentes.bullyng / this.total) * 100;
      this.alcoholDrogasRes = (this.dataIncidentes.alcoholDrogas / this.total) * 100;
      this.violenciaParesRes = (this.dataIncidentes.violenciaPares / this.total) * 100;
      this.otrosRes = (this.dataIncidentes.otros / this.total) * 100;
      


      this.chartOptions = {
        animationEnabled: true,
        title: {
          text: "Total de Incidentes en Unidades Educativas",
          fontSize: 20,
          
        },
        data: [{
          type: "doughnut",
          yValueFormatString: "#,###.##'%'",
          indexLabel: "{name}: {y}",
          dataPoints: [ 
            { y: this.sinIncidenteRes, name: "Sin Incidentes" },
            { y: this.acosoSexualRes, name: "Acoso Sexual" },
            { y: this.roboRes, name: "Robo" },
            { y: this.bullyngRes, name: "Bullying" },
            { y: this.alcoholDrogasRes, name: "Alcohol y Drogas" },
            { y: this.violenciaParesRes, name: "Violencia entre Pares" },
            { y: this.otrosRes, name: "Otros" },
          ]
        }]
      };
      this.chartInstance.render();
    });
  }

  chartOptions: any = {};

  chartInstance: any;
  actualizarGrafica(): void {
    this.chartInstance?.render();
  }

  ngOnChanges(): void {
    this.actualizarGrafica();
  }
}
