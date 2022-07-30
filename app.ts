import express from 'express';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import exampleSchema from './graphqlfiles/schemas/ExampleSchema';
import root from './graphqlfiles/resolvers/QueryResolver';

const app = express();
const portDefault=3000 || process.env.PORT;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res)=>{
    return res.json({
        'dsada':'das'
    });
});

app.use('/graphql',graphqlHTTP({
    schema:exampleSchema,
    rootValue:root,
    graphiql:true
}));

app.listen(portDefault, ()=>{
  console.log('Escuchando en el puerto: ',portDefault);
});
