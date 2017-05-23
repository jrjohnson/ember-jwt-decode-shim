/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-jwt-decode-shim',

  included(app) {
    this._super.included.apply(this, arguments);

    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }
    app.import('vendor/jwt-decode.js');
    app.import('vendor/shims/jwt-decode.js');
  },

  treeForVendor(vendorTree) {
    var jwtDecodeTree = new Funnel(path.dirname(require.resolve('jwt-decode/build/jwt-decode.js')), {
      files: ['jwt-decode.js'],
    });

    return new MergeTrees([vendorTree, jwtDecodeTree]);
  },
};
