import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/models/Events';
import { ServiceEventService } from 'src/app/services/service-event.service';
import { ValidaCredencialsService } from 'src/app/services/valida-credencials.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

// Global variables
myEvents!:Events[];
total!:number; // numero de ventos que quiere ver
p!:number; //pagina que se mostrara primero
numEvents!:number; //para mostrar el numero de ventos.

//filtrar
eventsFiltrado!: Events[];
typeFilter!:string; //valor por el que se filtrara
pricefilter!:number;
//total pages to display
pageTotal!:number;


//constructor --> Injectar "cosas"
constructor(private serviceEvents: ServiceEventService, private servicioUsers: ValidaCredencialsService){
}

// Get user role
localUser = this.servicioUsers.getLocalstorage("usuario")
role = this.localUser.role;


ngOnInit(){
  //carga de datos del servicio
  this.myEvents=this.serviceEvents.createEvents();
  //console.log(this.myEvents);
  this.p = 1;       //pagina de inicio
  this.total = 10; //items per page

  this.eventsFiltrado = this.myEvents;
  this.typeFilter="";
  this.pricefilter= 50;

}

/**
 * Filter the pages to display
 */
pageFilter(){
  console.log(this.pageTotal);
  this.total = this.pageTotal
}

/**
 * Remove the event from the events array.
 * @param event The event to delete
 */
eventDelete(event:Events){
  let indexEvent = this.eventsFiltrado.indexOf(event);
  this.eventsFiltrado.splice(indexEvent, 1);
}

/**
 * Filter events by event type and/or by price
 */
filterInput(){
  this.eventsFiltrado = this.myEvents.filter(value => {
    if(value.type.indexOf(this.typeFilter.toUpperCase()) != -1){
      if(value.price <= this.pricefilter)
        return true;
    }
    return false;
  })
}

}
