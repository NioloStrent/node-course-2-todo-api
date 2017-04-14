// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server')

  // deleteMany
  db.collection('users').deleteMany({name: 'Finster'}).then((result) => {
      console.log(result);
  });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  db.collection('users').findOneAndDelete({
    _id: new ObjectID("58efbe6591e98c1f344e047c")}).then((result) => {
    console.log(result);
  });

  // db.close();
});
