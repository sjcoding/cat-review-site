const Model = require("./Model");

class Review extends Model {
  static get tableName() {
    return "reviews";
  }

  static get relationMappings() {
    const Cat = require("./Cat");
    return {
      cat: {
        relation: Model.BelongsToOneRelation,
        modelClass: Cat,
        join: {
          from: "reviews.catId",
          to: "cats.id",
        },
      },
    };
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["review"],
      properties: {
        review: { type: "string" },
        rating: { type: "boolean" },
        catId: { type: ["integer", "string"] },
      },
    };
  }
}

module.exports = Review;
