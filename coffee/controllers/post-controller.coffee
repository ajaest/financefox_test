define [
    'controllers/base/controller'
    'models/post'
    'models/post-list'
    'views/post'
    'views/post-list'
    'views/site-view'
    'views/post-edit'
], (
    BaseController, 
    Post          , 
    PostList      , 
    PostView      , 
    PostListView  , 
    SiteView      ,
    PostEditView
) -> 
    'use strict'
    
    class PostController extends BaseController
                
        edit: (params) ->
            @model = new Post(id: params.id)
            @view  = new PostEditView 
                model: @model
                region: 'main'
            @model.fetch().then @view.render
        
        detail: (params) ->
            @model = new Post(id: params.id)
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
            
        
            