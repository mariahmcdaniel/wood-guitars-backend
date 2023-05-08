'use strict';

/**
 * bridge-wood service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bridge-wood.bridge-wood');
