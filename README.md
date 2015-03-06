# UW Student Web Service NodeJS
This is under active development.  The goal is a fully functional equalavant of our [current Ruby Gem](https://github.com/UWFosterIT/uwsws) but for NodeJS.

### Development
There are a few important gulp tasks that make it possible to cache http responses from the Student Web Service.  Also, there are tasks to clean that cache and prep it for running in a continuous integration environment.

    gulp

This default task will use a cache if it exists and create one when it doesn't exist.  If it detects running in a continous integration ``process.env.CI`` then it will run forcing ``sepia`` to ``playback`` cached http responses and automaticaly fail the test when those responses don't exit.

    gulp clean

This allows the developer to clear the existing cache so that subsequent ``gulp`` will use freshly cached files.  This is good to do when UW Student Web Services does an update to their servers/codebase to test them for errors and also of course during development as needed.

    gulp ci

This allows the developer to force the use of the scrubbed cache.  If this fails then it will also fail in your CI environment.

    gulp build

And finally, the build will make this es6 module es5 friendly with source maps.  It will also generate scrubbed files from the most recent cache.
