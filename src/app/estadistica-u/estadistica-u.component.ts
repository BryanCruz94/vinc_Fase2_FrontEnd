import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConnectService } from 'src/app/service/connect.service';
import { ResultObject_UE, mes, dia, TransactionUE, Transaction } from '../interfaces/incidentes.interface';

@Component({
  selector: 'app-estadistica-u',
  templateUrl: './estadistica-u.component.html',
  styleUrls: ['./estadistica-u.component.css']
})
export class EstadisticaUComponent implements OnInit {
 // @ViewChild('filterDaySelect') filterDaySelect!: ElementRef<HTMLSelectElement>;

  // VARIABLES
  sectors: string[] = [];
  colleges: string[] = [];
  yearsUE: string[] = [];
  total: number = 0;

  // VARIABLES PARA FILTROS
  selectedSectorUE: string = 'all'; // Agregar propiedad para el sector seleccionado
  selectedCollegeUE: string = 'all'; // Agregar propiedad para la unidad educativa seleccionada
  selectedYearUE: string = 'all'; // Agregar propiedad para el año seleccionado
  selectedMonthUE: string = 'all'; // Agregar propiedad para el mes seleccionado
  
  // VARIABLES PARA HABILITAR/DESHABILITAR FILTROS
  isMonthSelectDisabled: boolean = true; // Controla la habilitación/deshabilitación del filtro de meses
  isCollegeSelectDisabled: boolean = true; // Controla la habilitación/deshabilitación del filtro de unidades educativas

  // MESES PARA FILTROS
  monthUE: mes[] = [
    { name: "Enero", num: "01" },
    { name: "Febrero", num: "02" },
    { name: "Marzo", num: "03" },
    { name: "Abril", num: "04" },
    { name: "Mayo", num: "05" },
    { name: "Junio", num: "06" },
    { name: "Julio", num: "07" },
    { name: "Agosto", num: "08" },
    { name: "Septiembre", num: "09" },
    { name: "Octubre", num: "10" },
    { name: "Noviembre", num: "11" },
    { name: "Diciembre", num: "12" }
  ];

  //ESTRUCTURA DE DATOS
  dataIncidentesUE: ResultObject_UE = {
    robo: 0,
    acosoSexual: 0,
    bullyng: 0,
    alcoholDrogas: 0,
    violenciaPares: 0,
    otros: 0,
    sinIncidente: 0,
    total: 0
  };


  //VARIABLES PARA GRAFICOS
  displayedColumnsUE: string[] = ['item', 'cost'];
  transactionsUE: Transaction[] = [];
  
  filteredTransactionsUE: Transaction[] = [];
  
  
  
  selectedSector: string = 'all'; // Agregar propiedad para el sector seleccionado


  constructor(private connectService: ConnectService) { }


  ngOnInit(): void {
    this.getSector911F2();
    this.getAnios911F2();
    this.inicializarDatos();
  }

  //INICIAR DATOS
  inicializarDatos() {
    this.connectService.cargarTotalIncidentes_UE().subscribe((data: any) => {
      this.dataIncidentesUE = data;
      this.total = this.dataIncidentesUE.total;
      
      const currentYear = new Date().getFullYear().toString();
      this.transactionsUE = [
        { item: 'Robo', cost: this.dataIncidentesUE.robo , year:currentYear },
        { item: 'Acoso Sexual', cost: this.dataIncidentesUE.acosoSexual , year:currentYear},
        { item: 'Bullyng', cost: this.dataIncidentesUE.bullyng , year:currentYear},
        { item: 'Alcohol y Drogas', cost: this.dataIncidentesUE.alcoholDrogas , year:currentYear},
        { item: 'Violencia entre Pares', cost: this.dataIncidentesUE.violenciaPares, year:currentYear },
        { item: 'Otros', cost: this.dataIncidentesUE.otros , year:currentYear},
        { item: 'Sin Incidente', cost: this.dataIncidentesUE.sinIncidente , year:currentYear},
        { item: 'Total', cost: this.dataIncidentesUE.total, year:currentYear }
      ];

      this.filteredTransactionsUE = [...this.transactionsUE];
      this.connectService.setFilteredTransactionsUE(this.filteredTransactionsUE);
      
    }
  )}

  totalCosto(){
    return this.total

  }


  // FILTRO POR SECTOR
  filterBySector(sectorValue: string) {
    console.log(`Filtrar por sector: ${sectorValue}`);
    this.getUE911F2(sectorValue);
  }

  // FILTRO POR UNIDAD EDUCATIVA
  filterByCollege(collegeValue: string) {
    console.log(`Filtrar por unidad educativa: ${collegeValue}`);
  }

  //FILTRO POR AÑO
  filterByYearUE(yearValue: string) {
    console.log(`Filtrar por año: ${yearValue}`);
    this.isMonthSelectDisabled= false;
  }

  // FILTRO POR MES
  filterByMonthUE(monthValue: string) {
    console.log(`Filtrar por mes: ${monthValue}`);
  }

  //OBTIENE SECTOR
  getSector911F2(): void {
    this.connectService.cargarSector_911_F2().subscribe((data: string[]) => {
      this.sectors = data.sort((a, b) => a.localeCompare(b));
      console.log(this.sectors);
    });
  }
  

  //OBTENER UNIDADES EDUCATIVAS
  getUE911F2(sector: string): void {
    this.connectService.cargarUE_F2(sector).subscribe((data: string[]) => {
      this.colleges = data.sort((a, b) => a.localeCompare(b));
      console.log(data);
    });
  }

  // OBTIENE AÑOS DE INCIDENTES DE UNIDADES EDUCATIVAS
  getAnios911F2(): void {
    this.connectService.cargarAnios_UE_F2().subscribe((data: string[]) => {
      this.yearsUE = data.sort((a, b) => a.localeCompare(b));
      console.log(data);
    });
  }

}


