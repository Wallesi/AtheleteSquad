import { Component, OnInit } from '@angular/core';
import { LeerJsonService } from 'src/app/servicios/leer-json.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  datosTestimonials:any;
  constructor(private leerDatos:LeerJsonService) { }

  ngOnInit(): void {

      this.leerDatos.obtenerDatos().subscribe(data=>{
        this.datosTestimonials = data.testimonials;
      })

      const sliders: HTMLElement[] = Array.from(document.querySelectorAll('.testimony__body'));
      const buttonNext = document.querySelector('.testimony__arrow1') as HTMLElement;
      const buttonBefore = document.querySelector('.testimony__arrow') as HTMLElement;
      let value;
    
      buttonNext.addEventListener('click', () => {
        changePosition(1);
      });
    
      buttonBefore.addEventListener('click', () => {
        changePosition(-1);
      });
    
      const changePosition = (add: number) => {
        const currentTestimony = document.querySelector('.testimony__body--show')?.getAttribute('data-id');
        value = Number(currentTestimony);
        value += add;
    
        sliders[Number(currentTestimony) - 1].classList.remove('testimony__body--show');
        if (value === sliders.length + 1 || value === 0) {
          value = value === 0 ? sliders.length : 1;
        }
    
        sliders[value - 1].classList.add('testimony__body--show');
      };

  }

}
