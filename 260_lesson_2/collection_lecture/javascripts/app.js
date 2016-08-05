var PostModel = Backbone.Model.extend({
  initialize: function() {
    if(!this.get("id")) {
      this.set("id", this.collection.nextID());
    }
  }
});

var Posts = Backbone.Collection.extend({
  model: PostModel,
  url: "http://jsonplaceholder.typicode.com/posts",
  last_id: 0,
  setLastID: function() {
    if (this.isEmpty()) { return; }

    this.last_id = this.last().get("id");
  },
  nextID: function() {
    return ++this.last_id;
  },
  initialize: function() {
    this.on("sync", this.setLastID);
  }
});

var blog_roll = new Posts();
var first_post;

blog_roll.fetch({
  success: function(collection) {
    first_post = blog_roll.get(1);
    blog_roll.set({
      id: 1,
      userId: 1,
      title: "My First Post",
      body: "This is my first blog post! Yay!"
    });
    console.log(first_post.toJSON());
  }
});

var new_post = blog_roll.create({
  title: "My New Blog Post",
  body: "This is my lastest blog",
  userID: 1
});

console.log(new_post.get("id"));


/*
var users_data = [{
  id: 1,
  name: "Leanne Graham"
}, {
  id: 2,
  name: "Ervin Howell"
}, {
  id: 3,
  name: "Clementine Bauch"
}];

var User = Backbone.Model.extend({}),
    Users = Backbone.Collection.extend({
      model: User
    }),
    blog_authors;

blog_authors = new Users();
blog_authors.reset(users_data);

console.log(blog_authors.toJSON());
*/