"use strict";
let datafire = require('datafire');

let rawg = require('@datafire/rawg').actions;
module.exports = new datafire.Action({
  id: "action2",
  handler: async (input, context) => {
    let platformSingle = await Promise.all([].map(item => rawg.platforms_read({
      id: 0,
    }, context)));
    return platformSingle;
  },
});
