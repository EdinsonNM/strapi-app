'use strict';

/**
 * tramite service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tramite.tramite');
