import { Component, OnInit } from '@angular/core';
import { LeerJsonService } from 'src/app/servicios/leer-json.service';


@Component({
  selector: 'app-nav-portada',
  templateUrl: './nav-portada.component.html',
  styleUrls: ['./nav-portada.component.css']
})
export class NavPortadaComponent implements OnInit {
  datosNav:any;
  
  constructor(private leerDatos:LeerJsonService) { }

  ngOnInit(): void {
      
    this.leerDatos.obtenerDatos().subscribe(data=>{
      this.datosNav = data.portada;
    })

    const openButton = document.querySelector('.nav__menu') as HTMLElement;
    const menu = document.querySelector('.nav__link') as HTMLElement;
    const closeMenu = document.querySelector('.nav__close') as HTMLElement;

    openButton.addEventListener('click', () => {
      menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', () => {
      menu.classList.remove('nav__link--show');
    });


  }

}
