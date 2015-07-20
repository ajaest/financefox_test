# Fox Finance test - a chaplin.js example

## Install

You have to have both npm and bower install. Then, just run `npm install` to install all dependencies.

To run the development server, just run `gulp`.

To deploy run `gulp compile-assets` to generate the necessary assets and serve the project folder `public` as the root http resource.

The project is only user-tested in google-chrome, but should work for other browsers.

## Actions taken in this project (chronologically)

- Initial commit in `master`.
- Create a branch to adapt [chaplin-boilerplate][https://github.com/chaplinjs/chaplin-boilerplate] `master` branch
  to our project properties. This branch is `chaplin-boilerplate`.
- Adapth _chaplin-boilerplate_ adding the following components:
	- Add a NPM configuration
	- Remove bower\_components dependencies from the repository and add bower\_components to `.gitignore` so that bowe dependencies are never uploaded to the repository again.
        - Remove compiled coffee javascript scripts from the js folder
	- Add node dependencies folder node\_modules to .gitignore so that node dependencies are not uploaded to the repository.
        - Remove MIT license (the project has no license)
        - Remove Makefile(we are using GULP for compilation)
        - Create empty files named `.iExistToMakeFolderAwareToRepository` in empty folders that must exist in the repository to force git to track them
	- Add and configure Gulp for development by:
		- Providing a default livereload dev server task (`webserver` task invoking `gulp-connect`).
		- Compile less and coffescript on demand for the dev server
                - Copy templates from the template folder to the public folder
                - Copy bower_components to the public folder
                - Task to clean assets

- Create the default route '/' to show the post list view using the controller entry point 'list'
- Create the detail/read route '/post/:id' to show more information about a post, using:
    - Google static maps API to pinpoint latitude/longitude in a map
    - moment.js to obtain human readable dates
- Added styles for all views through less


## Used articles and resources

- [Gulp - Getting started][http://code.tutsplus.com/tutorials/gulp-as-a-development-web-server--cms-20903]
- [Gulp - Gulp as a Development Web Server][http://code.tutsplus.com/tutorials/gulp-as-a-development-web-server--cms-20903]
- [Gulp - gulp-cofee][https://github.com/wearefractal/gulp-coffee]
- [Gulp - delete files and folder][https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md]
- [Gulp - gulp-copy][https://www.npmjs.com/package/gulp-copy]


