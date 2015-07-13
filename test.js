var request = require('request')

var posts = require("../server.js")  
//linking the pages together



// STARTING THE LOCALHOST
describe('localhost API TESTING', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request('http://localhost:3000/users', function(err, res, body) {
      done();
    });
  });
});

// POSTING THE USER
var task = {}
describe('localhost API TESTING', function() {
  it('should have a HTTP of 200 - success', function(done) {form:{
    task = {id: '7',
    title: "vet",
    description: "doggy needs a bath",
  }};
  // you have to use this bc it's a diff kind of post
    request.post('http://localhost:3000/tasks/', {form: task}, function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      // expect(res.statusCode).to.equal(300)
      console.log("NEW TASK" + task);
      done();
    });
  });
});

// PUT THE USER 
describe('Putting the user', function() {
  it('should have a HTTP of 200 - success', function(done) {

  request.put('http://localhost:3000/tasks/7', {form: user}, function(err, res, body) {
    expect(res.statusCode).to.equal(200);
    console.log("PUT THE TASK", task);
    done();
    });
  });
});


// DELETING THE USER
describe('Deleting the user', function() {
  it('should have a HTTP of 200 - success', function(done) {
    // var deleted;
  request.del('http://localhost:3000/tasks/1', {form: {id: 1}}, function(err, res, body) {
      deleted = body;
    expect(res.statusCode).to.equal(200);
    console.log("TASK DELETED", task)
    done();
    });
  });
});
























