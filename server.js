var express = require("express"),
    app = express(),
    bodyParser = require('body-parser');
    Schema = mongoose.Schema;

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/test");



//app.us is where it takes the information and uses it in the middlewhere, the middlewhere is a piece of software that is in the middle of the front and back end that changes the info and then passes it onto the server
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());

var tasks = [
	{id: 1,
	title: "Gym",
	description: "Sweat it out!",
	},
	{id: 2,
	title: "Food",
	description: "Get your macros in!",
	},
	{id: 3,
	title: "Supps",
	description: "Did you take your vitamins?",
	},
];
app.get('/', function(req,res){
	res.send('Hello!');
});

// CRUD OPERATIONS W MONGOOSE!

// this is reading it
// for the res.json you  just have to call the variable bc it's all attatched to it
// GET ALL DOCUMENTS IN THE COLLECTION, YOU HAVE TO USE '.FIND()'
app.get("/api/tasks", function (req, res) {
    Task.find(function (err, phrase){
      res.json(tasks);
    });
});

 //now this will create it
// you can use the same '/users' bc they are different types of actions (get & post) so they won't happen at the same time
// you can only use the req.body since we have the var bodyParser at the top
// CREATE 'NEW' AND '.SAVE()' HERE WE'LL USE IT TO MAKE NEW 'TASKS' THEN WE CALL '.SAVE()' TO STORE THE NEW PHRASE IN OUR DATABASE.

// create new phrase
app.post("/api/tasks", function (req, res) {
	// var newTask = req.body; 
  var newTask = new Task({
    title: req.body.title,
    description: req.body.description
  });
	// users.push(newTask);
  newTask.save(function (err, savedTask) {
    res.json(savedTask);
  });
});

// GET ONE '.FINDONE()' WE CAN USE THIS TO RETURN THE FIRST DOCUMENT IN THE COLLECTION THAT MATCHES CERTAIN CRITERIA. 
// get one phrase
app.get('/api/tasks/:id', function (req, res) {
  // set the value of the id
  var targetId = req.params.id;

  // find phrase in db by id
  Task.findOne({_id: targetId}, function (err, foundPhrase) {
    res.json(foundTask);
  });
});

// UPDATE - USE '.FINDONE()' AND '.SAVE()' THIS WILL ACT JUST LIKE THE FUCNTION ABOUVE
// update phrase
app.put('/api/tasks/:id', function(req, res) {
  // console.log("req.body: ", req.body);
  // console.log("req.params: ", req.params);

  // set the value of the id
  var targetId = req.params.id;
  // find item in `phrases` array matching the id
  // var targetTasks = _.findWhere(tasks, {id:tasksId});
  // update the phrase's word
  // targetTasks.id = req.body.id;
  // targetTasks.title = req.body.title;
  // targetTasks.description = req.body.description;
  // send back edited object
  // console.log(targetTasks);

  // find the task in the database by the id
  Task.findOne({_id: targetId}, function (err, foundTask) {
    // now you have to update the task's info
    foundTask.title = req.body.title;
    foundTask.description = req.body.description;
    // now save the updated task into the database
    foundTask.save(function (err, savedTask) {
      res.json(savedTask);
    });
  });
});

// DELETE '.FINDONEANDREMOVE()' THIS TAKES CARE OF FINDING THAT ONE THING AND REMOVING IT FROM THE DATABASE
// delete post
app.delete('/api/tasks/:id', function(req, res) {
  // console.log("req.body: ", req.body);
  // console.log("req.params: ", req.params);

  // set the value of the id
  var targetId = req.params.id;
  // find item in `phrases` array matching the id
  // var targetTasks = _.findWhere(tasks, {id:tasksId});
 // get the index of the item
  // var index = tasks.indexOf(targetTasks);
  // remove the item at that index, only remove 1 item
  // tasks.splice(index, 1);
  // send back deleted object
  Task.findOneAndRemove({_id: targetId}, function (err, deletedTask) {
    res.json(deletedTask);
  });
});

app.listen(3000);
