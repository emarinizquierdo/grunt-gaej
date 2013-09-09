# grunt-gaej

> Google App Engine Java Server launcher for Grunt.

## About
Módulo Grunt para lanzar GAE Servers

## Getting Started
Este plugin requiere Grunt `~0.4.1` y `Google App Engine SDK`.

```js
grunt.loadNpmTasks('grunt-gae');
```

Google App Engine SDK puede ser descargado de [Google App Engine Downloads](https://developers.google.com/appengine/downloads) page.

## The "gae" task

### Overview
En tu archivo Gruntfile de tu proyecto, añade una sección nombrada `gaej` a la sección de configuración `grunt.initConfig()`.

```js
grunt.initConfig({
  gaej: {
    options: {
        appengineSdkPath: 'C:/appengine-java-sdk-1.8.1.1/bin/dev_appserver.cmd',
        warPath: 'C:/IGZ/workspace/bbva-onestopshop/war',
        address: '0.0.0.0',
        port: '8888'
    },
  },
})
```
## Release History
 * 2013-09-09   v0.0.1   initial release

[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/09f9aacdf9d835d771e7fe90f8495eba "githalytics.com")](http://githalytics.com/maciejzasada/grunt-gae)
[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/5fe337c7298ecdd5a70182701804cd18 "githalytics.com")](http://githalytics.com/maciejzasada/grunt-gae)
