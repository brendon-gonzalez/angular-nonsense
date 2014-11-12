'use strict';

var typography = angular.module('phonecatApp', []);

typography.factory('typography', function() {
  return {
    upperCase: function(text) {
      return text.toUpperCase();
    }
  };
});