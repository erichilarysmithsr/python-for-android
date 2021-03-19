"use strict";
let datafire = require('datafire');

let mongodb = require('@datafire/mongodb').actions;
module.exports = new datafire.Action({
  id: "action5",
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => mongodb.find({
      collection: "",
      query: {},
      projection: {},
    }, context)));
    return result;
  },
});
