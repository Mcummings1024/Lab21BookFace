var app = angular.module('bookFaceApp');

app.factory('postService', function(){
  var posts = [
      {
        image:"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/10253863_10202361309474514_3177711296978397034_n.jpg?oh=a16a2aa2f320aee2827fdb1dda525a2c&oe=56AAECAA", 
        caption: "Matt playing some smooth jazz."
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