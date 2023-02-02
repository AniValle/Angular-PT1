
export class Events {

  #name:    string;
  #type:    string;
  #date:    Date;
  #place:   string;
  #price:   number;

  constructor(name:string, type:string, date:Date, place: string, price: number)
  {
   this.#name   = name;
   this.#type   = type;
   this.#date   = date;
   this.#place  = place;
   this.#price  = price;
  }

  // Getter
  get name () {
    return this.#name;
  }
  get type () {
    return this.#type;
  }
  get date () {
    return this.#date;
  }
  get place () {
    return this.#place;
  }
  get price () {
    return this.#price;
  }

  // Setter
  set name(name) {
    this.#name = name;
  }
  set type(type) {
    this.#type = type;
  }
  set date(date) {
    this.#date = date;
  }
  set place(place) {
    this.#place = place;
  }
  set price(price) {
    this.#price = price;
  }  

}