var search = require('./functions').search;
var result = require('./presenters').result;

module.exports = {

  query: function( req, res, next ){

    var q = req.query.q;

    if( !q ){
      return res.render('search/empty');
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
