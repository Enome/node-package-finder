var moment = require('moment');
var marked = require('marked');

module.exports = {

  init: function(app){

    app.helpers({
      markdown: function(md){ 
        if( md ){
          return marked(md);
        };
        return ''
      },

      fromNow: function(date){
        return moment(date).fromNow()
      },

      prettyDate: function(date){
        return moment(date).format('dddd, MMMM Do YYYY');
      }

    });

  }

};
