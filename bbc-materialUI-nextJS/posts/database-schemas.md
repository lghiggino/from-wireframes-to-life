---
title: 'Database Schemas - why do they exist and how to leverage them?'
date: '2021-08-02'
---

The reason why a database uses a Schema is simple: it should attempt to normalize the data that will be input into the DB. The Schema is the first building block of our full stack application. 

- Schemas allow many users to use one database without interfering with each other.
- They allow us to organize databse objects into logical groups to make them more manageble
- We can decouple third-party applications into separate schemas to they don't collide with the names of other objects.

Document databases like Mongo are schemaless, meaning that the database itself does not care about the structure of the data that is stored in the database. It is possible to store documents with completely different fields in the same collection.

On the other hand, SQL databases relly heavilly on schemas as a way to organize and decouple data.
