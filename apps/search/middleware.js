var search = require('./functions').search;
var result = require('./presenters').result;

module.exports = {

  query: function( req, res, next ){

    var q = req.query.q;

    if( !q ){
      res.local('result', { packages: [], count: 0 })
      res.local('q', q);
      return next();
    };

    search( q, function(err, data){

      if( err ){
        return next( { type:'search', error: err });
      };

      res.local('result', result(data));

      res.local('q', q);

      return next();

    } );

  }

};
