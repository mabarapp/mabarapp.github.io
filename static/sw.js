'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["/","static/stylesheets/application.css", "templates/*.html", "fonts/*"]);

toolbox.router.get('static/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
