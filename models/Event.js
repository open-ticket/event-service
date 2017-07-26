const Model = require("objection").Model;

module.exports = class Event extends Model {
  static get tableName() {
    return "events";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [ "name", "startTime", "endTime" ],

      properties: {
        id: { type: "string" },
        name: { type: "string" },
        description: {
          type: "string",
          default: ""
        },
        startTime: {
          type: "string",
          format: "date-time"
        },
        endTime: {
          type: "string",
          format: "date-time"
        },

        location: {
          type: "object"
        },

        createdBy: {
          type: "string",
          format: "uuid"
        }
      }
    };
  }
}
