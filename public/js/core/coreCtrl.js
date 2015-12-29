'use strict';

var CoreCtrl = function() {
    var _vm = this;

    _vm.items = ["A", "List", "Of", "Items"];

    },
    _dependencies = [],
    _extendedDependencies = angular.copy(_dependencies);

CoreCtrl.$inject = _dependencies;

_extendedDependencies.push(CoreCtrl);

angular.module('electronAngularDemo').controller('coreCtrl', _extendedDependencies)