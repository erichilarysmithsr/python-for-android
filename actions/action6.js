"use strict";
let datafire = require('datafire');

let google_sheets = require('@datafire/google_sheets').actions;
module.exports = new datafire.Action({
  id: "action6",
  handler: async (input, context) => {
    let developerMetadata = await Promise.all([].map(item => google_sheets.sheets.spreadsheets.developerMetadata.get({
      spreadsheetId: "",
      metadataId: 0,
    }, context)));
    return developerMetadata;
  },
});
