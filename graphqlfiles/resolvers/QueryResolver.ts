import { RowDataPacket } from 'mysql2';
import pool from '../repositories/MysqlRepository';
import Usuarios from '../../models/UsuariosModel';
const promiseThePool = pool.promise();
var root = {
    findUser:async({username}:{username:string})=>{
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