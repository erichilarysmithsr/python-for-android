"use strict";
let datafire = require('datafire');

let gamesparks_game_details = require('@datafire/gamesparks_game_details').actions;
module.exports = new datafire.Action({
  id: "action4",
  handler: async (input, context) => {
    let segmentQueryFilterConfigModel = await Promise.all([].map(item => gamesparks_game_details.updateSegmentQueryFiltersConfigUsingPUT({
      segmentQueryConfig: {
        customFilters: [],
        hiddenFilters: [],
      },
      apiKey: "",
    }, context)));
    return segmentQueryFilterConfigModel;
  },
});
