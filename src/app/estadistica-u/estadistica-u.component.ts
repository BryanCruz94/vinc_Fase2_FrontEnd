import { Component,OnInit } from '@angular/core';
import {ConnectService } from '../service/connect.service';


@Component({
  selector: 'app-estadistica-u',
  templateUrl: './estadistica-u.component.html',
  styleUrls: ['./estadistica-u.component.css']
})
export class EstadisticaUComponent implements OnInit{
  public data: any= null;

  constructor (private service: ConnectService){}
  ngOnInit(): void {
    this.service.getIncidentes().subscribe(success=>
      {
        this.data = success;
        
      },
      error=>{
        console.log(error);
        
      }
      );
  }


  
  
}
