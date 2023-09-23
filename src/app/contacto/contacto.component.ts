import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { datos } from '../interfaces/incidentes.interface';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
})
export class ContactoComponent {

  datos: datos[] = [
    // Categorías de ejemplo
    {
      name: 'Luis Castillo',
      range: 'Director de Proyecto',
      gmail: 'lacastillo12@espe.edu.ec',
      url: 'assets/img/administradores/LuisCastillo.png'
    },
    {
      name: 'Veronica Martinez',
      range: 'Docente de Apoyo',
      gmail: 'vimartinez1@espe.edu.ec',
      url: 'assets/img/administradores/VeronicaMartinez.png'
    },
    {
      name: 'Edwin Camino',
      range: 'Docente de Apoyo',
      gmail: 'eccamino@espe.edu.ec',
      url: 'assets/img/administradores/Edwin_Camino.jpg'
    }
  ];
}
