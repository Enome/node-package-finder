# Node Package Search

Site for searching the npm registry using express.js and couchdb-lucene.

## Requirements

- couchdb-lucene
- npm couchdb ( http://isaacs.iriscouch.com/registry )

## Install

- npm install
- make deploy-couchdb ( adds the design doc for lucene )


## Run tests

Tests use mocha and should.

``` shell
make test
```
