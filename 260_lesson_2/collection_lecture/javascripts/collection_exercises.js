var template = Handlebars.compile($("#users").html());

// User Model
var User = Backbone.Model.extend({
  url: "http://jsonplaceholder.typicode.com/users"
});

var Users = Backbone.Collection.extend({
  url: "http://jsonplaceholder.typicode.com/users",
  model: User,
  parse: function(response) {
    response.forEach(function(user) {
      user.company_name = user.company.name;
      user.catchPhrase = user.company.catchPhrase;
      user.company_bs = user.company.bs;
      delete user.company;
    });
    return response;
  },
  initialize: function() {
    this.on("sync sort", renderCollection);
  }
});

function renderCollection() {
  $("body").html(template({ users: blog_writers.toJSON() }));
}

var blog_writers = new Users();

blog_writers.fetch();
//blog_writers.comparator = "name";
//blog_writers.sort();

//console.log(blog_writers.pluck("email"));