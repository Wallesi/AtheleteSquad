import { Component, OnInit } from '@angular/core';
import { LeerJsonService } from 'src/app/servicios/leer-json.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  datosAbout:any;
  datosAboutUs:any;

  constructor(private leerDatos:LeerJsonService) { }

  ngOnInit(): void {

    this.leerDatos.obtenerDatos().subscribe(data=>{
      this.datosAbout=data.info;
    })

    this.leerDatos.obtenerDatos().subscribe(data=>{
      this.datosAboutUs=data.aboutME;
    })

  }

}
