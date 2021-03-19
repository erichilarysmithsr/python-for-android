"use strict";
let datafire = require('datafire');

let google_gameservices = require('@datafire/google_gameservices').actions;
module.exports = new datafire.Action({
  id: "action8",
  handler: async (input, context) => {
    let operation = await Promise.all([].map(item => google_gameservices.gameservices.projects.locations.realms.create({
      parent: "",
    }, context)));
    return operation;
  },
});
