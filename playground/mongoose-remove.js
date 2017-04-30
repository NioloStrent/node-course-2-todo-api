const {ObjectID} = require('mongodb');

const {mongoose} = require ('././../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '59024aa0a6d4d66fd39fdaab'}).then((todo) => {
  
});

Todo.findByIdAndRemove('59024aa0a6d4d66fd39fdaab').then((todo) => {
  console.log(todo);
});
