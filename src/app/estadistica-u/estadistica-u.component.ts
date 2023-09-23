import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConnectService } from 'src/app/service/connect.service';
import { ResultObject_UE, mes, Transaction } from '../interfaces/incidentes.interface';

@Component({
  selector: 'app-estadistica-u',
  templateUrl: './estadistica-u.component.html',
  styleUrls: ['./estadistica-u.component.css']
})
export class EstadisticaUComponent implements OnInit {
  @ViewChild('filterDaySelect') filterDaySelect!: ElementRef<HTMLSelectElement>;

  // VARIABLES
  sectors: string[] = [];
  colleges: string[] = [];
  yearsUE: string[] = [];
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
  monthUEString: string[] = this.monthUE.map((month) => month.name);
  pandillas: number = 0;
  total: number = 0;
  totalPandillas: number = 0;

  // VARIABLES PARA FILTROS
  selectedSectorUE: string = 'all'; // Agregar propiedad para el sector seleccionado
  selectedCollegeUE: string = 'all'; // Agregar propiedad para la unidad educativa seleccionada
  selectedYearUE: string = 'all'; // Agregar propiedad para el año seleccionado
  selectedMonthUE: string = 'all'; // Agregar propiedad para el mes seleccionado
  
  // VARIABLES PARA HABILITAR/DESHABILITAR FILTROS
  isMonthSelectDisabled: boolean = true; // Controla la habilitación/deshabilitación del filtro de meses
  isCollegeSelectDisabled: boolean = true; // Controla la habilitación/deshabilitación del filtro de unidades educativas

  // MESES PARA FILTROS
  


  //ESTRUCTURA DE DATOS
  dataIncidentesUE: ResultObject_UE = {
    robo: 0,
    acosoSexual: 0,
    bullyng: 0,
    alcoholDrogas: 0,
    violenciaPares: 0,
    otros: 0,
    sinIncidente: 0,
    pandillas: 0,
    total: 0
  };

  labelMappings: { [key: string]: string } = {
    robo: 'Robos',
    acosoSexual: 'Acoso Sexual',
    bullyng: 'Bullying',
    alcoholDrogas: 'Alcohol y Drogas',
    violenciaPares: 'Violencia entre Pares',
    otros: 'Otros',
    sinIncidente: 'Sin Incidente',
    
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
      this.total = this.totalPandillas = this.dataIncidentesUE.total;
      this.pandillas = this.dataIncidentesUE.pandillas;
      
      const currentYear = new Date().getFullYear().toString();
      this.transactionsUE = [
        { item: 'Robo', cost: this.dataIncidentesUE.robo , year:currentYear },
        { item: 'Acoso Sexual', cost: this.dataIncidentesUE.acosoSexual , year:currentYear},
        { item: 'Bullying', cost: this.dataIncidentesUE.bullyng , year:currentYear},
        { item: 'Alcohol y Drogas', cost: this.dataIncidentesUE.alcoholDrogas , year:currentYear},
        { item: 'Violencia entre Pares', cost: this.dataIncidentesUE.violenciaPares, year:currentYear },
        { item: 'Otros', cost: this.dataIncidentesUE.otros , year:currentYear},
        { item: 'Sin Incidente', cost: this.dataIncidentesUE.sinIncidente , year:currentYear},
      ];

      this.filteredTransactionsUE = [...this.transactionsUE];
      this.connectService.setFilteredTransactionsUE(this.filteredTransactionsUE);
      
    }
  )}

  totalCosto(){
    return this.total
  }



  // FILTRO POR SECTOR
  filterBySector(selectedSector: string) {
    console.log(`Filtrar por sector: ${selectedSector}`);
    this.isCollegeSelectDisabled= false;
    this.selectedSectorUE = selectedSector;
    this.getUE911F2(selectedSector);
  
    if (selectedSector === 'all') {
      this.isCollegeSelectDisabled= true;
      this.filteredTransactionsUE = [...this.transactionsUE];
      this.connectService.setFilteredTransactionsUE(this.filteredTransactionsUE);
    } else {
      this.connectService.cargarTotalIncidentesPorSectorUE(selectedSector).subscribe((res: any) => {
        this.total = this.totalPandillas = res.total;
        this.pandillas = res.pandillas;
        const filteredItems = Object.entries(res)
// Filtra el elemento con nombre 'total y elementos con nombre 'pandillas
          .filter(([item, _]) => item !== 'total' && item !== 'pandillas')
          .map(([item, cost]) => ({
            item: this.labelMappings[item.toString()] || item,
            cost,
            year: selectedSector
          }));
  
        this.filteredTransactionsUE = filteredItems;
        this.connectService.setFilteredTransactionsUE(this.filteredTransactionsUE);
      });
    }
  }
  

  // FILTRO POR SECTOR Y UNIDAD EDUCATIVA
  filterByCollegeUE(selectedCollegeUE:string) {
    console.log(`Filtrar por unidad educativa: ${selectedCollegeUE}`);
    this.selectedCollegeUE = selectedCollegeUE;
    if (selectedCollegeUE === 'all') {
      this.filteredTransactionsUE = [...this.transactionsUE];
      this.connectService.setFilteredTransactionsUE(this.filteredTransactionsUE);
    } else {
      this.connectService.cargaInvidentesPorSectorAndUe_UE_F2(this.selectedSectorUE,this.selectedCollegeUE).subscribe((res: any) => {
        this.total = this.totalPandillas = res.total;
        this.pandillas = res.pandillas;
        const filteredItems = Object.entries(res)
          .filter(([item, _]) => item !== 'total') // Filtra el elemento con nombre 'total'
          .map(([item, cost]) => ({
            item: this.labelMappings[item.toString()] || item,
            cost,
            year: selectedCollegeUE
          }));
  
        this.filteredTransactionsUE = filteredItems;
        this.connectService.setFilteredTransactionsUE(this.filteredTransactionsUE);
      });
    }
  }

  //FILTRO POR SECTOR, UNIDAD EDUCATIVA Y AÑO
  filterByYearUE(yearValue: string) {
    console.log(`Filtrar por año: ${yearValue}`);
    this.isMonthSelectDisabled= false;
    this.selectedYearUE = yearValue;
    this.getMesesUE_F2();
    if (yearValue === 'all') {
      this.isMonthSelectDisabled= true;
      this.filteredTransactionsUE = [...this.transactionsUE];
      this.connectService.setFilteredTransactionsUE(this.filteredTransactionsUE);
    }else{
      this.connectService.cargarIncidentesPorSectorYUeYAnio_UE_F2(this.selectedSectorUE,this.selectedCollegeUE,yearValue).subscribe((res: any) => {
        this.total = res.total;
        const filteredItems = Object.entries(res)
          .filter(([item, _]) => item !== 'total') // Filtra el elemento con nombre 'total'
          .map(([item, cost]) => ({
            item: this.labelMappings[item.toString()] || item,
            cost,
            year: yearValue
          }));
  
        this.filteredTransactionsUE = filteredItems;
        this.connectService.setFilteredTransactionsUE(this.filteredTransactionsUE);
      });
    }
  }

  // FILTRO POR SECTOR, UNIDAD EDUCATIVA, AÑO Y MES
  filterByMonthUE(monthValue: string) {
    console.log(`Filtrar por mes: ${monthValue}`);
    this.selectedMonthUE = monthValue;
    if (monthValue === 'all') {
      this.filteredTransactionsUE = [...this.transactionsUE];
      this.connectService.setFilteredTransactionsUE(this.filteredTransactionsUE);
    }else{
      this.connectService.cargarIncidentesPorSectorYUeYAnioYMes_UE_F2(this.selectedSectorUE,this.selectedCollegeUE,this.selectedYearUE,monthValue).subscribe((res: any) => {
        this.total = res.total;
        const filteredItems = Object.entries(res)
          .filter(([item, _]) => item !== 'total') // Filtra el elemento con nombre 'total'
          .map(([item, cost]) => ({
            item: this.labelMappings[item.toString()] || item,
            cost,
            year: monthValue
          }));
  
        this.filteredTransactionsUE = filteredItems;
        this.connectService.setFilteredTransactionsUE(this.filteredTransactionsUE);
      });
    }
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

  // OBTIENE LOS MESES DE INCIDENTES FILTRADO POR SECTOR, UNIDAD EDUCATIVA Y AÑO
  getMesesUE_F2(): void {
    this.connectService.cargarMeses_UE_F2(this.selectedSectorUE,this.selectedCollegeUE,this.selectedYearUE).subscribe((data: string[]) => {
      const mesesEnOrdenCronologico = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
      ];
      
      // Luego, ordena los valores de 'data' según esta lista
      this.monthUEString = data.sort((a, b) => {
        const indexA = mesesEnOrdenCronologico.indexOf(a);
        const indexB = mesesEnOrdenCronologico.indexOf(b);
        return indexA - indexB;
      });
      console.log(data);
    });
  }



}


