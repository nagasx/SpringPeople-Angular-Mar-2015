'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('greet controller', function(){

    it('should initialize the firstName with "Magesh"', inject(function($controller) {
      //spec body
        var scope = {};
      var view1Ctrl = $controller('greetController', {$scope : scope});

      expect(scope.firstName).toBe("Magesh");
    }));

    it('should populate the msg when greet() is invoked', inject(function($controller) {
      //spec body
      var scope = {};

      var view1Ctrl = $controller('greetController', {$scope : scope});
      scope.firstName = "Suresh";
      scope.greet();

      expect(scope.msg).toBe("Hi Suresh, Have a nice day!");
    }));
  });

    it('should call greetService.greet for the message', inject(function($controller) {
      //spec body
      var scope = {};
      var dummyService = {
          greet : function(){}
      };
      spyOn(dummyService, "greet");

      var view1Ctrl = $controller('greetController', {$scope : scope, greetService : dummyService});

        scope.firstName = "Suresh";
      scope.greet();

      expect(dummyService.greet).toHaveBeenCalled();
    }));
  });
