"use strict";

var SingletonFactory = (function(){
  function SingletonClass() {
    // ...
  }

  var instance;

  return {
    getInstance: function(){
      if (!instance) {
        instance = new SingletonClass();
        delete instance.constructor;
      }
      return instance;
    }
  }
});

