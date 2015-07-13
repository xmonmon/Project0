var express = require("express");
var app = express();

var bodyParser = require('body-parser')



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
})
// this is Reading it
// for the res.json you  just have to call the variable bc it's all attatched to it
app.get("/tasks", function (req, res) {
    res.json(tasks);
});

// now this will creat it
// you can use the same '/users' bc they are different types of actions (get & post) so they won't happen at the same time
// you can only use the req.body since we have the var bodyParser at the top
app.post("/tasks", function(req, res) {
	var newTask = req.body; 
	users.push(newTask);
	res.json(newTask);
});

// update phrase
app.put('/tasks/:id', function(req, res) {
  console.log("req.body: ", req.body);
  console.log("req.params: ", req.params);
  // set the value of the id
  var tasksId = parseInt(req.params.id);
  // find item in `phrases` array matching the id
  var targetTasks = _.findWhere(tasks, {id:tasksId});
  // update the phrase's word
  targetTasks.id = req.body.id;
  targetTasks.title = req.body.title;
  targetTasks.description = req.body.description;
  // send back edited object
  console.log(targetTasks);
  res.json(targetTasks);
});

// delete post
app.delete('/tasks/:id', function(req, res) {
  console.log("req.body: ", req.body);
  console.log("req.params: ", req.params);
  // set the value of the id
  var tasksId = parseInt(req.params.id);
  // find item in `phrases` array matching the id
  var targetTasks = _.findWhere(tasks, {id:tasksId});
  // get the index of the item
  var index = tasks.indexOf(targetTasks);
  // remove the item at that index, only remove 1 item
  tasks.splice(index, 1);
  // send back deleted object
  res.json(targetTasks);
});

app.listen(3000);
