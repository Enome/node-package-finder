module.exports = {

  couchdb: {
    /*
    host: 'isaacs.iriscouch.com',
    path: '/registry'
    */
    host: '0.0.0.0:5984',
    path: '/npm'
  },

  search: {
    host: '0.0.0.0',
    port: '9200',
    path: '/packages/package'
  }

};
