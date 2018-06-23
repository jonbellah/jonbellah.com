/**
 * getProp utility - an alternative to lodash.get
 * @author @harish2704, @muffypl, @pi0
 * @param {Object} object
 * @param {String|Array} path
 * @param {*} defaultVal
 */
export function getProp(object, path, defaultVal) {
  const _path = Array.isArray(path)
    ? path
    : path.split('.').filter(i => i.length);

  if (!_path.length) {
    return object === undefined ? defaultVal : object;
  }

  return getProp(object[_path.shift()], _path, defaultVal);
}
