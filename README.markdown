# Node Package Finder

Site for searching the npm registry using express.js and elasticsearch. The goal is to search npm without touching the database. This project relies on an elasticsearch index to search and store package information. We are only using the npm couchdb to grab the attachments.

## Install

### npm

```shell
npm install
```

### elasticsearch

- Check the following project to create the elasticsearch index.
- Change the search in setting.js to the url of your elasticsearch server.

## Run tests

Tests use mocha and should.

``` shell
make test
```
