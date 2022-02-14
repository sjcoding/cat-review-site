const Model = require("./Model");
const Review = require("./Review");

class Cat extends Model {
  static get tableName() {
    return "cats";
  }

  static get relationMappings() {
    return {
      cat: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: "cats.id",
          to: "reviews.catId",
        },
      },
    };
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
        description: { type: "string" },
      },
    };
  }
}

module.exports = Cat;
