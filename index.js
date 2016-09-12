'use strict';

/**
 * Range Input Plugin
 *
 *
 * Simple range input type
 */
const validation = require('./lib/validation.js');

/**
 * Single Range Input Plugin
 * @module rangeInputPlugin
 */
module.exports = {
  name: 'Range',
  description: 'Simple range input type',
  validation: {
    rangeValidation: validation,
  },
  inputs: {
    range: {
      validation: {
        function: 'rangeValidation',
        on: 'change',
      },
      label: 'Please choose a range',
      type: 'range',
      settings: {
        min: 1,
        max: 5,
      },
    },
  },
  html: '<label for="{{range.id}}">{{range.label}}</label><input type="{{range.type}}" id="{{range.id}}" name="{{range.name}}" min="{{range.settings.min}}" max="{{range.settings.max}}"  value="{{range.value}}"/>',
};
