window.define([
    'controllers/base/controller', 
    'models/post'                , 
    'models/post-list'           , 
    'views/post'                 ,
    'views/post-list'            ,
    'views/site-view'            , 
    'views/post-edit'            , 
    'views/post-create'
], function(
    BaseController, 
    Post          , 
    PostList      , 
    PostView      , 
    PostListView  , 
    SiteView      , 
    PostEditView  , 
    PostCreateView
) {
    'use strict';
    
    function PostController() {
        BaseController.prototype.constructor.apply(this, arguments);
    }
    
    PostController.prototype = Object.create(BaseController.prototype);
    PostController.prototype.constructor = PostController;
    
    PostController.prototype
    .redirect_home = function() {
        window.location = '#/';
    };

    PostController.prototype
    .new = function() {
        this.collection = new PostList();
        this.view = new PostCreateView({
          collection: this.collection,
          region    : 'main'
        });
        this.view.render();
    };

    PostController.prototype
    .edit = function(params) {
        this.model = new Post({
            id: params.id
        });
        this.view = new PostEditView({
            model : this.model,
            region: 'main'
        });
        this.model
            .fetch()
            .then(this.view.render)
        ;
    };

    PostController.prototype.detail = function(params) {
        this.model = new Post({
            id: params.id
        });
        this.view = new PostView({
            model: this.model,
            region: 'main'
        });
        this.model
            .fetch()
            .then(this.view.render)
        ;
    };

    PostController.prototype.list = function() {
        this.collection = new PostList();
        this.view = new PostListView({
            collection: this.collection,
            region: 'main'
        });
        this.collection
            .fetch()
            .then(this.view.render)
        ;
    };
    
    return PostController;
});
