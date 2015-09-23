var app = angular.module('bookFaceApp');

app.factory('postService', function(){
  var posts = [
      {
        image:"http://dc435.4shared.com/img/jMdBfbDe/s3/1334fc01420/cute-cat", 
        caption: "cute cat"
      },
      {
        image:"http://easthillsanimalclinic.com/wp-content/gallery/home-page-photos/happy-cat-01.jpg",
        caption:"cuter cat"
      },
      {
        image:"http://www.forumspile.com/Understand-Cat_(Melon).jpg", 
        caption:"cutest cat"
      }
  ];

  var users = ['Ted', 'Troy', 'Charlie', 'Matt'];

  var msgs = ['Hi', 'What is up', 'Not much'];

  return {
    getPosts: function() {
      return posts;
    },
    addPost: function(post) {
      return posts.push(post);
    },
    getUsers: function() {
      return users;
    },
    getMsgs: function() {
      return msgs;
    },
    addMsg: function(msg) {
      return msgs.push(msg);
    }
  };
});