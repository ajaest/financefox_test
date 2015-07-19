var gulp    = require('gulp'        ),
    connect = require('gulp-connect'),
    coffee  = require('gulp-coffee' ),
    less    = require('gulp-less'   ),
    path    = require('path'        ),
    del     = require('del'         )
;

// Auxiliary function to get a full qualified
// path from a path relative to this file
function gulpath(relpath){
    return path.join(__dirname, relpath);
}

// DRY definition of all the assets that the app
// requires (and thus GLUP should process)
var assets = {
    
    'index' : {
        src: gulpath('public/index.html'),
    },

    'less': {
        src         :  gulpath('styles/**/*.less') ,
        dst         :  gulpath('public/styles/'  ) , 
        src_includes: [gulpath('styles/includes/')]
    },

    'coffee' : {
        src : gulpath('coffee/**/*.coffee'),
        dst : gulpath('public/js/'        )
    },

    'handlebars': {
        src: gulpath('templates/**/*.hbs'),
        dst: gulpath('public/templates/' )
    },
    // for the sake of simplicity, we copy 
    // everything even when it is clear that we
    // do not need all components under 
    // bower_components
    'bower_components': {
        src: gulpath('bower_components/**/*'   ),
        dst: gulpath('public/bower_components/')
    }

};

// Task to start a basic reloadable server
gulp.task('webserver', function() {
    // Subtask webserver starts a simple HTTP 
    // file server
    connect.server({
        // Configures the server so that any 
        // change to any file in the scope
        // causes the server to reload
        livereload: true              ,
        root      : gulpath('public/')
    });
});


// Task to clean the assets previously 
// compiled/moved
gulp.task('clean-assets', function (cb) {
    
    del([
        assets.less            .dst,
        assets.coffee          .dst,
        assets.handlebars      .dst,
        assets.bower_components.dst,
    ], cb);

});

// Task to compile assets
gulp.task('compile-assets', ['clean-assets'], function() {

    gulp
    // LESS compilation
        // Make a glob search of all less files 
        // and pipe them to the less compiler 
        .src(assets.less.src)
        // Set the less compiler as the pipe 
        // receiver configuring the folder where
        // includes must be search
        .pipe(less({
            'paths': assets.less.src_includes
        }))
        // The results piped from the less 
        // compiler are passed to the gulp file
        // writter in the public folder
        .pipe(gulp.dest(assets.less.dst))
        // Reload if a file changes
        .pipe(connect.reload())
    ;

    gulp
    // COFFEE compilation
        // Make a glob search of all coffee files 
        // and pipe them to the coffee compiler 
        .src(assets.coffee.src)
        // Set the coffee compiler as the pipe 
        // receiver and configure error output
        .pipe(
            coffee({bare: true})
            .on('error', function (err){
                console.error(err.stack);
            })
        )
        // The results piped from the coffee
        // compiler are passed to the gulp file
        // writter in the public folder
        .pipe(gulp.dest(assets.coffee.dst))        
        // Reload if a file changes
        .pipe(connect.reload())
    ;

    gulp
    // HANDLEBARS templates to the public folder
        .src(assets.handlebars.src)
        .pipe(gulp.dest(assets.handlebars.dst))
    ;
    
    gulp
    // bower_components
        .src(assets.bower_components.src)
        .pipe(gulp.dest(assets.bower_components.dst))
    ;
});

gulp.task('watch-changes', function (){
   
    var todo = [
        'clean-assets'  ,
        'compile-assets'
    ];

    gulp.watch(assets.less      .src, todo);
    gulp.watch(assets.coffee    .src, todo);
    gulp.watch(assets.handlebars.src, todo);
    gulp.watch(assets.index     .src, todo);
    
});

// Set the default task as a combination of three
// tasks. First, clean old assets, then compile 
// the new ones, continie initializing the 
// webserver and. finally, activate the watchers.
gulp.task('default', [
        'clean-assets'  ,
        'compile-assets',
        'webserver'     ,
        'watch-changes'
]);
