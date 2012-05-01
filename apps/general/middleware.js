module.exports = {

  render: function(view) {

    return function( req, res, next ){

      res.render(view);

    };

  }

};
