# Node Package Finder

Site for searching the npm registry using express.js and elasticsearch. The goal is to search npm without touching the database. This project relies on an elasticsearch index to search and store package information. We are only using the npm database to grab the attachments.

## Elasticsearch

I created a [tiny project](https://github.com/Enome/npm-elasticsearch-index) with a bunch of scripts to turn the npm registry into an es index.  Don't forget to change the search in settings.js to the url of your elasticsearch server.

## Install and run the app

```shell
npm install
make server
```

## Demo

Demo can be found [here](http://packagefinder-enome.dotcloud.com). It might be a little slow because it's running on a free hosting.
