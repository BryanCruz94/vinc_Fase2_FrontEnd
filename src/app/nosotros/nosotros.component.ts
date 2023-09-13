import { Component } from '@angular/core';
import { datosMovil, datosMovilF2, datosWeb, datosWebF2} from './datos';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
})
export class NosotrosComponent {

  datosWeb: datosWeb[] = [
    {name: 'Josue Velasquez', range: 'Estudiante', gmail: 'ajvelasquez4@espe.edu.ec', url:'../../assets/img/administradores/JosueVelasquez.png'},
    {name: 'Mónica Jara', range: 'Estudiante', gmail: 'mejara1@espe.edu.ec', url:'../../assets/img/administradores/MonicaJara.jpg'},
    {name: 'Brandon Bermello', range: 'Estudiante', gmail: 'bjbermello@espe.edu.ec', url:'../../assets/img/administradores/BrandonBermello.jpg'}
  ];

  datosMovil: datosMovil[] = [
    {name: 'Lesly Gaibor', range: 'Estudiante', gmail: 'lcgaibor@espe.edu.ec', url:'../../assets/img/administradores/LeslyGaibor.jpg'},
    {name: 'Melany Caicedo', range: 'Estudiante', gmail: 'mkcaicedo@espe.edu.ec', url:'../../assets/img/administradores/MelanyCaicedo.jpg'},
    {name: 'Bryan Ponce', range: 'Estudiante', gmail: 'bsponce1@espe.edu.ec', url:'../../assets/img/administradores/BrayanPonce.jpg'},
    {name: 'Miguel Ajila', range: 'Estudiante', gmail: 'maajila1@espe.edu.ec', url:'../../assets/img/administradores/MiguelAjila.jpg'},
  ];

  datosWebF2: datosWebF2[] = [
    {name: 'Bryan Cruz', range: 'Estudiante Pro', gmail: 'bscruz@espe.edu.ec', url:'../../assets/img/administradores/Bryan_Cruz.jpg'},
    {name: 'Dayana Vergara', range: 'Estudiante', gmail: 'dmvergara1@espe.edu.ec', url:'../../assets/img/administradores/Dayana_Vergara.jpg'},
    {name: 'Kevin Azua', range: 'Estudiante', gmail: 'ksazua@espe.edu.ec', url:'../../assets/img/administradores/Kevin_Azua.jpg'},
    {name: 'Stefany Erazo', range: 'Estudiante', gmail: 'scerazo1@espe.edu.ec', url:'../../assets/img/administradores/Stefy_Erazo.jpg'},
    {name: 'Stefanny Hernandez', range: 'Estudiante', gmail: 'smhernandez2@espe.edu.ec', url:'../../assets/img/administradores/Stefy Hernandez.jpeg'},
  ];

  datosMovilF2: datosMovilF2[] = [
    {name: 'Lina Bohorquez', range: 'Estudiante', gmail: 'lnbohorquez@espe.edu.ec', url:'../../assets/img/administradores/LeslyGaibor.jpg'},
    {name: 'Steeven Riofrío', range: 'Estudiante', gmail: 'sjriofrio@espe.edu.ec', url:'../../assets/img/administradores/MelanyCaicedo.jpg'},
    {name: 'Sánchez Jair', range: 'Estudiante', gmail: 'jssanchez9@espe.edu.ec', url:'../../assets/img/administradores/BrayanPonce.jpg'},
    {name: 'Mateo Beltrán', range: 'Estudiante', gmail: 'msbeltran@espe.edu.ec', url:'../../assets/img/administradores/MiguelAjila.jpg'},
    {name: 'Jhosue Chica', range: 'Estudiante', gmail: 'jichica@espe.edu.ec', url:'../../assets/img/administradores/MiguelAjila.jpg'},
  ];


}
