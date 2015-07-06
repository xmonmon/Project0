$(function() {

  var $newFormPost = $("#newFormPost"); 
  

  var postTemplate = _.template($('#postTemplate').html());

  //element to hold list of todos
  var $listPosts = $("#listOfPosts");


   var tasks = [
   {title: "madrid, spain", description: "this restaurant was amazing! great vegetarian choices."},
   {title: "lisbon, portugal", description: "great meal to start off our foodventures! never knew what sweet potatoes could be!"},
   {title: "florence, italy", description: "lovedd risotto! can't find it anywhere but italy!"}
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
    // _.each(ToDo.all, function (task, index) {
      var $post = $(postTemplate(this));
    // $task.attr('data-index', index);
    $listPosts.append($post)
    console.log("render works")
    // });
}

    $newFormPost.on("submit", function(event) {
      event.preventDefault();

      console.log('post submitted!'); 
      console.log($('#postTitle').val() ); 
      console.log($('#postDesc').val() );
      // console.log($('#postImg').val() );
      

      var postTitle = $('#postTitle').val();
      var postDesc = $('#postDesc').val();

      
      //this is test data pre-loaded to the HTML
      var post1 = new blogPost(postTitle, postDesc);
      post1.save();
      post1.render();

      var $listItems = $("#listOfPosts .post"); 
      $listItems.click(function (event) {
        event.preventDefault();
      });

      
      blogPost.prototype.render = function() {
    // _.each(ToDo.all, function (task, index) {
      var $post = $(postTemplate(this));
    // $task.attr('data-index', index);
    $listPosts.append($post)
    console.log("render works")
    // });
}


    $newFormPost.on("submit", function(event) {
      event.preventDefault();

      console.log('post submitted!'); 
      console.log($('#postTitle').val() ); 
      console.log($('#postDesc').val() );
      // console.log($('#postImg').val() );
      
      // create new todo object from form data
      var postTitle = $('#postTitle').val();
      var postDesc = $('#postDesc').val();
      // var postImg = $('#postImg').val();
      // var toDoData = {title: toDoName, description: toDoDesc, date: toDoDate};
      
      var post1 = new blogPost(postTitle, postDesc);
      post1.save();
      post1.render();

      var $listItems = $("#listOfPosts .post"); 
      $listItems.click(function (event) {
        event.preventDefault();