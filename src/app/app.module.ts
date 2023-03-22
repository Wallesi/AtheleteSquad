import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavPortadaComponent } from './componentes/nav-portada/nav-portada.component';
import { AboutusComponent } from './componentes/aboutus/aboutus.component';
import { PlanesComponent } from './componentes/planes/planes.component';
import { QuestionsComponent } from './componentes/questions/questions.component';
import { TestimonialsComponent } from './componentes/testimonials/testimonials.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { EntrenarComponent } from './componentes/entrenar/entrenar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavPortadaComponent,
    AboutusComponent,
    PlanesComponent,
    QuestionsComponent,
    TestimonialsComponent,
    FooterComponent,
    EntrenarComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
