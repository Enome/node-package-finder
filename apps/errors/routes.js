var express = require('express');

module.exports = {

  init: function(app){

    // 404
    
    app.all( '*', function(req, res){
      var code = 404;
      res.local('error', { type: 'http', code: code });
      res.local('code', code );
      res.render('errors/index', { status: code } );
    });

    // Error
    app.error( function(err, req, res, next){

      var code;

      if( err.type === 'http' ){
        code = err.error;
      } 
      else {
        code = 500;
      };

      if(err.error){
        res.local('stack', JSON.stringify(err.error, null, 2) );
      };

      res.local('code', code );
      res.render('errors/index', { status: code } );

    });

  }

};
