
# plugs

a generic plugin system

## Installation

`npm install plugs`

## Example

```js
var plugs = require('plugs');

var obj = plugs({});

obj.use({ foo: 'bar' });
obj.use(function(){
  this.baz = 'zoo';
});

console.log(obj); // => { foo: 'bar', baz: 'zoo' }
```

## Usage

### plugs(object)

Attach `.use()` method to `object`.

### .use(plugin)

Use `plugin`. When a function, it is called with `fn.call(object, object)`.
When an object, its properties are copied over.

## License

MIT
