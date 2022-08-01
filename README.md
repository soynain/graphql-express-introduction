## My first steps into GraphQL

Welcome, in this repo I'll be practicing with graphql, I don't have any idea concrete
in my mind to put it to the test but I think I'll make a simple GraphQL 
query exercise, involving a simple mysql database.

I'm not developing an UI for this also, so It's just pure graphql practice

Maybe even after using mysql, I cant start using mongo db here

It's not a big database, is the following table

```
create database graphqlexpress;

create table usuario(
  idUsuario varchar(40) not null primary key,
  nombre varchar(45) not null,
  fechaNac date not null,
  username varchar(50) not null unique
);

```
