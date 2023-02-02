import { Injectable } from '@angular/core';
import { Events } from '../models/Events';


@Injectable({
  providedIn: 'root'
})
export class ServiceEventService {

  constructor() { }

  createEvents():Events[] {
    let listEvents: Events[]=[];

    let names: string[]=["Event one", "Event two", "Event three", "Event four"];
    let types: string[]=["CONCERT", "CINEMA", "MUSEUM", "FAIR", "CONGRESS", "EXHIBITS", "SOCIAL","SPORTS"];
    let dates: Date[]=[new Date("2023-02-05"),new Date("2023-02-15"),new Date("2023-03-18"), new Date("2023-02-25")];
    let places: string[]=["Fira Montjuic","Palao Sant Jordi","La Farga","Lílla","Arenas de Barcelona","Gran via 2"];
    let prices: number[]=[50,30,44,26,15,75,80,45,39,32];

    for(let i = 0; i < 100; i++) {
      let name: string = names[Math.floor(Math.random()*names.length)];
      let type: string = types[Math.floor(Math.random()*types.length)];
      let date: Date = dates[Math.floor(Math.random()*dates.length)];
      let place: string = places[Math.floor(Math.random()*places.length)];
      let price: number = prices[Math.floor(Math.random()*prices.length)];

      listEvents.push(new Events(name,type,date,place,price))
    }
    return listEvents;
  }
}
