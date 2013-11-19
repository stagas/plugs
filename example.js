
/**
 * Example.
 */

var plugs = require('./');

var obj = plugs({});
obj.use({ foo: 'bar' });
obj.use(function(){
  this.baz = 'zoo';
});

console.log(obj); // => { foo: 'bar', baz: 'zoo' }
