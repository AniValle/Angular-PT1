import { Injectable} from '@angular/core';
import { User } from '../models/User';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidaCredencialsService {

  constructor(private cookies:CookieService ) { }

  roles:  string[] = ['buyer', 'administrator'];
  statuses: string[] = ["Married","Single","Divorced"]; 
  genders: string[] = ["Female", "Male", "Others"];
  informacions: string[] = ["Video games", "Accessories", "Market news"];

  /**
   * 
   * @param userNum number of users to create
   * @returns an array with the 50 users
   */
  generateUsers(userNum: number): Array<User> {
    let arrayUser: Array<User> = [];

    for(let i = 0; i <= userNum; i++) {
    let username:      string = `username${i}`;
    let password:      string = `pAssword${i}`;
    let role:          string = this.roles[Math.floor(Math.random()*this.roles.length)];
    let email:         string = `user${i}@gmail.com`;
    let status:        string = this.statuses[Math.floor(Math.random()*this.statuses.length)];
    let gender:        string = this.genders[Math.floor(Math.random()*this.genders.length)];
    let info:          string = this.informacions[Math.floor(Math.random()*this.informacions.length)];
    let accepted:      Boolean = Math.random() < 0.5;

    arrayUser.push( new User(
                username,
                password,
                role,
                email,
                status,
                gender,
                info,
                accepted
      ));
    }

    return arrayUser;
  }

  /**
   * Users generated automatically
   */
  arrayUser = new BehaviorSubject( this.generateUsers(50) );
  /**
   * Communicate the value of this property
   */
  public currentUsers=this.arrayUser.asObservable();

  /**
   * Method. Pick up any changes and pass them to the components
   */
  changeArrayUser(newUser:User[]){
    this.arrayUser.next(newUser);
  }

  /**
   * validate if the credentials entered exist in the Users "database"
   * @param arrayUser
   * @return object<User with all his data
   */
  validCredentials(arrayUser: Array<User>, username: string, password: string): User {
    
    let usernameValid!: User;
    for (let u = 0; u< arrayUser.length; u++) {
      if (arrayUser[u].username == username && arrayUser[u].password == password){
        usernameValid = arrayUser[u]
      }
    }
    return usernameValid;
  }

  /**
   * Create cookie with role and username
   */
  setCookie(cookieName:string, value:string) {
    this.cookies.set(cookieName, value);
  }
  /**
   * get cookie data
   */
  getCookie(cookieName:string) {
    return this.cookies.get(cookieName);
  }
  /**
   * delete cookie
   */
  deleteCookie(cookieName:string){
    this.cookies.delete(cookieName);
  }

  /**
   * Create locat storage
   */

  setLocalstorage(value: User){
    localStorage.setItem('usuario', JSON.stringify(value.getObject()));
  }

  getLocalstorage(key:string): User{
    return JSON.parse(localStorage.getItem(key) || '{}')
  }

  removeLocalStorage(key:string){
    return localStorage.removeItem(key)
  }

}
