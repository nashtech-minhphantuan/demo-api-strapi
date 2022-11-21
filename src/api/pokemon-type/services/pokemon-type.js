'use strict';

/**
 * pokemon-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pokemon-type.pokemon-type');
