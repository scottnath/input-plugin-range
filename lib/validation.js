'use strict';

/**
 * Validation for Range Input Plugin
 *
 * @param {Object} input - inputs in this plugin's instance and their values as {String}
 * @param {Object} input.target - the triggering input's name and value as {String}
 * @param {String} input.target.name - the triggering input's name
 * @param {String|Bool} input.target.value - the triggering input's value
 * @param {Object} input.all - all inputs in this plugin's instance
 * @param {String|Bool} input.all.range - value of input range
 * @param {Object} [settings] - settings for this input plugin instance
 * @param {Object} [settings.target] - the triggering input's settings as an {Object}
 * @param {Object} [settings.all] - all settings in this plugin instance as an {Object}
 * @param {Object} [settings.all.range] - settings of input range {Object}
 *
 * @returns {Bool|String} true or a string with the text describing the error
 *
 * @module rangeValidation
 */

module.exports = function rangeValidation(input, settings) {
  if (input.target.value && (input.target.value < settings.all.range.min || input.target.value > settings.all.range.max)) {
    return `${input.target.name} must be a value within given range!`;
  }

  return true;
};
