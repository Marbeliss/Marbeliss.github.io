import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SeccionHeroeComponent } from './components/seccion-heroe/seccion-heroe.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SeccionHeroeComponent,
    SobreMiComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
