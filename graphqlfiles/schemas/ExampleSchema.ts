import { buildSchema } from 'graphql';
let exampleSchema = buildSchema(`
type Usuario{
  idUsuario:String
  nombre:String
  fechaNac:String
  username:String
}

type Query {
  findUser(username:String):Usuario
  listAllUsers:[Usuario!]!
}
`);
export default exampleSchema;
