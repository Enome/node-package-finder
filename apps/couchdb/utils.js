module.exports = {
  stringify: function(body){

    return JSON.stringify(body, function (key, value) {
      if (typeof(value) === 'function') {
        return value.toString();
      } 
      else {
        return value;
      }
    });
  }
}
