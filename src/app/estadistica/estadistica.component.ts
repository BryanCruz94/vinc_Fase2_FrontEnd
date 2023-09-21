import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConnectService } from 'src/app/service/connect.service';
import { ResultObject, Transaction, mes, dia } from '../interfaces/incidentes.interface';

@Component({
  selector: 'app-estadistica', 
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {
  @ViewChild('filterDaySelect') filterDaySelect!: ElementRef<HTMLSelectElement>;

  selectedType = 'COMUNIDADES';

  years: number[] = [];
  sectors: string[] = [];

  selectedYear: string = 'all';
  selectedMonth: string = 'all';
  selectedDay: string = 'all';
  selectedSector: string = 'all';
  isMonthSelectDisabled: boolean = true;
  isDaySelectDisabled: boolean = true;

  dataIncidentes: ResultObject = {
    robo: 0,
    emergenciaMedica: 0,
    incendio: 0,
    desastreNatural: 0,
    accidenteDeTrafico: 0,
    sinIncidente: 0,
    otros: 0
  };

  labelMappings: { [key: string]: string } = {
    robo: 'Robos',
    emergenciaMedica: 'Emergencias Médicas',
    incendio: 'Incendios',
    desastreNatural: 'Desastres Naturales',
    accidenteDeTrafico: 'Accidentes de Tráfico',
    sinIncidente: 'Sin Incidente',
    otros: 'Otros'
  };

  total: number = 0;
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];

  constructor(private connectService: ConnectService) { }

  mesCategoria: mes[] = [
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

  diaCategoria: dia[] = Array.from({ length: 31 }, (_, i) => ({ num: (i + 1).toString().padStart(2, '0') }));

  ngOnInit(): void {
    this.getAnios();
    this.getSector();
    this.inicializarDatos();
  }

  selectType(type: string): void {
    this.selectedType = type;
  }

  filterBySector(selectedSector: string): void {
    this.selectedSector = selectedSector;

    if (selectedSector === 'all') {
      this.filteredTransactions = [...this.transactions];
      this.connectService.setFilteredTransactions(this.filteredTransactions);
    } else {
      this.connectService.cargarTotalIncidentesPorSector(selectedSector).subscribe((res: any) => {
        const filteredItems = Object.entries(res).map(([item, cost]) => {
          const filteredTransaction: Transaction = {
            item: this.labelMappings[item.toString()] || item,
            cost,
            year: selectedSector
          };
          return filteredTransaction;
        });

        this.filteredTransactions = filteredItems;
        this.connectService.setFilteredTransactions(this.filteredTransactions);
      });
    }
  }

  getAnios(): void {
    this.connectService.cargarAnios().subscribe((data: number[]) => {
      this.years = data.sort((a, b) => b - a);
    });
  }

  getSector(): void {
    this.connectService.cargarSector().subscribe((data: string[]) => {
      this.sectors = data.sort((a, b) => a.localeCompare(b));
      console.log(this.sectors);
    });
  }

  inicializarDatos() {
    this.connectService.cargarTotalIncidentes().subscribe((res: any) => {
      this.dataIncidentes = res;

      this.total =
        this.dataIncidentes.robo +
        this.dataIncidentes.emergenciaMedica +
        this.dataIncidentes.incendio +
        this.dataIncidentes.desastreNatural +
        this.dataIncidentes.accidenteDeTrafico +
        this.dataIncidentes.sinIncidente +
        this.dataIncidentes.otros;

      const currentYear = new Date().getFullYear().toString();

      this.transactions = [
        { item: 'Robos', cost: this.dataIncidentes.robo, year: currentYear },
        { item: 'Emergencias Médicas', cost: this.dataIncidentes.emergenciaMedica, year: currentYear },
        { item: 'Incendios', cost: this.dataIncidentes.incendio, year: currentYear },
        { item: 'Desastres Naturales', cost: this.dataIncidentes.desastreNatural, year: currentYear },
        { item: 'Accidentes de Tráfico', cost: this.dataIncidentes.accidenteDeTrafico, year: currentYear },
        { item: 'Sin Incidentes', cost: this.dataIncidentes.sinIncidente, year: currentYear },
        { item: 'Otros', cost: this.dataIncidentes.otros, year: currentYear }
      ];

      this.filteredTransactions = [...this.transactions];
      this.connectService.setFilteredTransactions(this.filteredTransactions);
    });
  }

  getTotalCost(): number {
    return this.filteredTransactions
      .map(t => typeof t.cost === 'number' ? t.cost : 0)
      .reduce((acc, value) => acc + Number(value), 0);
  }

  filterByYearAndSector(): void {
    this.connectService.cargarTotalIncidentesPorSectorYAnio(this.selectedYear, this.selectedSector).subscribe((res: any) => {
      const filteredItems = Object.entries(res).map(([item, cost]) => {
        const filteredTransaction: Transaction = {
          item: this.labelMappings[item.toString()] || item,
          cost,
          year: this.selectedYear
        };
        return filteredTransaction;
      });
      this.filteredTransactions = filteredItems;
      this.connectService.setFilteredTransactions(this.filteredTransactions);
    });
  }

  filterByYearAndMonthAndSector(): void {
    this.connectService.cargarTotalIncidentesPorSectorYAnioYMes(this.selectedYear, this.selectedMonth, this.selectedSector).subscribe((res: any) => {
      const filteredItems = Object.entries(res).map(([item, cost]) => {
        const filteredTransaction: Transaction = {
          item: this.labelMappings[item.toString()] || item,
          cost,
          year: this.selectedYear
        };
        return filteredTransaction;
      });
      this.filteredTransactions = filteredItems;
      this.connectService.setFilteredTransactions(this.filteredTransactions);
    });
  }

  filterByYearAndMonthAndDayAndSector(): void {
    this.connectService
      .cargarTotalIncidentesPorSectorYAnioYMesYDia(this.selectedYear, this.selectedMonth, this.selectedDay, this.selectedSector)
      .subscribe((res: any) => {
        const filteredItems = Object.entries(res).map(([item, cost]) => {
          const filteredTransaction: Transaction = {
            item: this.labelMappings[item.toString()] || item,
            cost,
            year: this.selectedYear,
          };
          return filteredTransaction;
        });
        this.filteredTransactions = filteredItems;
        this.connectService.setFilteredTransactions(this.filteredTransactions);
      });
  }

  filterByYear(selectedYear: string): void {
    this.selectedYear = selectedYear;
    if (selectedYear === 'all' && this.selectedSector !== 'all') {
      this.filterBySector(this.selectedSector);
      this.isMonthSelectDisabled = true;
      this.isDaySelectDisabled = true;
    } else if (selectedYear === 'all' && this.selectedSector === 'all') {
      this.filteredTransactions = this.transactions;
      this.isMonthSelectDisabled = true;
      this.isDaySelectDisabled = true;
      this.connectService.setFilteredTransactions(this.filteredTransactions);
    } else if (this.selectedSector !== 'all') {
      this.filterByYearAndSector();
      this.isMonthSelectDisabled = false;
    } else {
      this.connectService.cargarTotalIncidentesPorAnio(selectedYear).subscribe((res: any) => {
        const filteredItems = Object.entries(res).map(([item, cost]) => {
          const filteredTransaction: Transaction = {
            item: this.labelMappings[item.toString()] || item,
            cost,
            year: selectedYear
          };
          return filteredTransaction;
        });
        this.filteredTransactions = filteredItems;
        this.isMonthSelectDisabled = false;
        this.connectService.setFilteredTransactions(this.filteredTransactions);
      });
    }
  }

  filterByMonth(selectedMonth: string): void {
    this.selectedMonth = selectedMonth;
    if (this.selectedMonth === 'all' && this.selectedSector !== 'all') {
      this.filterByYearAndSector();
      this.isDaySelectDisabled = true;
    } else if (this.selectedMonth === 'all' && this.selectedSector === 'all') {
      this.filterByYear(this.selectedYear);
      this.isDaySelectDisabled = true;
    } else if (this.selectedSector !== 'all') {
      this.filterByYearAndMonthAndSector();
      this.isDaySelectDisabled = false;
    } else {
      this.isDaySelectDisabled = false;

      this.connectService.cargarTotalIncidentesPorAnioYMes(this.selectedYear, selectedMonth).subscribe((res: any) => {
        const filteredItems = Object.entries(res).map(([item, cost]) => {
          const filteredTransaction: Transaction = {
            item: this.labelMappings[item.toString()] || item,
            cost,
            year: this.selectedYear
          };
          return filteredTransaction;
        });
        this.filteredTransactions = filteredItems;
        this.connectService.setFilteredTransactions(this.filteredTransactions);
      });
    }
  }

  filterByDay(selectedDay: string): void {
    this.selectedDay = selectedDay;
    if (this.selectedDay === 'all' && this.selectedSector !== 'all') {
      this.filterByYearAndMonthAndSector();
    } else if (this.selectedDay === 'all' && this.selectedSector === 'all') {
      this.filterByMonth(this.selectedMonth);
    } else if (this.selectedSector !== 'all') {
      this.filterByYearAndMonthAndDayAndSector();
    } else {
      this.connectService
        .cargarTotalIncidentesPorAnioYMesYDia(this.selectedYear, this.selectedMonth, selectedDay)
        .subscribe((res: any) => {
          const filteredItems = Object.entries(res).map(([item, cost]) => {
            const filteredTransaction: Transaction = {
              item: this.labelMappings[item.toString()] || item,
              cost,
              year: this.selectedYear,
            };
            return filteredTransaction;
          });
          this.filteredTransactions = filteredItems;
          this.connectService.setFilteredTransactions(this.filteredTransactions);
        });
    }
  }
}
