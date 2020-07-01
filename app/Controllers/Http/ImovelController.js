'use strict'

const Imovel = require('../../Models/Imovel')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Imovel = use('App/Models/Imovel')

/**
 * Resourceful controller for interacting with imovels
 */
class ImovelController {
  /**
   * Show a list of all imovels.
   * GET imovels
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    
    const imoveis = await Imovel.all();

    return imoveis;
  }

  
  /**
   * Create/save a new imovel.
   * POST imovels
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single imovel.
   * GET imovels/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {

    const imovel = await Imovel.findOrFail(params.id);

    return imovel;
  }


  /**
   * Update imovel details.
   * PUT or PATCH imovels/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a imovel with id.
   * DELETE imovels/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    
    const imovel = await Imovel.findOrFail(params.id);
    
    await imovel.delete();
  }
}

module.exports = ImovelController
