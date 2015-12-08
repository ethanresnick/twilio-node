'use strict';

var ListResource = require('../../../../base/ListResource');

var NumberList;
var NumberInstance;
var NumberContext;

/**
 * Initialize the NumberList
 *
 * :param Version version: Version that contains the resource
 *
 * @returns NumberList
 */
function NumberList(version) {
  function NumberListInstance() {
  }

  NumberListInstance._version = version;
  // Path Solution
  NumberListInstance._solution = {};
  /**
   * Constructs a NumberContext
   *
   * :param number - The number
   *
   * @returns NumberContext
   */
  function get(number) {
    return new NumberContext(
      this._version,
      number
    );
  }

  return NumberListInstance;
}

module.exports = {
  NumberList: NumberList,
  NumberInstance: NumberInstance,
  NumberContext: NumberContext
};