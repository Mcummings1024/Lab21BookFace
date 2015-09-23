var app = angular.module('bookFaceApp');

app.factory('postService', function(){
  var posts = [
      {
        image:"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/10253863_10202361309474514_3177711296978397034_n.jpg?oh=a16a2aa2f320aee2827fdb1dda525a2c&oe=56AAECAA", 
        caption: "Matt playing some smooth jazz."
      },
      {
        image:"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xfp1/t31.0-8/10710403_10205466753655203_4204290926396100321_o.jpg",
        caption:"Matt looking weird as shit (with all due respect)"
      },
      {
        image:"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xpt1/t31.0-8/11856472_10207390168101884_3838019198745531757_o.jpg", 
        caption:"Troy's first 5 minutes in mama bears arms"
      },
      {
        image:"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/1476720_10201019322666503_288757992_n.jpg?oh=ad39206ca51653bfda6d2f24e264961a&oe=56A7B8F4",
        caption: "Charlie up in da club"
      },
      {
        image:"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/1549339_622394561130248_594127441_n.jpg?oh=522427a6b3ed478f3d18b41f7f6369f2&oe=56A76624",
        caption: "Ted and baby Ted"
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