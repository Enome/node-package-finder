var express = require('express');

module.exports = {

  init: function(app){

    // 404
    
    app.all( '*', function(req, res){
      res.local('error', { type: 'http', code: 404 });
      res.render('errors/index', { status: 404 } );
    });

    // Error
    app.error( function(err, req, res, next){

    /*
      var error;

      if( err.type === 'http' ){
        error = { type: 'http', code: err.error };
      } 
      else {
        error = { type: 'general', code: 500 };
      };

      res.local('error', error );
      res.render('errors/index', { status: error.code } );
      */

      express.errorHandler( { showStack: true, dumpException: true } )(err, req, res, next)


    });

  }

};
