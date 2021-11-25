import {injectable, /* inject, */ BindingScope} from '@loopback/core';
const generator =require("password-generator");
const cryptoJS = require ("crypto");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */

  GenerarClave(){
    let clave= generador(8,false);
    return clave;
  }
  CifrarClave(clave:string){
    let clavecifrada =cryptoJS.MD5(clave).tostring();
    return clavecifrada;
  }


}
