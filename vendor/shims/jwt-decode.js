(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['jwt_decode'],
      __esModule: true,
    };
  }

  define('jwt-decode', [], vendorModule);
})();
