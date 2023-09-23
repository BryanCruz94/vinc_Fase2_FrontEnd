import { Component, OnInit } from '@angular/core';
import { categoria } from '../interfaces/incidentes.interface';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit { // Implementar OnInit
  popupData: any;
  selectedFilterValue = 'Entidad Pública';
  selectedSector = 'Luz de America';

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
      img: 'assets/img/DirectorioComunidad/Organismos/LuzDeAmerica/GadLuzDeAmerica.png',
      imgPop: 'assets/img/DirectorioComunidad/Organismos/LuzDeAmerica/GadLuz_PopUp.png',
      atencion: 'Lunes a Viernes 8:00am - 12:30pm, 13:30pm - 17:00pm',
      contacto: '(02) 2722 055',
      correo: 'gpluzamerica@hotmail.com',
      ubicacion: 'https://maps.app.goo.gl/4wZ8LaQxbKbsAWSb8?g_st=ic'
    },
    {
      title: 'UPC',
      sector: 'Luz de America',
      category: 'Entidad Pública',
      img: 'assets/img/DirectorioComunidad/Organismos/PoliciaNacional.jpg',
      imgPop: 'assets/img/DirectorioComunidad/Organismos/UPC/UPC.jpg',
      atencion: '00:00am – 23:59pm',
      contacto: '(02) 2233 283 - 911',
      correo: 'dnpolco.servicios@gmail.com',
      ubicacion: 'https://goo.gl/maps/fzFyUXTvZGEezhL3A'
    },
    {
      title: 'Ministerio de Salud Pública',
      sector: 'Luz de America',
      category: 'Entidad Pública',
      img: 'assets/img/DirectorioComunidad/Organismos/MinisterioDeSaludPublica.svg',
      imgPop: 'assets/img/DirectorioComunidad/Organismos/MSP/MSP.jpg',
      atencion: 'Lunes a Domingo 8:00 am - 17:00pm',
      contacto: '(02) 272 2234',
      correo: 'scs.luzdeamerica.area17@gmail.com',
      ubicacion: 'https://goo.gl/maps/RYYiFo5Kkjr6UbB58'
    },
    {
      title: 'Cuerpo de Bomberos',
      sector: 'Luz de America',
      category: 'Entidad Pública',
      img: 'assets/img/DirectorioComunidad/Organismos/Bomberos.jpg',
      imgPop: 'assets/img/DirectorioComunidad/Organismos/Bomberos/Foto1.jpg',
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
      img: 'assets/img/DirectorioComunidad/Escuelas/LuzAmerica.jpg',
      imgPop: 'assets/img/DirectorioComunidad/Escuelas/LuzAmerica/foto1.jpg',
      atencion: 'Lunes a Viernes de 7:00 am - 15:00 pm',
      contacto: '(02) 272 2231',
      correo: 'ueluzdeamerica2@hotmail.com',
      ubicacion: 'https://goo.gl/maps/8yBheA9HbrS1Wy2QA'
    },
    {
      title: 'Unidad Educativa "13 de Abril"',
      sector: 'Luz de America',
      category: 'Escuela',
      img: 'assets/img/DirectorioComunidad/Escuelas/TreceAbril.jpg',
      imgPop: 'assets/img/DirectorioComunidad/Escuelas/TreceAbril/foto1.jpg',
      atencion: 'Lunes a Viernes de 7:00 am - 15:00 pm',
      contacto: '(02) 272 2109',
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
      img: 'assets/img/DirectorioComunidad/Escuelas/PuertoLimon/EscuelaPuertoLimon.png',
      imgPop: '../../assets/img/DirectorioComunidad/Escuelas/PuertoLimon/PopUp_PuertoLimon.png',
  
      atencion: 'Lunes a Viernes 7:00am - 16:00pm',
      contacto: '098 082 0480',
      correo: 'fabianj.rodriguez@educacion.gob.ec',
      ubicacion: 'https://maps.app.goo.gl/ME1e4hvXTbYthM7V7?g_st=ic'
    },
    {
      title: 'GAD - Puerto Limón',
      sector: 'Puerto Limón',
      category: 'Entidad Pública',
      img: 'assets/img/DirectorioComunidad/Organismos/PtoLimon/GadPuertoLimon.png',
      imgPop: 'assets/img/DirectorioComunidad/Organismos/PtoLimon/GadPuertoLimon_PopU.png',
      atencion: 'Lunes a Viernes 8:00am - 12:30pm, 13:30pm - 17:00pm',
      contacto: '(02) 385 6296',
      correo: 'info@puertolimon.gob.ec',
      ubicacion: 'https://maps.app.goo.gl/q9RgcZtw9mmN7nZg7?g_st=ic'
    },
    {
      title: 'Ministerio de Salud Pública',
      sector: 'Puerto Limón',
      category: 'Entidad Pública',
      img: 'assets/img/DirectorioComunidad/Organismos/MinisterioDeSaludPublica.svg',
      imgPop: 'assets/img/DirectorioComunidad/Organismos/PtoLimon/MSP_PtoLimon_POPUP.png',
      atencion: 'Lunes a Domingo 8:00 am - 17:00pm',
      contacto: '(02) 385 6295',
      correo: 'scspuertolimon@gmail.com',
      ubicacion: 'https://maps.app.goo.gl/4E4ewvDrGrmJkoxk6?g_st=ic'
    },
    {
      title: 'Cuerpo de Bomberos',
      sector: 'Puerto Limón',
      category: 'Entidad Pública',
      img: 'assets/img/DirectorioComunidad/Organismos/Bomberos.jpg',
      imgPop: 'assets/img/DirectorioComunidad/Organismos/PtoLimon/CuerpoBomberos_PuertoLimon.jpeg',
      atencion: '00:00am – 23:59pm',
      contacto: '911 – (02) 395 9340',
      correo: 'info@cbsd.gob.ec',
      ubicacion: 'https://maps.app.goo.gl/Ti55x1Xd68vG7EhX6?g_st=ic'
    },
// *********************************************************************+
    //                      SECTOR EL ESFUERZO
    // *********************************************************************+

    {
      title: 'Unidad Educativa "EL ESFUERZO"',
      sector: 'El Esfuerzo',
      category: 'Escuela',
      img: 'assets/img/DirectorioComunidad/Escuelas/ElEsfuerzo/EscuelaElEsfuerzo.png',
      imgPop: 'assets/img/DirectorioComunidad/Escuelas/ElEsfuerzo/PopUp_ElEsfuerzo.jpg',
      atencion: 'Lunes a Viernes 7:00am - 16:00pm',
      contacto: '098 119 6250',
      correo: 'darwin.meza@educacion.gob.ec',
      ubicacion: 'https://goo.gl/maps/P1oLpYqzQm35RTuL7'
    },
    {
      title: 'GAD - El Esfuerzo',
      sector: 'El Esfuerzo',
      category: 'Entidad Pública',
      img: 'assets/img/DirectorioComunidad/Organismos/ElEsfuerzo/GadElEsfuerzo.png',
      imgPop: 'assets/img/DirectorioComunidad/Organismos/ElEsfuerzo/GadElEsfuerzo_POPUP.png',
      atencion: 'Lunes a Viernes 8:00am - 12:30pm, 13:30pm - 17:00pm',
      contacto: '099 374 4437',
      correo: 'gadelesfuerzo@hotmail.com',
      ubicacion: 'https://goo.gl/maps/fzFyUXTvZGEezhL3A'
    },
    {
      title: 'UPC',
      sector: 'El Esfuerzo',
      category: 'Entidad Pública',
      img: 'assets/img/DirectorioComunidad/Organismos/PoliciaNacional.jpg',
      imgPop: 'assets/img/DirectorioComunidad/Organismos/ElEsfuerzo/UPC_ElEsfuerzo.jpeg',
      atencion: '00:00am – 23:59pm',
      contacto: '911',
      correo: 'upcelesfuerzo@gmail.com',
      ubicacion: 'https://maps.app.goo.gl/qcviim51Tq4ov1oK7?g_st=ic'
    },
    {
      title: 'Ministerio de Salud Pública',
      sector: 'El Esfuerzo',
      category: 'Entidad Pública',
      img: 'assets/img/DirectorioComunidad/Organismos/MinisterioDeSaludPublica.svg',
      imgPop: 'assets/img/DirectorioComunidad/Organismos/ElEsfuerzo/MSP_ElEsfuerzo.jpeg',
      atencion: 'Lunes a Domingo 8:00 am - 17:00pm',
      contacto: '(022) 384 0173',
      correo: 'geosalud.msp.gob.ec',
      ubicacion: 'https://maps.app.goo.gl/dy29ayQspGWurTu37?g_st=ic'
    }
    
  ];
  ngOnInit(): void {
    // Establecer el sector por defecto al cargar la página
    this.selectedSector = 'Luz de America';
  }

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