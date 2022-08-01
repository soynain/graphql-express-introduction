import { RowDataPacket } from "mysql2";
/*Models are important here so we can send the * querys
in form of a object to the front or the grapqli*/
let Usuarios=class{
    username:String;
    idUsuario:String;
    fechaNac:Date;
    nombre:String;
    /*A query ELEMENT in mysql is of type RowDataPacket, a row is []*/
    constructor({idUsuario,nombre,fechaNac,username}:RowDataPacket){
        this.username=username;
        this.idUsuario=idUsuario;
        this.fechaNac=new Date(fechaNac);
        this.nombre=nombre;
    }
}

export default Usuarios;