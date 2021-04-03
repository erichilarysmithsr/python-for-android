"use strict";
let datafire = require('datafire');

let here_positioning = require('@datafire/here_positioning').actions;
module.exports = new datafire.Action({
  id: "action9",
  handler: async (input, context) => {
    let response_success_locate = await Promise.all([].map(item => here_positioning.locate.post({
      'Content-Type': "application/json",
      observations_locate: {},
      fallback: "any",
      desired: "",
      required: "",
      confidence: 0,
      app_id: "",
      app_code: "",
      apiKey: "",
      authorization: "",
      'Content-Encoding': "",
    }, context)));
    return response_success_locate;
  },
});
