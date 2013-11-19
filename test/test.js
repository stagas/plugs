
/**
 * Test.
 */

var assert = require('assert');

var use = require('../');

var obj = use({ foo: 'bar' });

obj.use({ baz: 'zoo' });

assert.deepEqual(obj, {
  foo: 'bar',
  baz: 'zoo'
});

var obj = use({ foo: 'bar' });
obj.use(function(o){
  o.baz = 'zoo';
});

assert.deepEqual(obj, {
  foo: 'bar',
  baz: 'zoo'
});

var obj = use({ foo: 'bar' });
obj.use(function(){
  this.baz = 'zoo';
});

assert.deepEqual(obj, {
  foo: 'bar',
  baz: 'zoo'
});

function Foo(){
  this.foo = 'bar';
}

use(Foo.prototype);

var obj = new Foo();
obj.use({ baz: 'zoo' });

assert.deepEqual(obj, {
  foo: 'bar',
  baz: 'zoo'
});
