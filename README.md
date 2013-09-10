# grunt-gaej

> Google App Engine Java Server launcher for Grunt.

## About
Módulo Grunt para lanzar GAE Java Server

## Getting Started
Este plugin requiere Grunt `~0.4.1` y `Google App Engine SDK`.

Google App Engine SDK puede ser descargado de [Google App Engine Downloads](https://developers.google.com/appengine/downloads) page.

## The "gaej" task

### Overview
En tu archivo Gruntfile de tu proyecto, añade una sección nombrada `gaej` a la sección de configuración `grunt.initConfig()`.

```js
grunt.initConfig({
  gaej: {
    options: {
        appengineSdkPath: 'C:/appengine-java-sdk-1.8.1.1/bin/dev_appserver.cmd',
        warPath: './war',
        address: '0.0.0.0',
        port: '8888'
    },
  },
})
```
## Release History
 * 2013-09-09   v0.0.1   initial release
