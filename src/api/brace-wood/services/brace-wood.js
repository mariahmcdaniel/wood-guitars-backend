'use strict';

/**
 * brace-wood service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::brace-wood.brace-wood');
