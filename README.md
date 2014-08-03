angular-foundation-seed
============

This is seed repository for Angular & Foundation 5 apps.
The structure and much of the code comes from slush-angular.
This seed uses angular-ui-router instead of angular-route.

## About

Customize Foundation through sass.
Mostly, you'll set variables in the src/app/styles/foundation/_settings.scss file.
For global scss variables, put them in styles/_base.scss, and import that file into your template scss files.

Instead of using Foundation's javascript files, this seed relies on Angular Foundation from Mad Mimi.
For instructions on using Foundation components with Angular Foundation, please see:
https://madmimi.github.io/angular-foundation/


## Development

To start developing in the project run:

```bash
gulp serve
```

Then head to `http://localhost:3000` in your browser.

The `serve` tasks starts a static file server, which serves the AngularJS application, and a watch task which watches all files for changes and lints, builds and injects them into the index.html accordingly.

## Tests

To run tests run:

```bash
gulp test
```

**Or** first inject all test files into `karma.conf.js` with:

```bash
gulp karma-conf
```

Then you're able to run Karma directly. Example:

```bash
karma start --single-run
```

## Production ready build - a.k.a. dist

To make the app ready for deploy to production run:

```bash
gulp dist
```

Now there's a `./dist` folder with all scripts and stylesheets concatenated and minified, also third party libraries installed with bower will be concatenated and minified into `vendors.min.js` and `vendors.min.css` respectively.

To check your dist build, run:

```bash
gulp serve-dist
```
Then head to `http://localhost:3000` in your browser.

Angular and angular-ui-router are not included in the vendors.js file.  Instead, the dist task inserts links to the CDN files into index.html.
Assets are also not copied over to the dist folder, and should be uploaded separately to the production server.
