const Model = require("./Model");

class Cat extends Model {
  static get tableName() {
    return "cats";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "rating"],
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        rating: { type: ["boolean", "string"] },
        review: { type: "string" },
      },
    };
  }
}

module.exports = Cat;
