import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environmen';
import { Transaction, TransactionUE } from '../interfaces/incidentes.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class ConnectService {
  private filteredTransactionsSubject: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>([]);
  public filteredTransactions: Observable<Transaction[]> = this.filteredTransactionsSubject.asObservable();

  private filteredTransactionsSubjectUE: BehaviorSubject<TransactionUE[]> = new BehaviorSubject<TransactionUE[]>([]);
  public filteredTransactionsUE: Observable<TransactionUE[]> = this.filteredTransactionsSubjectUE.asObservable();

  constructor(private http: HttpClient) { }



// *********************************************************************************************************************
//                     METODOS FASE 1
// *********************************************************************************************************************
  cargarAnios() {
    const url = `${base_url}/grafica/anios`;
    return this.http.get<any>(url);
  }

  cargarSector() {
    const url = `${base_url}/grafica/sectores`;
    return this.http.get<any>(url);
  }

  cargarTotalIncidentes() {
    const url = `${base_url}/grafica/incidentes`;
    return this.http.get<any>(url);
  }

  cargarTotalIncidentesPorSector(sector: string) {
    const url = `${base_url}/grafica/incidentesPorSector?sector=${sector}`;
    //console.log(url);
    return this.http.get<any>(url);
  }

  cargarTotalIncidentesPorSectorYAnio(year: string, sector: string) {
    const url = `${base_url}/grafica/incidentesPorSectorYAnio?year=${year}&sector=${sector}`;
    //console.log(url);
    return this.http.get<any>(url);
  }

  cargarTotalIncidentesPorSectorYAnioYMes(year: string, month: string, sector: string) {
    const url = `${base_url}/grafica/incidentesPorSectorYAnioYMes?year=${year}&month=${month}&sector=${sector}`;
    //console.log(url);
    return this.http.get<any>(url);
  }

  cargarTotalIncidentesPorSectorYAnioYMesYDia(year: string, month: string, day: string, sector: string) {
    const url = `${base_url}/grafica/incidentesPorSectorYAnioYMesYDia?year=${year}&month=${month}&day=${day}&sector=${sector}`;
    //console.log(url);
    return this.http.get<any>(url);
  }

  cargarTotalIncidentesPorAnio(year: string) {
    const url = `${base_url}/grafica/incidentesPorAnio?year=${year}`;
    //console.log(url);
    return this.http.get<any>(url);
  }

  cargarTotalIncidentesPorAnioYMes(year: string, month: String) {
    const url = `${base_url}/grafica/incidentesPorAnioYMes?year=${year}&month=${month}`;
    //console.log(url);
    return this.http.get<any>(url);
  }

  cargarTotalIncidentesPorAnioYMesYDia(year: string, month: string, day: string) {
    const url = `${base_url}/grafica/incidentesPorAnioYMesYDia?year=${year}&month=${month}&day=${day}`;
    //console.log(url);
    return this.http.get<any>(url);
  }

  setFilteredTransactions(transactions: Transaction[]): void {
    this.filteredTransactionsSubject.next([...transactions]); // Hacer una copia del arreglo de transacciones
  }


  // *********************************************************************************************************************
  //                     METODOS FASE 2
  // *********************************************************************************************************************
  // PREGUNTAS ECU 911
  cargarAnios_911_F2() {
    const url = `${base_url}/grafica/anios_911_F2`;
    return this.http.get<any>(url);
  }

  cargarAnios_UE_F2() {
    const url = `${base_url}/grafica/anios_UE_F2`;
    return this.http.get<any>(url);
  }

  //CARGAR MESES SEGUN FILTRO DE SECTOR, UNIDAD EDUCATIVA Y AÑO
  cargarMeses_UE_F2(sector: string, ue: string, year: string) {
    const url = `${base_url}/grafica/meses_UE_F2?sector=${sector}&ue=${ue}&year=${year}`;
    return this.http.get<any>(url);
  }
    
  cargarSector_911_F2(): Observable<string[]> {
    const url = `${base_url}/grafica/sectores_911_F2`;
    return this.http.get<string[]>(url);
  }

  //cargar unidad educativa con paso de parámetro de sector a la url http://localhost:3000/grafica/unidadesEducativas?sector=El Esfuerzo
  cargarUE_F2(sector: string): Observable<string[]> {
    const url = `${base_url}/grafica/unidadesEducativas?sector=${sector}`;
    return this.http.get<string[]>(url);
  }

  cargarTotalIncidentes_UE() {
    const url = `${base_url}/grafica/incidentesUE_F2`;
    return this.http.get<any>(url);
  }

  setFilteredTransactionsUE(transactions: TransactionUE[]): void {
    this.filteredTransactionsSubjectUE.next([...transactions]); // Hacer una copia del arreglo de transacciones
  }

  cargarTotalIncidentesPorSectorUE(sector: string) {
    const url = `${base_url}/grafica/incidentesPorSector_UE_F2?sector=${sector}`;
    return this.http.get<any>(url);
  }

  cargaInvidentesPorSectorAndUe_UE_F2(sector: string, ue: string) {
    const url = `${base_url}/grafica/incidentesPorSectorYuE_UE_F2?sector=${sector}&ue=${ue}`;
    console.log('la url es',url);
    return this.http.get<any>(url);
  }

  cargarIncidentesPorSectorYUeYAnio_UE_F2(sector: string, ue: string,year: string) {
    const url = `${base_url}/grafica/incidentesPorSectorYuEYAnio_UE_F2?sector=${sector}&ue=${ue}&year=${year}`;
    return this.http.get<any>(url);
  }

  cargarIncidentesPorSectorYUeYAnioYMes_UE_F2(sector: string, ue: string,year: string, month: string) {
    const url = `${base_url}/grafica/incidentesPorSectorYuEYAnioYMes_UE_F2?sector=${sector}&ue=${ue}&year=${year}&month=${month}`;
    console.log('la url es',url);
    return this.http.get<any>(url);
  }
}