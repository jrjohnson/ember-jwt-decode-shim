import { module, test } from 'qunit';
import jwtDecode from 'jwt-decode';

module('jwtDecode as an ES6 module');

test('it has been imported', function(assert) {
  assert.ok(jwtDecode);
});

test('decodes a jwt', function(assert) {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJleHAiOjEzOTMyODY4OTMsImlhdCI6MTM5MzI2ODg5M30.4-iaDojEVl0pJQMjrbM1EzUIfAZgsbK_kgnVyVxFSVo';
  const decoded = jwtDecode(token);
  assert.equal(decoded.exp, 1393286893);
  assert.equal(decoded.iat, 1393268893);
  assert.equal(decoded.foo, 'bar');
});
