"use strict";
let datafire = require('datafire');

let gamesparks_game_details = require('@datafire/gamesparks_game_details').actions;
module.exports = new datafire.Action({
  id: "action1",
  handler: async (input, context) => {
    let gameEndpointsModel = await Promise.all([].map(item => gamesparks_game_details.getGamesEndpointsUsingGET({
      apiKey: "",
    }, context)));
    return gameEndpointsModel;
  },
});
