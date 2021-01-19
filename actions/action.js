"use strict";
let datafire = require('datafire');

let google_firebasedatabase = require('@datafire/google_firebasedatabase').actions;
module.exports = new datafire.Action({
  id: "action",
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => google_firebasedatabase.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
