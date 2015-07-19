define [
    'controllers/base/controller'
    'models/post'
    'models/post-list'
    'views/post'
    'views/post-list'
    'views/site-view'
], (BaseController, Post, PostList, PostView, PostListView, SiteView) -> 
    'use strict'
    
    class PostController extends BaseController
                
        detail: ->
            @model = new Post()
            @view  = new PostView 
                model: @model
                region: 'main'
            @model.fetch().then @view.render 
            
        list: ->
            @collection = new PostList()
            @view       = new PostListView 
                collection: @collection, 
                region: 'main'
            @collection.fetch().then @view.render
            