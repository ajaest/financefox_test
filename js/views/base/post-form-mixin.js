window.define([
    'lib/utils'
], function(
    utils
) {
    
    function PostFormMixin() {}

    PostFormMixin.prototype
    .getModel = function() {
        if (this.model) {
            return this.model;
        } else {
            return this.collection.model;
        }
    };

    PostFormMixin.prototype
    .render = function() {
        this.constructor.__super__.prototype.render.call(this);
        
        this.title          = this.$('#title'         );
        this.content        = this.$('#content'       );
        this.image_url      = this.$('#image_url'     );
        this.lat            = this.$('#lat'           );
        this.long           = this.$('#long'          );
        this.image_snapshot = this.$('#image_snapshot');
        this.map_snapshot   = this.$('#map_snapshot'  );
        this.success_msg    = this.$('#success'       );
        this.error_msg      = this.$('#error'         );
        this.errors         = this.$('#errors'        );
        this.save_button    = this.$('#save_button'   );
        this.go_back_anchor = this.$('#go-back-anchor');
        
        this.go_back_anchor.text(this.go_back_anchor_text);
    };

    PostFormMixin.prototype
    .events = {
      'keypress #image_url': 'updateImageSnapshot',
      'change   #image_url': 'updateImageSnapshot',
      'paste    #image_url': 'updateImageSnapshot',
      
      'keypress #lat'      : 'updateMapSnapshot'  ,
      'change   #lat'      : 'updateMapSnapshot'  ,
      'paste    #lat'      : 'updateMapSnapshot'  ,
      'keypress #long'     : 'updateMapSnapshot'  ,
      'change   #long'     : 'updateMapSnapshot'  ,
      'paste    #long'     : 'updateMapSnapshot'  ,
      
      'click #save_button': 'save'
    };

    PostFormMixin.prototype
    .onSaveSuccess = function(obj) {
        var after_show_message;
        
        // Clear error message and show success message
        this.error_msg  .css('display', 'none'  );
        this.success_msg.css('display', 'inline');
        this.success_msg.focus();
        
        after_show_message = function() {
            return window.location = 
                '#/posts/' + ((obj && obj.attributes.id) || this.model.id)
            ;
        };
        
        setTimeout(after_show_message.bind(this), 1000);
    };

    PostFormMixin.prototype
    .onSaveError = function(error) {
          
          this.error_msg.html(error);
          // Hide success message and show error message
          this.error_msg  .css('display', 'inline');
          this.success_msg.css('display', ''      );
    };

    PostFormMixin.prototype
    .extractModelFieldsFromDOM = function() {
        return {
            title    : this.title    .val(),
            content  : this.content  .val(),
            image_url: this.image_url.val(),
            lat      : this.lat      .val(),
            long     : this.long     .val()
        };
    };

    PostFormMixin.prototype
    .alterImageSnapshotSrc = function() {
        var new_image_url;
        
        new_image_url = this.image_url.val();
        this.image_snapshot.attr('src', new_image_url);
        
        this.timeoutUpdateImageWait = false;
    };

    PostFormMixin.prototype
    .timeoutUpdateImageWait = false;

    PostFormMixin.prototype
    .updateImageSnapshot = function() {
        // Wait one second before changing the image
        if (!this.timeoutUpdateImageWait) {
            this.timeoutUpdateImageWait = true;
            setTimeout(this.alterImageSnapshotSrc.bind(this), 1000);
        }
    };
    
    PostFormMixin.prototype
    .timeoutUpdateMapWait = false;
    
    PostFormMixin.prototype
    .alterMapSnapshotSrc = function() {
        // If lat and lon are filled, generate the map image
        
        var lat        , 
            long       , 
            new_map_url
        ;
        
        lat  = this.lat .val();
        long = this.long.val();
        
        if (lat && long) {
          new_map_url = utils.consctruct_gmap_url(lat, long);
          this.map_snapshot.attr('src', new_map_url);
        }
        
        this.timeoutUpdateMapWait = false;
    };

    

    PostFormMixin.prototype.updateMapSnapshot = function() {
        if (!this.timeoutUpdateMapWait) {
            this.timeoutUpdateMapWait = true;
            setTimeout(this.alterMapSnapshotSrc.bind(this), 1000);
        }
    };

    return PostFormMixin;
});
