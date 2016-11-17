angular
  .module('app')
  .controller('Ctrl1', function() {
       // Capture this context here
       var vm = this;

       vm.obj = {
        msg: 'This is template 1'
      }

      // Your code here
    });

