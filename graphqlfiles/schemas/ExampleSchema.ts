import {buildSchema} from 'graphql';
let exampleSchema=buildSchema(`
type Query {
    hello: String
    edad: Int
  }
`);
export default exampleSchema;
