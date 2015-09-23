var app = angular.module('bookFaceApp');

app.factory('postService', function(){
  var posts = [
    {
      image:"http://dc435.4shared.com/img/jMdBfbDe/s3/1334fc01420/cute-cat", 
      caption: "cute cat"},
    {
      image:"http://easthillsanimalclinic.com/wp-content/gallery/home-page-photos/happy-cat-01.jpg",
      caption:"cuter cat"
    },
    {
      image:"http://www.forumspile.com/Understand-Cat_(Melon).jpg", 
      caption:"cutest cat"
    }
  ];

  return {
    addPost: function(url, cap) {
    	posts.push({image: url, caption: cap});
    }
  };
});