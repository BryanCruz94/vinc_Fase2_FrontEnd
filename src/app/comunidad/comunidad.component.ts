import { Component } from '@angular/core';
import { categoria } from '../interfaces/incidentes.interface';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent {
  popupData: any;
  selectedFilterValue = 'Entidad Pública';
  selectedSector = 'Luz de América';

  categoria: categoria[] = [
    // Categorías de ejemplo

    // *********************************************************************+
    //                      SECTOR LUZ DE AMÉRICA
    // *********************************************************************+

    //Organismos
    {
      title: 'GAD - Luz de América',
      sector: 'Luz de America',
      category: 'Entidad Pública',
      img: '../../assets/img/DirectorioComunidad/Organismos/LuzDeAmerica/GadLuzDeAmerica.png',
      imgPop: '../../assets/img/DirectorioComunidad/Organismos/LuzDeAmerica/GadLuzMap.png',
      atencion: '08:00am – 17:00pm',
      contacto: '0994413190 - 022722055',
      correo: 'gpluzamerica@hotmail.com',
      ubicacion: 'https://goo.gl/maps/kZ8PkrgQBuMNg1FT6'
    },
    {
      title: 'UPC',
      sector: 'Luz de America',
      category: 'Entidad Pública',
      img: '../../assets/img/DirectorioComunidad/Organismos/PoliciaNacional.jpg',
      imgPop: '../../assets/img/DirectorioComunidad/Organismos/UPC/UPC.jpg',
      atencion: '00:00am – 23:59pm',
      contacto: '022 233 283',
      correo: 'dnpolco.servicios@gmail.com',
      ubicacion: 'https://goo.gl/maps/fzFyUXTvZGEezhL3A'
    },
    {
      title: 'Ministerio de Salud Pública',
      sector: 'Luz de America',
      category: 'Entidad Pública',
      img: '../../assets/img/DirectorioComunidad/Organismos/MinisterioDeSaludPublica.jpg',
      imgPop: '../../assets/img/DirectorioComunidad/Organismos/MSP/MSP.jpg',
      atencion: '24 horas',
      contacto: '(+593) 2-2381-4400 ext. 110, 1109',
      correo: 'ventanillaunica.msp@msp.gob.ec',
      ubicacion: 'https://goo.gl/maps/RYYiFo5Kkjr6UbB58'
    },
    {
      title: 'Cuerpo de Bomberos',
      sector: 'Luz de America',
      category: 'Entidad Pública',
      img: '../../assets/img/DirectorioComunidad/Organismos/Bomberos.jpg',
      imgPop: '../../assets/img/DirectorioComunidad/Organismos/Bomberos/Foto1.jpg',
      atencion: 'Lunes a Viernes 8:00am -16:30pm',
      contacto: '911 – 102',
      correo: 'info@bpvm.gob.ec',
      ubicacion: 'https://goo.gl/maps/v9kNgeRwV59yi5cQ7'
    },
    //Escuelas
    {
      title: 'Unidad Educativa "Luz de América"',
      sector: 'Luz de America',
      category: 'Escuela',
      img: '../../assets/img/DirectorioComunidad/Escuelas/LuzAmerica.jpg',
      imgPop: '../../assets/img/DirectorioComunidad/Escuelas/LuzAmerica/foto1.jpg',
      atencion: 'Lunes a Viernes de 7:00 am - 15:00 pm',
      contacto: '02 272 2231',
      correo: 'ueluzdeamerica2@hotmail.com',
      ubicacion: 'https://goo.gl/maps/8yBheA9HbrS1Wy2QA'
    },
    {
      title: 'Unidad Educativa "13 de Abril"',
      sector: 'Luz de America',
      category: 'Escuela',
      img: '../../assets/img/DirectorioComunidad/Escuelas/TreceAbril.jpg',
      imgPop: '../../assets/img/DirectorioComunidad/Escuelas/TreceAbril/foto1.jpg',
      atencion: 'Lunes a Viernes de 7:00 am - 15:00 pm',
      contacto: '02 272 2109',
      correo: 'escuelatrecedeabril@gmail.com',
      ubicacion: 'https://goo.gl/maps/rLetQZyVfoB6rGyt9'
    },


     // *********************************************************************+
    //                      SECTOR PUERTO LIMÓN
    // *********************************************************************+

    {
      title: 'Unidad Educativa "PUERTO LIMÓN"',
      sector: 'Puerto Limón',
      category: 'Escuela',
      img: '../../assets/img/DirectorioComunidad/Escuelas/PtoLimon/EscuelaPuertoLimon.png',
      imgPop: '../../assets/img/DirectorioComunidad/Escuelas/PtoLimon/PopUp_PuertoLimon.png',
  
      atencion: 'Lunes a Viernes',
      contacto: '593-2-396-1300',
      correo: 'xxxx',
      ubicacion: 'https://maps.app.goo.gl/ME1e4hvXTbYthM7V7?g_st=ic'
    },
    {
      title: 'GAD - Puerto Limón',
      sector: 'Puerto Limón',
      category: 'Entidad Pública',
      img: '../../assets/img/DirectorioComunidad/Organismos/PtoLimon/GadPuertoLimon.png',
      imgPop: '../../assets/img/DirectorioComunidad/Organismos/PtoLimon/GadPuertoLimon.png',
      atencion: '00:00am – 23:59pm',
      contacto: '(02) 385-6296',
      correo: 'info@puertolimon.gob.ec',
      ubicacion: 'https://goo.gl/maps/ZVavgPSgLGexqj5c6'
    },
// *********************************************************************+
    //                      SECTOR EL ESFUERZO
    // *********************************************************************+

    {
      title: 'Unidad Educativa "EL ESFUERZO"',
      sector: 'El Esfuerzo',
      category: 'Escuela',
      img: '../../assets/img/DirectorioComunidad/Escuelas/ElEsfuerzo/EscuelaElEsfuerzo.png',
      imgPop: '../../assets/img/DirectorioComunidad/Escuelas/ElEsfuerzo/PopUp_ElEsfuerzo.jpg',
      atencion: 'Lunes a Viernes',
      contacto: '02 384 0105',
      correo: 'escuelatrecedeabril@gmail.com',
      ubicacion: 'https://goo.gl/maps/P1oLpYqzQm35RTuL7'
    },
    {
      title: 'GAD - El Esfuerzo',
      sector: 'El Esfuerzo',
      category: 'Entidad Pública',
      img: '../../assets/img/DirectorioComunidad/Organismos/ElEsfuerzo/GadElEsfuerzo.png',
      imgPop: '../../assets/img/DirectorioComunidad/Organismos/ElEsfuerzo/Logo_Gad_El_Esfuerzo.png',
      atencion: '00:00am – 23:59pm',
      contacto: '022 233 283',
      correo: 'dnpolco.servicios@gmail.com',
      ubicacion: 'https://goo.gl/maps/fzFyUXTvZGEezhL3A'
    },
    
  ];

  selectFilterValue(value: string): void {
    this.selectedFilterValue = value;
  }

  isFilterItemActive(category: string): boolean {
    return category === this.selectedFilterValue;
  }

  filterByCategoria(proyectos: categoria[], categoria: string, sector: string): categoria[] {
    return proyectos.filter(p => p.category === categoria && p.sector === sector);
  }

  selectSector(sector: string): void {
    this.selectedSector = sector;
  }

  // CONTROLAR LAS VENTANAS
  openPopup(categoria: any): void {
    this.popupData = { ...categoria };
  }

  closePopup(): void {
    this.popupData = null;
    setTimeout(() => {
      this.popupData = null;
    }, 300);
  }
}