var search = require('./functions').search;

module.exports = {

  query: function( req, res, next ){

    var q = req.query.q;

    if( !q ){

      res.render('search/empty');

      return next();

    };

    search( q, function(err, result){

      if( err ){
        return next( { type:'search', error: err });
      };

      res.local('result', result);
      res.local('q', q);

      return next();

    } );

  }

};
