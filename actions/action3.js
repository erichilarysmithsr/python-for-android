"use strict";
let datafire = require('datafire');

let facebook = require('@datafire/facebook').actions;
module.exports = new datafire.Action({
  id: "action3",
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => facebook.user.games.get({
      user: "{user}",
    }, context)));
    return result;
  },
});
