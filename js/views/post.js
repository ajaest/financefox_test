window.define([
    'views/base/view'         , 
    'text!/templates/post.hbs'
], function(
    View    , 
    template
) {

    function PostDetailView() {
      View.prototype.constructor.apply(this, arguments);
    }
    
    PostDetailView.prototype = Object.create(View.prototype);
    PostDetailView.prototype.constructor = PostDetailView;

    PostDetailView.prototype
    .autoRender = true;

    PostDetailView.prototype
    .template = template;

    template = null;

    PostDetailView.prototype.events = {
        'click #remove-post': 'removePost'
    };

    PostDetailView.prototype
    .removePost = function() {
        var doRemove;
        doRemove = window.confirm(
            'If you click OK, you will remove this post.' + ' Are you sure?'
        );
        if (doRemove) {
            this.model.destroy({
                success: function() {
                    window.location = '#/';
                },
                error: function(err) {
                    window.alert(err);
                }
            });
        }
    };

    return PostDetailView;
});
