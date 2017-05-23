# JWTDecode Shim

This addon makes [jwt-decode](https://www.npmjs.com/package/jwt-decode) available as an ES6 module.

## Installation
`ember install ember-jwt-decode-shim`

## Usage

```javascript
import jwtDecode from 'jwt-decode';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJleHAiOjEzOTMyODY4OTMsImlhdCI6MTM5MzI2ODg5M30.4-iaDojEVl0pJQMjrbM1EzUIfAZgsbK_kgnVyVxFSVo';

const decoded = jwtDecode(token);
console.log(decoded.exp); //1393286893
```
