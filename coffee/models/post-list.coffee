define [
    'models/base/collection'
    'models/post'
], (Collection, Post) ->

    class PostCollection extends Collection
        model: Post
        
        url: 
            "https://challenge-api-larce.herokuapp.com/posts/"
