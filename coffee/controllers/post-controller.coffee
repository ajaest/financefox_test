define [
    'controllers/base/controller'
    'models/post'
    'models/post-list'
    'views/post'
    'views/post-list'
    'views/site-view'
    'views/post-edit'
    'views/post-create'
], (
    BaseController, 
    Post          , 
    PostList      , 
    PostView      , 
    PostListView  , 
    SiteView      ,
    PostEditView  ,
    PostCreateView
) -> 
    'use strict'
    
    class PostController extends BaseController
        
        redirect_home: () ->
            window.location = '#/'
        
        new: ->
            @collection = new PostList()
            @view       = new PostCreateView 
                collection: @collection, 
                region    : 'main'
                
            @view.render
             
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
            
        
            