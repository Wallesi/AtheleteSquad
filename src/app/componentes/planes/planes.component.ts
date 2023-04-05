import { Component, OnInit } from '@angular/core';
import { LeerJsonService } from 'src/app/servicios/leer-json.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  datosPlanes:any;
  constructor(private leerDatos:LeerJsonService) { }

  ngOnInit(): void {
    this.leerDatos.obtenerDatos().subscribe(data=>{
      this.datosPlanes = data.planes;
    })

  }

}
