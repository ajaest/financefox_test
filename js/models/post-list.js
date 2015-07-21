window.define([
    'models/base/collection', 
    'models/post'
], function(
    Collection, 
    Post
) {
    function PostCollection() {
      return Collection.prototype.constructor.apply(this, arguments);
    }
    
    PostCollection.prototype = Object.create(Collection.prototype);
    PostCollection.prototype.constructor = PostCollection;
    
    PostCollection.prototype.model = Post;

    PostCollection.prototype.url = 
        "https://challenge-api-larce.herokuapp.com/posts/"
    ;

    return PostCollection;
});
