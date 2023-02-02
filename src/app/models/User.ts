
export class User {
    //propiedadses
    //constructor
    //metodos

  #username!:   string;
  #password:     string;
  #role:         string;
  #email:        string;
  #status:       string;
  #gender:       string;
  #info:         string;
  #accepted!:    Boolean;

  constructor(username:string, password:string, role:string, email:string, status:string, gender:string, info:string, accepted:Boolean)
  {
   this.#username    = username;
   this.#password    = password;
   this.#role        = role;
   this.#email       = email;
   this.#status      = status;
   this.#gender      = gender;
   this.#info        = info;
   this.#accepted    = accepted;
  }

  // Getter
  get username () {
    return this.#username;
  }

  get password () {
    return this.#password;
  }
  
  get role () {
    return this.#role;
  }

  get email () {
    return this.#email;
  }

  get status () {
    return this.#status;
  }

  get gender () {
    return this.#gender;
  }

  get info () {
    return this.#info;
  }

  get accepted () {
    return this.#accepted;
  }

  // Setter
  set username(username) {
    this.#username = username;
  }

  set password (password) {
    this.#password = password;
  }

  set role (role) {
    this.#role = role;
  }

  set email (email) {
    this.#email = email;
  }

  set status (status) {
    this.#status = status;
  }

  set gender (gender) {
    this.#gender = gender;
  }

  set accepted (accepted) {
    this.#accepted = accepted;
  }
  
getObject(){
  return {
    username:this.#username,
    password: this.#password,
    role: this.#role,
    email: this.#email,
    status: this.#status,
    gender: this.#gender,
    accepted :this.#accepted
  }
}

}