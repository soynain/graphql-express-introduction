import { RowDataPacket } from 'mysql2';
import pool from '../repositories/MysqlRepository';
import Usuarios from '../../models/UsuariosModel';
const promiseThePool = pool.promise(); //for async and for multiple inserts also
let root = {
    /*A query root must be defined and inside that query root we must
    define the query body's and it's types. And those
    querys are represented here as methods to resolve
    with the repositories*/
    findUser:async({username}:{username:string}, context:any)=>{
        console.log(context.request.body)
        const [rows, fields] = await promiseThePool.query<RowDataPacket[]>('select * from usuario where username=?', [username]);
        //console.log(rows);
        const userFinded=new Usuarios(rows[0]);
        console.log(userFinded.fechaNac);
        return userFinded;
    },
    listAllUsers:async()=>{
        const [rows, fields] = await promiseThePool.query<RowDataPacket[][]>('select * from usuario');
        console.log(rows);
        return rows;
    }
};

export default root;