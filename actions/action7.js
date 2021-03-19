"use strict";
let datafire = require('datafire');

let google_appstate = require('@datafire/google_appstate').actions;
module.exports = new datafire.Action({
  id: "action7",
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => google_appstate.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
