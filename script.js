$(function() {

  var $newFormPost = $("#newFormPost"); 
  

  var postTemplate = _.template($('#postTemplate').html());

  var $listPosts = $("#listOfPosts");


  var tasks = [
  {title: "Gym", description: "Sweat it out!"},
  {title: "Food", description: "Get you Macros in!"},
  {title: "Supps", description: "Did you take your vitamins?"}
  ];

  // this is what will will make it flow through - 'append'
  _.each(tasks, function (task, index) {
    var $task = $(postTemplate(task));
    $task.attr('data-index', index);
    $listPosts.append($task)
  });
 
  function blogPost (title, description, image) {
    this.title = title;
    this.description = description;
  };

  blogPost.all = [];

  blogPost.prototype.save = function(){
    blogPost.all.push(this);
    console.log(this);
  };

  
  blogPost.prototype.render = function() {
  var $post = $(postTemplate(this));
  $listPosts.append($post)
  console.log("works")
  }

  $newFormPost.on("submit", function(event) {
  event.preventDefault();

  console.log('post submitted!'); 
  console.log($('#postTitle').val() ); 
  console.log($('#postDesc').val() );
      

  var postTitle = $('#postTitle').val();
  var postDesc = $('#postDesc').val();

  
  var post1 = new blogPost(postTitle, postDesc);
  post1.save();
  post1.render();

  var $listItems = $("#listOfPosts .post"); 
  $listItems.click(function (event) {
    event.preventDefault();
  });

      
  blogPost.prototype.render = function() {
  var $post = $(postTemplate(this));
  $listPosts.append($post)
  console.log("works")
  }
  $newFormPost.on("submit", function(event) {
  event.preventDefault();

  console.log('submitted!'); 
  console.log($('#postTitle').val() ); 
  console.log($('#postDesc').val() );
  
  // create new todo object from form data
  var postTitle = $('#postTitle').val();
  var postDesc = $('#postDesc').val();
  
  var post1 = new blogPost(postTitle, postDesc);
  post1.save();
  post1.render();

  var $listItems = $("#listOfPosts .post"); 
  $listItems.click(function (event) {
    event.preventDefault();