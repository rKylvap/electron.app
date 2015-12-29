'use strict';

var AboutCtrl = function(){
    var _vm = this;

    _vm.helloMessage = 'Welcome on About page!';
},

_dependencies = [],
_extendedDependencies = angular.copy(_dependencies);

AboutCtrl.$inject = _dependencies;

_extendedDependencies.push(AboutCtrl);

angular.module('electronAngularDemo').controller('aboutCtrl', _extendedDependencies);