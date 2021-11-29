import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import {UsuarioRepository} from '../repositories';

const generator =require("password-generator");
const cryptoJS = require ("crypto-js");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(UsuarioRepository)
    public usuariorepository:UsuarioRepository
  ) {}

  /*
   * Add service methods here
   */

  GenerarClave(){
    let clave= generator(8,false);
    return clave;
  }
  CifrarClave(clave:string){
    let clavecifrada =cryptoJS.MD5(clave).toString();
    return clavecifrada;
  }
  IdentificarUsuario(usuario: string, clave:string ){
    try{
      let p= this.usuariorepository.findOne({where:{correo: usuario, clave:clave}}) //buscar y validar el usuario
      if(p){
        return p;
      }
      return false;
    }catch{
      return false;
    }

  }
  GenerarTokenJWT(){

  }

}
