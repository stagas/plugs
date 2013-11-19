
/*!
 *
 * plugs
 *
 * a generic plugin system
 *
 * MIT
 *
 */

/**
 * Attach `use` method to `object`.
 *
 * @param {Object} object
 * @return {Object}
 * @api public
 */

module.exports = function(object){
  Object.defineProperty(object, 'use', {
    value: use,
    enumerable: false
  });
  return object;
};

/**
 * Use `plugin`.
 *
 * @param {Object|Function} plugin
 * @return {Object} this
 * @api public
 */

function use(plugin){
  if ('function' == typeof plugin) {
    plugin.call(this, this);
  }
  else {
    for (var key in plugin) {
      this[key] = plugin[key];
    }
  }
  return this;
}
